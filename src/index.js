import "./styles.css";
import {
  handleProjectCloseBtn,
  showAddProject,
  handleProjectSubmit,
} from "./create-project";
import {
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
  handleTodoSubmit();
  handleTodoCloseBtn();
})();
