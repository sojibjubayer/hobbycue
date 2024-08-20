import Image from "next/image";
import React from "react";
import Quote from "@/assets/Quote.png";
import AudioTrack from "@/assets/AudioTrack.png";
import Dancer from "@/assets/Dancer.png";

const Testimonials = () => {
  return (
    <div>
      <div style={{ width: "90%", margin: "auto" }} className="my-5">
        <div
          className="card w-100 border-0"
          style={{ backgroundColor: "#F7F5F9" }}
        >
          <div className="card-body ps-5">
            <h5 className="card-title  fw-bold">
              <Image
                src={Quote}
                width={30}
                height={30}
                alt="event"
                className="me-3"
              />
              Testimonials
            </h5>
            <p className="card-text">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
            <div className="d-flex gap-3 flex-column-reverse flex-md-row justify-content-between align-items-center">
              <Image
                src={AudioTrack}
                width={0}
                height={0}
                alt="Audio track"
                className="me-3 w-100 h-100"
              />
              <Image
                src={Dancer}
                width={0}
                height={0}
                alt="Dancer"
                className="pe-5 w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
