import Image from "next/image";
import React from "react";
import GroupImage from "@/assets/GroupImage.png";
import Google from "@/assets/Google.png";
import Facebook from "@/assets/Facebook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Banner = () => {
  return (
    <div style={{ backgroundColor: "#F7F5F9", height: "678px" }}>
      <div
        style={{ width: "90%", margin: "auto", gap: "160px" }}
        className="d-flex flex-row  "
      >
        <div className="mt-5">
          <h3 className="fs-1 mb-5">
            Explore your <span style={{ color: "#0096C8" }}> hobby</span> or{" "}
            <span style={{ color: "#8064A2" }}> passion</span>{" "}
          </h3>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <Image
            src={GroupImage}
            width={0}
            height={216}
            alt="group image"
            style={{ width: "100%" }}
            layout="responsive" // Ensures that the image scales responsively
          />
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="btn btn-outline-secondary d-flex flex-row align-items-center gap-5 px-5 mb-3"
            style={{ width: "410px" }}
          >
            <Image src={Google} alt="google logo" />
            Continue with Google
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary d-flex flex-row align-items-center gap-5 px-5 mb-4"
            style={{ width: "410px" }}
          >
            <Image src={Facebook} alt="Facebook logo" />
            Continue with Google
          </button>

          <div className="d-flex align-items-center gap-2 mb-md-4">
            <hr className="flex-grow-1 " style={{ height: "2px" }} />
            <span>Or connect with</span>
            <hr className="flex-grow-1" style={{ height: "2px" }} />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="bg-white custom-input rounded-3 p-2 pe-5 border border-2 border-ligth mb-3"
            style={{ width: "410px", height: "40px" }}
          />
          <div className="position-relative">
            <input
              type="password"
              placeholder="Password"
              className="bg-white custom-input rounded-3 p-2 pe-5 border border-2 border-ligth mb-3"
              style={{ width: "410px", height: "40px" }}
            />

            <div className="position-absolute end-0  translate-middle-y pe-3" style={{top:'20px'}}>
              <FaEyeSlash />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
