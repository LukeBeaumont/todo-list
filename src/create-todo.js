import { librarian } from "./librarian";
import {
  highlightSelectedProject,
  clearHighlightedProject,
  renderTodos,
} from "./dom-stuff";

function CreateTodo(title, description, due, priority) {
  return {
    title: title,
    description: description,
    due: due,
    priority: priority,
  };
}

function handleNewTodo() {
  let todoTitle = document.querySelector("#todo-title").value;
  let todoDescription = document.querySelector("#todo-description").value;
  let todoDue = document.querySelector("#todo-due").value;
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
    clearHighlightedProject();
    //checks if project exists yet and has been selected
    if (librarian.projectNumber) {
      pushTodoToProject(handleNewTodo());
      renderTodos(librarian.projectArray[librarian.projectNumber].toDos);
      highlightSelectedProject(librarian.projectNumber);
      clearTodoForm();
    } else alert("Please select a project");
  });
}

export function handleDropdown() {
  const dropBtn = document.querySelector(".drop-btn");

  dropBtn.addEventListener("click", (e) => {
    e.preventDefault();
    displayPickProjectList(librarian.projectArray);
    displaySelectedProject();
    toggleDropdown();
    setSelectedProjectNumber();
  });
}

function toggleDropdown() {
  const myDropdown = document.getElementById("myDropdown");
  myDropdown.classList.toggle("show-dropdown");
}
// the next two functions set the selected project name on the create todo form prior to submit/
function inputProjectText(project) {
  const projectName = document.querySelector(".which-project");
  projectName.textContent = `Project: ${project}`;
}

function displaySelectedProject() {
  let list = document.querySelectorAll("a");
  list.forEach((item) =>
    item.addEventListener("click", (e) => {
      inputProjectText(e.target.textContent);
      toggleDropdown();
    })
  );
}

function setSelectedProjectNumber() {
  let list = document.querySelectorAll("a");
  list.forEach((item) =>
    item.addEventListener("click", (e) => {
      librarian.projectNumber = e.target.id;
      console.log(librarian.projectNumber);
    })
  );
}

function pushTodoToProject(toDo) {
  librarian.projectArray[librarian.projectNumber].toDos.push(toDo);
}

//creates project list element and adds to list
function displayPickProjectList(mainArr) {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.replaceChildren(); // clears list before rendering
  for (let i = 0; i < mainArr.length; i++) {
    const listItem = document.createElement("a");
    listItem.textContent = `${mainArr[i].title}`;
    listItem.setAttribute("id", i);
    dropdownContent.appendChild(listItem);
  }
}

export function handleTodoCloseBtn() {
  const todoCloseBtn = document.getElementById("todo-close-btn");
  todoCloseBtn.addEventListener("click", () => {
    clearTodoForm();
  });
}

function clearTodoForm() {
  const addTodoForm = document.querySelector(".add-todo");
  addTodoForm.style.display = "none";
  document.querySelector("#todo-title").value = "";
  document.querySelector("#todo-description").value = "";
  document.querySelector("#todo-due").value = "";
  //reset radio button here!
}

export function showAddTodo() {
  const addTodoBtn = document.querySelector(".add-todo-btn");
  const addTodo = document.querySelector(".add-todo");

  addTodoBtn.addEventListener("click", () => {
    addTodo.style.display = "flex";
  });
}
