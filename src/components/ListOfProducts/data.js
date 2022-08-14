const PRODUCTS = [
    {
        id: 1,
        title: "Apple iPad Pro",
        description:
            "With the power of Apple Pencil, iPad Pro transforms into an immersive drawing canvas and the world's best note‑taking device.",
        coverImage:
            "https://productimages.hepsiburada.net/s/32/375/10354042765362.jpg",
        price: 4000,
        category: "Electronics",
        location: "Izmir",
        type: "Product",
        condition: "New",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 41.085562,
            lng: 28.985118,
        },
    },

    {
        id: 2,
        title: "1994",
        description:
            "It's 1994, and the Republican Revolution is on its way. Democratic Party strategist, Melissa Carnes, a fierce, combative woman in the male-dominated world of high politics, heads to her home state of Ohio to resuscitate the floundering Senate campaign of Kyle Porter, a successful entrepreneur running for public office for the first time.",
        coverImage:
            "https://static01.nyt.com/images/2017/01/27/arts/27bookorwell/27bookorwell-superJumbo.jpg",
        price: 250,
        category: "Books",
        location: "Istanbul",
        type: "Product",
        condition: "New",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 41.01203,
            lng: 28.955573,
        },
    },

    {
        id: 3,
        title: "leather jacket",
        description:
            "Cumin spiced cheese that originates from the Leiden area in the Netherlands.",
        coverImage:
            "https://cdn.shopify.com/s/files/1/1126/3188/products/moto-leather-jacket-compressor_1024x1024.jpg?v=1567465461",
        price: 570,
        category: "Clothes",
        location: "Ankra",
        type: "Product",
        condition: "New",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 41.085562,
            lng: 28.985118,
        },
    },

    {
        id: 4,
        title: "Defacto-shirt",
        description:
            "Cumin spiced cheese that originates from the Leiden area in the Netherlands.",
        coverImage:
            "https://img.freepik.com/free-psd/white-t-shirt-with-silkscreen-mockup_125540-697.jpg?w=2000",
        price: 110,
        category: "Clothes",
        location: "Mersin",
        type: "Product",
        condition: "New",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 40.362242,
            lng: 28.888175,
        },
    },

    {
        id: 5,
        title: "The Secret",
        description:
            "The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the pseudoscientific law of attraction, which claims that thoughts can change a person's life directly.",
        coverImage:
            "https://www.thesecret.tv/wp-content/uploads/2015/05/Daily-Teaching-Book.png",
        price: 220,
        category: "Books",
        location: "Adana",
        type: "Product",
        condition: "New",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 41.085562,
            lng: 28.985118,
        },
    },

    {
        id: 6,
        title: "Iphone 6 mini",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        coverImage:
            "https://www.notebookcheck-tr.com/uploads/tx_nbc2/Apple_new-ipad-pro-apple-pencil-pro-display_03182020.jpg",
        price: 2400,
        category: "Electronics",
        location: "Istanbul",
        type: "Product",
        condition: "Used",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 40.98871,
            lng: 29.097114,
        },
    },

    {
        id: 7,
        title: "Leyden Cheese",
        description:
            "Cumin spiced cheese that originates from the Leiden area in the Netherlands.",
        coverImage:
            "https://cdn11.bigcommerce.com/s-n2v2dr/images/stencil/1280x1280/products/270/548/IMG_24191__24870.1643319583.JPG?c=2",
        price: 200,
        category: "Food",
        location: "Hatay",
        type: "Product",
        condition: "New",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 36.275556,
            lng: 36.188218,
        },
    },

    {
        id: 8,
        title: "PS5",
        description:
            "Cumin spiced cheese that originates from the Leiden area in the Netherlands.",
        coverImage:
            "https://media.karousell.com/media/photos/products/2021/7/29/barely_used_ps5_digital_editio_1627530598_43aa2105_progressive",
        price: 14000,
        category: "Electronics",
        location: "Istanbul",
        type: "Product",
        condition: "New",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 40.88341,
            lng: 29.231715,
        },
    },

    {
        id: 9,
        title: "Desk",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        coverImage:
            "https://i.pinimg.com/736x/9e/44/2b/9e442b9ba70e94d710fcce6107058322--diy-office-desk-home-office.jpg",
        price: 1200,
        category: "Furniture",
        location: "Istanbul",
        type: "Product",
        condition: "Used",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 41.019283,
            lng: 28.853814,
        },
    },

    {
        id: 10,
        title: "Office chair",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        coverImage:
            "https://secure.img1-fg.wfcdn.com/im/96489692/resize-h600-w600%5Ecompr-r85/9470/94709448/Office+Chairs.jpg",
        price: 1250,
        category: "Furniture",
        location: "Istanbul",
        type: "Product",
        condition: "New",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 41.019283,
            lng: 28.853814,
        },
    },

    {
        id: 11,
        title: "Scooter",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        coverImage:
            "https://i0.wp.com/rayhaber.com/wp-content/uploads/2020/06/seatin-elektrikli-scooteri-satisa-sunuldu.jpg?resize=678%2C381&ssl=1",
        price: 1250,
        category: "Two-wheeler",
        location: "Istanbul",
        type: "Product",
        condition: "Used",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 41.026535,
            lng: 28.668298,
        },
    },

    {
        id: 12,
        title: "Another Office chair",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        coverImage:
            "https://i.pcmag.com/imagery/roundup-products/019VKPwoqCHKm8uIrSmRYsb..v1646338208.jpg",
        price: 1250,
        category: "Furniture",
        location: "Istanbul",
        type: "Product",
        condition: "New",
        seller: "DerSeller",
        buyer: "DerBuyer",
        geo: {
            lat: 40.978861,
            lng: 28.643563,
        },
    },
];

export default PRODUCTS;
