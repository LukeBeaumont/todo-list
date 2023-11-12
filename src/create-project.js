export function addProjectToList() {
  let projectTitle = document.getElementById("project-title").value;
  let projectDescription = document.getElementById("project-description").value;
  const projectOne = CreateProject(projectTitle, projectDescription);
  console.log(projectOne);
}
function CreateProject(title, description) {
  return { title: title, description: description, toDos: [] };
}

export function clearSubmit() {
  const addProject = document.querySelector(".add-project");
  addProject.style.display = "none";
  document.querySelector("#project-title").value = "";
  document.querySelector("#project-description").value = "";
}
