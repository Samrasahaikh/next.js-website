import Link from "next/link";
import React from "react";
export default function Navbar() {
  return (
    <div className="hidden lg:block mx-4">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-pink-500 font-sans">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="#">
            MANS
          </Link>
          <Link className="navbar__link relative" href="#">
            WOMANS
          </Link>
          <Link className="navbar__link relative" href="#">
            JEWWLLRY
          </Link>
          <Link className="navbar__link relative" href="#">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="#">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
}
