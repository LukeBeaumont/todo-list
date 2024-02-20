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
    listItem.appendChild(createProjectDeleteBtn(i));
  });
}

function createProjectDeleteBtn(index) {
  const deleteBtn = document.createElement("div");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", () => {
    deleteProject(index);
    renderProjects(librarian.projectArray);
    addHighlightClickListeners();
  });
  return deleteBtn;
}

function deleteProject(index) {
  librarian.projectArray.splice(index, 1);
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
  if (projectNum >= 0) {
    let projectsOnList = document.querySelectorAll(".project");
    projectsOnList[projectNum].style.backgroundColor = "purple";
  }
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
      librarian.projectNumber = e.target.id;
      if (!e.target.classList.contains("delete")) {
        renderTodos(librarian.projectArray[librarian.projectNumber].toDos);
        highlightSelectedProject(librarian.projectNumber);
      }
    })
  );
}
//fix bug due to delte button
// add delete buttons to projects and todos
