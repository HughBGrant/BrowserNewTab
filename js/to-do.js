const toDoForm = document.querySelector(".to-do-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".to-do-list");
const TODOS_KEY = "todos";
let toDos = [];

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
    const li = event.currentTarget.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
};

const paintToDo = (newToDo) => {
    const li = document.createElement("li");
    li.id = newToDo.id;
    toDoList.append(li);

    const span = document.createElement("span");
    span.insertAdjacentHTML("beforeend", newToDo.text);
    span.addEventListener("click", () => {
        if (span.classList.contains("cpl")) {
            span.classList.remove("cpl");
        } else {
            span.classList.add("cpl");
        }
    });

    const button = document.createElement("button");
    button.insertAdjacentHTML("beforeend", '<i class="fa-solid fa-trash"></i>');
    button.addEventListener("click", deleteToDo);
    li.append(span, button);
};

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
