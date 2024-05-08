import React from "react";

export const Card = () => {
  return (
    <div className="card-group p-5">
      <div className="card p-4">
        <img src="https://picsum.photos/id/27/100/200" class="card-img-top img-fluid" alt="Random Image" style={{ width: "290px", height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
      </div>
      <div className="card p-4">
        <img src="https://picsum.photos/id/24/200/300" class="card-img-top img-fluid" alt="Random Image" style={{ width: "290px", height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
      </div>
      <div className="card p-4">
        <img src="https://picsum.photos/id/11/200/300" class="card-img-top img-fluid" alt="Random Image" style={{ width: "290px", height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
      </div>
      <div className="card p-4">
        <img src="https://picsum.photos/id/15/200/300" class="card-img-top img-fluid" alt="Random Image" style={{ width: "290px", height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
      </div>
    </div>
  );
};
