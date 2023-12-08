import { librarian } from "./librarian";

export function newProject() {
  let projectInput = document.getElementById("project-input").value;

  // check input is valid
  if (projectInput) {
    const project = CreateProject(projectInput);
    return project;
  }
}

function CreateProject(title) {
  return {
    title: title,
    toDos: [],
  };
}

export function showAddProject() {
  const addProjectBtn = document.querySelector(".add-project-btn");
  const addProjectForm = document.querySelector(".add-project");

  addProjectBtn.addEventListener("click", () => {
    addProjectForm.style.display = "flex";
  });
}

export function createProject() {
  const submitProjectBtn = document.getElementById("submit-project");

  submitProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    librarian.pushProject(newProject());
    clearSubmit();
    console.log(librarian.mainArr);
  });
}

export function clearSubmit() {
  const addProject = document.querySelector(".add-project");
  addProject.style.display = "none";
  document.querySelector("#project-input").value = "";
}

export function handleCloseBtn() {
  const addProjectForm = document.querySelector(".add-project");
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    addProjectForm.style.display = "none";
    document.querySelector("#project-input").value = "";
  });
}
