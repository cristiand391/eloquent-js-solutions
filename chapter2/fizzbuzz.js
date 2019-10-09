for (let n = 1, fz = ""; n < 101; n++, fz = "") {
  n % 3 == 0 && (fz += "Fizz");
  n % 5 == 0 && (fz += "Buzz")
  console.log(fz.length ? fz : n)
}