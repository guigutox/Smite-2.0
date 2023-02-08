let initialLife: number = 2000;
let life:number = initialLife;
const dano:number = 200;
const minTick:number = 100;
const maxTick:number = 300;
let minTime:number = 400;
let maxTime:number = 400;

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

if(timerSpan == null) 
throw new Error("TIMER SPAN ERRO");

if(resultadoSpan == null)
throw new Error("Resultado SPAN ERRO");




smite?.addEventListener("click", function(){

        

    if(dano >= life){
        resultadoSpan!.textContent = "Voce acertou o smite";
        (document.getElementById("smite") as HTMLButtonElement).disabled = true;
        clearInterval(idInterval);
    }else{
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
        timerSpan.textContent = String(life);
        (document.getElementById("smite") as HTMLButtonElement).disabled = true;
        life = 0;
        progresso?.setAttribute("style",`width: ${0}%`);
        resultadoSpan.textContent = "Voce errou o smite";
    }else{
        life = life - tickRate;
        let x = (life/initialLife)*100;

        progresso?.setAttribute("style",`width: ${x}%`);
        console.log(life);
        timerSpan.textContent = String(life);
    }



}, timeRate);



