function Header() {
    return (
        <nav className='flex flex-wrap items-center justify-between border-t-2 border-solid border-darkpurple bg-white py-4 shadow-black lg:px-12'>
            <div className='flex w-full justify-between border-b-2 border-solid border-gray-300 pl-6 pr-2 pb-5 lg:w-auto lg:border-b-0 lg:pb-0'>
                <div className='block lg:hidden '>
                    <button
                        id='nav'
                        className='flex items-center rounded border-2 border-darkpurple px-3 py-2 text-darkpurple hover:border-darkpurple hover:text-darkpurple'
                    >
                        <title>Menu</title>
                    </button>
                </div>
            </div>

            <div className='menu w-full flex-grow px-8 lg:flex lg:w-auto lg:items-center lg:px-3'>
                <div className='text-md font-bold text-darkpurple lg:flex-grow'>
                    <a
                        href='#responsive-header'
                        className='mt-4 mr-2 block rounded px-4 py-2 hover:bg-purple hover:text-white lg:mt-0 lg:inline-block'
                    >
                        About Us
                    </a>
                    <a
                        href='#responsive-header'
                        className=' mt-4 mr-2 block rounded px-4 py-2 hover:bg-purple hover:text-white lg:mt-0 lg:inline-block'
                    >
                        Our Team
                    </a>
                </div>
                <div className='relative mx-2  hidden text-gray-600 lg:block'>
                    <input
                        className='h-10 rounded-[20px] border-2 border-gray-300 bg-white pl-2 pr-8  text-sm focus:outline-none'
                        type='search'
                        name='search'
                        placeholder='Search'
                    ></input>
                    <button
                        type='submit'
                        className='absolute right-0 top-0 mt-3 mr-2'
                    ></button>
                </div>
                <div className='flex '>
                    <a
                        href='#'
                        className=' text-md mx-3 mt-4  block rounded-[20px]  bg-darkpurple px-4 py-2 font-bold text-white hover:bg-purple lg:mt-0'
                    >
                        Sign Up
                    </a>
                    <a
                        href='#'
                        className=' text-md mx-3 mt-4  block rounded-[20px]  bg-darkpurple px-4 py-2 font-bold text-white hover:bg-purple lg:mt-0'
                    >
                        Sell Items
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
