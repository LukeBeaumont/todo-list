export function addProjectToList() {
  const projectTitle = document.querySelector(".project-title");
  let projectInput = document.getElementById("project-input").value;

  const newProject = CreateProject(projectInput);
  console.log(newProject);
  librarian.mainArr.push(newProject);
  console.log(librarian.mainArr);
}

function CreateProject(title) {
  return { title: title, toDos: [] };
}

export function clearSubmit() {
  const addProject = document.querySelector(".add-project");
  addProject.style.display = "none";
  document.querySelector("#project-input").value = "";
}
