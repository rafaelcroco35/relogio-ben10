
const botaoSom = document.querySelector('#omni');
const som = new Audio('./som.mp3');

botaoSom.addEventListener('click', function() {
  som.play();
});

function clock() {
    const areaRelogio = document.querySelector(".relogio");
    const horaAgora = new Date(); //já existe essa função no JS//
    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();
    const formatoHoras = horas.toString().padStart(2,"0");
    const formatoMinutos = minutos.toString().padStart(2,"0");
   const formatoSegundos = segundos.toString().padStart(2,'0');

   areaRelogio.textContent = ` ${formatoHoras} : ${formatoMinutos} : ${formatoSegundos} `;
}

//constantes com as cores apagadas estão em segundo plano, ainda não foram usadas
//crase possibilita uso de placeholder com ${}

setInterval(clock, 1000)