import * as React from "react";

const PriceFilter = ({
    products,
    // eslint-disable-next-line unused-imports/no-unused-vars
    filteredProducts,
    setfilteredProducts,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
    currentCategory,
    setCurrentCategory,
}) => {
    // const maxPriceFilter = () => {
    //     if (maxPrice > 0) {
    //         const filterByMaxPrice = filteredProducts.filter(
    //             (filteredProduct) => filteredProduct.price <= maxPrice
    //         );
    //         setfilteredProducts(filterByMaxPrice);
    //     }
    // };
    const filter = () => {
        if (maxPrice > 0 || minPrice >= 0) {
            if (currentCategory === "") {
                const filterByMaxPrice = products.filter(
                    (filteredProduct) =>
                        filteredProduct.price <= maxPrice &&
                        filteredProduct.price >= minPrice
                );
                setfilteredProducts(filterByMaxPrice);
            } else {
                const filterByMaxPrice = products.filter(
                    (filteredProduct) =>
                        filteredProduct.price <= maxPrice &&
                        filteredProduct.price >= minPrice &&
                        filteredProduct.category === currentCategory
                );
                setfilteredProducts(filterByMaxPrice);
            }
        }
    };

    const reset = () => {
        setfilteredProducts(products);
        setCurrentCategory("");
        setMaxPrice("");
        setMinPrice("");
    };

    return (
        <div className='flex justify-center'>
            <div className='px-2 xxs:scale-[70%] sm:w-80 sm:scale-[80%] md:scale-95 xl:w-96'>
                <div className='relative flex w-full flex-row items-stretch space-x-2 xxs:mb-2 xxs:pb-2 sm:mb-0 md:pt-4 lg:pb-0'>
                    <input
                        type='search'
                        className=' block w-[50%] min-w-0 flex-auto rounded-2xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 pr-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-purple focus:bg-white focus:text-gray-700 focus:outline-none'
                        placeholder='Min TL'
                        value={minPrice}
                        aria-label='Search'
                        aria-describedby='button-addon2'
                        onChange={(e) => {
                            setMinPrice(e.target.value);
                        }}
                    />
                    <input
                        type='search'
                        className=' m-0 block w-[50%] min-w-0 flex-auto rounded-2xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-purple focus:bg-white focus:text-gray-700 focus:outline-none'
                        placeholder='Max TL'
                        value={maxPrice}
                        aria-label='Search'
                        aria-describedby='button-addon2'
                        onChange={(e) => {
                            setMaxPrice(e.target.value);
                        }}
                    />
                </div>
                <div className='grid scale-90 grid-flow-col items-center justify-center gap-4 pt-4'>
                    <button
                        className='font-md m-1 rounded-lg border-2 bg-extraDarkPurple py-1 px-5 text-[17px] text-white shadow-sm'
                        onClick={() => {
                            filter();
                        }}
                    >
                        Filter
                    </button>
                    <button
                        className='font-md m-1 rounded-lg border-2 bg-extraDarkPurple py-1 px-5 text-[17px] text-white shadow-sm'
                        onClick={() => {
                            reset();
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;
