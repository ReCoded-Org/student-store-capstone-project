const Filter = ({ bgColor, svg }) => {
    return (
        <div
            className={`flex h-20 w-20 items-center justify-center rounded-full xs:scale-[50%] sm:m-1 sm:scale-90 md:scale-90 lg:scale-100 ${bgColor}`}
        >
            <svg viewBox='0 0 24 24' className='h-12 w-12 shrink fill-white'>
                <path
                    className='text-center'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d={`${svg}`}
                />
            </svg>
        </div>
    );
};

export default Filter;
