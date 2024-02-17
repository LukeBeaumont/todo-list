import { librarian } from "./librarian";

export function renderProjects(projectArray) {
  const projectList = document.querySelector(".project-list");
  projectList.replaceChildren();
  projectArray.forEach((project, i) => {
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("div");
    deleteBtn.addEventListener("click", () => {
      deleteProject(i);
    });
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete");
    listItem.textContent = project.title;
    listItem.classList.add("project");
    listItem.setAttribute("id", i);
    projectList.appendChild(listItem);
    projectList.appendChild(deleteBtn);
  });
}

function deleteProject(index) {
  librarian.projectArray.splice(index, 1);
  renderProjects(librarian.projectArray);
  addHighlightClickListeners();
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

// add delete buttons to projects and todos
