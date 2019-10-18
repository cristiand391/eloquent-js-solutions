function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }

  return reversed;
}

function reverseArrayInPlace(arr) {
  const arr_len = arr.length;

  arr.splice(arr_len, 0, ...arr)

  for (let i = 0; i < arr_len; i++) {
    arr.splice(i, 1, arr.pop());
  }
}