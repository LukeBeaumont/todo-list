export default function CreateTodo(name) {
  return { name };
}

export function handleDropdown() {
  const dropBtn = document.querySelector("#myDropdown");

  dropBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropBtn.classList.toggle("show-dropdown");
  });
}
