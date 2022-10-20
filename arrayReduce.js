const orderItems = [
    {
        quantity: 3,
        unitPrice: 15.55
    },
    {
        quantity: 2,
        unitPrice: 10.99
    }
]

 let totalPriceOfAllItems = orderItems.reduce(function(totalPrice, currentVal){
         totalPrice += currentVal.quantity * currentVal.unitPrice
         return totalPrice
      }, 0)


console.log( Math.round(totalPriceOfAllItems * 100) / 100)
