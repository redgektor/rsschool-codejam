function sum(a, b) {
  return a + b;
}

function make(firstarg) {
  let summ = 0;
  if (typeof (firstarg) === 'function') {
    return summ;
  }
  let argArray = Array.from(arguments);
  summ += argArray.reduce((elem, acc) => acc + +elem);

  const addition = function applySum(arg) {
    if (typeof (arg) === 'function') {
      return summ;
    }

    argArray = Array.from(arguments);

    summ += argArray.reduce(sum);
    return addition;
  };

  return addition;
}
