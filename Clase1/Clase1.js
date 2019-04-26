// Variables

// Debido a que JS es un lenguaje de programacion debilmente tipado, no es necesario declarar el tipo de la varable

// Se declaran de la siguiente manera
var nombre

// Para darle un valor a la variable, lo hacemos de la siguiente manera
nombre = "Armando"

//Otra forma de declarar variables es de la siguiente manera

var apellido = "Rivera"

// Ahora lo podemos mostrar en la consola

console.log("Hola "+nombre+" "+apellido)

//////////////////////Metodos en JS /////////////////////////////////////////////

var nombreMayus = nombre.toUpperCase()	//Convierte la string en Mayusculas
var apellidoMinus = apellido.toLowerCase()	//Convierte la string en Minuscula

var primeraLetra = nombre.charAt(0) 	//Devuelve la primera letra de la string
var longitudApellido = nombre.length 	//Este es un atributo que devuelve la longitud de la cadena

var nombreCompleto1 = nombre +" "+ apellido 	//Concatenamos cadenas
var nombreCompleto2 = `${nombre} ${apellido}`	//Otra forma de concatenar, las comillas invertidas nos permiten incluir codigo JS dentro de las llaves despues de los signos de pesos
var nombreCompleto3 = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1,3)	//Con este metodo podemos guardar en una cadena una subcadena de otra cadena, str guarda la subcadena que esta en la cadena nombre que se compone de las posiciones 1,2 y 3.
var ultimo = nombre.substr(-1)	//Devuelve el ultimo caracter de la cadena.


////////////////////////////////////// Numeros //////////////////////////////////////////////

var edad = 21

// edad = edad + 1
// Suma 1 a edad
edad += 1

var peso = 80
peso -= 5

// JS es muy inpreciso con los decimales

var precio = 200.3
var total = precio*3

//Por eso lo tenenemos que hacer de la siguiente forma
var total1 = Math.round(precio*100*3)/100
var total2= total1.toFixed(3)	// Me devuelve el valor con tres decimales, total2 lo guarda como cadena
var total3 = parseFloat(total2)

var pizza = 8
var personas = 2
var porciones = pizza/personas


/////////////////////////////////////////// Funciones //////////////////////////////////////////////

// Las funciones se definen con la palabra reservada function
// De esta forma declaramos una funcion
// A las funciones les podemos pasar parametros

function imprimirEdad(nom, ed) {
	console.log(`${nom} tiene ${ed} años`)
}

// Asi mandamos llamar una funcion
imprimirEdad(nombre, edad)
imprimirEdad("Adriana", "21")

///////////////////////////////////////// Ojetos ////////////////////////////////////////////////

// Los objetos en JS se declaran con llaves

var Armando = {
	//Atributos, se componen por una clave y un valor
	nombre: "Armando",
	apellido: "Rivera",
	edad: 21
}

var Dario = {
	//Atributos, se componen por una clave y un valor
	nombre: "Dario",
	apellido: "Sunsnisky",
	edad: 27
}

// Podemos hacer uso de funciones para operar con objetos
function imprimirNombreMayus(persona) {
	console.log(persona.nombre.toUpperCase())
}

imprimirNombreMayus(Armando)
imprimirNombreMayus(Dario)


// Tambien podemos en lugar de pasarle el nombre del objeto, pasarle solo los atributos de dicho objeto mediante llaves
function imprimirNombreMinus({nombre}) {
	console.log(nombre.toLowerCase())
}

imprimirNombreMinus(Armando)
imprimirNombreMinus(Dario)

// Tambien podemos pasarle el atributo de un objeto no instanciado
imprimirNombreMayus({nombre:"pepito"})

// No podemos pasarle un atributo que nuestra funcion no reciba
//imprimirNombreMayus({apellido:"Gomez"}) //Esta linea marca un error


//Otra forma de opoerar con funciones y objetos es la siguiente
function imprimirApellidoMayus(persona) {
	//var apellido = persona.apellido
	//Le estamos diciendo que tome el atributo apellido del objeto persona y lo guarde en una variable con nombre apellido
	var {apellido} = persona
	console.log(apellido.toUpperCase())
}

function imprimirNombreYEdad(persona) {
	var {nombre} = persona
	var {edad} = persona

	console.log("Hola me llamo"+" "+nombre +" y tengo "+edad+" anios")
}

imprimirNombreYEdad(Armando)
imprimirNombreYEdad(Dario)


/////////////////////////////////// Parametros como referencia y como valor ////////////////////////

// Paso por referencia
// Si le pasamos un objeto a una funcion y operamos sobre un atributo de dicho objeto se le conoce como paso por referencia y los atributos que modifiquemos dentro de la funcion se veran afectados en el objto

function cumpleanosRef(persona) {
	persona.edad +=1
}
cumpleanosRef(Armando)

//Paso por valor
// Le pasamos solo el atributo de un ojeto (no el objeto) y solo operamos sobre el atributo, al modificarlo dentro de la funcion, solo se vera afectado el atributo dentro de la funcion, no en todo el objeto

function cumpleanosVal(edad) {
	edad +=1
}
// Mandariamos llamar a la funcion de la siguiente manera
cumpleanosVal(Armando.edad)

///////////////////////////////// Devolver objetos ////////////////////////////////
// Es útil cuando queremos modificar los valores de un objeto creando otro nuevo
// En el ejemplo regresamos un objeto igual al recibido modificando los atributos o creandolos.

function cumpleanosNewObj(persona) {
	return {
		...persona, 	// Con los tres puntos estamos haciedo referencia al objeto pasado como argumento
		// Es decir, le estoy diciendo que devuelva un objeto persona igual al recibido (con los mismos atributos y métodos)
		edad: persona.edad+1	// Modificamos uno de los atributos del objeto
	}
}

/////////////////////////////// Comparaciones /////////////////////////////////

var x = 4
var y = "4"

// El == sirve para comparar dos variables, si el contenido es igual, devuelve un true
// El === sirve para comparar dos variables, si el contenido y el tipo de dato es igual, devuelve un true

console.log(x == y)	// Devuelve true
console.log(x === y)	// Devuelve false


var armando = {
	nombre: "Armando"
}

var otraPersona = {
	nombre: "Armando"
}


console.log(armando == otraPersona)	//Esto nos da false debido a que lo que hace es comparar las referencias de los objetos, no el contenido

var unaPersonaX = otraPersona		// Lo que hace es guardar la dirección de otraPersona en la variable unaPersonaX, por lo tanto si modificamos una variable de cualquiera de estos dos objetos se modificará en los dos.

console.log(unaPersonaX == otraPersona)	// Devuelve un true

// Existen 5 tipos de datos primitivos

//Boolean:// false/true
// Null:// nulo o "vacío"
// Undefined:// Cuando una variable es declarada pero aún no tiene un valor asignado 
// Number:// 383839
// String:// "esto es una string"```

// Valores booleanos falsos en JS
//false
//0
//null
//undefined
//NaN
// "" (Cadena vacía)