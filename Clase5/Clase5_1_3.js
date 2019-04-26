// Vamos a ver como hacer que las peticiones sean mostradas en el orden en el que fueron hechas

///////////////////////////// Promesas /////////////////////////////

/* Las prmesas son valores que todavía no conocemos, sabemos que ahí va a haber un valor cuando la acción ascinrona se complete.
Las promesas tienen tres estados
1) Estado de Pending:
	Cuando creamos una promesa, ésta va a estar en estado pending, si la promesa se resuelve exitosamente, pasa al siguiente estado.

2) Estado fulfilled: La promesa pasa a estar en este estado si se reuelve exitosamente

3) Estado rejected: La promesa pasa a este estado si no se resuelve correctamente

Las promesas no siempre trabajan de manera ascincron.
Las promesas pueden trabajar de manera sincrona.
Para obtener el valor de la resolución de la promesa podemos llamar a la función .then(val => ...)
Dicha función recibe como parámetro otra función y ésta debeulve el valor que nosotros esperabamos, en cambio si secede algun error al resolver la promesa podemos hacer un .catch(err => ...) ésta recibe otra función la cual debuelve el error que sucedió.

Sintaxis:
new Promise(function(resolve, reject){
	...
}).then(valor => {
	// Esto se ejecuta si la promesa fue exitosa y se pasa como parametro valor
}).catch(err => {
	// Esto se ejectuta si la promesa no fue exitosa y se pasa como parametro err
})

Como podemos ver recibe dos funciones, resolve que se manda a llamar si la promesa fue exitosa y reject en el caso contrario.

Otra cosa importante de las promesas es que después de llegar al estado de fulfilled podemos retornar otra promesa dentro del .then() y de esta manera encadenandolas de manera asicrona y cada una de ellas puede ser rechazada o resuelta terminando en una nueva respuesta que terminará en el estado de fullfilled
*/

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

 
obtenerPersonaje(1)
	// Si todo salio bien nos llega el personaje que se lo pasamos como argumento a la funcion resolve bajo el nombre de data

	// Le paso como argumento el objeto que me devolvio la funcion get a partir de la peticion que hice al servidor
	.then(function (personaje) {
		console.log(arguments)	// Me muestra todos los argumento del objeto
		console.log(`El personaje 1 es ${personaje.name}`)	// Me muestra el atributo name del objeto que estoy recibiendo como argumeto
		return obtenerPersonaje(2)
	}).then(function (personaje) {
		console.log(`El personaje 2 es ${personaje.name}`)
	})
	// Si algo sale mal nos llega el id que lo mandamos como argumento en la funcion regect
	// .catch(function (id) {
	// })
	// Tambien podemos pasarle otra funcion como parametro definida en otra parte del script
	
	.catch(onError) 
 