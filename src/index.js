import "./styles.css";
import { newProject, clearSubmit } from "./create-project";
import { CreateTodo, handleDropdown, pushTodoToProject } from "./create-todo";
import { createLibrarian } from "./librarian";

export const librarian = createLibrarian();

(function showAddProject() {
  const addProjectBtn = document.querySelector(".add-project-btn");
  const addProjectForm = document.querySelector(".add-project");
  const closeBtn = document.querySelector(".close-btn");

  addProjectBtn.addEventListener("click", () => {
    addProjectForm.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    addProjectForm.style.display = "none";
  });
})();

(function showAddTodo() {
  const addTodoBtn = document.querySelector(".add-todo-btn");
  const addTodo = document.querySelector(".add-todo");

  addTodoBtn.addEventListener("click", () => {
    addTodo.style.display = "flex";
    handleDropdown();
  });
})();

(function createProject() {
  const submitProjectBtn = document.getElementById("submit-project");

  submitProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    librarian.pushProject(newProject());
    console.log(librarian.mainArr);
  });
})();

(function addListener() {
  const addTodoBtn = document.getElementById("submit-todo");
  addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pushTodoToProject(CreateTodo());
  });
})();

