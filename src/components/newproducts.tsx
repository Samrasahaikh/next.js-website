import React from "react";
import ProductsCards from "@/components/productsCards";

const productsData = [
  {
    img: "/blackshart.jpg",
    title: "Shart",
    desc: "Classic black T-shirt made from premium cotton for all-day comfort and effortless style.",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/koat1.webp",
    title: "Koat",
    desc: "Stylish gray coat crafted from high-quality fabric, offering warmth and a sleek look for any occasion.",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/koat2.jpeg",
    title: "Koat",
    desc: "Stylish black coat crafted from high-quality fabric, offering warmth and a sleek look for any occasion.",
    rating: 3,
    price: "55.00",
  },
  {
    img: "/Jacket3.webp",
    title: "Jacket",
    desc: "Versatile jacket designed for both comfort and style, featuring a durable fabric perfect for all seasons.",
    rating: 4,
    price: "50.00",
  },
  {
    img: "/Joggers1.webp",
    title: "Joggers",
    desc: "Comfortable and stylish joggers made from soft, breathable fabric, perfect for workouts or casual wear.",
    rating: 5,
    price: "50.00",
  },
  {
    img: "/Joggers2.webp",
    title: "Joggers",
    desc: "Comfortable and stylish joggers made from soft, breathable fabric, perfect for workouts or casual wear.",
    rating: 4,
    price: "50.00",
  },
  {
    img: "/smartwatch.jpg",
    title: "Smart Watch",
    desc: "Sleek and feature-packed smartwatch with fitness tracking, notifications, and long-lasting battery for everyday convenience.",
    rating: 5,
    price: "60.00",
  },
  {
    img: "/watch2.webp",
    title: "Watch",
    desc: "Exquisite luxury watch crafted with premium materials and intricate detailing, offering timeless elegance and sophistication",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/watch3.jpg",
    title: "Watchs",
    desc: "Stunning luxury watches in silver and gold, combining impeccable craftsmanship with elegant design for a timeless, refined look.",
    rating: 5,
    price: "200.00",
  },
  {
    img: "/heel1.jpg",
    title: "Heels",
    desc: "Chic black heels featuring a sleek silhouette and comfortable fit, perfect for adding a touch of elegance to any outfit",
    rating: 3,
    price: "40.00",
  },
  {
    img: "/redheels.jpg",
    title: "Heels",
    desc: "Chic heels featuring a sleek silhouette and comfortable fit, perfect for adding a touch of elegance to any outfit",
    rating: 5,
    price: "45.00",
  },
  {
    img: "/sunglasses.jpg",
    title: "Sun Glasses",
    desc: "Stylish sunglasses with UV protection, offering a perfect blend of fashion and eye safety.",
    rating: 4,
    price: "15.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16 font-sans">
        <h2 className="font-medium text-2xl pb-4 ">New Products</h2>

        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
        >
          {productsData.map((item, index) => (
            <ProductsCards
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
