let sum = "sum";

function make(firstArg) {
	let summ = 0;
	if (firstArg == "sum") {
		return summ;
	}
	let argArray = Array.from(arguments);
	summ += argArray.reduce((elem, acc) => acc + +elem);


    const addition = function(arg) {
		if (arg == "sum") {
			return summ;
		}

		let argArray = Array.from(arguments);
		summ += argArray.reduce((elem, acc) => acc + +elem);
		return addition;
    }

    return addition;
}