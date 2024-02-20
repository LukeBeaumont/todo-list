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
  deleteBtn.classList.add("close-btn");
  deleteBtn.addEventListener("click", (e) => {
    deleteProject(index);
    renderProjects(librarian.projectArray);
    if (!e.target.classList.contains("delete")) {
      renderTodos(librarian.projectArray[librarian.projectNumber].toDos);
    }
    clearTodos();
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
    todoArray.forEach((todo, i) => {
      const todoCard = document.createElement("div");
      todoCard.classList.add("todo-card");

      const cardTitle = document.createElement("div");
      cardTitle.textContent = `${todo.title}`;
      cardTitle.classList.add("todo-title");

      const cardDescription = document.createElement("div");
      cardDescription.textContent = `${todo.description}`;
      cardDescription.classList.add("todo-description");

      const cardDue = document.createElement("div");
      cardDue.textContent = `Due on: ${todo.due}`;
      cardDue.classList.add("todo-due");

      const cardPriority = document.createElement("div");
      cardPriority.textContent = `Priority level: ${todo.priority}`;
      cardPriority.classList.add("todo-priority");

      todoCard.appendChild(cardTitle);
      todoCard.appendChild(cardDescription);
      todoCard.appendChild(cardDue);
      todoCard.appendChild(cardPriority);
      todoDiv.appendChild(todoCard);
      todoDiv.appendChild(createTodoDeleteBtn(i));
    });
  }
}

function createTodoDeleteBtn(index) {
  const deleteBtn = document.createElement("div");

  deleteBtn.textContent = "x";
  deleteBtn.classList.add("delete");
  deleteBtn.classList.add("close-btn");
  deleteBtn.addEventListener("click", () => {
    deleteTodo(index);
    renderTodos(librarian.projectArray[librarian.projectNumber].toDos);
  });
  return deleteBtn;
}

function deleteTodo(index) {
  librarian.projectArray[librarian.projectNumber].toDos.splice(index, 1);
}

export function highlightSelectedProject(projectNum) {
  if (projectNum >= 0) {
    let projectsOnList = document.querySelectorAll(".project");
    projectsOnList[projectNum].style.backgroundColor = "paleturquoise";
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

function clearTodos() {
  const todoDiv = document.querySelector(".todo-div");
  todoDiv.replaceChildren();
}
