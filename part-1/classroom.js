var Classroom = function(students){
  this.students = students;
}

Classroom.prototype.find = function(name){

  var students = this.students
  for (var i = 0; i < students.length; i++){
    if (students[i].firstName === name){
      return students[i];
    };
  };
};

Classroom.prototype.honorRollStudents = function(){
  var honorRoll = [];
  var students = this.students;
  for (var i = 0; i < students.length; i++){
    if (students[i].averageScore()>=95){
      honorRoll.push(students[i]);
    };
  };
  return honorRoll;
};

