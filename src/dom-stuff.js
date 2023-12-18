import { librarian } from "./librarian";

export function renderProjects(projectArray) {
  const projectList = document.querySelector(".project-list");
  projectList.replaceChildren();
  projectArray.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.title;
    projectList.appendChild(listItem);
  });
}
