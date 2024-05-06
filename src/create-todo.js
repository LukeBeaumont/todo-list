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

function pushTodoToProject(toDo) {
  librarian.projectArray[librarian.projectNumber].toDos.push(toDo);
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
  //change what this is attached too
  const addTodoBtn = document.createElement("button");
  addTodoBtn.classList.add("add-Todo-Btn");
  const addTodo = document.querySelector(".add-todo");

  addTodoBtn.addEventListener("click", () => {
    addTodo.style.display = "flex";
  });
  return addTodoBtn;
}
