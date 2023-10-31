// Plus Minus Hacker rank problem

function plusMinus(arr) {
    // Write your code here
    let p = arr.filter((val)=> val>0);
    let n = arr.filter((val)=> val<0);
    let z = arr.filter((val)=> val == 0);
    let positive = p.length/arr.length;
    let negative = n.length/arr.length;
    let zero = z.length/arr.length;
    
    let tempArr=[]
     tempArr.push(positive.toFixed(6)); 
     tempArr.push(negative.toFixed(6))
     tempArr.push(zero.toFixed(6));
     return console.log(tempArr.join("\n"));
    
}
