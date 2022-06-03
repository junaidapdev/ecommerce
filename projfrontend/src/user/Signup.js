import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {

  const signUpForm = () => {
      return(
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light">Name</label>
            <input
              className="form-control"
              // onChange={handleChange("name")}ƒ
              type="text"
              // value={name}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Name</label>
            <input
              className="form-control"
              // onChange={handleChange("name")}ƒ
              type="text"
              // value={name}
            />
          </div>
          <div className="form-group">
            <label className="text-light">email</label>
            <input
              className="form-control"
              // onChange={handleChange("name")}ƒ
              type="email"
              // value={name}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Password</label>
            <input
              className="form-control"
              // onChange={handleChange("name")}ƒ
              type="password"
              // value={name}
            />
          </div>
          <button  className="btn btn-success btn-block">
              Submit
            </button>
        </form>
      </div>
    </div>
      ) 
  };

  return (
    <Base title="Sign Up Page">
        {signUpForm()}
    </Base>
  );
};

export default Signup;
