AOS.init();
const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();
    const diaEmMs = 86400000; // Milissegundos em 1 dia  
    const horaEmMs = 3600000; // Milissegundos em 1 hora
    const minutoEmMs = 60000; // Milissegundos em 1 minuto
    const segundoEmMs = 1000; // Milissegundos em 1 segundo
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    if (distanciaAteOEvento < 0) {
        // Quando a contagem regressiva terminar, exibir uma mensagem
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "O evento come\xe7ou!";
    } else {
        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); // Dias restantes
        const horasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMs / horaEmMs); // Horas restantes após os dias
        const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs); // Minutos restantes após as horas
        const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoEmMs / segundoEmMs); // Segundos restantes após os minutos
        document.getElementById("contador").innerHTML = `${diasAteOEvento}D ${horasAteOEvento}H ${minutosAteOEvento}M ${segundosAteOEvento}S`;
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
