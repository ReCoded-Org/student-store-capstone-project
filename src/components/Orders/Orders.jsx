import React from "react";

import Order from "./Order";

const orderList = [
    {
        id: 1,
        img: "https://productimages.hepsiburada.net/s/32/375/10354042765362.jpg",
        title: "Apple iPad Pro ",
        price: "4000",
        category: "ELECTRONICS",
        location: "Istanbul",
        description:
            "Apple iPad Pro - 12.9-inch - Wi-Fi - 64GB - Space Gray, minor scratches",
        orderDate: "2022-04-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
    {
        id: 2,
        img: "https://pyxis.nymag.com/v1/imgs/86c/882/b47a32d8e72df7aeadf74490a82aaa9432.rsquare.w600.jpg",
        title: "Leather Couch",
        price: "1000",
        category: "FURNITURE",
        location: "Izmir",
        description: "Leather Couch - Brown, doesn't have stains",
        orderDate: "2022-07-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
    {
        id: 3,
        img: "https://productimages.hepsiburada.net/s/32/375/10354042765362.jpg",
        title: "Apple iPad Pro ",
        price: "4000",
        category: "ELECTRONICS",
        location: "Istanbul",
        description:
            "Apple iPad Pro - 12.9-inch - Wi-Fi - 64GB - Space Gray, minor scratches",
        orderDate: "2022-04-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
    {
        id: 4,
        img: "https://pyxis.nymag.com/v1/imgs/86c/882/b47a32d8e72df7aeadf74490a82aaa9432.rsquare.w600.jpg",
        title: "Leather Couch",
        price: "1000",
        category: "FURNITURE",
        location: "Izmir",
        description: "Leather Couch - Brown, doesn't have stains",
        orderDate: "2022-07-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
    {
        id: 5,
        img: "https://productimages.hepsiburada.net/s/32/375/10354042765362.jpg",
        title: "Apple iPad Pro ",
        price: "4000",
        category: "ELECTRONICS",
        location: "Istanbul",
        description:
            "Apple iPad Pro - 12.9-inch - Wi-Fi - 64GB - Space Gray, minor scratches",
        orderDate: "2022-04-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
    {
        id: 6,
        img: "https://pyxis.nymag.com/v1/imgs/86c/882/b47a32d8e72df7aeadf74490a82aaa9432.rsquare.w600.jpg",
        title: "Leather Couch",
        price: "1000",
        category: "FURNITURE",
        location: "Izmir",
        description: "Leather Couch - Brown, doesn't have stains",
        orderDate: "2022-07-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
    {
        id: 7,
        img: "https://productimages.hepsiburada.net/s/32/375/10354042765362.jpg",
        title: "Apple iPad Pro ",
        price: "4000",
        category: "ELECTRONICS",
        location: "Istanbul",
        description:
            "Apple iPad Pro - 12.9-inch - Wi-Fi - 64GB - Space Gray, minor scratches",
        orderDate: "2022-04-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
    {
        id: 8,
        img: "https://pyxis.nymag.com/v1/imgs/86c/882/b47a32d8e72df7aeadf74490a82aaa9432.rsquare.w600.jpg",
        title: "Leather Couch",
        price: "1000",
        category: "FURNITURE",
        location: "Izmir",
        description: "Leather Couch - Brown, doesn't have stains",
        orderDate: "2022-07-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
    {
        id: 9,
        img: "https://productimages.hepsiburada.net/s/32/375/10354042765362.jpg",
        title: "Apple iPad Pro ",
        price: "4000",
        category: "ELECTRONICS",
        location: "Istanbul",
        description:
            "Apple iPad Pro - 12.9-inch - Wi-Fi - 64GB - Space Gray, minor scratches",
        orderDate: "2022-04-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
    {
        id: 10,
        img: "https://pyxis.nymag.com/v1/imgs/86c/882/b47a32d8e72df7aeadf74490a82aaa9432.rsquare.w600.jpg",
        title: "Leather Couch",
        price: "1000",
        category: "FURNITURE",
        location: "Izmir",
        description: "Leather Couch - Brown, doesn't have stains",
        orderDate: "2022-07-01",
        deliveryAddress: "Besiktas Mh. Besiktas Cad. No:99/9 Besiktas/Istanbul",
    },
];

export default function Orders() {
    return (
        <div className='align-center flex h-screen w-full flex-wrap justify-start gap-6 overflow-scroll bg-iceblue p-10 align-top'>
            {orderList.map((order) => {
                return <Order order={order} key={order.id} />;
            })}
        </div>
    );
}
