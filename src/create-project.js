export default function addProjectToList() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  const projectOne = CreateProject(title, description);
  console.log(projectOne);
}
function CreateProject(title, description) {
  return { title, description };
}
