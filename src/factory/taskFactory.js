import renderTask from '../render/renderTask';

const taskProto = {
    showTask() { 
        renderTask(this);
    },
}

function Task(title, description, dueDate, priority, notes, listName) {

    const taskId = (listName+title).replaceAll(" ","");
    return Object.assign(Object.create(taskProto), {taskId, listName, title, description,
                                                    dueDate, priority, notes});

}

export default Task;