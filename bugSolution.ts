function add(a: number, b: number): number {
  return a + b;
}

let num1:number = 1;
let num2: number = parseFloat("2"); //Convert the string to number

let result = add(num1, num2); // Correct way to add
console.log(result); 