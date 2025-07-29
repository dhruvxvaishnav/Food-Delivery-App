import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Choose From A Diverse Menu Featuring A Delectable Array Of Dishes
          Crafted With The Finest Ingredients And Cullinary Expertise. Our
          Mission Is To Satisfy Your Cravings And Elevate Your Dining
          Experience, One Delicious Meal At A Time
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
