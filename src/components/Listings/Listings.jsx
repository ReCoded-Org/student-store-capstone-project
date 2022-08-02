import React from "react";

import Listing from "./Listing";
import listingList from "./listingList";

export default function Listings() {
    return (
        <div className='flex w-full flex-wrap justify-start align-center gap-6 align-top bg-iceblue p-10'>
            {listingList.map((listing) => {
                return <Listing listing={listing} key={listing.id} />;
            })}
        </div>
    );
}
