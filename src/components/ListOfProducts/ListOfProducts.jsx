import React from "react";

import PRODUCTS from "./data";
import SingleProduct from "./SingleProduct";
export default function ListOfProducts() {
    return (
        <div className='container mx-auto flex flex-wrap justify-center gap-x-6 lg:justify-start'>
            {PRODUCTS.map((product) => {
                return <SingleProduct product={product} key={product.id} />;
            })}
        </div>
    );
}
