function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var pronombre = ['El','Nosotros','Tu'];
var adjetivo = ['Excelente', 'pequeño','Grande'];
var sustantivo = ['locos','mapache','Perro'];
var add = ".com";

function generardominio (){
    return pronombre[getRandomInt(3)] + adjetivo[getRandomInt(3)] + sustantivo[getRandomInt(3)] + add;
}

for (var i = 0; i <= 50; i++) {
    console.log(generardominio());
  }
