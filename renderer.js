let selectedFiles = [];
let outputFolder = null;

document.getElementById('selectFiles').addEventListener('click', async () => {
    const files = await window.electron.selectFiles();
    selectedFiles = files;
    updateFileList();
});

document.getElementById('selectOutput').addEventListener('click', async () => {
    const folder = await window.electron.selectOutput();
    outputFolder = folder;
    updateOutputFolder();
});

document.getElementById('startOptimize').addEventListener('click', async () => {
    if (selectedFiles.length === 0 || !outputFolder) {
        alert('Lütfen dosyaları ve çıktı klasörünü seçin!');
        return;
    }

    const results = document.getElementById('results');
    const progress = document.getElementById('progress');
    const startButton = document.getElementById('startOptimize');
    
    // Başlangıç durumu
    results.innerHTML = '';
    progress.style.display = 'block';
    startButton.disabled = true;
    
    try {
        for (let i = 0; i < selectedFiles.length; i++) {
            progress.innerHTML = `İşleniyor: ${i + 1}/${selectedFiles.length} 🔄`;
            
            try {
                const result = await window.electron.optimizeFile(selectedFiles[i], outputFolder);
                
                results.innerHTML += `
                    <div class="result-card">
                        <h4>✨ ${result.fileName}</h4>
                        <div class="result-details">
                            <p>📊 Orijinal Boyut: ${result.originalSize} MB</p>
                            <p>💫 Optimize Boyut: ${result.optimizedSize} MB</p>
                            <p>🎯 Kazanç: ${result.savings}%</p>
                        </div>
                    </div>
                `;
            } catch (error) {
                results.innerHTML += `
                    <div class="result-card error">
                        <h4>❌ Hata: ${selectedFiles[i]}</h4>
                        <p>${error.message}</p>
                    </div>
                `;
            }
        }
        
        progress.innerHTML = '✅ Tüm dosyalar optimize edildi! 🎉';
    } catch (error) {
        progress.innerHTML = '❌ Bir hata oluştu!';
        console.error(error);
    } finally {
        startButton.disabled = false;
    }
});

function updateFileList() {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    
    if (selectedFiles.length === 0) {
        fileList.innerHTML = '<p>Henüz dosya seçilmedi 📁</p>';
        return;
    }

    selectedFiles.forEach(file => {
        const fileName = file.split('\\').pop();
        fileList.innerHTML += `
            <div class="file-item">
                <span>📄 ${fileName}</span>
            </div>
        `;
    });
}

function updateOutputFolder() {
    const outputDisplay = document.getElementById('outputFolder');
    if (outputFolder) {
        outputDisplay.innerHTML = `
            <div class="folder-item">
                <span>📂 ${outputFolder}</span>
            </div>
        `;
    } else {
        outputDisplay.innerHTML = '<p>Henüz çıktı klasörü seçilmedi 📁</p>';
    }
}

// Sayfa yüklendiğinde başlangıç durumunu göster
updateFileList();
updateOutputFolder();