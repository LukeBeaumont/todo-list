export function createLibrarian() {
  return {
    mainArr: [],
    pushProject: function (project) {
      if (project) {
        this.mainArr.push(project);
      }
    },
  };
}
