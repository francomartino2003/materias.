var atributos = null;
var materias = null;
var fileName = '';

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
    fileName = file.name;
    fr = new FileReader();
    fr.onload = receivedText;
    fr.readAsText(file);
  }
}

function receivedText() {
   var result = fr.result;
   var jsonVar = JSON.parse(result);
   if (jsonVar.materias && jsonVar.atributos) {
     materias = jsonVar.materias;
     atributos = jsonVar.atributos;
   }
 }

function download() {
  if (fileName) {
    var a = document.createElement("a");
    var globales = {"materias":materias, "atributos":atributos};
    var str = JSON.stringify(globales); //tuve que agregar esto porque sino, cuando se descargaba, solamente aparecia "[object Object]" en el file. Supongo que me pasaba porque lo  estaba haciendo con un objeto en vez de un array
    var file = new Blob([str], {
      type: 'text/plain'
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  } else {
    console.error("error");
  }
}


var tu_materia = function(){
  if (materias == null || atributos == null) {
    alert("primero debes seleccionar un archivo");
  }else {
    var data = tomar_datos();
    var rta = comparar_datos(data);
    var materia = rta[0];
    var num_iguales = rta[1];
    var cambios = confirmar_respuesta(materia, num_iguales, data);
    if (cambios) {
      download(); // solo se descarga si el usuario agrego o modifico una materia o atributo de forma correcta.
    }
    location.reload(); // hace un refresh para que se limpien las variables globales y se tenga que agregar el ultimo file.
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
  var cambios = false;
  var attr = prompt("agrega un nuevo atributo para " + materia).toLowerCase();
  if (attr) {
    if (atributos.includes(attr)) {
      console.log("el atributo ya existe");
      cambios = false;
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
      cambios = true;
    }
  }else {
    cambios = false;
  }
  return cambios;
};

function confirmar_respuesta(materia, num_iguales, data){
  var cambios = false;
  if (confirm("tu materia es " + materia + " ?")) {
    console.log(materia);
    cambios = false;
  }else {
    var nueva_materia = prompt("cual era tu materia?").toLowerCase();
    if (nueva_materia) {
      agregar_materia(nueva_materia,data);
      cambios = true;
      if (atributos.length == num_iguales) {
        cambios = agregar_atributo(nueva_materia);
      }
    }else {
      console.log("no agregaste ninguna materia");
      cambios = false;
    }
  }
  return cambios;
};
