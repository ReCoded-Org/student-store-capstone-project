import * as React from "react";

// const PriceFilter = ({ products, filteredProducts, setfilteredProducts }) => {
const PriceFilter = () => {
    // const [maxPrice, setMaxPrice] = React.useState(0);
    // const [minPrice, setMinPrice] = React.useState(0);

    // React.useEffect(() => {
    //     if (maxPrice > 0 && minPrice >= 0) {
    //         setfilteredProducts(
    //             filteredProducts.filter(
    //                 (filteredProduct) =>
    //                     filteredProduct < filteredProduct.price < maxPrice
    //             )
    //         );
    //     }
    // }, [maxPrice, minPrice]);

    // const priceFilter = (minPrice, maxPrice) => {
    //     if (maxPrice > 0 && minPrice >= 0) {
    //         setfilteredProducts(
    //             filteredProducts.filter(
    //                 (product) =>
    //                     product.price < maxPrice && product.price > minPrice
    //             )
    //         );
    //     }
    // };
    // const maxPriceFilter = (maxPrice) => {
    //     if (maxPrice > 0) {
    //         const filterByMaxPrice = filteredProducts.filter(
    //             (product) => product.price < maxPrice
    //         );
    //         console.log("fer: ", filterByMaxPrice);
    //         setfilteredProducts(filterByMaxPrice);
    //     }
    // };

    return (
        <div className='flex justify-center'>
            <div className='px-2 xxs:scale-[70%] sm:w-80 sm:scale-[80%] md:scale-95 xl:w-96'>
                <div className='relative flex w-full flex-row items-stretch space-x-2 xxs:mb-2 xxs:pb-2 sm:mb-0 lg:pb-0'>
                    <input
                        type='search'
                        className=' block w-[50%] min-w-0 flex-auto rounded-2xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 pr-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-purple focus:bg-white focus:text-gray-700 focus:outline-none'
                        placeholder='Min TL'
                        aria-label='Search'
                        aria-describedby='button-addon2'
                        // onChange={(e) => {
                        //     setMinPrice(e.target.value);
                        // }}
                    />
                    <input
                        type='search'
                        className=' m-0 block w-[50%] min-w-0 flex-auto rounded-2xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-purple focus:bg-white focus:text-gray-700 focus:outline-none'
                        placeholder='Max TL'
                        aria-label='Search'
                        aria-describedby='button-addon2'
                        // onChange={(e) => {
                        //     setMaxPrice(e.target.value);
                        //     maxPriceFilter(maxPrice);
                        // }}
                    />
                </div>
                {/* <div
                    className='grid scale-75 justify-center pt-4'
                    onClick={() => {
                        priceFilter(minPrice, maxPrice);
                    }}
                >
                    <Button text='search' buttonStyle='orangeSignIn' />
                </div> */}
            </div>
        </div>
    );
};

export default PriceFilter;
