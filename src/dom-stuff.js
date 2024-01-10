import { librarian } from "./librarian";

export function renderProjects(projectArray) {
  const projectList = document.querySelector(".project-list");
  projectList.replaceChildren();
  projectArray.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.title;
    listItem.classList.add("project");
    projectList.appendChild(listItem);
  });
}

export function renderTodos(todoArray) {
  if (todoArray) {
    const todoDiv = document.querySelector(".todo-div");
    todoDiv.replaceChildren();
    todoArray.forEach((todo) => {
      const todoCard = document.createElement("div");
      todoCard.textContent = `${todo.title},${todo.description},${todo.due},${todo.priority}`;
      todoDiv.appendChild(todoCard);
    });
  } else return;
}

// export function addListenerToProjectList() {
//   const projects = document.querySelectorAll(".project");
//   projects.forEach((project) =>
//     project.addEventListener("click", (e) => {
//       renderTodos(librarian.projectArray[howtodothis].toDos);
//     })
//   );
// }

function highlightSelectedProject() {
  use selected project number to add a bg colour to project list item
// call on initial todo creation and when each project is clicked
}