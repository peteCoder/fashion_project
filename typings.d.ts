
type productType = {
    _id: number,
    name: string,
    currentPrice: number,
    previousPrice: number,
    rating: number,
    image: string
}

type categoriesType = {
    _id: number,
    name: string,
    image: string,
    products: productType[]
}




