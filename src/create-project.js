import { librarian } from "./librarian";
import {
  renderProjects,
  highlightSelectedProject,
  addHighlightClickListeners,
} from "./dom-stuff";

function newProject() {
  let projectInput = document.getElementById("project-input").value;
  librarian.projectName = projectInput;
  // check input is valid
  if (!projectInput) {
    alert("Please enter a project name");
  } else if (projectInput) {
    const project = CreateProject(capFirstLetter(projectInput));
    return project;
  }
}

function CreateProject(title) {
  return {
    title: title,
    toDos: [],
  };
}

function capFirstLetter(word) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
}

export function showAddProject() {
  const addProjectBtn = document.querySelector(".add-project-btn");
  const addProjectForm = document.querySelector(".add-project");

  addProjectBtn.addEventListener("click", () => {
    addProjectForm.style.display = "flex";
  });
}

export function handleProjectSubmit() {
  const submitProjectBtn = document.getElementById("submit-project");

  submitProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    librarian.pushProject(newProject());
    clearSubmit();
    console.log(librarian.projectArray);
    renderProjects(librarian.projectArray);
    let projectNumToString = librarian.projectArray.length - 1;
    console.log(projectNumToString.toString());
    if (librarian.projectName) {
      highlightSelectedProject(projectNumToString.toString());
    }
    addHighlightClickListeners();
  });
}

function clearSubmit() {
  const addProject = document.querySelector(".add-project");
  addProject.style.display = "none";
  document.querySelector("#project-input").value = "";
}

export function handleProjectCloseBtn() {
  const projectCloseBtn = document.getElementById("project-close-btn");
  projectCloseBtn.addEventListener("click", () => {
    clearSubmit();
  });
}
