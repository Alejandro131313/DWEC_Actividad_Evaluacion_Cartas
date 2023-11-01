import Carta from "./Carta.js";
import Baraja from "./Baraja.js";
import Partida from "./Partida.js";
//creo la clase partida y llamo a los metodos
      const partida = new Partida(4, 4); 
      partida.selecciona(); 
      partida.barajar(); 
      partida.reparte();

      partida.mostrarTablero();
      partida.mostrarTableroOculto();

      let intentos = 0;
      //Hago un bucle while pidiendo filas y columnas hasta que gane
     while (!partida.haFinalizado()) {

    const fila=parseInt(prompt("Numero de fila: "));
    const columna=parseInt(prompt("Numero de comumna: "));

//Hago un if para pedir los datos otra vez,por si eliges una carta ya acertada
    if(partida._tablero[fila][columna] === null) {

        const fila=parseInt(prompt("Ya has acertado ese Numero de fila,elige otro."));
        const columna=parseInt(prompt("Ya has acertado ese Numero de fila,elige otro."));

    }

    partida.voltear(fila, columna);


    const fila2=parseInt(prompt("Numero de fila: "));
    const columna2=parseInt(prompt("Numero de comumna: "));


    if (partida._tablero[fila2][columna2] === null) {

        const fila2=parseInt(prompt("Ya has acertado ese Numero de fila,elige otro."));
        const columna2=parseInt(prompt("Ya has acertado ese Numero de fila,elige otro."));

    }
    partida.voltear(fila2, columna2);

    partida.compruebaAcierto(fila,columna,fila2, columna2);
    partida.mostrarTablero()
    partida.mostrarTableroOculto();
}




console.log("Partida ganada.");