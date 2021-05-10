const amount = parseFloat(prompt("cuanto dinero tienes"))

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

console.log( JSON.stringify( list[0]))
console.log( JSON.stringify( icecreams[0]) )

let selectedIcecreams = []

function isCheaper(price1, price2) {
    return price1 < price2
}

function isEqual(price1, price2) {
    return price1 === price2
}

function IsCheaperOrEqual(price1, price2) {
    return isCheaper(price1, price2) || isEqual(price1, price2)
}

function isMoreExpensive(price1, price2) {
    return !IsCheaperOrEqual(price1, price2)
}

icecreams.forEach(icecream => {
    if (
        IsCheaperOrEqual(icecream.price, amount) &&
        isCheaper((selectedIcecreams[0]?.price || 0), icecream.price)
    ) {
        selectedIcecreams = [icecream]
    } else if (isEqual(icecream.price, selectedIcecreams[0]?.price)) {
        selectedIcecreams.push(icecream)
    }
})

if (selectedIcecreams.length === 0) {
    document.write('sos un pobre de mierda')
} else {
    selectedIcecreams.forEach(selectedIcecream => {
        document.write(`
            Puedes comprar ${selectedIcecream.name} 
            su precio es de $ ${selectedIcecream.price} 
            y el vuelto seria de $ ${(amount - selectedIcecream.price).toFixed(2)}  <br>
        `)
    })
}

