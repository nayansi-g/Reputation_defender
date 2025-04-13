import React from "react";
import india from "../components/assets/flag.png";
import austria from "../components/assets/austria.png";
import unitedKingdom from "../components/assets/united-kingdom.png";
import usa from "../components/assets/united-states.png";

const FirstNAv = () => {
  return (
    <div>
      <div className="h-7 bg-white flex gap-7 justify-end pr-1 ">
        <p>Contact Us </p>
        <p>Login</p>
        <p className="flex gap-3">
          <img src={usa} alt="" />
          <img src={unitedKingdom} alt="" />
          <img src={austria} alt="" />
          <img src={india} alt="" />
        </p>
      </div>
    </div>
  );
};

export default FirstNAv;
