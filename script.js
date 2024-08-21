const inputElement = document.getElementById('task-input');
const listElement = document.getElementById('task-list');
const taskLefttElement = document.getElementById('task-left');
const allButtonElement = document.getElementById('all-task-button');
const activeButtonElement = document.getElementById('active-task-button');
const completedButtonElement = document.getElementById('completed-task-button');
const clearButtonElement = document.getElementById('clear-task-button');
            
            
const allTask = [
    {
    id: Date.now(), // referencia de id para que localice en función del momento de publicación
    taskName: 'Make a todo app',
    completed: false
    }
]
            
// renderización: bucle y fragmento para pintar las tareas añadidas en el DOM
const renderTask = () => {
    const fragmentTask = document.createDocumentFragment();
            
    allTask.forEach(task => {
        const newCheckbox = document.createElement('button');
        newCheckbox.textContent = 'X';
        const newLi = document.createElement('li');
        newLi.textContent = task.taskName;
        newLi.id = task.id;
        newLi.append(newCheckbox);
        fragmentTask.append(newLi);
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
    renderTask()
}
            
// en construcción: selección de tareas, filtros, removeAll y mostrar las que quedan.
  
inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask(event);
        console.log(allTask)
    }
})