//// Hereencia en JS /////////

class  Persona{
  constructor (nombre,apellido, altura){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
  }
  saludar(){
    console.log (`Hola me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto(){
    return this.altura>=1.80
  }
}

class Desarrollador extends Persona{
  constructor (nombre,apellido,altura){
    super(nombre,apellido,altura)
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
  }

}


var Armando = new Desarrollador("Armando", "Rivera", 1.80)
var Jose = new Persona ("Jose", "Maritinez", 1.75)

Armando.saludar()
console.log(Armando.soyAlto())

Jose.saludar()
console.log(Jose.soyAlto())
