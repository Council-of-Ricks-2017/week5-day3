function wow(numbas){
  x = 0;
  for (var i = 0; i < numbas.length; i++) {
    // console.log(numbas[i]);
    if (numbas[i] > x){
      x = numbas[i];
    }
  }
  console.log(x);
}
fun_list = [1.1,2.2,3.3];
wow(fun_list);