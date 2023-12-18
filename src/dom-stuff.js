import { librarian } from "./librarian";

export function renderProjects(projectArray) {
  const projectList = document.querySelector(".project-list");
  projectList.replaceChildren();
  projectArray.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.title;
    projectList.appendChild(listItem);
  });
}

export function renderTodos(todoArray) {
  const todoDiv = document.querySelector(".todo-div");
  todoDiv.replaceChildren();
  todoArray.forEach((todo) => {
    const todoCard = document.createElement("div");
    todoCard.textContent = `${todo.title},${todo.description},${todo.due},${todo.priority}`;
    todoDiv.appendChild(todoCard);
  });
}
