
// Min Max Sum - Hacker rank problem
function miniMaxSum(arr) {
    // Write your code here
     let tot = arr.reduce((prev,current)=>prev+=current);
    let tempArr= [];
    for(let i=0;i<arr.length;i++){
        tempArr.push(tot-arr[i]);
    }
    let minVal = Math.min(...tempArr);
    
    let maxVal = Math.max(...tempArr);
    return console.log(minVal+" "+maxVal);
}
