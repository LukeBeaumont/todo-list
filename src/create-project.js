let allProjects = [];

export function addProjectToList() {
  const projectTitle = document.querySelector(".project-title");
  let projectInput = document.getElementById("project-input").value;
  let projectDescription = document.getElementById("project-description").value;
  if (projectInput) {
    const newProject = CreateProject(projectTitle, projectDescription);
    console.log(newProject);
    allProjects.push(newProject);
    console.log(allProjects);
    clearSubmit();
  } else {
    projectTitle.classList.add("show");
  }
}

function CreateProject(title, description) {
  return { title: title, description: description, toDos: [] };
}

export function clearSubmit() {
  const addProject = document.querySelector(".add-project");
  addProject.style.display = "none";
  document.querySelector("#project-input").value = "";
  document.querySelector("#project-description").value = "";
}
