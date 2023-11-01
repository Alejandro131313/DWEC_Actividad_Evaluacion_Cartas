import Carta from "./Carta.js";

export default class Baraja {
    
  
    constructor() {
      this._cartas = [];
        
    var palos = ['PICAS', 'CORAZONES', 'TRÉBOLES', 'DIAMANTES'];
    var cartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];

    for (const palo of palos) {
      for (const carta of cartas) {
      this._cartas.push(new Carta(palo, carta));
      }

    }

  }

    generaCarta() {
      const aleatorio = Math.floor(Math.random() * this._cartas.length);
      const carta = this._cartas[aleatorio];
      this._cartas.splice(aleatorio, 1);
      return carta;
    }


}