const inputElement = document.getElementById('task-input');
const listElement = document.getElementById('task-list');
const taskLefttElement = document.getElementById('task-left');
const allButtonElement = document.getElementById('all-task-button');
const activeButtonElement = document.getElementById('active-task-button');
const completedButtonElement = document.getElementById('completed-task-button');
const clearButtonElement = document.getElementById('clear-task-button');
            
            
let allTask = [
    {
    id: Date.now(), // referencia de id para que localice en función del momento de publicación
    taskName: 'Make a todo app',
    completed: false
    }
]
            
// pintar las tareas en el DOM: bucle y fragmento para pintar las tareas añadidas en el DOM
const renderTask = () => {
    const fragmentTask = document.createDocumentFragment();
            
    allTask.forEach(task => {
        const newDiv = document.createElement('div');

        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.id = task.id;
        newCheckbox.checked = task.completed;
        newCheckbox.dataset.id = task.id;

        const newLabel = document.createElement('label');
        newLabel.htmlFor = task.id;
        newLabel.textContent = task.taskName;

        const newButtonDelete = document.createElement('button');
        newButtonDelete.textContent = 'X';

        //botón para eliminar tareas:
        newButtonDelete.addEventListener('click', () => deleteTask(task.id));

        // para completar:
        newCheckbox.addEventListener('change', () => completedTask(task.id))

        newDiv.append(newCheckbox, newLabel, newButtonDelete);
        fragmentTask.append(newDiv);
        }   
    )
            
    listElement.innerHTML = '';
    listElement.append(fragmentTask);
}

            
// añadir tareas: check, lo añade al objeto y luego llama a la función para renderizar
const addTask = (event) => {
    const newTask = {
        id: Date.now(),
        taskName: event.target.value,
        completed: false
    }
    allTask.push(newTask);
    renderTask(allTask);
    event.target.value = '';
}

// función para borrar tareas

const deleteTask = (id) => {
    const updatedTask = allTask.filter(task => task.id !== id);
    allTask = updatedTask;
    renderTask();
}

// completar tareas

const completedTask = (id) => {
    allTask.forEach(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    })
    renderTask();
}
            



inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask(event);
    }
})