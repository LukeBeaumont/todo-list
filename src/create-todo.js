import { librarian } from "./librarian";
export function CreateTodo(title, description, due, priority) {
  return {
    title: title,
    description: description,
    dueDate: due,
    priority: priority,
  };
}

export function pushTodoToProject(todo) {
  for (let i = 0; i < librarian.mainArr.length; i++) {
    if (i == 1) {
      librarian.mainArr[i].toDos.push(todo);
      console.log(librarian.mainArr[i]);
    }
  }
}

export function handleDropdown() {
  const dropBtn = document.querySelector(".drop-btn");
  const myDropdown = document.getElementById("myDropdown");

  dropBtn.addEventListener("click", (e) => {
    e.preventDefault();
    displayPickProjectList(librarian.mainArr);
    myDropdown.classList.toggle("show-dropdown");
  });
}

function displayPickProjectList(mainArr) {
  const dropdownContent = document.querySelector(".dropdown-content");
  for (let i = 0; i < mainArr.length; i++) {
    const listItem = document.createElement("a");
    listItem.textContent = `${mainArr[i].title}`;
    dropdownContent.appendChild(listItem);
  }
}
