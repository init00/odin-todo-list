import lists from "./factory/listsFactory";
import "./style.css";

lists.showAll();
showCreateList();

function showListModal(listModalElem) {
    console.log('Inside show modal');
    listModalElem.innerHTML = '\
    <label for="listname" class="text-style">Name:&nbsp;</label>\
    <input type="text" name="listname" id="newlist" required/>\
    <button type="button" id="add-list">Save</button>&nbsp;&nbsp;\
    <button type="button" id="cancel-list">Cancel</button>\
    ';
}

function hideListModal(listModalElem) {
    console.log('Inside hide modal');
    listModalElem.innerHTML = "";
}

function showCreateList() {
    const listModalElem = document.getElementById('list-modal');
    try {
        const createListBtn = document.getElementById('create-list');
        createListBtn.addEventListener('click', event => {
            showListModal(listModalElem);
            const addListBtn = document.getElementById('add-list');
            addListBtn.addEventListener('click', event => {
                const listNameInput = document.getElementById('newlist');
                if(listNameInput.value.length == 0) {
                    alert("List name cannot be empty.");
                }
                else {
                    const list = lists.addList(listNameInput.value);
                    listNameInput.value='';
                    lists.showList(list);
                    hideListModal(listModalElem);
                }
            });
            const cancelListBtn = document.getElementById('cancel-list');
            cancelListBtn.addEventListener('click', event => {
                hideListModal(listModalElem);
            });
        });
    } catch (error) {
        console.log("Error creating the list: ", error);
    }
}