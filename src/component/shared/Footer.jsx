import Link from "next/link";
import React from "react";
import Image from "next/image";
import fb from "@/assets/social/fb.png";
import twitter from "@/assets/social/twitter.png";
import instagram from "@/assets/social/instagram.png";
import pinterest from "@/assets/social/pinterest.png";
import googleplus from "@/assets/social/googleplus.png";
import youtube from "@/assets/social/youtube.png";
import telegram from "@/assets/social/telegram.png";
import mail from "@/assets/social/mail.png";

const Footer = () => {
  return (
    <div>
        <div style={{ width: "90%", margin: "auto" }} className="d-flex flex-column flex-md-row justify-content-between gap-5 py-5">
      <div className="d-flex flex-column ">
        <p className="fw-bold">Hobbycue</p>
        <Link className="text-decoration-none text-dark" href="/about-us">
          About Us
        </Link>
        <Link className="text-decoration-none text-dark" href="/our-services">
          Our Services
        </Link>
        <Link className="text-decoration-none text-dark" href="/Work-with-Us">
          Work with Us
        </Link>
        <Link className="text-decoration-none text-dark" href="/faq">
          FAQ
        </Link>
        <Link className="text-decoration-none text-dark" href="/contact-us">
          Contact Us
        </Link>
      </div>
      <div className="d-flex flex-column ">
        <p className="fw-bold">How Do I</p>
        <Link className="text-decoration-none text-dark" href="/signup">
          Sign Up
        </Link>
        <Link className="text-decoration-none text-dark" href="/Add-a-Listing">
          Add a Listing
        </Link>
        <Link className="text-decoration-none text-dark" href="/Claim Listing">
          Claim Listing
        </Link>
        <Link className="text-decoration-none text-dark" href="/Post a Query">
          Post a Query
        </Link>
        <Link
          className="text-decoration-none text-dark"
          href="/Add a Blog Post"
        >
          Add a Blog Post
        </Link>
        <Link className="text-decoration-none text-dark" href="/Other Queries">
          Other Queries
        </Link>
      </div>
      <div className="d-flex flex-column ">
        <p className="fw-bold">Quick Links</p>
        <Link className="text-decoration-none text-dark" href="/Listings">
          Listings
        </Link>
        <Link className="text-decoration-none text-dark" href="/Blog Posts">
          Blog Posts
        </Link>
        <Link className="text-decoration-none text-dark" href="/Shop / Store">
          Shop / Store
        </Link>
        <Link className="text-decoration-none text-dark" href="/Community">
          Community
        </Link>
      </div>
      <div className="d-flex flex-column ">
        <p className="fw-bold">Social Media</p>
        <div className="d-flex gap-3 gap-md-4 mb-5">
          <Image src={fb} width={20} height={20} alt="fb" />
          <Image src={twitter} width={20} height={20} alt="fb" />
          <Image src={instagram} width={20} height={20} alt="fb" />
          <Image src={pinterest} width={20} height={20} alt="fb" />
          <Image src={googleplus} width={20} height={20} alt="fb" />
          <Image src={youtube} width={20} height={20} alt="fb" />
          <Image src={telegram} width={20} height={20} alt="fb" />
          <Image src={mail} width={20} height={20} alt="fb" />
        </div>
        <p className="fw-bold">Invite Friends</p>
        <div className="d-flex flex-row align-items-center position-relative">
          <input
            type="text"
            placeholder="Email ID"
            className="bg-light custom-input rounded-3 p-2 pe-5 border border-2 border-ligth"
            style={{ width: "300px", height: "40px" }}
          />
          <div
            className="position-absolute end-0 top-50 translate-middle-y  d-flex justify-content-center align-items-center text-white"
            style={{
              background: "#8064A2",
              width: "70px",
              height: "40px",
              borderRadius: "0.25rem", 
            }}
          >
           Invite
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center fw-semibold" style={{height:'78px',background:'#F7F5F9'}} >
            <p>&copy; Purple Cues Private Limited</p>
    </div>
    </div>
  );
};

export default Footer;
