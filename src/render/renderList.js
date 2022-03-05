import taskModal from '../taskModals/createTaskModal';
import newSvg from '../assets/add.svg';
import deleteSvg from '../assets/delete.svg';
import Task from '../factory/taskFactory';
import lists from "../factory/listsFactory";

function renderList(listObj) {
    const listSection = document.getElementById('list-section');
    const cardHTML = `
        <div class="list-container" id='${listObj.name}-container'>
            <div class='list-header'>
                <div class='list-card' type='button' id='${listObj.name}'><p class='text-style'>${listObj.name}</p></div>
                <img class='svg-class' title='Add Task' src=${newSvg} id='create-task-${listObj.name}'/>&nbsp;&nbsp;
                <img class='svg-class' title='Delete List' src=${deleteSvg} id='delete-list-${listObj.name}'/>
            </div>
            <div class='task-container' id='${listObj.name}-task-container'>
            </div>
        </div>
        `;

    listSection.insertAdjacentHTML('beforeend', cardHTML);
    listObj.tasks.forEach(task => task.showTask());
    const createTask = document.getElementById(`create-task-${listObj.name}`);
    const deleteList = document.getElementById(`delete-list-${listObj.name}`);

    // console.log("Create and delete tasks: ", createTask, deleteList);
    createTask.addEventListener('click', event => createTaskHandler(listObj));
    deleteList.addEventListener('click', event => deleteListHandler(listObj));
}


function createTaskHandler(listObj) {
    console.log('Create task handler called');
    // const createTaskBtn = document.getElementById(`create-task-${listName}`);
    // createTaskBtn.disabled = true;
    const modalElem = document.getElementById('modal');
    modalElem.appendChild(taskModal());
    modalElem.style.display = 'block';

    const addTaskBtn = document.getElementById('add-task');
    const cancelTaskBtn = document.getElementById('cancel-task');

    addTaskBtn.addEventListener('click', event => {
        const taskForm = document.getElementById('task-form');
        const formData = new FormData(taskForm);
        if(formData.get('title').length == 0) {
            alert('Task title cannot be empty.');
        } else if(formData.get('dueDate').length == 0) {
            alert('Due date cannot be empty.');
        } else {
        const newTask = Task(
            formData.get('title'),
            formData.get('description'),
            formData.get('dueDate'),
            formData.get('priority'),
            formData.get('notes'),
            listObj.name
        );     
        listObj.addTask(newTask);
        modalElem.innerHTML = '';
        newTask.showTask();
        modalElem.style.display = 'none';
        }
    });

    cancelTaskBtn.addEventListener('click', event => {
        modalElem.innerHTML = '';
        createTaskBtn.disabled = false;
        modalElem.style.display = 'none';
    });
}

function deleteListHandler(listObj) {
    console.log('Delete list handler called');
    if(confirm('Are you sure to delete this list?'))
    {   const listContainerElement = document.getElementById(listObj.name+'-container');
        listContainerElement.remove();
        lists.deleteList(listObj.name);
        console.log('After deleting: ', lists);
    }
}

export default renderList;