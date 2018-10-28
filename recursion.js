function recursion(tree) {
  const result = [];

  function convert(obj, level) {
    if (result[level] === undefined) {
      result[level] = [];
      result[level].push(obj.value);
    } else {
      result[level].push(obj.value);
    }

    if (obj.left !== undefined) {
      convert(obj.left, level + 1);
    }

    if (obj.right !== undefined) {
      convert(obj.right, level + 1);
    }
  }

  convert(tree, 0);

  return result;
}
