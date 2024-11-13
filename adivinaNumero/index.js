

/**
 * @function introducir funcion que evalua si el numero dado por el usuario es igual al de la computadora
 * @param {number} computadora numero generado por computadora
 */
function introducir(computadora){  
  let usuario = Number(document.getElementById('inputUsuario').value)
  if (usuario === computadora){
    alert(`Lograste adivinar el numero que es ${computadora}`)
  }else{
    alert(`Numero incorrecto`)
    --intentos;
    document.getElementById('intentos').innerHTML = intentos
  }
}

/**
 * @function comprobar comprueba cuantos intentos quedan, en caso de llegar a 0 se desactiva el boton
 * @param {number} intentos el numero de intentos que tiene el usuario
 */
function comprobar(intentos){
  if (intentos < 1){
    boton.style.opacity = 10;
    boton.disabled = true;
    alert(`Te quedaste sin intentos, el numero a adivinar era ${computadora}`)
  }
}

let computadora = Math.floor(Math.random() * (100 + 1));
let intentos = 6;
document.getElementById('intentos').innerHTML = intentos
const boton =   document.getElementById('boton')
const reiniciar = document.getElementById('reiniciar')

boton.onclick = function (){
  introducir(computadora)
  comprobar(intentos)
  document.getElementById('forma').reset()};

reiniciar.onclick = function (){
    if (boton.disabled === true){
      boton.style.opacity = 100;
      boton.disabled = false;
    }
    alert(`Reiniciaste los intentos, el numero a divinar era ${computadora}, ahora se seleccionara uno nuevo`)
    computadora = Math.floor(Math.random() * (100 + 1));
    intentos = 6;
    document.getElementById('intentos').innerHTML = intentos;
};


 