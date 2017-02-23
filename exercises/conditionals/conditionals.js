function maxBid(a,b,c) {
  if(a>b && a>c) {
    console.log(a);
  }
  else if(b>a && b>c){
    console.log(b);
  }
  else if(c>b && c>a) {
    console.log(c);
  }
  else {
    console.log("There is no single max bid.");
  }
}
