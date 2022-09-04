const items = [
    {
        name: 'Book',
        price: 12.49,
        category: 'exempted',
        tax: price + 0
    },
    {
        name: 'CD',
        price: 14.99,
        category: 'base',
        tax: (.10 * price)
    },
    {
        name: 'Chocolate Bar',
        price: 0.85,
        category: 'exempted',
        tax: 0
    },
    {
        name: 'Imported Chocolates',
        price: 10.00,
        category: 'imported',
        tax: (.05 * price)
    },

]
module.exports = items;