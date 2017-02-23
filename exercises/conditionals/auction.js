var compare1;
var compare2;

function auction(bid1, bid2, bid3) {

	if (bid1 > bid2) {
		compare1 = bid1;
	}
	else {
		compare1 = bid2;
	}

	if (bid3 > compare1) {
		compare2 = bid3;
	}
	else {
		compare2 = compare1;
	}

	return compare2;

}

console.log("The highest bid is: " + auction(1250.02, 835.89, 1250.03));