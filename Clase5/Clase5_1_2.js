// Vamos a ver como hacer que las peticiones sean mostradas en el orden en el que fueron hechas

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 5)}`
const opts = {crossDomain:true}

const onPeopleResponse = function (persona) {
	console.log(`Hola yo soy ${persona.name}`)
}


function obtenerPersonaje(id, callback) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
	
	$.get(url, opts, function (persona) {
		console.log(`Hola yo soy ${persona.name}`)
		if (callback) {
			callback()
		}
	})
}

// Al llamar a las funciones de la siguiente manera las llamamos en serie y no en paralelo, lo cual nos garantiza que vamos a recibir la informacion en el orden en el que estamos haciendo las peticiones

// Al hacerlo de esta manera resulta complicado de leer y es codigo muy sucio
obtenerPersonaje(1, function () {
	obtenerPersonaje(2, function() {
		obtenerPersonaje(3, function() {
			obtenerPersonaje(4)
		})
	})
})
