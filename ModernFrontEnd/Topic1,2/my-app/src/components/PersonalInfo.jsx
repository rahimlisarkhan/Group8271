import React from "react";
import PersonalDesc from "./PersonalDesc";
import { totalCount } from "../utils/totalCount";

function PersonalInfo({
  address,
  title,
  imgUrl,
  salary,
  color,
  married,
  desc,
  members,
}) {
  // const { address, title, imgUrl, salary, color, married } = props;

  // const totalKM = address.reduce((sum, item) => sum + item);

  const totalKM = totalCount(address);

  // const marriedStatus = married ? "Evli" : "Subay";
  let marriedStatus = "Subay";

  if (married) {
    marriedStatus = "Evli";
  }

  const profileImage = imgUrl
    ? imgUrl
    : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";

  const content = members?.map((item, index) => (
    <li key={"member" + index}>
      {index + 1} . {item}
    </li>
  ));

  return (
    <div>
      <hr />
      <img width="200" src={profileImage} alt={title + "photo"} />
      {/* <img width="200" src={profileImage} alt={`${title} photo`} /> */}
      <h1>Name: {title}</h1>
      <h2>Maasi: {salary} manat</h2>
      <h3>Aile veziyeti: {marriedStatus}</h3>
      <h3>Sevdiyi reng: {color}</h3>
      <h3>Bu gunki gezdiyi mesafe: {totalKM} km</h3>

      <ul>
        {content}
        {/* {members?.map((item, index) => (
          <li key={"member" + index}>
            {index + 1} . {item}
          </li>
        ))} */}
      </ul>

      <PersonalDesc edu="BDU" desc={desc} />
    </div>
  );
}

export default PersonalInfo;
