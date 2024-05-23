let mediaRecorder;
let audioChunks = [];
let audioContext;
let dest;

const startRecordButton = document.getElementById('startRecord');
const stopRecordButton = document.getElementById('stopRecord');
const downloadLink = document.getElementById('downloadLink');

startRecordButton.addEventListener('click', async () => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    dest = audioContext.createMediaStreamDestination();

    // Conectando cada elemento de áudio ao AudioContext e ao destino de mídia
    botoes.forEach(botao => {
        const audioElement = document.querySelector(`#${botao.audio}`);
        const track = audioContext.createMediaElementSource(audioElement);
        track.connect(audioContext.destination);  // Para tocar o som nos alto-falantes
        track.connect(dest);  // Para enviar o som para o destino de gravação
    });

    // Verificar se o navegador suporta o MediaRecorder
    if (typeof MediaRecorder === 'undefined' || !navigator.mediaDevices.getUserMedia) {
        alert('Seu navegador não suporta gravação de áudio.');
        return;
    }

    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
        alert('Permissão de áudio negada: ' + err);
        return;
    }

    mediaRecorder = new MediaRecorder(dest.stream);

    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            audioChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        downloadLink.href = audioUrl;
        downloadLink.download = 'recording.wav';
        downloadLink.style.display = 'block';
    };

    audioChunks = [];  // Limpar os chunks de áudio anteriores
    mediaRecorder.start();
    startRecordButton.disabled = true;
    stopRecordButton.disabled = false;
});

stopRecordButton.addEventListener('click', () => {
    mediaRecorder.stop();
    startRecordButton.disabled = false;
    stopRecordButton.disabled = true;
});
