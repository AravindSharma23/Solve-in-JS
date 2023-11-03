// Beautiful days at Movies Hacker rank problems

function beautifulDays(startDay, endDay, k) {
    // Write your code here
    var count=0;
    for(let day=startDay;day<=endDay;day++){
        let dayString = day.toString();
        let reversed =  dayString.split("").reverse().join("");
        let diff = Math.abs(day-reversed)
        let res = diff/k; 
        if(Number.isInteger(res)){
            count++;
        }
    }
    return count;

}
