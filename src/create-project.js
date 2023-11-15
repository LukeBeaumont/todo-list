export function newProject() {
  let projectInput = document.getElementById("project-input").value;
  const projectCss = document.querySelector(".project-title");
  // check input is valid
  if (projectInput !== "") {
    const project = CreateProject(projectInput);
    return project;
  } else projectCss.classList.toggle("show");
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
