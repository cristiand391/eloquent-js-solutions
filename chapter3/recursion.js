function isEven(n) {
  if (n < 0) return 'The parameter must be a POSITIVE whole number';
  else if (n == 0) return true;
  else if (n == 1) return false;
  else return isEven(n - 2);
}

console.log(isEven(77));