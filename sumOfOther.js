function sumOfOther(array) {
  const summ = array.reduce((elem, acc) => acc + elem);
  const result = array.map(elem => summ - elem);
  return result;
}
