const tariffs = require("./data/tariffs").tariffsList;
const readline = require("readline");

const compareProducts = require("./utils/comparison").compareProducts;
const prepareComparisonForPrint = require("./utils/comparison")
  .prepareComparisonForPrint;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Provide your annual consumption as a number");

rl.on("line", line => {
  const comparisonResults = compareProducts(line, tariffs);
  console.log(prepareComparisonForPrint(comparisonResults));
});
