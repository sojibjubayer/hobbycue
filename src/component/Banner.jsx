"use client";
import Image from "next/image";
import React, { useState } from "react";
import GroupImage from "@/assets/GroupImage.png";
import Google from "@/assets/Google.png";
import Facebook from "@/assets/Facebook.png";
import lock from "@/assets/lock.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  const [signIn, setSignIn] = useState(true);
  const [joinIn, setJoinIn] = useState(false);

  const handleSIgnIn = () => {
    setSignIn(true);
    setJoinIn(false);
  };
  const handleJoinIn = () => {
    setJoinIn(true);
    setSignIn(false);
  };
  return (
    <div
      style={{
        backgroundColor: "#F7F5F9",
        height: "600px",
        position: "relative",
      }}
    >
      <div
        style={{ width: "90%", margin: "auto", gap: "160px" }}
        className="d-flex flex-row"
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
          {/* Removed GroupImage here */}
        </div>
        <div className="mt-5">
          <div className="d-flex gap-3 fw-bold fs-5 mb-4">
            <Link onClick={handleSIgnIn} style={{ color: "#939CA3" }} href="/">
              Sign In
            </Link>
            <Link onClick={handleJoinIn} style={{ color: "#939CA3" }} href="/">
              Join In
            </Link>
          </div>
          {/* SIGN IN  */}
          {signIn && (
            <div>
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
                Continue with Facebook
              </button>

              <div className="d-flex align-items-center gap-2 mb-md-4">
                <hr className="flex-grow-1" style={{ height: "2px" }} />
                <span>Or connect with</span>
                <hr className="flex-grow-1" style={{ height: "2px" }} />
              </div>
              <input
                type="text"
                placeholder="Email"
                className="bg-white custom-input rounded-3 p-2 pe-5 border border-2 border-light mb-3"
                style={{ width: "410px", height: "40px" }}
              />
              <div className="position-relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-white custom-input rounded-3 p-2 pe-5 border border-2 border-light mb-3"
                  style={{ width: "410px", height: "40px" }}
                />

                <div
                  className="position-absolute end-0 translate-middle-y pe-3"
                  style={{ top: "20px" }}
                >
                  <FaEyeSlash />
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between mb-3">
                <div className="d-flex gap-2">
                  <input
                    type="checkbox"
                    className=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>Remember me</p>
                </div>
                <div className="d-flex gap-2">
                  <Image
                    src={lock}
                    width={15}
                    height={15}
                    alt="lock"
                    className="mt-1"
                  />
                  <p>Forgot password?</p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-secondary text-dark fw-bold px-5 mb-3"
                style={{ width: "410px" }}
              >
                Continue
              </button>
            </div>
          )}
          {/* JOIN IN  */}
          {joinIn && (
            <div>
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
                Continue with Facebook
              </button>

              <div className="d-flex align-items-center gap-2 mb-md-4">
                <hr className="flex-grow-1" style={{ height: "2px" }} />
                <span>Or connect with</span>
                <hr className="flex-grow-1" style={{ height: "2px" }} />
              </div>
              <input
                type="text"
                placeholder="Email"
                className="bg-white custom-input rounded-3 p-2 pe-5 border border-2 border-light mb-3"
                style={{ width: "410px", height: "40px" }}
              />
              <div className="position-relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-white custom-input rounded-3 p-2 pe-5 border border-2 border-light mb-3"
                  style={{ width: "410px", height: "40px" }}
                />

                <div
                  className="position-absolute end-0 translate-middle-y pe-3"
                  style={{ top: "20px" }}
                >
                  <FaEyeSlash />
                </div>
              </div>
              <div
                className="d-flex gap-3 align-items-center justify mb-3"
                style={{ height: "20px" }}
              >
                <hr className="flex-grow-1" style={{ height: "4px",color:'red' }} />
                <hr className="flex-grow-1" style={{ height: "4px" }} />
                <hr className="flex-grow-1" style={{ height: "4px" }} />
                <p style={{ color: "#6D747A", fontSize: "15px",marginTop:'10px' }}>
                  Password strength
                </p>
              </div>
              <div className="">
                <p style={{ color: "#6D747A", fontSize: "15px" }}>
                  By continuing, you agree to our{" "}
                  <span className="text-dark">Terms of Service</span> and{" "}
                  <span className="text-dark">Privacy Policy.</span>
                </p>
              </div>
              <button
                type="button"
                className="btn btn-outline-secondary text-white fw-bold px-5 mb-3"
                style={{ width: "410px", background: "#8064A2" }}
              >
                Agree and Continue
              </button>
            </div>
          )}
        </div>
        <div
          className="position-absolute bottom-0 "
          style={{ width: "50%", transform: "translateX(0)" }}
        >
          <Image
            src={GroupImage}
            width={0}
            height={216}
            alt="group image"
            style={{ width: "100%" }}
            layout="responsive"
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
