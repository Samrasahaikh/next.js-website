"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./slide";
export default function Hero() {
  let settings = {
    dots: true,
    slidesToShow: 1,
    slidToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  const slideData = [
    {
      id: 0,
      img: "/pic1.jpg",
      title: "Trending Items",
      mainTitle: "WOMAN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "/pic3.jpg",
      title: "Tranding Accessories",
      mainTitle: "MODREN SUNGLASSES",
      price: "$15",
    },
    {
      id: 2,
      img: "/pic4.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];
  return (
    <div>
      <div className="container pt-6 lg:pt-0 ">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
