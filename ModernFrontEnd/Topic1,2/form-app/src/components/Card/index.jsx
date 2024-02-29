import React from "react";

function Card({
  photo,
  title = "Title",
  subtitle = "SubTitle",
  btnTitle = "Address",
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={photo} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subtitle}</p>
        <a href="#" className="btn btn-primary">
          {btnTitle}
        </a>
      </div>
    </div>
  );
}

export default Card;
