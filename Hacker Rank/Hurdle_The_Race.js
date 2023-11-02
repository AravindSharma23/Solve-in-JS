//  Hurdle The Race - Hacker rank problem

function hurdleRace(k, height) {
    // Write your code here
     let sortedHeight = height.sort((a,b)=>a-b);
     let last = sortedHeight[height.length-1];
     let res = (last >= k) ? Math.abs(k-last) : 0 ;
     return res
}
