class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  gpa() {
    return (
      this.grades.reduce((acc, item) => acc + item, 0) / this.grades.length
    );
  }
}

const eva = new Student("eva", "Arts", [80, 60, 90]);
console.log(eva);
eva.addGrade(90);
console.log(eva);
console.log(eva.gpa());
