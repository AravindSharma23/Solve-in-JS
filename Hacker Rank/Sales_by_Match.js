// Sales_by_Match - Hacker rank problem


function sockMerchant(n, ar) {
    // Write your code here
    let pair = 0;
   let myObj = {}
    for(let ob of ar){
        myObj[ob] = ++myObj[ob] || 1;
    }
    // console.log(myObj)
    for(let ob in myObj){
      myObj[ob] = Math.floor(myObj[ob]/2);
      pair+=myObj[ob]
    }
    return pair
    
}
