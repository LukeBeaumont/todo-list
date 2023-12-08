import "./styles.css";
import {
  handleProjectCloseBtn,
  showAddProject,
  createProject,
} from "./create-project";
import {
  CreateTodo,
  handleDropdown,
  pushTodoToProject,
  handleTodoCloseBtn,
  showAddTodo,
} from "./create-todo";

(function handleAddProject() {
  showAddProject();
  createProject();
  handleProjectCloseBtn();
})();

(function HandleAddTodo() {
  showAddTodo();
  handleTodoCloseBtn();
  handleDropdown();
})();

(function addListener() {
  const addTodoBtn = document.getElementById("submit-todo");
  addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pushTodoToProject(CreateTodo());
  });
})();
