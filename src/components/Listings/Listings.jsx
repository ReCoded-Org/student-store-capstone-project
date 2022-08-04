import React from "react";

import Listing from "./Listing";
import listingList from "./listingList";

export default function Listings() {
    return (
        <div className='align-center flex w-full flex-wrap justify-start gap-6 bg-iceblue p-10 align-top'>
            {listingList.map((listing) => {
                return <Listing listing={listing} key={listing.id} />;
            })}
        </div>
    );
}
