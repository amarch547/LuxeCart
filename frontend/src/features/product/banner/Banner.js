import React from "react";
import Hero from "../../../images/hero3.png";
import Button from "../../../images/button.png";
import { Link } from "react-router-dom";

function Banner() {
  const bgStyle = {
    backgroundImage: `url(${Hero})`,
  };

  const bStyle = {
    backgroundImage: `url(${Button})`,
  };

  return (
    <div
      className="h-36 bg-cover lg:h-96 lg:bg-[length:100%_170%] bg-center"
      style={bgStyle}
    >
      <div className="text-sm font-semibold lg:p-20 lg:gap-y-8">
        <h4 className="lg:mt-2 lg:font-semibold lg:text-xl">Trade-in-offer</h4>
        <h2 className="lg:mt-4 lg:font-bold lg:text-3xl">Super value deals</h2>
        <h5 className="lg:mt-3 lg:font-medium lg:text-lg">On all products</h5>
        <p className="lg:mt-2 lg:text-2xl">
          Save more with coupons & up to 50% off!
        </p>
        <Link className="" to="/product">
          <button
            className="lg:mt-4 lg:ml-12 lg:bg-center lg:bg-cover lg:bg-transparent lg:text-white/[0.7]"
            style={bStyle}
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
