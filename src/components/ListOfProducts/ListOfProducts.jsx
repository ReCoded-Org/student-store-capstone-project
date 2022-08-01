import React from "react";

import PRODUCTS from "./data";
import SingleProduct from "./SingleProduct";
export default function ListOfProducts() {
    return (
        <div className='container mx-auto flex flex-wrap justify-center gap-x-4'>
            {/* <div className='mx-auto grid grid-flow-col justify-center gap-x-6'> */}
            {PRODUCTS.map((product) => {
                return <SingleProduct product={product} key={product.id} />;
            })}
        </div>
    );
}
