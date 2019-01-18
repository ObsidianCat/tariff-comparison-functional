const compareProducts = require('./comparison').compareProducts
const prepareComparisonForPrint = require('./comparison').prepareComparisonForPrint

//use my mock data as a test mock
const tariffs = require('../data/tariffs').tariffsList
const mockInput = '4500'
it('should produce sorted array of comparisons', () => {
  const comparisonResults = compareProducts(mockInput, tariffs)
  expect(comparisonResults).toMatchSnapshot();
});

it('should produce a formatted and readable comparisons overview', () => {
  const comparisonResults = compareProducts(mockInput, tariffs)
  const presentationResults = prepareComparisonForPrint(comparisonResults)
  expect(presentationResults).toMatchSnapshot();
});