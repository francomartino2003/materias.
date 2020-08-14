
var atributos = ["numeros","no_numeros","letras","no_letras", "1_año", "2_año", "3_año", "4_año", "5_año","no_5_año"];

var m1 = {
  nombre : "matematica",
  att : ["numeros","no_letras", "1_año", "2_año", "3_año", "4_año", "5_año"]
};

var m2 = {
  nombre : "lengua",
  att : ["letras","no_numeros","1_año", "2_año", "3_año", "4_año", "5_año"]
};

var m3 = {
  nombre : "geografia",
  att : ["letras", "no_numeros","1_año", "2_año", "3_año", "4_año", "no_5_año"]
};


var tu_materia = function(){
  var datos = tomar_datos();
  var rta = comparar_datos(datos); //devuleve m1, m2, m3 o null
  if (rta != null) {
    return "tu materia es: " + rta.nombre;
  }else {
    return "no se cual es tu materia :(";
  }
};

function tomar_datos(){
  var datos = [];
  if (confirm("la materia es de letras?")) {
    datos.push("letras");
  }else {
    datos.push("no_letras");
    if (confirm("la materia es de numeros?")) {
      datos.push("numeros");
    }else {
      datos.push("no_numeros");
    }
  }
  if (confirm("la materia esta en 1año?")) {
    datos.push("1_año");
  }else {
    datos.push("no_1_año");
  }
  if (confirm("la materia esta en 5año?")) {
    datos.push("5_año");
  }else {
    datos.push("no_5_año");
  }
  return datos;
}

function comparar_datos(datos){
  var iguales = 0;
  for (var i = 0; i < datos.length; i++) {
    for (var j = 0; j < m1.att.length; j++) {
      if (datos[i] == m1.att[j]) {
        iguales++;
      }
    }
  }
  if (iguales == datos.length) {
    return(m1);
  }else {
    iguales = 0;
    for (var i = 0; i < datos.length; i++) {
      for (var j = 0; j < m2.att.length; j++) {
        if (datos[i] == m2.att[j]) {
          iguales++;
        }
      }
    }
    if (iguales == datos.length) {
      return(m2);
    }else {
      iguales = 0;
      for (var i = 0; i < datos.length; i++) {
        for (var j = 0; j < m3.att.length; j++) {
          if (datos[i] == m3.att[j]) {
            iguales++;
          }
        }
      }
      if (iguales == datos.length) {
        return(m3);
      }else {
        return null;
      }
  }
}
};
