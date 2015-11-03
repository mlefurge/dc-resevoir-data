var Student = function(firstName, scores){
  this.firstName = firstName;
  this.scores = scores;
}

Student.prototype.averageScore = function(){
  var sum = 0;
  for(var i = 0; i < this.scores.length; i++){
    sum += this.scores[i]
  };
  return Math.floor(sum/this.scores.length)
}

Student.prototype.letterGrade = function(){
  var score = this.averageScore();
  if (score >= 90){
      return "A";
  } else if (score >= 80){
      return "B";
  } else if (score >= 70){
      return "C";
  }  else if (score >= 60){
      return "D";
  } else if (score < 60){
      return "F";
  } else {
    return "error";
  }
}
