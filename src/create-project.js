let allProjects = [];

export function addProjectToList() {
  const projectTitle = document.querySelector(".project-title");
  let projectInput = document.getElementById("project-input").value;

  if (projectInput) {
    const newProject = CreateProject(projectInput);
    console.log(newProject);
    allProjects.push(newProject);
    console.log(allProjects);
    clearSubmit();
    projectTitle.classList.remove("show");
  } else {
    projectTitle.classList.add("show");
  }
}

function CreateProject(title) {
  return { title: title, toDos: [] };
}

export function clearSubmit() {
  const addProject = document.querySelector(".add-project");
  addProject.style.display = "none";
  document.querySelector("#project-input").value = "";
}
