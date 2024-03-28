import React, { useContext } from "react";
import { globalContext } from "../../../store/global/GlobalProvider";
import { useNavigate } from "react-router-dom";

function Personal() {
  const { setUser } = useContext(globalContext);

  const navigate = useNavigate();

  const handleChangeInfo = () => {
    try {
      const newForm = {
        name: "Seymur",
        email: "seymur@gmail.com",
      };

      // const res = await axios({method:"PUT",data:newForm})

      // // await getMmovie()

      // const userData = res.data
      // setUser(userData);
      setUser(newForm);
      navigate("/contact");
    } catch (err) {
      alert("err");
    }
  };

  return (
    <div>
      <h3>Personal</h3>

      <button onClick={handleChangeInfo}>Change Information</button>
    </div>
  );
}

export default Personal;
