const Filter = ({ bgColor, svg, name }) => {
    let firstElementStyle = null;
    let lastElementStyle = null;

    if (name === "Books") {
        firstElementStyle = "xxs:ml-[10rem] xs:ml-0 ml-[12rem]";
    } else {
        firstElementStyle = "xs:ml-0";
    }
    if (name === "Two-wheeler") {
        lastElementStyle = "xxs:mr-[2rem] xs:mr-0";
    } else {
        lastElementStyle = "xs:mr-0";
    }

    return (
        <div className={`${firstElementStyle} ${lastElementStyle} scale-95`}>
            <div
                className={`flashing flex h-20 w-20 items-center justify-center rounded-full hover:cursor-pointer xxs:scale-[48%] sm:scale-90 md:scale-90 lg:scale-100 ${bgColor}`}
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
            <h1 className='text-center font-sans text-extraDarkPurple xxs:mt-[-18px] xxs:scale-75 xxs:pb-2 sm:mt-0 md:scale-90 md:pb-0 lg:pt-2'>
                {name}
            </h1>
        </div>
    );
};

export default Filter;
