import { librarian } from "./librarian";
import { setSelectedProjectNumber } from "./create-todo";
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

export function renderTodos(todoArray) {
  if (todoArray) {
    const todoDiv = document.querySelector(".todo-div");
    todoDiv.replaceChildren();
    todoArray.forEach((todo) => {
      const todoCard = document.createElement("div");
      todoCard.textContent = `${todo.title},${todo.description},${todo.due},${todo.priority}`;
      todoDiv.appendChild(todoCard);
    });
  }
}

export function highlightSelectedProject(projectNum) {
  let projectsOnList = document.querySelectorAll(".project");
  projectsOnList[projectNum].style.backgroundColor = "purple";
  // call on initial todo creation and when each project is clicked
}

export function clearHighlightedProject() {
  let projectsOnList = document.querySelectorAll(".project");
  projectsOnList.forEach((project) => (project.style.backgroundColor = ""));
}

export function addHighlightClickListeners() {
  let projectsOnList = document.querySelectorAll(".project");
  projectsOnList.forEach((project) =>
    project.addEventListener("click", (e) => {
      clearHighlightedProject();
      project.style.backgroundColor = "purple";
      librarian.projectNumber = e.target.id;
      renderTodos(librarian.projectArray[librarian.projectNumber].toDos);
      console.log(librarian.projectNumber);
    })
  );
}
