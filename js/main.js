// Função para reproduzir o som com base no ID do áudio
function tocaSom(idAudio) {
    const audio = document.querySelector(`#${idAudio}`);
    if (audio) {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
        audio.play();
    }
}

// Lista de botões e seus respectivos IDs de áudio
const botoes = [
    { classe: 'tecla__kick', audio: 'som__tecla__kick' },
    { classe: 'tecla__clap', audio: 'som__tecla__clap' },
    { classe: 'tecla__openhat', audio: 'som__tecla__openhat' },
    { classe: 'tecla__808', audio: 'som__tecla__808' },
    { classe: 'tecla__hi-hat', audio: 'som__tecla__hi-hat' },
    { classe: 'tecla__crash', audio: 'som__tecla__crash' },
    { classe: 'tecla__snare', audio: 'som__tecla__snare' },
    { classe: 'tecla__perc', audio: 'som__tecla__perc' },
    { classe: 'tecla__snap', audio: 'som__tecla__snap' }
];

// Adiciona manipuladores de eventos a cada botão
botoes.forEach(botao => {
    const botaoElemento = document.querySelector(`.${botao.classe}`);
    botaoElemento.addEventListener('click', () => {
        tocaSom(botao.audio);
        ativaTecla(botaoElemento);
    });
});

// Mapeamento de teclas numéricas para IDs de áudio e classes de botões
const mapeamentoTeclas = {
    '1': { audio: 'som__tecla__kick', classe: 'tecla__kick' },
    '2': { audio: 'som__tecla__clap', classe: 'tecla__clap' },
    '3': { audio: 'som__tecla__openhat', classe: 'tecla__openhat' },
    '4': { audio: 'som__tecla__808', classe: 'tecla__808' },
    '5': { audio: 'som__tecla__hi-hat', classe: 'tecla__hi-hat' },
    '6': { audio: 'som__tecla__crash', classe: 'tecla__crash' },
    '7': { audio: 'som__tecla__snare', classe: 'tecla__snare' },
    '8': { audio: 'som__tecla__perc', classe: 'tecla__perc' },
    '9': { audio: 'som__tecla__snap', classe: 'tecla__snap' }
};

// Adiciona um manipulador de eventos para o pressionamento de teclas
document.addEventListener('keydown', (evento) => {
    const tecla = mapeamentoTeclas[evento.key];
    if (tecla) {
        tocaSom(tecla.audio);
        const botaoElemento = document.querySelector(`.${tecla.classe}`);
        ativaTecla(botaoElemento);
    }
});

// Função para ativar a tecla visualmente
function ativaTecla(elemento) {
    elemento.classList.add('ativa');
    setTimeout(() => {
        elemento.classList.remove('ativa');
    }, 200);
}
