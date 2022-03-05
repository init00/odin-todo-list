function viewTaskModal(task) {
    const divElem = document.createElement('div');
    divElem.classList.add("task-modal");
    const form = `\
            <form action="#" id="task-form" class="task-form">\
                Title:<input type="text" name="title" id="task-title" value=${task.title} disabled/><br>\
                Description: <textarea name="description" class="textarea" id="task-description" cols="10" rows="5" disabled>${task.description}</textarea><br>\
                Notes: <textarea name="notes" id="task-notes" cols="30" rows="10" disabled>${task.notes}</textarea><br>\
                <label for="priority">Priority:</label>\
                <input type="text" name="priority" id="task-priority" value=${task.title} disabled/><br>\
                <label for="dueDate">Due Date:</label>\
                <input type="date" name="dueDate" id="task-date" value=${task.dueDate} disabled /><br>\
                <button type="button" id="close-view-task">Close</button>\
            </form>\
        `;
    divElem.innerHTML = form;
    return divElem;
}

export default viewTaskModal;