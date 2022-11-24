//receiving the list of values from the command line
const input = process.argv.slice(2);

//creating a new array to hold the cleaned up values 
let inputt = [];

//looping through the command line inputted values to pick out the valid number values and push them into the new array
for (let value of input) {
  if (!Number.isNaN(value)) {
    if(value > 0) {
      inputt.push(Number(value));
    } 
  }
}

//sorting the new array values, smallest to largest
inputt.sort((a, b) => a - b)

//looping through the new array to make the sound according to the input numbers seconds
for (let value of inputt) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, value*1000);
};

/* 
TEST CODE
node timer1.js 10 3 5 15 9
node timer1.js 10 5 3 h k
node timer1.js -10 2 5 4
console.log(input)
console.log(inputt)
*/
