
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

   



    if(formatoHoras >= 6 && formatoHoras <12){
        document.body.style.backgroundColor = "#020a03";
        document.body.style.backgroundImage = "url('bg.png')";
    }
    else if(formatoHoras >= 12 && formatoHoras <18){
        document.body.style.backgroundColor = "#373119";
        document.body.style.backgroundImage = "URL('bg3.png')";
        document.getElementById("sobre").style.filter = "hue-rotate(330deg)";
        document.getElementById("titulo").style.textShadow = "#cc6a08 0 1px 10px";
        document.getElementById("diadehj").style.textShadow = "#cc6a08 0 1px 10px";
        
    }
    else{
        document.body.style.backgroundColor = "#1d0d2c";
        document.body.style.backgroundImage = "URL('bg2.png')";
        document.getElementById("sobre").style.filter = "hue-rotate(199deg)";
        document.getElementById("titulo").style.textShadow = "#ab08cc 0 1px 10px";
        document.getElementById("diadehj").style.textShadow = "#ab08cc 0 1px 10px";
     
    }





   
  const frase = document.querySelector('.frase')

  dia = new Array ('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')
  mes = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

  hoje = new Date()
  frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2,'0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`



}



//constantes com as cores apagadas estão em segundo plano, ainda não foram usadas
//crase `` possibilita uso de placeholder com ${}
//Array = arranjo estrutura de dados com uma coleção de elementos, variável com vários dados

setInterval(clock, 1000)

