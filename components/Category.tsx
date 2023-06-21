
const Category = ({
    _id,
    image,
    name,
    products
}: categoriesType) => {
    return (
        <div 
            style={{ backgroundImage: `url(${image})`}}
            className="w-[205px] h-[223px] rounded-[5px]  relative bg-no-repeat bg-cover bg-center p-2"
        >
            
            <div id="overlay" className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.3)] flex flex-col items-center justify-center text-center text-white space-y-2">
                <h2 className="font-bold text-[16px]">{name?.toUpperCase()}</h2>
                {products?.length !== 0 && (
                    <h3>{products?.length} Items</h3>
                )}
            </div>
        </div>
    )
}

export default Category