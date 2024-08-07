// Constructor de la clase Tarea
class Tarea {
    constructor(descripcion, estado) {
        this.descripcion = descripcion;
        this.estado = estado; 
    }
}

// Lista de tareas inicializada como un arreglo vacío
let listaDeTareas = [];


// Función para agregar una nueva tarea
function agregarTarea(descripcion,estado) {
    const nuevaTarea = new Tarea(descripcion,estado);
    listaDeTareas.push(nuevaTarea);
    console.log(`Tarea "${descripcion}" agregada exitosamente.`);
    console.log(`estado ${estado}`);
    actualizarTablaTareas();
}

// Función para actualizar la tabla de Tareas
function actualizarTablaTareas() {
    let tablaTareas = document.getElementById('tablaTarea');
    // Limpiar tabla antes de actualizar
    tablaTareas.innerHTML = ''; 
    let indice=0;
    listaDeTareas.forEach((tarea) => {
        let row = tablaTareas.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = tarea.descripcion;
        cell2.innerHTML = `<b id="estado${indice}">${tarea.estado}</b>`;
        // creacion boton check acción cambio estado completar tarea
        if(tarea.estado === 'pendiente'){
            cell3.innerHTML = `<button type="button" class="btn btn-warning" onclick="marcarTareaCompletada(${indice})" title="Marcar Tarea Completada"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
            </svg></button>`;
        }else{
            cell3.innerHTML = `<button type="button" class="btn btn-success" onclick="marcarTareaPendiente(${indice})" title="Marcar Tarea Pendiente"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
            </svg></button>`;
        }
        indice +=1; 
    });
}


// Función para actualizar la tabla de Tareas
function mostrarTareasFiltradas(tareasFiltradas) {
    let tablaTareas = document.getElementById('tablaTarea');
    // Limpiar tabla antes de actualizar
    tablaTareas.innerHTML = ''; 
    let indice=0;
    tareasFiltradas.forEach((tarea) => {
        let row = tablaTareas.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = tarea.descripcion;
        cell2.innerHTML = `<b id="estado${indice}">${tarea.estado}</b>`;
        // creacion boton check acción cambio estado completar tarea
        if(tarea.estado === 'pendiente'){
            cell3.innerHTML = `<button type="button" class="btn btn-warning" onclick="marcarTareaCompletada(${indice})" title="Marcar Tarea Completada"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
            </svg></button>`;
        }else{
            cell3.innerHTML = `<button type="button" class="btn btn-success" onclick="marcarTareaPendiente(${indice})" title="Marcar Tarea Pendiente"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
            </svg></button>`;
        }       
    indice +=1; 
    });
}

// Función para marcar una tarea como completada
function marcarTareaCompletada(indice) {
    if (indice >= 0 && indice < listaDeTareas.length) {
        listaDeTareas[indice].estado = 'completada';
        console.log(`Tarea "${listaDeTareas[indice].descripcion}" marcada como completada.`);
        console.log(listaDeTareas);
        actualizarTablaTareas() ;
    } else {
        console.log('Índice inválido. Por favor, proporciona un índice de tarea válido.');
    }
}

// Función para marcar una tarea como pendiente
function marcarTareaPendiente(indice) {
    if (indice >= 0 && indice < listaDeTareas.length) {
        listaDeTareas[indice].estado = 'pendiente';
        console.log(`Tarea "${listaDeTareas[indice].descripcion}" marcada como pendiente.`);
        console.log(listaDeTareas);
        actualizarTablaTareas() ;
    } else {
        alert('Índice inválido. Por favor, proporciona un índice de tarea válido.');
    }
}

// Función para filtrar tareas por estado
function filtrarTareasPorEstado(estado) {
    const tareasFiltradas = listaDeTareas.filter(tarea => tarea.estado === estado);
    console.log(`Tareas con estado "${estado}":`);
    // mostrar tareas filtradas por consola
    tareasFiltradas.forEach((tarea, indice) => {
        console.log(`${indice + 1}. ${tarea.descripcion} (${tarea.estado})`);
    });
   return mostrarTareasFiltradas(tareasFiltradas);
}

// Función para mostrar el número total de tareas en consola
function mostrarNumeroTotalDeTareas() {
    console.log(`Número total de tareas: ${listaDeTareas.length}`);
    return listaDeTareas.length;
}

// Evento para manejar el formulario de Tareas
document.getElementById('tareaForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let tarea = document.getElementById('nuevaTarea').value;
    let estado = 'pendiente' // se inicializa estado en pendiente 
    agregarTarea(tarea,estado);
    // Mostrar número total de tareas
    mostrarNumeroTotalDeTareas();
    this.reset();
});

// Evento para manejar el botón tarea completada
document.getElementById('tareasRealizadas').addEventListener('click', function () {
    filtrarTareasPorEstado('completada');
});

// Evento para manejar el botón tarea pendiente
document.getElementById('TareasPendientes').addEventListener('click', function () {
    filtrarTareasPorEstado('pendiente');
});