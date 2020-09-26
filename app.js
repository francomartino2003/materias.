var atributos = ["numeros", "letras", "año1", "año2", "año3", "año4", "año5"];

var materias = {
  "matematica": {numeros:true, letras:false, año1:true, año2: true, año3:true, año4:true, año5:true, iguales:0},
  "lengua": {letras:true, numeros:false, año1: true, año2:true, año3:true, año4: true, año5:true, iguales:0},
  "geografia":{letras:true, numeros:false, año1:true, año2:true, año3:true, año4:true, año5:false, iguales:0}
};

var tu_materia = function(){
  var data = tomar_datos();
  var rta = comparar_datos(data);
  if (rta != null) {
    return "tu materia es: " + rta;
  }else {
    return "no se cual es tu materia :(";
  }
};

function tomar_datos(){
  data = {};
  for (var i = 0; i < atributos.length; i++) {
    if (confirm("tu materia es de / esta en " + atributos[i] + " ?")) {
      data[atributos[i]] = true;
    }else {
      data[atributos[i]] = false;
    }
  }
  return data;
};

function comparar_datos(data){
  for (var i in data) {
    for (var f in materias) {
      if (data[i] == materias[f][i]) {
        materias[f].iguales++;
      }
    }
  }
  key = null;
  n_iguales = 0;
  for (var i in materias) {
    if ((key == null) || (materias[i].iguales > n_iguales)) {
      key = i;
      n_iguales = materias[i].iguales
    }
    materias[i].iguales = 0;
  }
  return key;
};

function agregar_materia(nombre, attr){
  if (materias[nombre]) {
    console.log("la materia ya existe");
  }else {
    materias[nombre] = attr;
    materias[nombre].iguales = 0;
  }
};

function agregar_atributo(materia,attr,valor){
  if (atributos.includes(attr)) {
    console.log("el atributo ya existe");
  }else {
    atributos.push(attr);
    for (var i in materias) {
      if (i == materia) {
        materias[i][attr] = valor;
      }else {
        materias[i][attr] = null;
      }
    }
  }
};

//{numeros:true, letras:false, año1:false, año2: false, año3:false, año4:true, año5:true, iguales:0}
