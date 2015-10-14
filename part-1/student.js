var Student = function(name, scores){
  this.firstName = name;
  this.scores = scores;
  this.averageScore = function(){
    var sum = this.scores.reduce(function(a, b) {return a + b; });
    var avg = sum / this.scores.length;
    return Math.floor(avg);
    }
};
