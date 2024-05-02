// Função para reproduzir o som com base no ID do áudio
function tocaSom(idAudio) {
    const audio = document.querySelector(`#${idAudio}`);
    if (!audio.paused) { // Verifica se o áudio está sendo reproduzido
        audio.pause(); // Pausa o áudio
        audio.currentTime = 0; // Retorna para o início do áudio
    }
    audio.play(); // Inicia ou retoma a reprodução do áudio
}

// Lista de botões e seus respectivos IDs de áudio
const botoes = [
    { classe: 'tecla__kick', audio: 'som__tecla__kick' },
    { classe: 'tecla__clap', audio: 'som__tecla__clap' },
    { classe: 'tecla__openhat', audio: 'som__tecla__openhat' },
    { classe: 'tecla__kickhat', audio: 'som__tecla__kickhat' },
    { classe: 'tecla__ride', audio: 'som__tecla__ride' },
    { classe: 'tecla__ride2', audio: 'som__tecla__ride2' },
    { classe: 'tecla__snare', audio: 'som__tecla__snare' },
    { classe: 'tecla__perc', audio: 'som__tecla__perc' },
    { classe: 'tecla__tom', audio: 'som__tecla__tom' }
];

// Adiciona manipuladores de eventos a cada botão
botoes.forEach(botao => {
    const botaoElemento = document.querySelector(`.${botao.classe}`);
    botaoElemento.addEventListener('click', () => {
        tocaSom(botao.audio);
    });
});

// function tocaSom (seletorAudio) {
//     const elemento = document.querySelector(seletorAudio);

//     if (elemento && elemento.locaName === 'audio') {
//         elemento.play();
//     }
//     else {
//         console.log('Elemento não encontrado');
//     }

// }

// const listaDeTeclas = document.querySelectorAll ('.tecla');

// for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som__${instrumento}`; //template string//

//     tecla.onclick = function () {
//         tocaSom(idAudio)
//     }

//     tecla.onkeydown = function(evento) {

//         if (evento.code ===  'Space' || evento.code === 'Enter') {
//             tecla.classList.add('ativa')
//         }

//     }

//     tecla.onkeyup = function() {
//         tecla.classList.remove('ativa')
//         }
// }
