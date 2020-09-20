var atributos = ["numeros", "letras", "año1", "año2", "año3", "año4", "año5"];

var materias = [
  {nombre : "matematica",
   attr : {numeros:true, letras:false, año1:true, año2: true, año3:true, año4:true, año5:true, iguales:0}
  },
  {nombre : "lengua",
   attr : {letras:true, numeros:false, año1: true, año2:true, año3:true, año4: true, año5:true, iguales:0}
  },
  {nombre : "geografia",
   attr : {letras:true, numeros:false, año1:true, año2:true, año3:true, año4:true, año5:false, iguales:0}
  }
];

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
      for (var j = 0; j < materias.length; j++) {
        if (data[i] == materias[j].attr[i]) {
          materias[j].attr.iguales++;
        }
      }
  }

  mayor = [null,0]; // mayor = [indice materias, numero iguales]
  for (var i = 0; i < materias.length; i++) {
    if ((mayor[0] == null) || (materias[i].attr.iguales > mayor[1])) {
      mayor[0] = i;
      mayor[1] = materias[i].attr.iguales
    }
    materias[i].attr.iguales = 0;
  }
  return materias[mayor[0]].nombre;
};

function agregar_materia(nombre, attr){
  var length = materias.push({"nombre" : nombre, "attr" : attr});
  materias[(length - 1)].attr.iguales = 0;
  console.log(materias);
};
