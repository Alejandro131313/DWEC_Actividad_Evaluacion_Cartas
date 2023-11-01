import Carta from "./Carta.js";
import Baraja from "./Baraja.js";


export default class Partida {

constructor(filas, columnas) {
    this._filas = filas;
    this._columnas = columnas;

    this._filas=prompt("Numero de filas(minimo 4): ");
    this._columnas=prompt("Numero de comumnas(minimo 4): ");
//Compruebo si las filas y columnas se introdujeron bien sino las igualo a 4
    if (filas <4 ||columnas <4) {
      this._filas = 4;
      this._columnas = 4;
    }
    this._baraja = new Baraja();

    this._cartasparaJugar = [];
    this._cartasOcultas=[];

    this._cartaGirada = null;
    this._aciertos = 0;
    this._Intentos = 0;

   //creo el tablero Oculto(Juego real) donde las cartas estan boca abajo
    var numeroV=1;
    for (let fila = 0; fila < this._filas; fila++) {
      this._cartasOcultas[fila] = [];
      for (let columna = 0; columna < this._columnas; columna++) {
        this._cartasOcultas[fila][columna] = "CartaOculta" + numeroV;
        numeroV++;
      }
    }
}



selecciona() {
//necesitas selecionar la mitad del número de cartas que hay en el tablero
    const numCartasnecesarias = this._filas * this._columnas / 2;

    for (let i = 0; i < numCartasnecesarias; i++) {
      const carta = this._baraja.generaCarta();
      this._cartasparaJugar.push(carta, carta);
    }
  }

  //Mezclo las cartas
  barajar() {
    this._cartasparaJugar.sort(()=> Math.random() - 0.5);
  }

//Reparto las cartas
  reparte() {
    this._tablero = new Array(this._filas);

    for (let i = 0; i < this._filas; i++) {
        this._tablero[i] = new Array(this._columnas);
    }

    var Numcarta = 0;

    for (let fila = 0; fila < this._filas; fila++) {
        for (let columna = 0; columna < this._columnas; columna++) {
            this._tablero[fila][columna] = this._cartasparaJugar[Numcarta];
            Numcarta++;
        }
    }

  }

  voltear(fila, columna) {
    //muestro la carta seleccionada y añado un intento
   if (this._cartasOcultas[fila][columna] !== null) {

    const carta = this._tablero[fila][columna];
 
    console.log("Carta seleccionada: " + carta);
    this._Intentos++;
  }
  }
  


 compruebaAcierto(fila,columna,fila2,columna2){
//si es acierto elimino las cartas igualandolas a null y añado un acierto
  if (this._tablero[fila][columna] === this._tablero[fila2][columna2]) {
    this._tablero[fila][columna] = null;
    this._tablero[fila2][columna2] = null;
    this._cartasOcultas[fila][columna] = null;
    this._cartasOcultas[fila2][columna2] = null;
    this._aciertos++;
    return true;
  } else {

    return false;
  }
 }


 haFinalizado(){

if(this._aciertos==(this._filas * this._columnas / 2)){
    console.log("Partida Finalizada")
    return true;
}else{
return false;
}
}

//Muestro las cartas ocultas con los aciertos y los intentos que llevas
mostrarTableroOculto() {
  console.log("Tablero Oculto(Juego real)");
  for (let fila = 0; fila < this._filas; fila++) {
    let filaOculta = "";
    for (let columna = 0; columna < this._columnas; columna++) {
      const cartaOculta = this._cartasOcultas[fila][columna];
      filaOculta += "[" + cartaOculta + "]";
    }
    console.log(filaOculta);
  }
  console.log("Aciertos: " +this._aciertos);
  console.log("Intento: "+ this._Intentos)
}


//Muestro las cartas sin ocultar(Tabla comodin)
mostrarTablero() {
  console.log("Tablero Comodin"); 
  for (let fila = 0; fila < this._filas; fila++) {
    for (let columna = 0; columna < this._columnas; columna++) {
      const carta = this._tablero[fila][columna];
      if (carta === null) {
        console.log("[ ]");
      } else {
        console.log(" [" + carta + "]");
      }
    }
    console.log(" "); // Salto de línea
  }

}
}