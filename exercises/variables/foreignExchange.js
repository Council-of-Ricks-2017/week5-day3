//VARIABLES
var euro = 0.94933 // euro per one dollar
var krw = 1140.51 //korean won per one dollar

one_euro_to_won = ( (1 / euro) * krw);
one_won_to_euro = ( (1 / krw) * euro);

console.log("With Variables: ")
console.log("One Euro = " + one_euro_to_won.toFixed(2) + " South Korean Won");
console.log("One Korean Won = " + one_won_to_euro.toFixed(5) + " Euros\n");


//FUNCTIONS
function euroToKrw(euro, krw) {
	one_euro_to_won = ( (1 / euro) * krw);
	return one_euro_to_won;
}

function krwToEuro(euro, krw) {
	one_won_to_euro = ( (1 / krw) * euro);
	return one_won_to_euro;
}

console.log("With Functions: ")
console.log("One Euro = " + euroToKrw(euro, krw).toFixed(2) + " South Korean Won");
console.log("One Korean Won = " + krwToEuro(euro, krw).toFixed(5) + " Euros");