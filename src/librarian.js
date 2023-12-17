export function createLibrarian() {
  return {
    projectNumber: "",
    projectArray: [],
    pushProject: function (project) {
      if (project) {
        this.projectArray.push(project);
      }
    },
  };
}

export const librarian = createLibrarian();

// export function pushTodoToProject(todo) {
//   for (let i = 0; i < librarian.mainArr.length; i++) {
//     if (i == 1) {
//       librarian.mainArr[i].toDos.push(todo);
//       console.log(librarian.mainArr[i]);
//     }
//   }
// }
