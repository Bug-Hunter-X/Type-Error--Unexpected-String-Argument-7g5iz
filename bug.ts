function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // Type error, but might not be immediately obvious
console.log(result);