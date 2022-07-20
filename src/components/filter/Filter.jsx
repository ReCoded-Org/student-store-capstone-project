const Filter = ({ bgColor, svg }) => {
    return (
        <div
            className={`m-1 flex h-20 w-20 items-center justify-center rounded-full ${bgColor}`}
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
