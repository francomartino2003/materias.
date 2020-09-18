
var atributos = {numeros:null, letras:null, año1:null, año2:null, año3:null, año4:null, año5:null};

var m1 = {
  nombre : "matematica",
  att : {numeros:true, letras:false, año1:true, año2: true, año3:true, año4:true, año5:true}
};

var m2 = {
  nombre : "lengua",
  att : {letras:true, numeros:false, año1: true, año2:true, año3:true, año4: true, año5:true}
};

var m3 = {
  nombre : "geografiaa",
  att : {letras:true, numeros:false, año1:true, año2:true, año3:true, año4:true, año5:false}
};


var tu_materia = function(){
  tomar_datos();
  console.log(atributos);
  var rta = comparar_datos(); //devuleve m1, m2, m3 o null
  console.log(rta);
  console.log(rta);
  console.log(rta);

  if (rta != null) {
    return "tu materia es: " + rta.nombre;
  }else {
    return "no se cual es tu materia :(";
  }
};


function tomar_datos(){
  if (confirm("la materia es de letras?")) {
    atributos.letras = true;
    atributos.numeros = false;
  }else {
    atributos.letras = false;
    if (confirm("la materia es de numeros?")) {
      atributos.numeros = true;
    }else {
      atributos.numeros = false;
    }
  }
  if (confirm("la materia esta en 1año?")) {
    atributos.año1 = true;
  }else {
    atributos.año1 = false;
  }
  if (confirm("la materia esta en 5año?")) {
    atributos.año5 = true;
  }else {
    atributos.año5 = false;
  }
};

function comparar_datos(){
  var iguales = {m1:0, m2:0, m3:0};
  for (var i in atributos) {
      if (atributos[i] == m1.att[i]) {
        iguales.m1++;
      }
      if (atributos[i] == m2.att[i]) {
        iguales.m2++;
      }
      if (atributos[i] == m3.att[i]) {
        iguales.m3++;
      }
  }
  console.log(iguales);
  max = Math.max(iguales.m1, iguales.m2, iguales.m3);
  console.log(max);
  if (iguales.m1 == max) {
    return m1;
  }
  if (iguales.m2 == max) {
    return m2;
  }
  if (iguales.m3 == max) {
    return m3;
  }

  atributos = {numeros:null, letras:null, año1:null, año2:null, año3:null, año4:null, año5:null};
};
