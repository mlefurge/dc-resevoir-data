var Classroom = function(students){
  this.students = students;
}

Classroom.prototype.find = function(name){
  var result;
  this.students.forEach(function(student){
    if (student.firstName === name){
      result = student;
    }
  })

  return result;

};

Classroom.prototype.honorRollStudents = function(){

  var filtered = this.students.filter(function(student){
    if (student.averageScore() >= 95)
      return true;
  });

  return filtered
};

