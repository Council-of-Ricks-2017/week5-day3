function odd_even(num) {
  
  for (var i=0; i<=num; i+=3) {
  
    if(i %2 === 0){
      console.log("even "+ i);
    }
  
    else{
      console.log("odd " + i);
    }
  }
}

odd_even(30);