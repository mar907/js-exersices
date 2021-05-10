class Product {
    constructor(name, price ) {
        this.name = name 
        this.price =price
    }
}

const list  = [
    new Product ('palito helado crema', 1)
]

const icecreams = [
    {
        name: 'palito helado crema',
        price: 1
    },
    {
        name: 'bombon helado heladix',
        price: 1.6
    },
    {
        name: 'bombon helado heladovich',
        price: 1.7
    },
    {
        name: 'bombon helado helardo',
        price: 1.8
    },
    {
        name: 'helado confites',
        price: 2.9
    },
    {
        name: '1/4',
        price: 2.9
    },
    {
        name: 'palito helado agua',
        price: 0.6
    }
]

console.log( list[0])
console.log( icecreams[0] )