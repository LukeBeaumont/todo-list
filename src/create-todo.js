export default function CreateTodo(name) {
  return { name };
}

export function handleDropdown() {
  const dropBtn = document.querySelector(".drop-btn");
  const myDropdown = document.getElementById("myDropdown");

  dropBtn.addEventListener("click", (e) => {
    e.preventDefault();
    myDropdown.classList.toggle("show-dropdown");
  });
}
