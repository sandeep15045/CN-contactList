const operation= require('./operation')

const agrs=process.argv.slice(2);
console.log(operation.add(parseInt(agrs[0]),parseInt(agrs[1])));