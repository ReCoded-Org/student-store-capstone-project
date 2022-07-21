const PriceFilter = () => {
    return (
        <div className='flex justify-center'>
            <div className='xs:scale-[70%] sm:w-80 sm:scale-[80%] md:scale-100 xl:w-96'>
                <div className='input-group relative flex w-full flex-wrap items-stretch'>
                    <input
                        type='search'
                        className='form-control relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-purple focus:bg-white focus:text-gray-700 focus:outline-none'
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
