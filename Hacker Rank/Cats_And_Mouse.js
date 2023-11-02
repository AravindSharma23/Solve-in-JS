// Cats and Mouse - Hacker rank problem


function catAndMouse(x, y, z) {
      let A = Math.abs(x-z)
      let B = Math.abs(y-z)
      if(A>B){
          return "Cat B"
      }else if(B>A){
          return "Cat A"
      }else{
          return "Mouse C"
      }

}
