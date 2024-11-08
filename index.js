/*Piedra, papel o tijera*/

function piedraPapelTijera(){
  let opciones = ['Piedra','Papel','Tijera'];
  let decision = window.prompt(`Cual deseas?\n 1)Piedra\n 2)Papel\n 3)Tijera\n Indique con el numero de la opcion.`)
  window.alert(`Usted decidio ${opciones[decision - 1]}`)
}

piedraPapelTijera()