import { librarian } from "./librarian";

function CreateTodo(title, description, due, priority) {
  return {
    title: title,
    description: description,
    dueDate: due,
    priority: priority,
  };
}

function handleNewTodo() {
  let todoTitle = document.querySelector("#todo-title").value;
  let todoDescription = document.querySelector("#todo-description").value;
  let todoDue = document.querySelector("#todo-Due").value;

  const toDo = 
}

export function pushTodoToProject(todo) {
  for (let i = 0; i < librarian.mainArr.length; i++) {
    if (i == 1) {
      librarian.mainArr[i].toDos.push(todo);
      console.log(librarian.mainArr[i]);
    }
  }
}

export function handleDropdown() {
  const dropBtn = document.querySelector(".drop-btn");
  const myDropdown = document.getElementById("myDropdown");

  dropBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //Clear list here, needs googling
    displayPickProjectList(librarian.mainArr);
    myDropdown.classList.toggle("show-dropdown");
  });
}
//creates elements and adds to DOM
function displayPickProjectList(mainArr) {
  const dropdownContent = document.querySelector(".dropdown-content");
  for (let i = 0; i < mainArr.length; i++) {
    const listItem = document.createElement("a");
    listItem.textContent = `${mainArr[i].title}`;
    dropdownContent.appendChild(listItem);
  }
}

export function handleTodoCloseBtn() {
  const addTodoForm = document.querySelector(".add-todo");
  const todoCloseBtn = document.getElementById("todo-close-btn");
  todoCloseBtn.addEventListener("click", () => {
    addTodoForm.style.display = "none";
    document.querySelector("#todo-title").value = "";
    document.querySelector("#todo-description").value = "";
    document.querySelector("#due").value = "";
    //CLEAR RADIO BUTTON
  });
}

export function showAddTodo() {
  const addTodoBtn = document.querySelector(".add-todo-btn");
  const addTodo = document.querySelector(".add-todo");

  addTodoBtn.addEventListener("click", () => {
    addTodo.style.display = "flex";
  });
}
