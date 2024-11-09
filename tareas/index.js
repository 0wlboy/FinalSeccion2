class Tarea{
  constructor(nombre, descripcion, fecha){
    this.nombre = nombre,
    this.descripcion = descripcion, 
    this.fecha = fecha,
    this.completada = false
  }
}

class ListaTareas{
  constructor(){
    this.lista = []
  }

  mostraLista(){
   this.lista.forEach(element,index => {
    
    alert(`${index}) ${element.nombre}\n
      ${element.descripcion}\n
      ${element.fecha}\n
      ${element.completada}\n
      ====================`)
   })
  }

  agregar(tarea){
    this.lista.push(tarea);
  }

  completar(pos){
   this.lista.forEach(element,index =>{
    if(pos === index){
      element.completada = true;
    } 
   })
  }

  eliminar(pos){
    this.lista.forEach(element,index =>{
      if(pos === index){
        this.lista.splice(index,1);
      }
    })
  }
}


function nuevaTarea(listaTarea){
  let nombr = prompt(`Ingresa el nombre de la tarea.`);
  let descrip = prompt(`Ingresa la descripcion.`)
  let fecha = prompt('Ingresa la fecha')
  listaTarea.agregar(new Tarea(nombr,descrip,fecha));
}

lista = new ListaTareas();
let usuario = 0;
while(usuario =! 5){
  let pos;
  usuario = Number(prompt(`Que deseas hacer?\n
    1)Ingresar una nueva tarea\n
    2)Mostrar toda la lista\n
    3)Completar una tarea\n
    4)Eliminar la tarea\n
    5)Salir)\n
    Porfavor interactua unicamente ingresando un numero valido.`))
  
  switch(usuario){
    case 1:
      nuevaTarea(lista);
    break;
    case 2:
      lista.mostraLista();
    break;
    case 3:
      alert(`Es recomendado ver la lista completa para saber la posicion de la tarea quiere buscar.`)
      pos = Number(prompt(`Ingrese el numero de la posicion de la tarea`))
      lista.completar(pos)
    break;
    case 4:
      alert(`Es recomendado ver la lista completa para saber la posicion de la tarea quiere buscar.`)
      pos = Number(prompt(`Ingrese el numero de la posicion de la tarea`))
      lista.eliminar(pos)
    break;
    case 5:
     alert(`Usted decidio salir, adios.`)
    break;
    default:
      alert(`Por favor ingrese un valor valido.`)
    break;
  }
}
