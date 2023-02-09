"use strict";
let initialLife = Number(localStorage.getItem("vidaAtt")) || 3000;
console.log(initialLife);
let dano = Number(localStorage.getItem("danoAtt")) || 200;
let life = initialLife;
const minTick = 200;
const maxTick = 600;
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
const smiteSoud = new Audio('./media/smiteSFX.ogg');
const stats = document.getElementById("status");
if (timerSpan == null)
    throw new Error("TIMER SPAN ERRO");
if (resultadoSpan == null)
    throw new Error("Resultado SPAN ERRO");
if (stats == null)
    throw new Error("Status SPAN ERRO");
stats.textContent = `Vida maxima: ${initialLife} // Dano do Smite: ${dano}`;
smite === null || smite === void 0 ? void 0 : smite.addEventListener("click", function () {
    smiteSoud.play();
    if (dano >= life) {
        resultadoSpan.setAttribute("style", " color: green; ");
        resultadoSpan.textContent = "Voce acertou o smite";
        document.getElementById("smite").disabled = true;
        clearInterval(idInterval);
    }
    else {
        resultadoSpan.setAttribute("style", " color: red; ");
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
        timerSpan.textContent = "VIDA: " + String(life);
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
        timerSpan.textContent = "VIDA: " + String(life);
    }
}, timeRate);
function config() {
    let danoAtt = document.getElementById("dano");
    let vidaAtt = document.getElementById("vidaInput");
    localStorage.setItem("danoAtt", danoAtt.value);
    localStorage.setItem("vidaAtt", vidaAtt.value);
}
function Mudarestado() {
    let config = document.getElementById("configScreen");
    if (config == null)
        throw new Error("Config screen ERRO");
    config.classList.toggle('mostrar');
}
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault)
            theEvent.preventDefault();
    }
}
