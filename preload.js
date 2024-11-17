const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    selectFiles: () => ipcRenderer.invoke('select-files'),
    selectOutput: () => ipcRenderer.invoke('select-output'),
    optimizeFile: (inputPath, outputPath) => ipcRenderer.invoke('optimize-file', inputPath, outputPath)
});