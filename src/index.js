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

// reset radio to default
// work out why due date is undefined
// why does it break after no project alert
