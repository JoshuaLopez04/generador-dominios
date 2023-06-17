var pronombre = ['El','Nosotros','Tu'];
var adjetivo = ['Excelente', 'pequeño','Grande'];
var sustantivo = ['locos','mapache','Perro'];
var add = ".com";

for (var i = 0; i < pronombre.length; i++) {

    for (var j = 0; j < adjetivo.length; j++){

        for (var l = 0; l < sustantivo.length; l++){
            console.log(pronombre[i] + adjetivo[j] + sustantivo[l] + add);
        }
    }
  }
