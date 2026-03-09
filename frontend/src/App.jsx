import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDarshan from "./pages/BookDarshan";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookDarshan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;