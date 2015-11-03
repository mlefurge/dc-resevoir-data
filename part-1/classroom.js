var Classroom = function(students){
  this.students = students;
};

Classroom.prototype.find = function(name) {
  for (var i=0; i < this.students.length; i++) {
    if (this.students[i].firstName === name) {
      return this.students[i];
    }
  }
};

Classroom.prototype.honorRollStudents = function() {
  var honor = []
  for (var i=0; i < this.students.length; i++) {
    if (this.students[i].averageScore() >= 95) {
      honor.push(this.students[i]);
    }
  }
  return honor
};
