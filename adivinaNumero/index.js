


function numeros(){
  let computadora;
  let usuario;
  let intentos = 6;

  window.alert(`Bienvenido a adivine el numero! Tiene un total de 6 intentos para adivinar el numero de 1 a 100 que la computadora generara, si adivina el numero correcto el juego termina y usted gana. Buena suerte!`);
  
  computadora = Math.floor(Math.random() * (100 + 1));

  while(intentos > 0){
    usuario = Number(prompt(`Tienes un total de ${intentos} intentos.\nIngresa un numero valido de entre el 1 y 100.`))
    if(usuario === computadora){
      window.alert(`Lograste acertar el numero, ganaste!`)
      return
    }else{
      --intentos;
    }
  }
  window.alert(`No lograste adivinar el numero que era ${computadora}. Lo sentimos mucho`);
}

numeros();