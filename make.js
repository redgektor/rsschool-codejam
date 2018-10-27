function sum(a,b) {
    return a + b;
}

function make(firstArg) {
    
	let summ = 0;
	if (typeof(firstArg) == "function") {
		return summ;
	}
	let argArray = Array.from(arguments);
	summ += argArray.reduce((elem, acc) => acc + +elem);


    const addition = function(arg) {
		if (typeof(arg) == "function") {
			return summ;
		}

        let argArray = Array.from(arguments);
        
		summ += argArray.reduce((elem, acc) => acc + +elem);
		return addition;
    }

    return addition;
}