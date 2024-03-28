// import React, { useContext } from "react";
// import { globalContext } from "../../store/global/GlobalProvider";
import { useGlobalStore } from "../../store/global/useGlobalStore";

function ContactInfo() {
  // const { user } = useContext(globalContext);
  const { user } = useGlobalStore();

  return (
    <div>
      <hr />
      ContactInfo: {user.name} {user.email}
      <hr />
    </div>
  );
}

export default ContactInfo;
