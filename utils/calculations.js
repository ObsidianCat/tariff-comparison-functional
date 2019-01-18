const calculations = {
  basic: ({amountPerYear, baseCostPerMonth, pricePerUnit})=>{
  return (baseCostPerMonth*12) + amountPerYear*pricePerUnit
},
  packed: ({amountPerYear, basePrice, overLimitPricePerUnit, consumptionLimit }) =>{
  if(amountPerYear <= consumptionLimit){
    return basePrice
  }

  return ((amountPerYear-consumptionLimit) * 30) + basePrice
}}

module.exports.calcPriceForConsumer = (amountPerYear, tariff) =>{
  const precisePrice = calculations[tariff.type]({amountPerYear, ...tariff})
  return {
    precisePrice,
    message: `${tariff.name}: ${(precisePrice/100).toFixed(2)} EUR`
  }
}
