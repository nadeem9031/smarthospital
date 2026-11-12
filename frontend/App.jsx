
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Service";
import Appointment from "./Appointment";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        onBookAppointment={() => navigate("/appointment")}
        onLogin={() => navigate("/login")}
      />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="services">
                <Services />
              </section>

              <Footer />
            </>
          }
        />

        <Route
          path="/appointment"
          element={<Appointment />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
     <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
