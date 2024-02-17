export function createLibrarian() {
  return {
    projectName: "",
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
