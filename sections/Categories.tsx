import Category from "@/components/Category"
import Link from "next/link"
import { categories } from "../public/images/categories"


const Categories = () => {
    return (
        <div className="max-w-7xl mx-auto relative my-24 p-[28px] lg:p-[0px] overflow-hidden">
            <h2 className="text-[#252B42] text-[24px] font-bold max-w-[65px]">Shop</h2>
            <div className="flex items-center gap-4 flex-row overflow-x-auto">

                {categories?.map(category => (
                    <Link key={category?._id} href={`/category/${String(category._id)}`}>
                        <Category 
                            _id={category._id}
                            image={category.image}
                            name={category.name}
                            products={category.products}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories