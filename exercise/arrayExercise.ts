const age: number[] = []

const gameBoard: string[][] = [[]]

type Product = {
    name: string,
    price: number
}

const Apple: Product[] = [{name: "Apple", price: 2.5}]

const Orange: Product[] = [{name: "Orange", price: 3.5}]

function getTotal(products: Product[]): number {
    let total = 0
    for (let product of products) {
        total += product.price
    }
    return total
}

console.log(getTotal(Apple))
