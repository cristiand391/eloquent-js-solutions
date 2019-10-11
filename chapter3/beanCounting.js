function countBs(s) {
  return countChar(s, 'B');
}

function countChar(s, char) {
  let quantity = 0;
  for (let n = 0; n < s.length; n++) {
    if (s[n] === char) quantity++
  }
  return quantity;
}

console.log(countBs('jfdlaBBBfsffBBasdffBss'));