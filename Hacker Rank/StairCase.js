// StairCase - Hacker rank Problem 

function staircase(n) {
    // Write your code here
    for(var i=1;i<=n;i++){
        var hash = "#";
        var space = " ";
       console.log(space.repeat(n-i)+hash.repeat(i))
    }
     return ;
}
