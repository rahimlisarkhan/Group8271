import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ContactDetail() {
  const { contact_id } = useParams();

  const [data, setData] = useState();

  const navigate = useNavigate();

  console.log("contact_id", contact_id);

  //   useEffect(() => {
  //     if (contact_id) {
  //       getMovies(contact_id);
  //     }
  //   }, [contact_id]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      ContactDetail : {contact_id}
    </div>
  );
}

export default ContactDetail;
