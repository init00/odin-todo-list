import renderList from '../render/renderList';
import updateLocalStorageTask from '../localStorageHelper/updateLocalStorageTasks';

const listProto = {
    addTask(taskObj) {
        this.tasks.push(taskObj);
        //update local storage
        updateLocalStorageTask(this.name, this.tasks);

    },
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.taskId != taskId);
        //update local storage
        updateLocalStorageTask(this.name, this.tasks);
    },
    editTask(taskId, newTask) {
        for(let ii=0; ii<this.tasks.length; ii++) {
            const curTaskObj = this.tasks[ii];
            if(curTaskObj.taskId == taskId) {
                this.tasks[ii] = newTask;
            }
        }
        //update local storage
        updateLocalStorageTask(this.name, this.tasks);
    },
    showList() {
        console.log("List object : ", this);
        renderList(this);
    }
}

export default (listname, tasksArr=[]) => {
    const tasks = tasksArr;
    const name = listname;
    const listObj = Object.create(listProto);
    Object.assign(listObj, {tasks, name});
    console.log('List Object Created: ', listObj);
    return listObj;
}
