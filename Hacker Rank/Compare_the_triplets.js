// Compare the Triplets - Hacker rank

function compareTriplets(a, b) {
    let res=[];
     
    var alice = 0,bob = 0;
for(let i=0;i<a.length;i++){
    if(a[i]>b[i]){
        alice++;
    }else if(a[i]<b[i]){
        bob++;
    }else{
        continue;
    }
}
  res.push(alice);
  res.push(bob);
   return res;
}
