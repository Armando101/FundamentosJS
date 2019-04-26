const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain:true}

const onPeopleResponse = function (persona) {
	console.log(`Hola yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
		// Data es un objeto, es el objeto que debuelve la funcion get al hacer la peticion
		$.get(url, opts, function (data) {
			// La funcion resolve no se va a ejecutar hasta que el get sea exitoso
			// Le paso como parametro todo el objeto
			resolve(data)
		}).fail(()=> reject(id))
	})
}

function onError(id) {
	console.log(`Sucedió un error con el personaje ${id}`)
}

// Indicamos que la funcion va a ser ascincrona
async function obtenerPersonajes() {
	var ids = [1, 2, 3, 4, 5, 6, 7]
	var promesas = ids.map(id => obtenerPersonaje(id))

	// El codigo se va a detener en el await y va a continuar hasta que todas las promesas que recibe Promise.all sean resueltas
	try {
		var personajes = await Promise.all(promesas)
		console.log(personajes)
	} catch(id) {
		onError(id)
	}
}

obtenerPersonajes()

	// El metodo Promise.all recibe un array de promesas
//	Promise
//		.all(promesas)
//		.then(personajes => console.log(personajes))
//		.catch(onError)	

