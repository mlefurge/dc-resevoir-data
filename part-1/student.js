var Student = function(name, scores){
  this.firstName = name;
  this.scores = scores;
};

Student.prototype.averageScore = function(){
    var sum = this.scores.reduce(function(a, b) {return a + b; });
    var avg = sum / this.scores.length;
    return Math.floor(avg);
  };

Student.prototype.letterGrade = function(){
    if (this.averageScore() >= 90){
      return "A";
    }
    else if (this.averageScore() >= 80 && this.averageScore() < 90){
      return "B";
    }
    else if (this.averageScore() >= 70 && this.averageScore() < 80){
      return "C";
    }
    else if (this.averageScore() >= 60 && this.averageScore() < 70){
      return "D";
    }
    else {
      return "F";
    }
  };
