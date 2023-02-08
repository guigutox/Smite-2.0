"use strict";
let initialLife = 2000;
let life = initialLife;
const dano = 200;
const minTick = 100;
const maxTick = 300;
let minTime = 400;
let maxTime = 400;
const getTime = () => {
    return Math.round(Math.random() * (maxTime - minTime) + minTime);
};
//Retorna o dano que esta recebendo
const getTick = () => {
    return Math.round(Math.random() * (maxTick - minTick) + minTick);
};
var timeRate = getTime();
const timerSpan = document.getElementById("vida");
const resultadoSpan = document.getElementById("resultado");
const smite = document.getElementById("smite");
const progresso = document.querySelector(".barra div");
if (timerSpan == null)
    throw new Error("TIMER SPAN ERRO");
if (resultadoSpan == null)
    throw new Error("Resultado SPAN ERRO");
smite === null || smite === void 0 ? void 0 : smite.addEventListener("click", function () {
    if (dano >= life) {
        resultadoSpan.textContent = "Voce acertou o smite";
        document.getElementById("smite").disabled = true;
        clearInterval(idInterval);
    }
    else {
        resultadoSpan.textContent = "Voce errou o smite";
        document.getElementById("smite").disabled = true;
        clearInterval(idInterval);
    }
});
var idInterval = setInterval(function () {
    var tickRate = getTick();
    if (tickRate > life || life < 0) {
        clearInterval(idInterval);
        console.log(life);
        timerSpan.textContent = String(life);
        document.getElementById("smite").disabled = true;
        life = 0;
        progresso === null || progresso === void 0 ? void 0 : progresso.setAttribute("style", `width: ${0}%`);
        resultadoSpan.textContent = "Voce errou o smite";
    }
    else {
        life = life - tickRate;
        let x = (life / initialLife) * 100;
        progresso === null || progresso === void 0 ? void 0 : progresso.setAttribute("style", `width: ${x}%`);
        console.log(life);
        timerSpan.textContent = String(life);
    }
}, timeRate);
