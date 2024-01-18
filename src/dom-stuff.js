import { librarian } from "./librarian";

export function renderProjects(projectArray) {
  const projectList = document.querySelector(".project-list");
  projectList.replaceChildren();
  projectArray.forEach((project, i) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.title;
    listItem.classList.add("project");
    listItem.setAttribute("id", i);
    projectList.appendChild(listItem);
  });
}

/// needs to not break when no todo array exists yet
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

export function highlightSelectedProject(projectNum) {
  let projectsOnList = document.querySelectorAll(".project");
  projectsOnList[projectNum].style.backgroundColor = "purple";
  // call on initial todo creation and when each project is clicked
}

export function clearHighlightedProject() {
  let projectsOnList = document.querySelectorAll(".project");
  projectsOnList.forEach((project) => (project.style.backgroundColor = ""));
}
