const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { NodeIO } = require('@gltf-transform/core');
const { KHRONOS_EXTENSIONS } = require('@gltf-transform/extensions');
const draco3d = require('draco3dgltf');
const fs = require('fs');
const path = require('path');
const { draco } = require('@gltf-transform/functions');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

async function processFile(inputPath, outputPath) {
    try {
        const decoderModule = await draco3d.createDecoderModule();
        const encoderModule = await draco3d.createEncoderModule();

        const io = new NodeIO()
            .registerExtensions(KHRONOS_EXTENSIONS)
            .registerDependencies({
                'draco3d.decoder': decoderModule,
                'draco3d.encoder': encoderModule
            });

        const originalSize = fs.statSync(inputPath).size;
        const document = await io.read(inputPath);

        await document.transform(
            draco({
                quantizePosition: 8,
                quantizeNormal: 6,
                quantizeTexcoord: 6,
                quantizeColor: 4,
                quantizeGeneric: 4,
                compression: 10,
                speedLevel: 0,
                quantizeWeights: 4,
                quantizeTangent: 6,
            })
        );

        const fileName = path.basename(inputPath);
        const outputFilePath = path.join(outputPath, `optimized_${fileName}`);
        await io.write(outputFilePath, document);

        const optimizedSize = fs.statSync(outputFilePath).size;
        const savedSpace = originalSize - optimizedSize;
        const savingPercentage = ((savedSpace / originalSize) * 100).toFixed(2);

        return {
            fileName: fileName,
            originalSize: (originalSize / (1024 * 1024)).toFixed(2),
            optimizedSize: (optimizedSize / (1024 * 1024)).toFixed(2),
            savings: savingPercentage
        };

    } catch (error) {
        console.error(`Hata (${inputPath}):`, error);
        throw error;
    }
}

ipcMain.handle('select-files', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openFile', 'multiSelections'],
        filters: [{ name: 'GLB Files', extensions: ['glb'] }]
    });
    return result.filePaths;
});

ipcMain.handle('select-output', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory']
    });
    return result.filePaths[0];
});

ipcMain.handle('optimize-file', async (event, inputPath, outputPath) => {
    try {
        const result = await processFile(inputPath, outputPath);
        return result;
    } catch (error) {
        throw error;
    }
});