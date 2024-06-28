const title = document.getElementById("title");
const button = document.querySelector("#changeTitleBtn");
button.addEventListener('click', () => {
    title.textContent = "Title Changed!"
});

const list = document.getElementById("list");
const addItemBtn = document.getElementById("addItemBtn");
addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = "New Item";
    list.appendChild(newItem);
})

const text = document.getElementById("text")
const changeStyleBtn = document.getElementById("changeStyleBtn")
changeStyleBtn.addEventListener('click', () => {
    text.style.color = "blue";
    text.style.fontSize = "20px";
});