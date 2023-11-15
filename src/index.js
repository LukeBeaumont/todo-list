import "./styles.css";
import { newProject, clearSubmit } from "./create-project";
import CreateTodo from "./create-todo";
import { createLibrarian } from "./librarian";

const librarian = createLibrarian();

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
    librarian.mainArr.push(newProject());
    console.log(librarian.mainArr);
  });
})();

(function addListener() {
  const addTodoBtn = document.getElementById("submit-todo");
  addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
})();
