function sumOfOther(array) {
    const summ = array.reduce((elem, acc) => acc + elem);
    let result = array.map((elem) => summ - elem);
    return result;
}