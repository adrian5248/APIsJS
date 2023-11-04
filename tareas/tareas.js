const inputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea = document.querySelector('#btnTarea');

let listaTareas = [];

function createTarea(message, color = 'primary'){
    const tarea = document.createElement('div');
    tarea.classList.add('alert');
    tarea.classList.add('alert-' + color);
    tarea.setAttribute('role', 'alert');
    let buttons = '<div>'
    buttons += '<button class="btn red"></button>';
    buttons += '<button class="btn yellow"></button>';
    buttons += '<button class="btn green"></button>';
    buttons += '<button class="btn x">X</button>';
    buttons += '</div>'
    tarea.innerHTML = `<div>${ message }</div>${ buttons }`;
    return tarea;
}

function addTarea(){
    const data = inputTarea.value;
    if(data){
        listaTareas.push({"tarea": data, "status": "blue"});
        // Guardar en LocalStorage
        localStorage.setItem("tareas", JSON.stringify(listaTareas));
        const tarea = createTarea(data);
        tareas.appendChild(tarea);
        inputTarea.value = '';
    }
}

function getButton (e) {
    if(e.target.classList.contains('btn')){
        const tareaActual = e.target.parentElement.parentElement;
        const dato = tareaActual.querySelector('div').innerHTML;
        // Buscar en lista
        const idxT = listaTareas
                        .findIndex(item => item.tarea === dato)
        const action = e.target.classList[1];
        switch(action){
            case 'red':
                tareaActual.classList = [];
                tareaActual.classList.add('alert', 'alert-danger');
                listaTareas[idxT].status = 'danger';
                break;
            case 'yellow':
                tareaActual.classList = [];
                tareaActual.classList.add('alert', 'alert-warning');
                listaTareas[idxT].status = 'warning';
                break;
            case 'green':
                tareaActual.classList = [];
                tareaActual.classList.add('alert', 'alert-success');
                listaTareas[idxT].status = 'success';
                break;
            case 'x':
                tareaActual.remove();
                listaTareas.splice(idxT, 1);
                break;
        }
        localStorage.setItem("tareas", JSON.stringify(listaTareas));
    }
}

function leeTareas(){
    if(localStorage.getItem("tareas")){
        listaTareas = localStorage.getItem("tareas");

        listaTareas = JSON.parse(listaTareas)
        listaTareas.forEach(tareaActual => {
            tareas.appendChild(createTarea(tareaActual.tarea, tareaActual.status));
        })
    }
}

leeTareas();


btnTarea.addEventListener('click', addTarea);
tareas.addEventListener('click', getButton);