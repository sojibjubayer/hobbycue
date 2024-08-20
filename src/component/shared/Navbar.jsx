import Image from "next/image";
import logo from "@/assets/logo.png";
import Explore from "@/assets/Explore.png";
import Hobbies from "@/assets/Hobbies.png";
// import Bookmark from "@/assets/Bookmark.png";
import Vector from "@/assets/Vector.png";
import Cart from "@/assets/Cart.png";
import "../../app/globals.css";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div
      className="d-flex flex-row gap-4 align-items-center justify-content-between mx-auto"
     
      style={{ width: '90%',height: "80px" }} 
    >
      <div className="d-flex flex-row gap-5">
        <div className="d-flex align-items-center" style={{ height: "80px" }}>
          <Image
            src={logo}
            width={200}
            height={50}
            alt="logo"
            className="d-flex align-items-center "
          />
        </div>

        <div className="d-flex flex-row align-items-center position-relative">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-light custom-input rounded-3 p-2 pe-5 border border-2 border-ligth"
            style={{ width: "300px", height: "40px" }}
          />
          <div
            className="position-absolute end-0 top-50 translate-middle-y d-flex align-items-center"
            style={{
              background: "#8064A2",
              width: "40px",
              height: "40px",
              borderRadius: "0.25rem", // Rounded corners to match Bootstrap's `rounded-end`
            }}
          >
            <IoMdSearch
              className="text-white mx-auto"
              style={{ fontSize: "20px" }}
            />
          </div>
        </div>
      </div>

      <div className="d-flex flex-row gap-5">
        <div className="d-flex flex-row align-items-center">
          <Image src={Explore} width={30} height={30} alt="explore icon" />
          <div className="dropdown">
            <button
              className=" dropdown-toggle border-0 bg-white"
              type=""
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

        <div className="d-flex flex-row align-items-center">
          <Image src={Hobbies} width={30} height={30} alt="explore icon" />
          <div className="dropdown">
            <button
              className=" dropdown-toggle border-0 bg-white"
              type=""
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
        {/* <div className="d-flex align-items-center" style={{ height: "80px" }}>
          <Image src={Bookmark} width={30} height={30} alt="explore icon " />
        </div> */}
        <div className="d-flex align-items-center" style={{ height: "80px" }}>
          <Image src={Vector} width={25} height={25} alt="explore icon " />
        </div>
        <div className="d-flex align-items-center" style={{ height: "80px" }}>
          <Image src={Cart} width={30} height={30} alt="explore icon " />
        </div>
        <div className="d-flex align-items-center" style={{ height: "80px" }}>
          <button type="button" className="btn btn-light border border-2 px-5 ">
            Sign in
          </button>
        </div>
       
          
      </div>
    </div>
  );
};

export default Navbar;
