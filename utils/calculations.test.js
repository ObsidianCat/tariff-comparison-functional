const calcPriceForConsumer = require('./calculations').calcPriceForConsumer

const consumptionAmount = 3500
const basicTariffMock = {
  name: "basic electricity tariff",
  type: "basic",
  baseCostPerMonth: 500,
  pricePerUnit: 22,
};
const packedTariffMock = {
  name: "Packaged tariff",
  type: "packed",
  consumptionLimit: 4000,
  overLimitPricePerUnit: 30,
  basePrice: 80000
};

it('calculate basic tariff annual price', () => {
 const result = calcPriceForConsumer(consumptionAmount, basicTariffMock)
 expect(result.precisePrice).toBe(83000)
 expect(result.message).toMatch('basic electricity tariff: 830.00 EUR')

});

it('should present price with euros and cents in correct style', () => {
  const result = calcPriceForConsumer(4501, basicTariffMock)
  expect(result.precisePrice).toBe(105022)
  expect(result.message).toMatch('basic electricity tariff: 1050.22 EUR')

});

it('calculate packed tariff annual price for the amount below packed limit', () => {
  const result = calcPriceForConsumer(consumptionAmount, packedTariffMock)
  expect(result.precisePrice).toBe(80000)

});

it('calculate packed tariff annual price for the amount above limit', () => {
  const result = calcPriceForConsumer(4500, packedTariffMock)
  expect(result.precisePrice).toBe(95000)

});

