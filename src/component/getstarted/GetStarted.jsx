import React from "react";
import Group99 from "@/assets/Group99.png";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div style={{ background: "#F7FDFF" }} className="py-5">
      <div style={{ width: "90%", margin: "auto" }} className="d-flex flex-column">
        <h2 className="py-5 w-100 ">Your <span style={{color:'#8064A2'}}>Hobby</span>, Your <span style={{color:'#0096C8'}}>Community...</span></h2>
        <button
          type="button"
          className="btn px-5 text-white fw-bold"
          style={{ background: "#8064A2",paddingY:'20px' ,width:'200px'}}
        >
         Get Started
        </button>
        <Image
          src={Group99}
          width={0}
          height={0}
          alt="event"
          className="pe-5 pt-5 w-100 h-100"
        />
      </div>
    </div>
  );
};

export default GetStarted;
