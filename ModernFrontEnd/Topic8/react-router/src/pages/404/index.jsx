import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      NotFound
      <button onClick={() => navigate(-1)}>Ana sehifeyte qayit</button>
    </div>
  );
}

export default NotFound;
