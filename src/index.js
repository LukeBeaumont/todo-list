import "./styles.css";
import { addProjectToList, clearSubmit } from "./create-project";
import CreateTodo from "./create-todo";

(function showAddProject() {
  const addProjectBtn = document.querySelector(".add-project-btn");
  const addProject = document.querySelector(".add-project");

  addProjectBtn.addEventListener("click", () => {
    addProject.style.display = "flex";
  });
})();

(function showAddTodo() {
  const addTodoBtn = document.querySelector(".add-todo-btn");
  const addTodo = document.querySelector(".add-todo");

  addTodoBtn.addEventListener("click", () => {
    addTodo.style.display = "flex";
  });
})();

(function createProject() {
  const submitProjectBtn = document.getElementById("submit-project");

  submitProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProjectToList();
  });
})();

(function addListener() {
  const addTodoBtn = document.getElementById("submit-todo");
  addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(CreateTodo("dog"));
  });
})();
