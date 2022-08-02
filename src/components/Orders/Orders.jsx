import React from "react";

import Order from "./order";
import orderList from "./orderlist";

export default function Orders() {
    return (
        <div className='flex w-full flex-wrap justify-start align-center gap-6 align-top bg-iceblue p-10'>
            {orderList.map((order) => {
                return <Order order={order} key={order.id} />;
            })}
        </div>
    );
}
