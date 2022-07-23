const Filter = ({ bgColor, svg, name }) => {
    return (
        <div>
            <div
                className={`flex h-20 w-20 items-center justify-center rounded-full xs:scale-[50%] sm:m-1 sm:scale-90 md:scale-90 lg:scale-100 ${bgColor}`}
            >
                <svg
                    viewBox='0 0 24 24'
                    className='h-12 w-12 shrink fill-white'
                >
                    <path
                        className='text-center'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d={svg}
                    />
                </svg>
            </div>
            <h1 className='text-center text-extraDarkPurple xs:mt-[-18px] xs:scale-75 xs:pb-2 sm:mt-0 md:scale-90 md:pb-0'>
                {name}
            </h1>
        </div>
    );
};

export default Filter;
