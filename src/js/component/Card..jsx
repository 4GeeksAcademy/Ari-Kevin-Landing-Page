import React from "react";

export const Card = () => {
  return (
    <div className="card-group p-4">
      <div className="card p-4">
        <img src="https://picsum.photos/id/27/100/200" class="card-img-top img-fluid" alt="Random Image" style={{ width: "290px", height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae similique nulla dolorum voluptas velit magni deleniti voluptatibus, quisquam mollitia. Culpa impedit fuga doloremque beatae, delectus est quod a sapiente?</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
      </div>
      <div className="card p-4">
        <img src="https://picsum.photos/id/24/200/300" class="card-img-top img-fluid" alt="Random Image" style={{ width: "290px", height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, at voluptates similique minus nulla facere quos impedit doloremque numquam voluptas eos, harum voluptatem eum quis amet tempore quod quo praesentium?</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
      </div>
      <div className="card p-4">
        <img src="https://picsum.photos/id/11/200/300" class="card-img-top img-fluid" alt="Random Image" style={{ width: "290px", height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, non ab eum nesciunt dolor porro possimus assumenda? Ad earum, numquam fugit tempore consectetur aliquam, corrupti, cum fuga omnis reiciendis placeat?</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
      </div>
      <div className="card p-4">
        <img src="https://picsum.photos/id/15/200/300" class="card-img-top img-fluid" alt="Random Image" style={{ width: "290px", height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem magni odio, ratione cupiditate debitis perspiciatis provident ut necessitatibus exercitationem reprehenderit! At, soluta minima atque earum consectetur molestias recusandae ad.</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
      </div>
    </div>
  );
};