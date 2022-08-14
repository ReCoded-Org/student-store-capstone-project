import React from "react";

// import PRODUCTS from "./data";
import SingleProduct from "./SingleProduct";

export default function ListOfProducts({ filteredProducts }) {
    return (
        <div className='container mx-auto flex flex-wrap justify-center gap-x-4'>
            {filteredProducts.map((product) => {
                return <SingleProduct product={product} key={product.id} />;
            })}
        </div>
    );
}
