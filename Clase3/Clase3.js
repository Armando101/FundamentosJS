///////////////////// Arrays ///////////////////
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]

//personas				=> Nos muestra el arreglo de personas
//personas[0]			=> Nos muestra el primer elemento del arreglo
//personas[0].altura 	=> Nos muestra la altura de la persona que ocupa el primer elmento del arreglo

// Imprimir las alturas de las personas
for (var i = 0; i < personas.length; i++) {
		var persona = personas[i]
		console.log(`${persona.nombre} mide ${persona.altura} metros`)
	}

//////////////////////// Filtrar un array /////////////

// filter(condicion)

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura < 1.8
// La siguiente funcion es equivalente a la anterior
/*var personasAltas = personas.filter(function (persona) {
	return persona.altura > 1.8
})
*/

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)


console.log("Las personas altas son: ",personasAltas)
console.log("Las personas bajas son: ",personasBajas)

//////////////////// Transformar un array /////////////

const pasarAlturasACms = persona => {
	return {
		...persona,
		altura: persona.altura*100
	}
}


var personasCms = personas.map(pasarAlturasACms)

console.table(personasCms)

////////////// Reducir Arrays ////////////////

var acum = 0

for (var i =0; i <personas.length; i++) {
	acum += personas[i].cantidadDeLibros	
}

console.log(`En total todos tienen ${acum} libros`)

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)
console.log(`En total todos tienen ${totalDeLibros} libros`)
