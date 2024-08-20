import React from "react";
import Group99 from "@/assets/Group99.png";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div style={{ background: "#F7FDFF" }} className="py-5">
      <div style={{ width: "90%", margin: "auto" }}>
        <h2 className="py-5">Your Hobby, Your Community...</h2>
        <button
          type="button"
          className="btn px-5 text-white fw-bold"
          style={{ background: "#8064A2",paddingY:'20px' }}
        >
          Get started
        </button>
        <Image
          src={Group99}
          width={0}
          height={0}
          alt="event"
          className="pe-5 pt-5"
        />
      </div>
    </div>
  );
};

export default GetStarted;
