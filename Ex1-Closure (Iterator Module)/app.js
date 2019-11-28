function createIterator(values) {
  let index = -1;

  function isDone() {
    if (index === values.length - 1) return true;

    return false;
  }

  function iterate() {
    if (isDone()) {
      index = 0;
    } else {
      index++;
    }

    let currentValue = values[index];

    return currentValue;
  }

  return {
    iterateForward: iterate
  };
}

let it1 = createIterator([1, 2, 3, 4]);
console.log(it1.iterateForward())