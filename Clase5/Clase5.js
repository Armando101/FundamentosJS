class  Persona{
  constructor (nombre,apellido, altura){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
  }
  saludar(fn){
    console.log (`Hola me llamo ${this.nombre} ${this.apellido}`)
    // Comprueba si se mando una funcion como parametro a la funcion saludar
    if (fn) {
      // Manda llamar la funcion que se le paso como argumento
      fn(this.nombre, this.apellido)  // No le paso en tercer parametro porque no es un Desarrollador por lo tanto lo tomara cono 0
    }
  }
  soyAlto(){
    return this.altura>=1.80
  }
}

class Desarrollador extends Persona{
  constructor (nombre,apellido,altura){
    super(nombre,apellido,altura)
  }
  saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
    if (fn) {
      fn(this.nombre, this.apellido, true)
    }
  }

}

// Asincronismo en JS

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log("Ser Desarrollador es Cool")
  }
}

var armando = new Desarrollador('Armando', "Rivera", 1.80)
var erik = new Persona('Erik', 'Lopez', 1.70)
var arturo = new Persona('Arturo', 'Hernandez', 1.75)

//Puedo mandar llamar la funcion saludar pasandole como argumento otra funcion
//armando.saludar(responderSaludo)
//erik.saludar(responderSaludo)
//arturo.saludar()