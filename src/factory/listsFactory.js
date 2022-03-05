import List from './listFactory';
import Task from './taskFactory';
import updateLocalStorageLists from '../localStorageHelper/updateLocalStorageLists';

const listsProto = {
    addList(listname) {
        const newList = List(listname);
        this.lists.push(newList);
        //update local storage
        updateLocalStorageLists(this.lists);
        return newList;
    },
    deleteList(listname) {
        this.lists = this.lists.filter(list => list.name != listname);
        //update local storage
        updateLocalStorageLists(this.lists);
        return this.lists;
    },
    showAll() {
        this.lists.forEach(list => {
            console.log("List object is: ", list);
            list.showList();
        });
    },
    showList(list) {
        list.showList();
    }
}


const lists = (() => {
    let lists = [];
    const storedLists = JSON.parse(localStorage.getItem('lists'));
    
    if(storedLists) {
        console.log('Previously stored lists available.');
        storedLists.forEach(list => {
            //create list objects and push them to lists array
            lists.push(List(list.name, list.tasks));
        });
        //create task objects and push them to tasks array
        for(let ii=0; ii<lists.length; ii++) {
            const curListObj = lists[ii];
            for(let jj=0; jj<curListObj.tasks.length; jj++) {
                const curTaskObj = curListObj.tasks[jj];
                curListObj.tasks[jj] = Task(curTaskObj.title, curTaskObj.description, curTaskObj.dueDate,
                                            curTaskObj.priority, curTaskObj.notes, curTaskObj.listName);
            }
        }

    } else {
        console.log('No previous lists available.')
        lists = [List('Default List')];
        //update local storage
        updateLocalStorageLists(lists);
    }

    const listsObj = Object.create(listsProto);
    return Object.assign(listsObj, {lists});
})();

export default lists;