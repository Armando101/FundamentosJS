// Arrow functions

MAYORIA_EDAD = 18

var Armando = {
	nombre: "Armando",
	edad: 21
}

// JavaScript nos permite asignar una función a una variable
// A esta función se le llama función anónima porque no tiene nombre
// Para invocar esta función lo haríamos así
// mayorEdad(Armando)

var mayorEdad = function (persona) {
	return persona.edad >= MAYORIA_EDAD
}

// Una arrow function se declara de la siguiente manera
// Cuando tenemos un solo parámetro podemos omitir los paréntesis
// Si nuestra función lo único que hace es retornar un valor, podemos omitir el return y las llaves

const esMayorDeEdad1 = (persona) => {
	return persona.edad >= MAYORIA_EDAD
}

// Función esMayorDeEdad simplificada
const esMayorDeEdad2 = persona => persona.edad >= MAYORIA_EDAD

// Función esMayorDeEdad desestructurada
const esMayorDeEdad3 = ({edad}) => edad >= MAYORIA_EDAD	// Le vamos a pasar un objeto que tiene un atributo edad

const esMenorDeEdad = persona => !esMayorDeEdad3(persona)