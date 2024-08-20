import React from "react";
import Image from "next/image";
import Add from "@/assets/Add.png";


const AddYourOwn = () => {
  return (
    <div style={{backgroundColor:'#F7FDFF'}} className="my-5 py-5">
        <div style={{width:'90%',margin:'auto'}} >
      <div className="card w-100 ">
        <div className="card-body ps-5">
          <h5 className="card-title  fw-bold">
            <Image
              src={Add}
              width={30}
              height={30}
              alt="event"
              className="me-3"
            />
            Add your own
          </h5>
          <p className="card-text">
          Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
          </p>
          <div className="d-flex align-items-center" style={{ height: "80px" }}>
            <button
              type="button"
              className="btn border border-2 border-secondary px-5 text-secondary"
            >
              Add New
            </button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default AddYourOwn;
