function taskModal() {
    const divElem = document.createElement('div');
    divElem.classList.add("task-modal");
    const form = '\
            <form action="#" id="task-form" class="task-form">\
                Title:<input type="text" name="title" id="task-title" required/><br>\
                Description: <textarea name="description" class="textarea" id="task-description" cols="10" rows="5"></textarea><br>\
                Notes: <textarea name="notes" id="task-notes" cols="30" rows="10"></textarea><br>\
                <label for="priority">Priority:</label>\
                <select name="priority" id="task-priority">\
                    <option value="P0">P0</option>\
                    <option value="P1">P1</option>\
                    <option value="P2">P2</option>\
                    <option value="P3">P3</option>\
                </select><br>\
                <label for="dueDate">Due Date:</label>\
                <input type="date" name="dueDate" id="task-date" required><br>\
                <button type="button" id="add-task">Save task</button>\
                <button type="button" id="cancel-task">Cancel</button>\
            </form>\
        ';
    divElem.innerHTML = form;
    return divElem;
}

export default taskModal;