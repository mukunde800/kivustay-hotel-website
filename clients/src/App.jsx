import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Restaurant from "./pages/Restaurant";
import Spa from "./pages/Spa";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chambres" element={<Rooms />} />
        <Route path="/chambres/:slug" element={<RoomDetail />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/activites" element={<Activities />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/reservation" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}