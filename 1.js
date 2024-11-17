const { NodeIO } = require('@gltf-transform/core');
const { KHRONOS_EXTENSIONS } = require('@gltf-transform/extensions');
const draco3d = require('draco3dgltf');
const fs = require('fs');
const path = require('path');
const { draco } = require('@gltf-transform/functions');

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

        await io.write(outputPath, document);

        const originalSize = fs.statSync(inputPath).size;
        const optimizedSize = fs.statSync(outputPath).size;
        const savedSpace = originalSize - optimizedSize;
        const savingPercentage = ((savedSpace / originalSize) * 100).toFixed(2);

        console.log(`\n✨ ${path.basename(inputPath)} işlendi:`);
        console.log(`📊 Orjinal: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`💫 Optimize: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`🎯 Kazanç: ${savingPercentage}%`);

    } catch (error) {
        console.error(`❌ Hata (${inputPath}):`, error);
    }
}

async function optimizeModels(inputFolder) {
    try {
        const outputFolder = path.join(inputFolder, 'optimized');
        
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder);
        }

        const files = fs.readdirSync(inputFolder);
        const glbFiles = files.filter(file => 
            file.toLowerCase().endsWith('.glb') && 
            !file.includes('optimized')
        );

        console.log(`🎮 ${glbFiles.length} adet GLB dosyası bulundu!`);

        for (const file of glbFiles) {
            const inputPath = path.join(inputFolder, file);
            const outputPath = path.join(outputFolder, `optimized_${file}`);
            await processFile(inputPath, outputPath);
        }

        console.log('\n✅ Tüm dosyalar başarıyla optimize edildi! 🎉');

    } catch (error) {
        console.error('❌ Genel hata:', error);
    }
}

// Kullanımı:
const folderPath = process.argv[2] || './'; // Komut satırından klasör yolu alınıyor
optimizeModels(folderPath);