var atributos = ["numeros", "letras", "año1", "año2", "año3", "año4", "año5"];

var materias = {
  "matematica": {numeros:true, letras:false, año1:true, año2: true, año3:true, año4:true, año5:true},
  "lengua": {letras:true, numeros:false, año1: true, año2:true, año3:true, año4: true, año5:true},
  "geografia":{letras:true, numeros:false, año1:true, año2:true, año3:true, año4:true, año5:false}
};

var tu_materia = function(){
  var data = tomar_datos();
  var rta = comparar_datos(data);
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
    for (var f in materias) {
      var iguales = 0;
      for (var i in data) {
        if (data[i] == materias[f][i]) {
          iguales++;
        }
      }
      if (iguales > mayor_valor) {
        mayor_valor = iguales;
        mayor_materia = f;
      }
    }
   return mayor_materia;
};

function agregar_materia(nombre, attr){
    materias[nombre] = attr;
    if (materias[nombre]) {
      console.log("se cambiaron los atributos de: " + nombre);
    }else {
      console.log("se agrego la materia: " + nombre);
    }
    console.log(materias[nombre]);
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

function confirmar_respuesta(rta, data){
  if (confirm("tu materia es " + rta + " ?")) {
    console.log(rta);
  }else {
    var nueva_materia = prompt("cual era tu materia?");
    if (nueva_materia) {
      agregar_materia(nueva_materia,data);
    }else {
      console.log("no agregaste ninguna materia");
    }
  }
};
