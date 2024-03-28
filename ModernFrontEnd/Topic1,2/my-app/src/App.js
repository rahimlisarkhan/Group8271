import { useState } from "react";
import Navbar from "./Navbar";
import AdvanceComponent from "./components/AdvanceComponent";
import Button from "./components/Button";
import ContactUs from "./components/ContactUs";
import Form from "./components/ContactUs/Form";
import EventsComponent from "./components/EventsComponent";
import Info from "./components/Info";
import ParentCallback from "./components/ParentCallback/ParentCallback";
// import AboutUs from "./components/AboutUs";
// import Contact from "./components/Contact";
import PersonalInfo from "./components/PersonalInfo";
import Employees from "./components/Employees";

const teammembers = ["Hikmet", "Siri", "Ayaz", "Nezife"];

function App() {
  const [employees, setEmployees] = useState([]);

  const handlePersonal = (personal) => {
    console.log("personal", personal);

    const newData = [...employees, personal];
    setEmployees(newData);
  };


  

  console.log("employees", employees);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Form onSubmit={handlePersonal} />

          <Employees list={employees} />
        </div>

        {/* <ContactUs /> */}

        {/* <ParentCallback /> */}
        {/* <EventsComponent /> */}
        {/* <AdvanceComponent /> */}

        {/* <Info>
          <Navbar />
        </Info>

        <Info>Sirrus</Info>

        <Info>
          <div>Salam</div>
        </Info> */}

        {/* <Button color="warning" disabled>
          Warning
        </Button>
        <Button color="danger" size="sm" disabled={true}>
          Delete
        </Button>
        <Button color="success" size="lg" disabled>
          Created
        </Button> */}

        {/* <AboutUs />
        <Contact /> */}

        {/* <PersonalInfo
          color="red"
          title="Seymur"
          salary={3000}
          address={[1, 2, 3, 4]}
          members={teammembers}
          married={false}
          imgUrl={
            "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707955200&semt=ais"
          }
          desc="Lorem ipsum ipsum"
        />

        <PersonalInfo
          color="Blue"
          title="Nurlana"
          salary={4000}
          address={[1, 1, 1, 1]}
          married={true}
          desc="Lorem ipsum ipsum"
          members={teammembers}
        /> */}
      </header>
    </div>
  );
}

export default App;
