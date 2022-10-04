window.onload = function () {
    const appendDias = document.getElementById('dias')
    const appendHoras = document.getElementById('horas');
    const appendMinutos = document.getElementById('minutos');
    const appendSegundos = document.getElementById('segundos')

    var dias = 01;
    var horas = 59;
    var minutos = 59;
    var segundos = 60;


    setInterval(startTimer, 1000)

    function startTimer() {
        segundos--;
        appendSegundos.innerHTML = segundos;
        appendMinutos.innerHTML = minutos;
        appendHoras.innerHTML = horas;
        appendDias.innerHTML = "0" + dias;
        if (segundos == 00) {
            segundos = 60;
            minutos--;
            appendSegundos.innerHTML = "00"
        }
        if (segundos <= 9) {
            appendSegundos.innerHTML = "0" + segundos;
        }

        if (minutos == 0) {
            minutos = 60;
            horas--;
            appendMinutos.innerHTML = "00";
        }

        if (minutos <= 9) {
            appendMinutos.innerHTML = "0" + minutos;
        }
        if (horas == 0) {
            horas = 60;
            dias--;
            appendDias.innerHTML = "00"
        }
    }
}
