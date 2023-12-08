import "./styles.css";
import {
  handleCloseBtn,
  showAddProject,
  createProject,
} from "./create-project";
import { CreateTodo, handleDropdown, pushTodoToProject } from "./create-todo";

(function handleAddProject() {
  showAddProject();
  createProject();
  handleCloseBtn();
})();

(function showAddTodo() {
  const addTodoBtn = document.querySelector(".add-todo-btn");
  const addTodo = document.querySelector(".add-todo");

  addTodoBtn.addEventListener("click", () => {
    addTodo.style.display = "flex";
    handleDropdown();
  });
})();

(function addListener() {
  const addTodoBtn = document.getElementById("submit-todo");
  addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pushTodoToProject(CreateTodo());
  });
})();
