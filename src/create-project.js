export default function addProjectToList() {
  let projectTitle = document.getElementById("project-title").value;
  let projectDescription = document.getElementById("project-description").value;
  const projectOne = CreateProject(projectTitle, projectDescription);
  console.log(projectOne);
}
function CreateProject(title, description) {
  return { title: title, description: description };
}
