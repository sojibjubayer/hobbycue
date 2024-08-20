"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Explore from "@/assets/Explore.png";
import Hobbies from "@/assets/Hobbies.png";
import Vector from "@/assets/Vector.png";
import Cart from "@/assets/Cart.png";
import Google from "@/assets/Google.png";
import Facebook from "@/assets/Facebook.png";
import lock from "@/assets/lock.png";
import { IoMdSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showJoinIn, setShowJoinIn] = useState(false);

  const handleMenu = () => {
    console.log("clicked");
    setActive((prevState) => !prevState);
  };

  const handleSignIn = () => {
    setShowSignIn(true);
    setShowJoinIn(false);
  };

  const handleJoinIn = () => {
    setShowJoinIn(true);
    setShowSignIn(false);
  };

  const handleCloseModals = () => {
    setShowSignIn(false);
    setShowJoinIn(false);
  };

  return (
    <div
      className="d-flex flex-row gap-4 align-items-center justify-content-between mx-auto"
      style={{ width: "90%", height: "80px" }}
    >
      <div className="d-flex flex-row gap-5">
        <div className="d-flex align-items-center" style={{ height: "80px" }}>
          <Image
            src={logo}
            width={200}
            height={50}
            alt="logo"
            className="d-flex align-items-center w-100"
          />
        </div>
        <div className="d-none d-md-flex flex-row align-items-center position-relative">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-light custom-input rounded-3 p-2 pe-5 border border-2 border-light"
            style={{ width: "300px", height: "40px" }}
          />
          <div
            className="position-absolute end-0 top-50 translate-middle-y d-flex align-items-center"
            style={{
              background: "#8064A2",
              width: "40px",
              height: "40px",
              borderRadius: "0.25rem",
            }}
          >
            <IoMdSearch
              className="text-white mx-auto"
              style={{ fontSize: "20px" }}
            />
          </div>
        </div>
        <div className="d-md-none d-flex align-items-center">
          <IoMdSearch className="text-dark" style={{ fontSize: "20px" }} />
        </div>
      </div>

      <div className="d-flex flex-row gap-5">
        <div className="d-none d-md-flex flex-row align-items-center">
          <Image src={Explore} width={30} height={30} alt="explore icon" />
          <div className="dropdown">
            <button
              className="dropdown-toggle border-0 bg-white"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Explore
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  People-Community
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Places-Venues
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Programs-Events
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Products-Store
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Blogs
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-none d-md-flex flex-row align-items-center">
          <Image src={Hobbies} width={30} height={30} alt="hobbies icon" />
          <div className="dropdown">
            <button
              className="dropdown-toggle border-0 bg-white"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hobbies
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  People-Community
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Places-Venues
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Programs-Events
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Products-Store
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Blogs
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex align-items-center" style={{ height: "80px" }}>
          <Image
            src={Vector}
            width={25}
            height={25}
            alt="vector icon"
            className="w-auto"
          />
        </div>
        <div
          className="d-none d-md-flex align-items-center"
          style={{ height: "80px" }}
        >
          <Image src={Cart} width={30} height={30} alt="cart icon" />
        </div>
        <div
          className="d-none d-md-flex align-items-center"
          style={{ height: "80px" }}
        >
          <button type="button" className="btn btn-light border border-2 px-5">
            Sign in
          </button>
        </div>

        <div
          className="d-flex d-md-none "
          style={{ position: "relative", width: "100%", height: "80px" }}
        >
          <div style={{ position: "absolute", top: 25, left: -15 }}>
            <IoMenu
              onClick={handleMenu}
              style={{ cursor: "pointer", fontSize: "24px" }}
            />
          </div>

          {active && (
            <div
              className="position-absolute top-100 start-50 translate-middle-x bg-white border rounded p-4 shadow-lg"
              style={{ zIndex: 1050, width: '200px', height: 'auto' }}
            >
              <div className="d-flex flex-column gap-3 fw-bold fs-5 mb-4">
                <Link
                  onClick={handleSignIn}
                  style={{ color: showSignIn ? "#8064A2" : "#939CA3" }}
                  href="#"
                >
                  Sign In
                </Link>
                <Link
                  onClick={handleJoinIn}
                  style={{ color: showJoinIn ? "#8064A2" : "#939CA3" }}
                  href="#"
                >
                  Join In
                </Link>
              </div>

              <Modal show={showSignIn || showJoinIn} onHide={handleCloseModals}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {showSignIn ? "Sign In" : "Join In"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {showSignIn && (
                    <div>
                      <Button
                        variant="outline-secondary"
                        className="d-flex flex-row align-items-center gap-5 px-5 mb-3 w-100"
                      >
                        <Image src={Google} alt="Google logo" />
                        Continue with Google
                      </Button>
                      <Button
                        variant="outline-secondary"
                        className="d-flex flex-row align-items-center gap-5 px-5 mb-4 w-100"
                      >
                        <Image src={Facebook} alt="Facebook logo" />
                        Continue with Facebook
                      </Button>
                      <div className="d-flex align-items-center gap-2 mb-md-4">
                        <hr className="w-50" />
                        <span className="text-secondary">
                          Or sign in with email
                        </span>
                        <hr className="w-50" />
                      </div>
                      <div className="d-flex flex-column gap-2 mb-4">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>
                      <Button  className="w-100" style={{background:'#8064A2'}}>
                        Sign In
                      </Button>
                    </div>
                  )}
                  {showJoinIn && (
                    <div>
                      <Button
                        variant="outline-secondary"
                        className="d-flex flex-row align-items-center gap-5 px-5 mb-3 w-100"
                      >
                        <Image src={Google} alt="Google logo" />
                        Continue with Google
                      </Button>
                      <Button
                        variant="outline-secondary"
                        className="d-flex flex-row align-items-center gap-5 px-5 mb-4 w-100"
                      >
                        <Image src={Facebook} alt="Facebook logo" />
                        Continue with Facebook
                      </Button>
                      <div className="d-flex align-items-center gap-2 mb-md-4">
                        <hr className="w-50" />
                        <span className="text-secondary">
                          Or join with email
                        </span>
                        <hr className="w-50" />
                      </div>
                      <div className="d-flex flex-column gap-2 mb-4">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>
                      <Button className="w-100" style={{background:'#8064A2'}}>
                        Join In
                      </Button>
                    </div>
                  )}
                </Modal.Body>
              </Modal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
