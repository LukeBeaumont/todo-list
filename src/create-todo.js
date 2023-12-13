import { librarian } from "./librarian";

function CreateTodo(title, description, due, priority) {
  return {
    title: title,
    description: description,
    dueDate: due,
    priority: priority,
  };
}

export function handleNewTodo() {
  let todoTitle = document.querySelector("#todo-title").value;
  let todoDescription = document.querySelector("#todo-description").value;
  let todoDue = document.querySelector("#due").value;
  //  \/needed for radio button selection\/
  const myForm = document.querySelector(".form");
  let selectedRadioBtn = myForm.querySelector(
    "input[type='radio'][name=priority]:checked"
  ).value;

  const toDo = CreateTodo(
    todoTitle,
    todoDescription,
    todoDue,
    selectedRadioBtn
  );
  console.log(toDo);
  return toDo;
}

export function handleTodoSubmit() {
  const addTodoBtn = document.getElementById("submit-todo");
  addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleNewTodo();
    //push todo to correct project here
  });
}

export function handleDropdown() {
  const dropBtn = document.querySelector(".drop-btn");
  const myDropdown = document.getElementById("myDropdown");

  dropBtn.addEventListener("click", (e) => {
    e.preventDefault();
    displayPickProjectList(librarian.projectArray);
    displaySelectedProject();
    myDropdown.classList.toggle("show-dropdown");
  });
}

function inputProjectText(project) {
  const projectName = document.querySelector(".which-project");
  projectName.textContent = `Project: ${project}`;
}

function displaySelectedProject() {
  let list = document.querySelectorAll("a");
  list.forEach((item) =>
    item.addEventListener("click", (e) =>
      inputProjectText(e.target.textContent)
    )
  );
}
//creates elements and adds to list
function displayPickProjectList(mainArr) {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.replaceChildren(); // clears list before rendering
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
