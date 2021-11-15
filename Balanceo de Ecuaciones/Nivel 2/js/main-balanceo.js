const tareas = document.getElementById('tareas');
const tareasCompletadas = document.getElementById('tareasCompletadas');
const listaTareas = Sortable.create(tareas, {
	group: {
		name: "lista-tareas",
		pull: true,
		put: true
	},
	animation: 350,
	easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
	handle: ".fas",
	filter: ".titulo",
	// ghostClass: "active",
	chosenClass: "active",
	//dragClass: "invisible"
	store: {
		set: function(sortable){
			const orden = sortable.toArray()
			//console.log(orden)
			localStorage.setItem('lista-tareas', orden.join('|'));
		},

		get: function(){
			const orden = localStorage.getItem('lista-tareas');
			return orden ? orden.split('|') : [];
		}
	},

	// onChoose: (evento) => {
	// 	console.log('Se ha seleccionado un elemento')
	// },
	// onUnchoose: (evento) => { console.log('Se ha deseleccionado un elemento') },
	// onStart: (evento) => { console.log('Se inicio el drag and drop') },
	// onEnd: (evento) => { console.log('Finalizo el drag and drop') },
	// onAdd: (evento) => { console.log('Se agrego un elemento a la lista') },
	// onRemove: (evento) => { console.log('Se elimino un elemento a la lista') },
	// onUpdate: (evento) => { console.log('Se actualizo la lista') },
	// onFilter: (evento) => { console.log('Se intento mover un elemento filtrado') },
	// onMove: (evento) => { console.log('Se movio un elemento') },
	//onChange: (evento) => { 	 },
});

const listaTareasCompletadas = Sortable.create(tareasCompletadas, {
	group: {
		name: "lista-tareas",
		pull: true,
		put: true
	},
	animation: 350,
	easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
	handle: ".fas",
	filter: ".titulo",
	// ghostClass: "active",
	chosenClass: "active",
	//dragClass: "invisible",
	store: {
		set: function(sortable){
			const orden = sortable.toArray()
			respuesta = Check_Values(orden)
			localStorage.setItem('lista-tareas-completadas', orden.join('|'));
		},

		get: function(){
			const orden = localStorage.getItem('lista-tareas-completadas');
			return orden ? orden.split('|') : [];
		}
	},
});


//VERIFICADOR DE RESPUESTA
var respuesta = false
function Check_Values(orden){
	const real_values = ["S","O","O","O"]
	for (var i = 0; i < real_values.length; ++i) {
		if (real_values[i] != orden[i]) return false
		console.log(orden);
	}
	return true
}

const btnboton = document.getElementById('boton');
btnboton.addEventListener('click', () => {     /*propiedades del boton verificar*/
	if (respuesta){
		window.alert('Felicitaciónes')
		var btnboton2 = document.getElementById('boton2');
		if (respuesta) {
		boton2.disabled = false;
		}
	}
	else{
		window.alert('Hay algo mal')
		boton2.disabled = true;
	}
});


//PARA BLOQUEAR VENTANA DE TAREAS COMPLETADAS
/*const estado = listaTareasCompletadas.option('disabled');
listaTareasCompletadas.option('disabled', !estado);

if(estado){
	btnboton.textContent = "Verificar Respuesta";

} else {
	btnboton.textContent = "Vuelve a Intentarlo";
	alert('Bien Hecho');
}
});*/
