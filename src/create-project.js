export function newProject() {
  let projectInput = document.getElementById("project-input").value;
  if (projectInput) {
    const project = CreateProject(projectInput);
    return project;
  } else return;
}

function CreateProject(title) {
  return {
    title: title,
    toDos: [],
  };
}

export function clearSubmit() {
  const addProject = document.querySelector(".add-project");
  addProject.style.display = "none";
  document.querySelector("#project-input").value = "";
}
