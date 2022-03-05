function updateLocalStorageTasks(listName, tasksArr) {
    const storedLists = JSON.parse(localStorage.getItem('lists'));

    for(let ii=0; ii<storedLists.length; ii++) {
        if(storedLists[ii].name == listName) {
            storedLists[ii].tasks = tasksArr;
        } 
    }
    localStorage.setItem('lists', JSON.stringify(storedLists));
}

export default updateLocalStorageTasks;