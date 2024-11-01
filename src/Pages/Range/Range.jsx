import React from "react";
import "./Range.css";
import diningRoom from "../../assets/dining.png";
import livingRoom from "../../assets/Image-living room.png";
import bedroom from "../../assets/bedroom.png";
const Range = () => {
  return (
    <section>
      <div className="container">
        <div className="range-part">
          <h2>Browse the Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="rooms">
            <div className="room">
              <img src={diningRoom} alt="dining" />
              <p>Dining</p>
            </div>
            <div className="room">
              <img src={livingRoom} alt="living" />
              <span>Living</span>
            </div>
            <div className="room">
              <img src={bedroom} alt="bedroom" />
              <span>Bedroom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Range;
