import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

//? "/chat/room_id/user_id/messages"

function AboutDetail() {
  const a = useParams();

  const [data, setData] = useState();

  console.log("contact_id", a);

  return <div>AboutDetail</div>;
}

export default AboutDetail;
