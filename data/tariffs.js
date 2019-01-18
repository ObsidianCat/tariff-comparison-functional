// the mock, similar to the array of data we could get from DB
// All prices translated to cents, for precision
module.exports.tariffsList = [
  {
    name: "basic electricity tariff",
    type: "basic",
    baseCostPerMonth: 500,
    pricePerUnit: 22,
    consumptionLimit: 0,
    overLimitPricePerUnit: 0,
    basePrice: 0
  },
  {
    name: "Packaged tariff",
    type: "packed",
    baseCostPerMonth: 0,
    pricePerUnit: 0,
    consumptionLimit: 4000,
    overLimitPricePerUnit: 30,
    basePrice: 80000
  }
];
