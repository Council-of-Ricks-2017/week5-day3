var euro = 0.94933 // euro per one dollar
var krw = 1140.51 //korean won per one dollar

function euroToKrw(euro, krw) {
	one_euro_to_won = ( (1 / euro) * krw);
	return one_euro_to_won;
}

function krwToEuro(euro, krw) {
	one_won_to_euro = ( (1 / krw) * euro);
	return one_won_to_euro;
}

console.log("One Euro = " + euroToKrw(euro, krw).toFixed(2) + " Korean won");
console.log("One Korean Won = " + krwToEuro(euro, krw).toFixed(5) + " Euros");