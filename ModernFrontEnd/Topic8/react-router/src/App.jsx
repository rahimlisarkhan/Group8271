import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404";
import ContactDetail from "./pages/Contact/Detail";
import AboutDetail from "./pages/About/Detail";
import Setting from "./pages/Setting";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/Movies/Detail";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} /> */}

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route
          path="/about/:first/:operator/:second"
          element={<AboutDetail />}
        />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:contact_id" element={<ContactDetail />} />

        <Route path="/setting/*" element={<Setting />} />

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
