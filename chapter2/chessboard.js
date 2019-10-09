let c = "", size = 8;

for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    c += (x + y) % 2 ? "#" : " ";
  }
  if (x == size - 1)
    break;
  c += "\n"
}

console.log(c)