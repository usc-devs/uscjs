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

  function iterateBackward() {
    if (index === 0) {
      index = values.length - 1;
    } else {
      index--;
    }

    let currentValue = values[index];

    return currentValue;
  }

  return {
    iterateForward: iterate,
    iterateBackward: iterateBackward
  };
}

let it1 = createIterator(["😂", "😍", "😏", "🙄", "😆", "😄"]);

// Not JS! (DOM)
let iteratorAfterEl = document.querySelector(".iterator-after");
let iteratorBeforeEl = document.querySelector(".iterator-before");
let iteratorValueEl = document.querySelector(".iterator-value");
iteratorValueEl.innerText = it1.iterateForward();

// Note that we could have made a different module solely to
// create & handle iterator elements inside HTML DOM.
// but for simplicity sake, we just handled the DOM part manually
iteratorAfterEl.addEventListener("click", function() {
  iteratorValueEl.innerText = it1.iterateForward();
});
iteratorBeforeEl.addEventListener("click", function() {
  iteratorValueEl.innerText = it1.iterateBackward();
});