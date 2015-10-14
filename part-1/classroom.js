var Classroom = function(students){
  this.students = students;
};

Classroom.prototype.find = function(student){
    for(var i = 0; i < this.students.length; i++) {
        if(this.students[i].firstName == student)
            return this.students[i];
    }
};

Classroom.prototype.honorRollStudents = function(){
  var array = []
  for(var i = 0; i < this.students.length; i++) {
        if(this.students[i].averageScore() >= 95)
            array.push(this.students[i]);
    }
    return array
};
