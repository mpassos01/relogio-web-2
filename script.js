const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    //var img = document.querySelector("#imagem")
    let data = new Date();
    let hora = data.getHours('horas');

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        //bom dia
       // img.src = 'manha.png'
       img.setAttribute('src', 'imagens/manha.png');
       document.body.style.background = '#C0D8E2';
    }
    else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/tarde.png';
        document.body.style.background = '#C53A01';
    }

    else {
        //boa noite
        img.src = 'imagens/noite.png';
        document.body.style.background = '#0A1719';
    }
}

const relogio = setInterval (function time() {
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let sec = datetoday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

});