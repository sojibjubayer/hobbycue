import Image from "next/image";
import React from "react";
import { HiUserGroup } from "react-icons/hi2";
import Event from "@/assets/Event.png";
import Basket from "@/assets/Basket.png";
import Location from "@/assets/Location.png";
import Group from "@/assets/Group.png";

const Card = () => {
  
  return (
    <div className="my-5 mx-auto" style={{ width: "90%" }}>
      <div className="d-flex flex-column flex-md-row gap-4 my-3">
        <div className="card w-100 w-md-50">
          <div className="card-body ps-5">
            <h5 className="card-title fw-bold">
            <Image src={Group} width={30} height={20} alt="event" className="me-3" />
              People
            </h5>
            <p className="card-text">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <div
              className="d-flex align-items-center"
              style={{ height: "80px" }}
            >
              <button
                type="button"
                className="btn border border-2 border-secondary px-5 text-secondary"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
        <div className="card w-100 w-md-50">
          <div className="card-body ps-5">
            <h5 className="card-title  fw-bold">
            <Image src={Location} width={30} height={30} alt="event" className="me-3" />
              Place
            </h5>
            <p className="card-text">
            Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
            </p>
            <div
              className="d-flex align-items-center"
              style={{ height: "80px" }}
            >
              <button
                type="button"
                className="btn border border-2 border-secondary px-5 text-secondary"
              >
                Meet up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row gap-4 my-3">
        <div className="card w-100 w-md-50 ">
          <div className="card-body ps-5">
            <h5 className="card-title  fw-bold">
            <Image src={Basket} width={30} height={30} alt="event" className="me-3" />
              Product
            </h5>
            <p className="card-text">
            Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
            </p>
            <div
              className="d-flex align-items-center"
              style={{ height: "80px" }}
            >
              <button
                type="button"
                className="btn border border-2 border-secondary px-5 text-secondary"
              >
                Get it
              </button>
            </div>
          </div>
        </div>
        <div className="card w-100 w-md-50 ">
          <div className="card-body ps-5">
            <h5 className="card-title  fw-bold">
              <Image src={Event} width={30} height={30} alt="event" className="me-3" />
              Program
            </h5>
            <p className="card-text">
            Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
            </p>
            <div
              className="d-flex align-items-center"
              style={{ height: "80px" }}
            >
              <button
                type="button"
                className="btn border border-2 border-secondary px-5 text-secondary"
              >
                Attend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
