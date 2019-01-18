const calcPriceForConsumer = require("./calculations").calcPriceForConsumer;

module.exports.compareProducts = (input, tariffs) => {
  const amountPerYear = Number(input);
  const results = tariffs
    .map(tariff => calcPriceForConsumer(amountPerYear, tariff))
    .sort((a, b) => a.precisePrice - b.precisePrice);
  return results;
};

module.exports.prepareComparisonForPrint = results => {
  let resultsForPrint = "";
  results.forEach(item => (resultsForPrint += `${item.message} \n`));
  return resultsForPrint;
};
