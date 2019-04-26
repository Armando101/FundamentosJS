function heredaDe (prototipoHijo, protoipoPadre){
	var fn = function() {}
	fn.prototype = protoipoPadre.prototype
	prototipoHijo.prototype = new fn

	prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function() {
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
};

Persona.prototype.soyAlto = function() {
	if (this.altura>=1.8) {
		console.log(`Mi nombre es ${this.nombre} y soy alto`)
		return true
	}
	console.log(`Mi nombre es ${this.nombre} y soy bajo`)
	return false
};

var Armando = new Persona("Armando", "Rivera", 1.85)
var Juan = new Persona("Juan", "Ramirez", 1.60)
var Arturo = new Persona("Arturo", "Hernandez", 1.75)

Armando.saludar()
Juan.saludar()
Arturo.saludar()

Armando.soyAlto()
Juan.soyAlto()
Arturo.soyAlto()

// Un error común es intentar hacer los prototipos o métodos de una clase con arrow functions

/*
Persona.prototype.saludar = () => {
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
};

*/

// En el arrow function anterior usamos this, cuando ocupamos this en un arrow funtion éste this se refiere al objeto window en el cual nunca va a encontrar un atributo nombre o apellido por lo que nos mostrará undefined.
// Lo mejor es usar funciones sin expresarlas como arrow function

heredaDe(Desarrollador, Persona)

function Desarrollador (nombre, apellido) {
	this.nombre = nombre
	this.apellido = apellido
}

Desarrollador.prototype.saludar = function() {
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
};