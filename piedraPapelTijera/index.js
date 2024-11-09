/*Piedra, papel o tijera*/

function piedraPapelTijera(){
  let x;
  let y;
  let decision;
  let rondas = 0;
  let player1 = 0;
  let player2 = 0;
  let opciones = ['Piedra','Papel','Tijera'];

  decision = window.prompt(`Desea jugar? Indique con un si o con un no`)
  decision = decision.toUpperCase()
    while(decision === 'SI'){
      while((player1<2) || (player2 < 2)){
        ++rondas;
        x = 0;
        x = window.prompt(`Estamos en la ronda ${rondas}\n El jugador 1 tiene ${player1} puntos\n El jugador 2 tiene ${player2} puntos\n Cual deseas?\n 1)Piedra\n 2)Papel\n 3)Tijera\n Indique con el numero de la opcion.`)
        --x;
        y = Math.floor(Math.random() * 3)
        switch(x){
          case 0:
            switch(y){
              case 1:
                ++player2;
                window.alert(`El jugaodor 1 usa ${opciones[x]} pero el jugador 2 usa ${opciones[y]}. Jugador 2 gana un punto!`)
              break;
              case 2:
                ++player1;
                window.alert(`El jugaodor 1 usa ${opciones[x]} y el jugador 2 usa ${opciones[y]}. Jugador 1 gana un punto!`)
              break;
              default:
                window.alert(`El jugaodor 1 usa ${opciones[x]} pero el jugador 2 usa ${opciones[y]}. Es un empate!`)
              break;
            }
          break;
          case 1:
            switch(y){
              case 2:
                ++player2;
                window.alert(`El jugaodor 1 usa ${opciones[x]} pero el jugador 2 usa ${opciones[y]}. Jugador 2 gana un punto!`)
              break;
              case 0:
                ++player1;
                window.alert(`El jugaodor 1 usa ${opciones[x]} y el jugador 2 usa ${opciones[y]}. Jugador 1 gana un punto!`)
              break;
              default:
                window.alert(`El jugaodor 1 usa ${opciones[x]} pero el jugador 2 usa ${opciones[y]}. Es un empate!`)
              break;
            }
          break;
          case 2:
            switch(y){
              case 0:
                ++player2;
                window.alert(`El jugaodor 1 usa ${opciones[x]} pero el jugador 2 usa ${opciones[y]}. Jugador 2 gana un punto!`)
              break;
              case 1:
                ++player1;
                window.alert(`El jugaodor 1 usa ${opciones[x]} y el jugador 2 usa ${opciones[y]}. Jugador 1 gana un punto!`)
              break;
              default:
                window.alert(`El jugaodor 1 usa ${opciones[x]} pero el jugador 2 usa ${opciones[y]}. Es un empate!`)
              break;
            }
          break;
          default:
            window.alert(`No introduciste un numero valido! Por favor unicamente introduce un numero correspondiente a las opciones que se te dan`)
          break;
        }
      }
      if(player2 >= 2){
        window.alert(`El jugador 2 gano! \n Se jugaron un total de ${rondas}`)
      }else if (player1 >= 2) {
        window.alert(`El jugador 1 gano! \n Se jugaron un total de ${rondas}`)
      }
  
      decision = window.prompt(`Desea seguir jugando? \n Indique con un si o un no`);
      decision = decision.toUpperCase()
      player1=0;
      player2=0;
      rondas=0;
    }
    window.alert(`Ha salido del juego.`);
  }

piedraPapelTijera()