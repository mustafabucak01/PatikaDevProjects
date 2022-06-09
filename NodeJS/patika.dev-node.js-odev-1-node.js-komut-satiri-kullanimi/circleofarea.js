//node circleofarea r
const arg = process.argv.slice(2);
let pi = Math.PI;

console.log(`Yarıçapı ${arg} olan dairenin alanı: ${pi * Math.pow(arg, 2)}`);
