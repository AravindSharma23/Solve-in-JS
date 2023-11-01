//Breaking Records - Hackerrank problem


function breakingRecords(scores) {
    // Write your code here
    var minVal = scores[0];
    var maxVal = scores[0];
    var min=0,max=0;
    for(let i=1;i<=scores.length;i++){
        if(scores[i]<minVal){
            minVal = scores[i];
            min++;
            // continue
        }
         if(scores[i]>maxVal){
            maxVal = scores[i];
            max++;
            // continue
        }
       
        
    }
    return [max,min];

}
