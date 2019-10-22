function loop(value, test, update, fun) {
  let num = value;

  for (; ;) {
    if (!test(num)) return false;

    fun(num)
    num = update(num)
  }
}

loop(5, n => n > 0, n => n - 1, console.log);