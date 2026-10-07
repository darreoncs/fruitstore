const wrapper = document.getElementById("wrapper");

const fruits = [
    {
        name: "apple",
        price: 2.50
    },
    {
        name: "banana",
        price: 1.20
    },
    {
        name: "orange",
        price: 3.00
    }

];


function render(){
    wrapper.innerHTML = ""; // Clear the wrapper before re-rendering

    fruits.forEach((fruit, idx) => {
        const ele = document.createElement("div");
        const name = document.createElement("h3");
        const price = document.createElement("p");
        const editButton = document.createElement("button");
        const addButton = document.createElement("button");

    const deleteButton = document.createElement("button");

    name.innerHTML = fruit.name;
    price.innerHTML = fruit.price;
    deleteButton.innerHTML = "X";
    editButton.innerHTML = "Edit";
    addButton.innerHTML = "+"

    deleteButton.addEventListener("click", () => {
        fruits.splice(idx,1);
        render();
    })

    editButton.addEventListener("click", () => {
    });

    addButton.addEventListener("click", () => {
        const oldFruit = fruits[idx];
        oldFruit.price += 1.00;
        render();
    });

    ele.appendChild(name);
    ele.appendChild(price);
    ele.appendChild(editButton);
    ele.appendChild(deleteButton);
    ele.appendChild(addButton);

    wrapper.appendChild(ele);
})};

render();