function arrayToList(arr) {
  let list = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: i == arr.length - 1 ? null : list
    }
  }

  return list;
}


function listToArray(list) {
  let arr = [];

  let pointer = list;

  while (pointer != null) {
    arr.push(pointer.value);

    pointer = pointer.rest;
  }

  return arr;
}


function prepend(element, list) {
  return { value: element, rest: list }
}


function nth(list, n) {
  for (let node = list, i = 0; i <= n; node = node.rest, i++) {
    if (i == n) return node.value;
  }
  return undefined;
}