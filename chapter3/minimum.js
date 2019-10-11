function minimum(a, b) {
  if (b == undefined) {
    return a;
  }
  return a < b ? a : b;
}

console.log(minimum(182, 73));