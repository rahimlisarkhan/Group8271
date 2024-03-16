import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404";
import ContactDetail from "./pages/Contact/Detail";
import AboutDetail from "./pages/About/Detail";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/about/:first/:operator/:second"
          element={<AboutDetail />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:contact_id" element={<ContactDetail />} />

        {/* <Route path="/chats" element={<ChatRoom />} />
        <Route path="/chats/room" element={<ChatRoom />} />
        <Route path="/chats/room/:room_id" element={<ChatRoom />} />
        <Route path="/chat/connect/:room_id/user_id/messages" element={<ChatDetail />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
