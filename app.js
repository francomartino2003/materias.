var atributos = ["numeros", "letras", "año1", "año2", "año3", "año4", "año5"];

var materias = {
  "matematica": {numeros:true, letras:false, año1:true, año2: true, año3:true, año4:true, año5:true},
  "lengua": {letras:true, numeros:false, año1: true, año2:true, año3:true, año4: true, año5:true},
  "geografia":{letras:true, numeros:false, año1:true, año2:true, año3:true, año4:true, año5:false}
};

var tu_materia = function(){
  var data = tomar_datos();
  var rta = comparar_datos(data); //rta[0] = materia; rta[1] = numero_iguales;
  console.log(rta);
  confirmar_respuesta(rta,data);
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
    var mayor_valor = 0;
    var mayor_materia = null;
    for (var materia in materias) {
      var iguales = 0;
      for (var key in data) {
        if (data[key] == materias[materia][key]) {
          iguales++;
        }
      }
      if (iguales > mayor_valor) {
        mayor_valor = iguales;
        mayor_materia = materia;
      }
    }
   return [mayor_materia, mayor_valor];
};

function agregar_materia(nombre, attr){
    if (materias[nombre]) {
      console.log("se cambiaron los atributos de: " + nombre);
    }else {
      console.log("se agrego la materia: " + nombre);
    }
    materias[nombre] = attr;
    console.log(materias[nombre]);
};

function agregar_atributo(materia){
  var attr = prompt("agrega un nuevo atributo para " + materia).toLowerCase();
  if (atributos.includes(attr)) {
    console.log("el atributo ya existe");
  }else {
    atributos.push(attr);
    for (var i in materias) {
        materias[i][attr] = null;
    }
    if (confirm("tu materia es de / esta en " + attr + " ?")) {
      materias[materia][attr] = true;
    }else {
      materias[materia][attr] = false;
    }
  }
};

function confirmar_respuesta(rta, data){
  if (confirm("tu materia es " + rta[0] + " ?")) {
    console.log(rta[0]);
  }else {
    var nueva_materia = prompt("cual era tu materia?").toLowerCase();
    if (nueva_materia) {
      agregar_materia(nueva_materia,data);
      if (atributos.length == rta[1]) {
        agregar_atributo(nueva_materia);
      }
    }else {
      console.log("no agregaste ninguna materia");
    }
  }
};
