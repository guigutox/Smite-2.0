


let initialLife: number = Number(localStorage.getItem("vidaAtt"))||3000;
console.log(initialLife);
let dano:number = Number(localStorage.getItem("danoAtt"))||200;

let life:number = initialLife;

const minTick:number = 200;
const maxTick:number = 600;
let minTime:number = 400;
let maxTime:number = 400;


interface Imagem {
    id: number;
    img: string;
  }
  
var imagens: Array<Imagem> =[
    {id: 1, img: './media/chentech_drake.webp'},
    {id: 2, img: './media/cloud_drake.webp'},
    {id: 3, img: './media/elder_drake.webp'},
    {id: 4, img: './media/hex_drake.webp'},
    {id: 5, img: './media/dragon.webp'}
]

function exibirImagem(): void {
    // Obter um índice aleatório da matriz de imagens
    const indiceAleatorio: number = Math.floor(Math.random() * imagens.length);
  
    // Obter a imagem correspondente ao índice aleatório
    const imagem: Imagem = imagens[indiceAleatorio];
  
    // Criar um novo elemento de imagem e definir seu atributo de origem
    const elementoImagem: HTMLImageElement = document.createElement('img');
    elementoImagem.src = imagem.img;
    elementoImagem.style.width = "20%";
    elementoImagem.style.height = "20%";
  
    // Obter o elemento de destino e anexar a imagem a ele
    const elementoDestino = document.getElementById("imagem");
    elementoDestino.parentNode.replaceChild(elementoImagem, elementoDestino);

  }
  



const getImageId = (): number =>{
    return Math.random() * (6 - 1) + 1;
}


const getTime = (): number => {
    return Math.round(Math.random()*(maxTime - minTime)+minTime);
}

//Retorna o dano que esta recebendo
const getTick = (): number =>{
    return Math.round(Math.random() * (maxTick-minTick)+minTick);
}





var timeRate:number = getTime();
const timerSpan = document.getElementById("vida");
const resultadoSpan = document.getElementById("resultado");
const smite = document.getElementById("smite");
const progresso = document.querySelector(".barra div");
const smiteSoud = new Audio('./media/smiteSFX.ogg');
const stats = document.getElementById("status");

if(timerSpan == null) 
throw new Error("TIMER SPAN ERRO");

if(resultadoSpan == null)
throw new Error("Resultado SPAN ERRO");

if(stats == null) 
throw new Error("Status SPAN ERRO");

stats.textContent = `Vida maxima: ${initialLife} // Dano do Smite: ${dano}`;




smite?.addEventListener("click", function(){

    smiteSoud.play();

    if(dano >= life){
        resultadoSpan.setAttribute("style", " color: green; ")
        resultadoSpan!.textContent = "Voce acertou o smite";
        (document.getElementById("smite") as HTMLButtonElement).disabled = true;
        clearInterval(idInterval);
    }else{
        resultadoSpan.setAttribute("style", " color: red; ")
        resultadoSpan!.textContent = "Voce errou o smite";
        (document.getElementById("smite") as HTMLButtonElement).disabled = true;
        clearInterval(idInterval);
    }
});




var idInterval = setInterval(function(){

    var tickRate: number = getTick();
    if(tickRate > life || life < 0){
        clearInterval(idInterval);
        console.log(life);
        timerSpan.textContent = "VIDA: "+String(life);
        (document.getElementById("smite") as HTMLButtonElement).disabled = true;
        life = 0;
        progresso?.setAttribute("style",`width: ${0}%`);
        resultadoSpan.setAttribute("style", " color: red; ")
        resultadoSpan.textContent = "Voce errou o smite";
    }else{
        life = life - tickRate;
        let x = (life/initialLife)*100;
        progresso?.setAttribute("style",`width: ${x}%`);
        console.log(life);
        timerSpan.textContent = "VIDA: "+String(life);
    }



}, timeRate);

function config(){
    
    let danoAtt = (document.getElementById("dano") as HTMLInputElement);
    let vidaAtt = (document.getElementById("vidaInput") as HTMLInputElement);
    
        localStorage.setItem("danoAtt", danoAtt.value);
        localStorage.setItem("vidaAtt", vidaAtt.value);
        reset();
}

function reset(){
    location.reload();
}

function Mudarestado() {
    let config = document.getElementById("configScreen");
    if(config == null)
    throw new Error("Config screen ERRO");
    config.classList.toggle('mostrar');
  }

  function onlynumber(evt : any) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }