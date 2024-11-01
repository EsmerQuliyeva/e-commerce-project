import React from "react";
import "./Additional.css";
import additional from "../../../assets/additional.png";
const Additional = () => {
  return (
    <div className="container">
      <div className="description-page">
        <h3>Description</h3>
        <h3>Additional Information</h3>
        <h3>Reviews</h3>
      </div>
      <p className="desciption">
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road. <br /> <br />
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with
        a well-balanced audio which boasts a clear midrange and extended highs
        for a sound that is both articulate and pronounced. The analogue knobs
        allow you to fine tune the controls to your personal preferences while
        the guitar-influenced leather strap enables easy and stylish travel.
      </p>
      <div className="additional-images">
        <img src={additional} alt="sofa" />
        <img src={additional} alt="sofa" />
      </div>
    </div>
  );
};

export default Additional;
