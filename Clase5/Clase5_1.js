// Vamos a hacer peticiones a la api de star wars, swapi
// Otra api para obtener informacion de los usuarios de GitHub es https://api.github.com/AlgunUsario


// Declaramos la url de la api que queremos consumir
const API_URL = 'https://swapi.co/api/'
// Declaramos la cadena que define las personas, cambia el id
const PEOPLE_URL = 'people/:id'
// Usamos el metodo replace que pertenece a las strigs, y remplazamos la cadena :id por el numero de la persona de la que queremos hacer la peticion

// Como segundo parametro le indicamos que va a hacer una peticion a otra pagina

// Para poder hacer un request vamos a llamar al metodo "$.get", este método nos permite hacer request y recibe verios parámetros.

// El primer parámetro es la URL a la cual queremos acceder.	`${API_URL}${PEOPLE_URL.replace(':id', 2)}`
// El segundo parámetro que necesitamos es indicarle a JQuery que el request se va a hacer hacia otra página. Le pasamos como parámetro el siguiente objet o. {crossDomain:true}

//	$.get(`${API_URL}${PEOPLE_URL.replace(':id', 2)}`, {crossDomain:true})

// Otra forma de poner la linea anterior es la siguiente
const LukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossDomain:true}

const onPeopleResponse = function (persona) {
	console.log(`Hola yo soy ${persona.name}`)
}

$.get(LukeUrl, opts, onPeopleResponse)


// Por ultimo colocamos nuestro callback como tercer parámetro (onPeopleResponse)
//callback: Una funcion que se va a ejecutar en algun futuro pero no sabemos cuando, $.get() se va a encargar de ejecutarla cuando termine el request. Tambien puede suceder que el request nunca se ejecute y la funcion nunca se llame, pero lo que tenemos que entender es que la funcion $.get() puede ejecutarse o no.


// Otra forma de ejecutar la funcion $.get() es la siguiente

//$.get(LukeUrl, opts, function(persona) {
//	console.log(arguments)
//	console.log(`Hola yo soy ${persona.name}`)
//})

//Ahora vamos a hacer una funcion para obtener multiples personajes

function obtenerPersonaje(id) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
	$.get(url, opts, onPeopleResponse)
	console.log("Ya terminó la ejecución")
}

// Aqui tenemos un ejemplo del ascincronismo de JS, le mandamos los personajes en un cierto orden y nos lo muestra en otro
// Lo que pasa es que estamos haciendo en un orden las peticiones pero no sabemos cuanto tiempo se va a tardar el servidor en responder nuestras peticiones 

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)