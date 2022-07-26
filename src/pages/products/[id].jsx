/* eslint-disable @next/next/no-img-element */
// Once the data is ready we can use this function to get the paths

// export const getStaticPaths = async () => {
//     const res = await fetch("");
//     const products = await res.json();

//     const paths = products((product) => {
//         return {
//             params: { id: product.id.toString() },
//         };
//     });

//     return {
//         paths,
//         fallback: false,
//     };
// };

// import styles from "../../styles/headers.module.css";

const Details = () => {
    return (
        <div className='bg-clay p-10'>
            <div className='grid md:grid-cols-2 md:gap-2'>
                {/* product photos & info */}
                <div className='grid gap-3 md:grid-rows-2'>
                    {/* photos */}
                    <div className='grid items-center justify-center'>
                        {/* main photo */}
                        <img
                            src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                            alt='Sofa'
                            className='w-[32rem] rounded-xl'
                        />
                    </div>
                    <div className='grid justify-center xs:scale-90 xs:grid-cols-3 xs:gap-4 md:scale-100 md:grid-cols-3 xl:px-[4rem]'>
                        {/* the 3 photos */}
                        <div className='grid justify-center'>
                            <img
                                src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                alt='Sofa'
                                className='w-[9rem] rounded-xl'
                            />
                        </div>
                        <div className='grid justify-center'>
                            <img
                                src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                alt='Sofa'
                                className='w-[9rem] rounded-xl'
                            />
                        </div>
                        <div className='grid justify-center'>
                            <img
                                src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                alt='Sofa'
                                className='w-[9rem] rounded-xl'
                            />
                        </div>
                    </div>
                </div>
                {/* <div className='grid grid-rows-6 xs:scale-90 xs:px-0 md:px-4 lg:scale-100 lg:px-10'> */}
                <div className='grid grid-flow-row xs:scale-90 xs:px-0 md:px-4 lg:scale-100 lg:px-10'>
                    {/* Details */}
                    <div>
                        <div className='grid pb-8'>
                            {/* Headers */}
                            {/* <div className='col-span-3'> */}
                            <div>
                                {/* <div> */}
                                <h1 className='text-3xl font-bold text-purple'>
                                    Two Seat Sofa
                                </h1>
                                <h2 className='text-darkPurple'>
                                    <b>Category:</b> Furniture
                                </h2>
                                <h2 className='pb-2 text-darkPurple'>
                                    <b>Condition:</b> Used
                                </h2>
                                <div className='grid w-full rounded-full bg-orange px-8'>
                                    <h1 className='text-center text-3xl font-bold text-white'>
                                        $2793
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/* <div className='row-span-2 grid'> */}
                        <div>
                            {/* Description */}
                            <div className='grid-row-2 grid content-start justify-start gap-3'>
                                <div className='border-b-2 border-purple'>
                                    <h2 className='text-2xl text-darkPurple'>
                                        Details:
                                    </h2>
                                </div>
                                <div>
                                    <p className='pb-2 text-extraDarkPurple'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Porro, quo, atque
                                        eligendi et illum id, non maiores
                                        perspiciatis expedita quaerat assumenda
                                        iure cupiditate architecto modi numquam
                                        doloremque repellendus exercitationem
                                        distinctio. Lorem: 5 letters, ipsum: 5
                                        letters. doloremque repellendus
                                        exercitationem distinctio. Lorem: 5
                                        letters, ipsum: 5 letters.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='grid scale-[80%] grid-cols-3  items-center justify-center gap-6 rounded-l-full bg-darkPurple'> */}
                        <div className='grid scale-[70%] grid-cols-3 items-center justify-center gap-6 overflow-hidden rounded-l-full bg-darkPurple lg:scale-[75%]'>
                            {/* User */}
                            {/* <div> */}
                            {/* User photo */}
                            <img
                                src='https://149366112.v2.pressablecdn.com/wp-content/uploads/2014/07/m1lead.jpg'
                                alt='Cat user'
                                // className='m-4 rounded-full border-r-2 border-white shadow-xl xs:h-[4rem] sm:h-28 md:h-20 lg:h-32 xl:h-36'
                                className='h-full w-full object-cover shadow-xl'
                            />
                            {/* </div> */}
                            <div className='col-span-2 grid border-l-2 border-white p-4 text-xl text-white xs:scale-90 md:scale-95'>
                                {/* User info */}
                                <h2 className='text-2xl font-bold'>
                                    Mr. nice cat
                                </h2>
                                <h2>mrNiceCat@fake.com</h2>
                                <h2>Istanbul/Turkeky</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid justify-center'>Google Map</div>
        </div>
    );
};

export default Details;
