import "./styles.css";
import {
  handleProjectCloseBtn,
  showAddProject,
  handleProjectSubmit,
} from "./create-project";
import {
  handleDropdown,
  handleTodoCloseBtn,
  showAddTodo,
  handleTodoSubmit,
} from "./create-todo";

(function handleAddProject() {
  showAddProject();
  handleProjectSubmit();
  handleProjectCloseBtn();
})();

(function HandleAddTodo() {
  showAddTodo();
  handleDropdown();
  handleTodoSubmit();
  handleTodoCloseBtn();
})();
