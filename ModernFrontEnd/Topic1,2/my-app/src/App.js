import Navbar from "./Navbar";
import Button from "./components/Button";
import Info from "./components/Info";
// import AboutUs from "./components/AboutUs";
// import Contact from "./components/Contact";
import PersonalInfo from "./components/PersonalInfo";

const teammembers = ["Hikmet", "Siri", "Ayaz", "Nezife"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Info>
          <Navbar />
        </Info>

        <Button color="warning" disabled>
          Warning
        </Button>
        <Button color="danger" size="sm" disabled={true}>
          Delete
        </Button>
        <Button color="success" size="lg" disabled>
          Created
        </Button>

        {/* <AboutUs />
        <Contact /> */}

        <PersonalInfo
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
        />
      </header>
    </div>
  );
}

export default App;
