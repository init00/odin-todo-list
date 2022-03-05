function updateLocalStorageLists(newLists) {
    localStorage.setItem('lists', JSON.stringify(newLists));
}

export default updateLocalStorageLists;