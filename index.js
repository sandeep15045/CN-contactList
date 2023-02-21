const agrs =process.argv;
console.log(agrs);
var args = process.argv;
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
 });
