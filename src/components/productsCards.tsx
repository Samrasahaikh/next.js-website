import React from "react";
import { IoMdStar, IoIosStarOutline } from "react-icons/io";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductsCards: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <IoMdStar />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </div>
        );

      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <IoMdStar />
            <IoMdStar />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </div>
        );

      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </div>
        );

      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoIosStarOutline />
          </div>
        );

      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="px-4 border-gary-200 rounded-xl max-w-[400px] font-sans">
      <div>
        <img
          className="w-full h-auto "
          src={img}
          width={200}
          height={300}
          alt={title}
        />

        <div>
          <div className="space-y-2 py-2">
            <h3 className="text-pink-800 font-medium uppercase">{title}</h3>
            <p className="text-gray-500 max-w-[150px]">{desc}</p>
            <div>{generateRating(rating)}</div>

            <div className="font-bold flex gap-4">
              ${price}
              <del className="text-gray-500 font-normal">
                ${parseInt(price) + 50}.00
              </del>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
