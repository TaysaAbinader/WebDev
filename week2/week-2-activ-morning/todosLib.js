let todoList = [];
let id = 1;

function addItem(task, dueDate){
    if(!task || !dueDate) {
        console.log("Add a task and a due date.");
        return false;
    }
    const newItem = {
        id: id++,
        task,
        completed: false,
        dueDate
    }

    todoList.push(newItem);
    return newItem;

};

function getAllItems(){
    return todoList;
};

function findItemById(id){
    const idToNumber = Number(id);

    const foundItem = todoList.find((item) => item.id === idToNumber);

    return foundItem || false;
};

function updateItemById(id, updatedItem){
    const idToNumber = Number(id);

    const item = todoList.find((item) => item.id === idToNumber);

    if(item){
        if(updatedItem.task) {
            item.task = updatedItem.task;
        }
        if(updatedItem.completed) {
            item.completed = updatedItem.completed;
        }
        if(updatedItem.dueDate) {
            item.dueDate = updatedItem.dueDate;
        }
    }
    return false;
};

function deleteItemById(id){
    const idToNumber = Number(id);
    const deletedItem = todoList.find((item) => item.id === idToNumber);

    if(deletedItem) {
        const initialLength = todoList.length;
        todoList.filter((item) => item.id !== idToNumber);

        return todoList.length < initialLength;
    }
    return false;
};

if (require.main === module) {
    //Add items
    let result = addItem("Do grocery shopping", "28.10.2015");
    console.log(result);
    result = addItem("Do the laundry", "30.10.2015");
    console.log(result);

    console.log("gelAllItems called: ", getAllItems());

    console.log("findByIdCalled: ", findById());

    console.log("updateOneById called: ", updateOneById(1, {age: 4, color: "Black"}));

    console.log("findItemById called after item update: ", findItemById(1));

    console.log("deleteItemById called: ", deleteItemById(1));

    console.log("findById called after item deleted: ", findItemById(1));
}

const Item = {
    getAllItems,
    addItem,
    findItemById,
    updateItemById,
    deleteItemById
};

module.exports = Item;
