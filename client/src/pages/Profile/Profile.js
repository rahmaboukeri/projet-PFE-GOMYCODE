import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className="container profile">
      {/* /Breadcrumb */}
      <div className="row">
        <div className="col-md-4 ">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width={150}
                />
                <div className="mt-3">
                  <h4>{user && user.name}</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                  <p className="text-muted font-size-sm">Uknown</p>
                  <button className="btn btn-primary">Follow</button>
                  <button className="btn btn-outline-primary">Message</button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className="col-md-8">
          <div className="card md-8">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.name) || ""}
                </div>
              </div>
              <hr />{" "}
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Last Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.lastName) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.email) || ""}
                </div>
              </div>
              <hr />
                   <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Role</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.role) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.phone) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">Uknown!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
