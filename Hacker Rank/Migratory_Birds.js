// Migratory Birds - Hacker rank problem
function migratoryBirds(arr) {
    // Write your code here
     let myObject=arr.reduce((obj, b)=> {
       
        obj[b] = ++obj[b] || 1;
        
        return obj;
      }, {});
//      console.log(objectArr)
     const maxVal=Math.max(...Object.values(myObject))
    
     const res=Object.keys(myObject).find(key => myObject[key] === maxVal)
   

      return res
}
