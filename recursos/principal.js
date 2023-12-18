const actualizador = setInterval(function(){    
    
    var evento = 'Jan 13 2024 12:00:00 GMT-0500'

    const diadelevento = new Date(evento).getTime();
    const hoy = new Date().getTime();
    let tiempofaltante = diadelevento-hoy;

    tiempofaltante /=1000

    //const meses = Math.floor(tiempofaltante/(60*60*24*30));
    const dias = Math.floor(tiempofaltante/(60*60*24));
    const horas = Math.floor((tiempofaltante%(60*60*24))/(60*60));
    const minutos = Math.floor((tiempofaltante%(60*60))/(60));
    const segundos = Math.floor(tiempofaltante%(60));

    //const reloj = document.getElementById('reloj')

    //document.getElementById('mes').innerHTML = meses
    document.getElementById('dias').innerHTML = dias
    document.getElementById('horas').innerHTML = horas
    document.getElementById('minutos').innerHTML = minutos
    document.getElementById('segundos').innerHTML = segundos
},1000);