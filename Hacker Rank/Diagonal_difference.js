// Diagonal Difference - Hacker rank

function diagonalDifference(arr) {
    // Write your code here
    var primary =0,secondary = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i == j){
                primary+=arr[i][j];
            }
            if(i+j == (arr.length-1)){
                secondary+=arr[i][j];
            }
        }
    }
    return Math.abs(primary-secondary);
}
