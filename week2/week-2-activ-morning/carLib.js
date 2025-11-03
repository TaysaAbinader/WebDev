let carArray = [];
let nextID = 1;

function addOne(model, color, age) {
    //Check if all parameters are defined
    if(!model || !color || !age) {
        return false;
    }

    const newCar = {
        id: nextId++, //Assign ID then increment
        model,
        color,
        age
    };

    carArray.push(newCar); //Add new car to array
    return newCar; //Return the added car object
}

function getAll(){
    return carArray;
}

function findById(id) {
    const numericId = Number(id);//Converts ID to number
    const car = carArray.find((item) => item.id === numericId);
    return car || false;//Returns the object or false if object not found
}

function updateOneById(id, updatedData) {
    const car = findById(id);
    if(car) {
        //Update only if data is changed
        if (updatedData.model) {car.model = updatedData.model};
        if (updatedData.color) {car.color = updatedData.color};
        if (updatedData.age) {car.age = updatedData.age;
        return car};
    }
    return false;//Returns false if car is not found
}

function deleteOneById(id) {
    const car = findById(id);
    if (car) {
        const initialLength = carArray.length;
        carArray = carArray.filter((car) => car.id !== Number(id));
        return carArray.length < initialLength; //Returns true
    }
    return false; //Returns false if the car was not found
}

//Testing directly within the script
if (require.main === module) {
    //Add cars
    let result = addOne("Corolla", "Red", 3);
    console.log(result);
    result = addOne("Civic", "Blue", 2);
    console.log(result);

    console.log("gelAll called: ", getAll());

    console.log("findByIdCalled: ", findById());

    console.log("updateOneById called: ", updateOneById(1, {age: 4, color: "Black"}));

    console.log("findById called after item update: ", findById(1));

    console.log("deleteOneById called: ", deleteOneById(1));

    console.log("findById called after item deleted: ", findById(1));
}

const Car = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Car;
