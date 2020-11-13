
var atributos = null;
var materias = null;

function handleFileSelect(){
  if (window.File && window.FileReader && window.FileList && window.Blob) {
  } else {
      alert('The File APIs are not fully supported in this browser.');
      return;
  }
  input = document.getElementById('fileinput');
  if (!input) {
    alert("Um, couldn't find the fileinput element.");
  } else if (!input.files) {
    alert("This browser doesn't seem to support the `files` property of file inputs.");
  } else if (!input.files[0]) {
    alert("Please select a file before clicking 'Load'");
  } else {
    file = input.files[0];
    fr = new FileReader();
    fr.onload = receivedText;
    fr.readAsText(file);
  }
}

function receivedText() {
   var result = fr.result;
   var jsonVar = JSON.parse(result);
   materias = jsonVar.materias;
   atributos = jsonVar.atributos;
 }

var tu_materia = function(){
  var data = tomar_datos();
  var rta = comparar_datos(data);
  var materia = rta[0];
  var num_iguales = rta[1];
  confirmar_respuesta(materia, num_iguales, data);
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

function confirmar_respuesta(materia, num_iguales, data){
  if (confirm("tu materia es " + materia + " ?")) {
    console.log(materia);
  }else {
    var nueva_materia = prompt("cual era tu materia?").toLowerCase();
    if (nueva_materia) {
      agregar_materia(nueva_materia,data);
      if (atributos.length == num_iguales) {
        agregar_atributo(nueva_materia);
      }
    }else {
      console.log("no agregaste ninguna materia");
    }
  }
};
