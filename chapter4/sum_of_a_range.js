function range(start, end, step = 1) {
  let numbers = [];

  if (start > end) {
    step = step > 0 ? -step : step;

    for (let n = start; n >= end; n += step) {
      numbers.push(n);
    }
  } else {
    step = step < 0 ? -step : step;

    for (let n = start; n <= end; n += step) {
      numbers.push(n);
    }
  }

  return numbers;
}

function sum(numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number; 
  }

  return result
}