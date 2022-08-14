import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <>
      <div className="searchItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oGFbN69ypNdFS8OCL4IzsFpNMTKRJFO7RCX4_1rR&s"
          alt=""
          className="siImg"
        />


        <div className="sidesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>


        <div className="sidetails">
          <div className="siRating">
            <span>Excelllent</span>
            <button>8.9</button>
          </div>

          <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOpt">Include taxes and fees</span>
            <button className="siCheckButton">See Availability</button>
          </div>
        </div>


      </div>
    </>
  );
};

export default SearchItem;
