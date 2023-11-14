export function newProject() {
  let projectInput = document.getElementById("project-input").value;
  const project = CreateProject(projectInput);
  console.log(project);
  return project;
}

function CreateProject(title) {
  return { title: title, toDos: [] };
}

export function clearSubmit() {
  const addProject = document.querySelector(".add-project");
  addProject.style.display = "none";
  document.querySelector("#project-input").value = "";
}
