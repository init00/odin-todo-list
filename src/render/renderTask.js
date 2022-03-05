import listsObj from "../factory/listsFactory";
import taskModal from '../taskModals/modifyTaskModal';
import viewSvg from '../assets/view.svg';
import deleteSvg from '../assets/delete.svg';
import editSvg from '../assets/edit.svg';
import bulletSvg from '../assets/listitem.svg';
import viewTaskModal from '../taskModals/viewTaskModal';

function getTaskHtml(taskId, title, dueDate, priority)
    {
        return `
            <div class='task-header' id='task-header-${taskId}'>
                <img src=${bulletSvg} class='bullet-item' title='Do it with Love!'/>
                <div class='task-title task-heading' type='button'>${title}</div>
                <div class='due-date task-heading' title='Due Date'>${dueDate}</div>
                <div class='priority type='button' title='Priority' task-heading'>${priority}</div>
                <div class='edit-task'>
                    <img class='svg-class' title='View Task' src=${viewSvg} id='view-task-${taskId}'/>
                    <img class='svg-class' title='Edit Task' src=${editSvg} id='modify-task-${taskId}'/>
                    <img class='svg-class' title='Delete Task' src=${deleteSvg} id='delete-task-${taskId}'/>
                </div>
            </div>
        `;
    }

function renderTask(taskObj) {
        const listTaskContainer = document.getElementById(taskObj.listName+'-task-container');
        const uiTaskElement = document.createElement('div');
        uiTaskElement.classList.add('task-card');
        uiTaskElement.innerHTML = getTaskHtml(taskObj.taskId, taskObj.title, taskObj.dueDate, taskObj.priority);
        listTaskContainer.append(uiTaskElement);
        const listObj = listsObj.lists.filter(obj => obj.name == taskObj.listName)[0];
        document.getElementById(`delete-task-${taskObj.taskId}`).addEventListener('click', event => deleteTaskHandler(listObj, taskObj));
        document.getElementById(`modify-task-${taskObj.taskId}`).addEventListener('click', event => editTaskHandler(listObj, taskObj));
        document.getElementById(`view-task-${taskObj.taskId}`).addEventListener('click', event => viewTaskHandler(taskObj));
}

function deleteTaskHandler(listObj, taskObj) {
    console.log('Inside delete task handler');
    const taskHeader = document.getElementById(`task-header-${taskObj.taskId}`);
    taskHeader.remove();
    listObj.deleteTask(taskObj.taskId);
}

function viewTaskHandler(taskObj) {
    const modalElem = document.getElementById('modal');
    modalElem.appendChild(viewTaskModal(taskObj));
    modalElem.style.display = 'block';
    
    const closeTaskBtn = document.getElementById('close-view-task');
    closeTaskBtn.addEventListener('click', event => {
        modalElem.innerHTML = '';
        modalElem.style.display = 'none';
    });
}

function editTaskHandler(listObj, taskObj) {
    const modalElem = document.getElementById('modal');
    modalElem.appendChild(taskModal());
    modalElem.style.display = 'block';

    const taskForm = document.getElementById('task-form');
    taskForm.title.value = taskObj.title;
    taskForm.description.value = taskObj.description;
    taskForm.notes.value = taskObj.notes;
    taskForm.dueDate.value = taskObj.dueDate;
    taskForm.priority.value = taskObj.priority;
    
    const saveTaskBtn = document.getElementById('save-edit-task');
    const cancelTaskBtn = document.getElementById('cancel-edit-task');


    saveTaskBtn.addEventListener('click', event => {
        //change task obj properties
        console.log('Inside edit task handler');
        const formData = new FormData(taskForm);
        taskObj.title = formData.get('title');
        taskObj.description = formData.get('description');
        taskObj.dueDate = formData.get('dueDate');
        taskObj.priority = formData.get('priority');
        taskObj.notes = formData.get('notes');
        const prevTaskId = taskObj.taskId;
        taskObj.taskId = (taskObj.listName+taskObj.title).replaceAll(" ","");

        //create new DOM element with the new task properties
        const newNode = document.createElement('div');
        newNode.classList.add('task-card');
        newNode.innerHTML = getTaskHtml(taskObj.taskId, taskObj.title, taskObj.dueDate, taskObj.priority);
        console.log('prev and new task id are: ', prevTaskId, taskObj.taskId);
        //render the changes by replacing the old node with new node in DOM
        const oldNode = document.getElementById('task-header-'+prevTaskId);
        oldNode.parentNode.replaceChild(newNode, oldNode);

        document.getElementById(`delete-task-${taskObj.taskId}`).addEventListener('click', event => deleteTaskHandler(listObj, taskObj));
        document.getElementById(`modify-task-${taskObj.taskId}`).addEventListener('click', event => editTaskHandler(listObj, taskObj));
        document.getElementById(`view-task-${taskObj.taskId}`).addEventListener('click', event => viewTaskHandler(taskObj));
        modalElem.innerHTML = '';
        modalElem.style.display = 'none';
    });

    cancelTaskBtn.addEventListener('click', event => {
        console.log('Cancel edit is called');
        modalElem.innerHTML = '';
        modalElem.style.display = 'none';
    });
}

export default renderTask;