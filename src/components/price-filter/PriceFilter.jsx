const PriceFilter = () => {
    return (
        <div className='flex justify-center'>
            <div className='px-2 xxs:scale-[70%] sm:w-80 sm:scale-[80%] md:scale-95 xl:w-96'>
                <div className='relative flex w-full flex-row items-stretch space-x-2 xxs:pb-2 lg:pb-0'>
                    <input
                        type='search'
                        className=' block w-[50%] min-w-0 flex-auto rounded-2xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 pr-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-purple focus:bg-white focus:text-gray-700 focus:outline-none'
                        placeholder='Min price'
                        aria-label='Search'
                        aria-describedby='button-addon2'
                    />
                    <input
                        type='search'
                        className=' m-0 block w-[50%] min-w-0 flex-auto rounded-2xl border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-purple focus:bg-white focus:text-gray-700 focus:outline-none'
                        placeholder='Max price'
                        aria-label='Search'
                        aria-describedby='button-addon2'
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;
