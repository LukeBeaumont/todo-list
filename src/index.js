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
  handleNewTodo,
} from "./create-todo";

(function handleAddProject() {
  showAddProject();
  handleProjectSubmit();
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
    handleNewTodo();
  });
})();

// const myForm = document.querySelector(".form");
// const selectedRadioBtn = myForm.querySelector(
//   "input[type='radio'][name=priority]:checked"
// ).value;
// console.log(selectedRadioBtn);
