import { librarian } from "./librarian";
import trash from "/icons/trash.svg";
import close from "/icons/trash-red.svg";
import { showAddTodo } from "./create-todo";

export function renderProjects(projectArray) {
  const projectList = document.querySelector(".project-list");
  projectList.replaceChildren();
  projectArray.forEach((project, i) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.title;
    listItem.classList.add("project");
    listItem.setAttribute("id", i);

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon-div");
    iconDiv.appendChild(showAddTodo(i));
    iconDiv.appendChild(createProjectDeleteBtn(i));

    listItem.appendChild(iconDiv);

    projectList.appendChild(listItem);
  });
}

function createProjectDeleteBtn(index) {
  const deleteBtn = document.createElement("img");

  deleteBtn.src = trash;
  deleteBtn.classList.add("project-delete");
  deleteBtn.addEventListener("click", (e) => {
    deleteProject(index);
    renderProjects(librarian.projectArray);
    if (!e.target.classList.contains("project-delete")) {
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

      todoCard.appendChild(createTodoDeleteBtn(i));
      todoCard.appendChild(cardTitle);
      todoCard.appendChild(cardDescription);
      todoCard.appendChild(cardDue);
      todoCard.appendChild(cardPriority);
      todoDiv.appendChild(todoCard);
    });
  }
}

function createTodoDeleteBtn(index) {
  const deleteBtn = document.createElement("img");

  deleteBtn.src = close;
  deleteBtn.classList.add("todo-delete");
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
    projectsOnList[projectNum].style.backgroundColor = " rgb(127, 102, 185)";
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
      if (!e.target.classList.contains("project-delete")) {
        // renderTodos(librarian.projectArray[librarian.projectNumber].toDos);
        // highlightSelectedProject(librarian.projectNumber);
      }
    })
  );
}

function clearTodos() {
  const todoDiv = document.querySelector(".todo-div");
  todoDiv.replaceChildren();
}
