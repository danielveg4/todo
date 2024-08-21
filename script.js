const inputElement = document.getElementById('task-input');
const listElement = document.getElementById('task-list');
const taskLefttElement = document.getElementById('task-left');
const allButtonElement = document.getElementById('all-task-button');
const activeButtonElement = document.getElementById('active-task-button');
const completedButtonElement = document.getElementById('completed-task-button');
const clearButtonElement = document.getElementById('clear-task-button');
            
const LS = localStorage;

let allTask = []

let filterActive = 'All';

//función para contar las tareas que quedan sin completar
const countTaskLeft = () => {
    console.log(allTask.length)
    if (allTask.length === 0) {
        taskLefttElement.textContent = 'No tasks';
        return;
    }

    const itemsLeft = allTask.filter(task => !task.completed).length;

    if (itemsLeft ==0 ) {
        taskLefttElement.textContent = 'All task completed';
    } else {
        taskLefttElement.textContent = `${itemsLeft} items left`;
    }

}

// filtrar tareas

const getFilteredTask = () => {
    if (filterActive === 'All') return [...allTask];
    if (filterActive === 'Active') return allTask.filter(task => !task.completed);
    if (filterActive === 'Completed') return allTask.filter(task => task.completed);
}

// almacenamiento*

const setTaskInLocalStorage = () => {
    const jsonTask = JSON.stringify(allTask);
    LS.setItem('tasks', jsonTask);
}
            
// pintar las tareas en el DOM: bucle y fragmento para pintar las tareas añadidas en el DOM
const renderTask = () => {
    const fragmentTask = document.createDocumentFragment();

    const filteredTask = getFilteredTask();
            
    filteredTask.forEach(task => {
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
    countTaskLeft();
    setTaskInLocalStorage();
}

// almacenamiento local

const getTaskFromLocalStorage = () => {
    const task = LS.getItem('tasks');
    countTaskLeft();
    if (!task) return;

    const localStorageTask = JSON.parse(task);
    allTask = localStorageTask;
    renderTask();
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

const deleteAllCompletedTask = () => {
    allTask = allTask.filter(task => !task.completed);
    renderTask()
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


getTaskFromLocalStorage();
countTaskLeft();    

// botones del filtro:

allButtonElement.addEventListener('click', () => {
    filterActive = 'All';
    renderTask();
});

activeButtonElement.addEventListener('click', () => {
    filterActive = 'Active';
    renderTask();
});

completedButtonElement.addEventListener('click', () => {
    filterActive = 'Completed';
    renderTask();
});

inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask(event);
    }
})

clearButtonElement.addEventListener('click', deleteAllCompletedTask);

