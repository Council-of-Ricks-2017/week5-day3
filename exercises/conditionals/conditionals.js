var currencyA = 3.14;
var currencyB = 6.23;
var currencyC = 9.18;


function jsAuction(float1, float2, float3) {
  //array = [float1, float2, float3];
  //console.log(array.sort().pop());
  
  if (float1 > float2 && float1 > float3) {
    console.log(float1);
  }
  else if (float2 > float1 && float2 > float3) {
    console.log(float2);
  }
   else if (float3 > float1 && float3 > float2) {
    console.log(float3);
  }
  else {
    console.log("there is no greatest value, we have a 3 way tie");
  }
}

jsAuction(currencyA, currencyB, currencyC);
