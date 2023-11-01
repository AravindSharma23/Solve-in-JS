// Grading Students -Hacker rank problem
function gradingStudents(grades) {
    // Write your code here
    var finalVals = []
    for(let i=0;i<grades.length;i++){
      if(grades[i]>=38){
          var rem = grades[i]%5;
          if(rem == 3){
              finalVals.push(grades[i]+2)
          }
          else if(rem == 4){
              finalVals.push(grades[i]+1)
          }
          else{
              finalVals.push(grades[i]);
          }
         
      } 
      else{
          finalVals.push(grades[i]);
      }
       
           
        
    }
    return finalVals;
   

}
