/**
 * Clase para  generar una tarea
 */
class Tarea{
  /**
   * @param {String} nombre nombre de la tarea 
   * @param {String} descripcion descripcion de la tarea 
   * @param {string} fecha fecha de la tarea
   * @property {boolean} completada Si la tarea esta completada
   */

  constructor(nombre, descripcion, fecha){
    this.nombre = nombre,
    this.descripcion = descripcion, 
    this.fecha = fecha,
    this.completada = false
  }
}


/**
 * clase para generar una lista de tareas
 */
class ListaTareas{
  /**
   * @property {Array} lista lista de objetos tipo Tarea
   */
  constructor(){
    this.lista = [];
  }

  /**
   * Muestra todos las tareas en la lista
   */
  mostraLista(){
    if(this.lista.length === 0){
      alert(`No hay tareas en la lista`)
    }else{
      this.lista.forEach((element,index) => {
        alert(`${index}) Nombre: ${element.nombre}\n
          Descripcion: ${element.descripcion}\n
          Fecha:${element.fecha}\n
          Completada:${element.completada}\n
          ====================`)
      })
    }
  }

  /**
   * @function agregar agrega una tarea a la lista
   * @param {object} tarea tarea 
   */
  agregar(tarea){
    this.lista.push(tarea);
  }

  /**
   * @function completar toma la posicion la posicion de una tarea en la lista para cambiar su completada a true
   * @param {number} pos posicion de la tarea dentro del array de lista  
  */
  completar(pos){
   this.lista.forEach((element,index) =>{
    if(pos === index){
      alert(`se completo la tarea: ${element.nombre}`)
      element.completada = true;
    }else{
      alert(`La tarea que buscas no esta en la lista.`)
    } 
   })
  }

  /**
   * @function eliminar elimina la posicion de una tarea en la lista para eleminarla
   * @param {number} pos posicion de la tarea dentro del array
   */
  eliminar(pos){
    this.lista.forEach((element,index) =>{
      if(pos === index){
        alert(`se elimino la tarea: ${element.nombre}`)
        this.lista.splice(index,1);
      }else{
        alert(`La tarea que buscas no esta en la lista.`)
      }
    })
  }
}


/**
 * @function nuevaTarea funcion que genera una nueva tarea para ingresarla en la lista
 * @param {object} listaTarea lista de tareas
 */
function nuevaTarea(listaTarea){
  let nombr = prompt(`Ingresa el nombre de la tarea.`);
  let descrip = prompt(`Ingresa la descripcion.`)
  let fecha = prompt('Ingresa la fecha')
  /**
   * crea una nueva tarea
   * @class 
   */
  listaTarea.agregar(new Tarea(nombr,descrip,fecha));
}

lista = new ListaTareas();

/**
 * @function usuario sirve para interactuar con el usaurio
 */
function usuario(){
  let usuario;
  let pos;
  /**
   * Se ejecutara el el bucle do while hasta que usuario sea un 5
   */
  do{
    usuario = Number(prompt(`Que deseas hacer?\n
      1)Ingresar una nueva tarea\n
      2)Mostrar toda la lista\n
      3)Completar una tarea\n
      4)Eliminar la tarea\n
      5)Salir\n
      Porfavor interactua unicamente ingresando un numero valido.`))
    /**
     * dependiendo del numero que el usuario de se ejecutara una opcion.
     */
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
  }while(usuario != 5)
}

usuario();
