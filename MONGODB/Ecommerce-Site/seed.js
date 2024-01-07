const mongoose = require('mongoose');
const Product = require('./model/Product');

const products=[
    {
        name:`SanDisk 256GB MicroSD Card`,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/memory-card/microsd-card/e/w/a/sdsqxav-256g-gn6mn-sandisk-original-imaggvvnfmdzfncv.jpeg?q=70" ,
        price: 429,
        desc: 'Top Selling SD Cards.'
    },

    {
        name:`ViewSonic Monitors`,
        img: "https://rukminim2.flixcart.com/image/312/312/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70",
        price: 8000,
        desc: `HDR 10 Display Monitors.`
    },

    {
        name:`Invicta Analog watch`,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/z/f/8/1-8927ob-invicta-men-original-imagtkffz2crazhm.jpeg?q=70",
        price: 12599,
        desc: `Premium watch ever.`
    },

    {
        name:`PUMA sports shoes`,
        img: "https://rukminim2.flixcart.com/image/612/612/ktrk13k0/shoe/z/0/b/10-386922-10-puma-white-high-risk-red-original-imag7f2htzamwgap.jpeg?q=70",
        price: 11999,
        desc: `Hustel sports running shoes.`
    },

    {
        name:`Redmi Note 13 Pro+`,
        img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/5/f/-original-imagwu9fyya8h6mg.jpeg?q=70" ,
        price: 31999,
        desc: `Latest flagship smartphone.`
    }
]


async function seedDB(){
    await Product.insertMany(products);
    console.log('DB seeded');
}

module.exports= seedDB;