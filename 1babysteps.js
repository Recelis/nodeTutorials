const START_INPUT_ARG = 2;
let sum = 0;
for (let ii = START_INPUT_ARG; ii < process.argv.length; ii++){
    sum +=Number(process.argv[ii]);
}
console.log(sum);