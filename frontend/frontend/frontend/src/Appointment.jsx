
import React, { useState } from "react";
import "./Appointment.css";

function Appointment() {

  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  // Send appointment data to Spring Boot
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(appointment)
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Appointment booking failed");
      }

      const data = await response.json();

      alert("Appointment booked successfully!");

      console.log("Saved appointment:", data);

      // Clear form
      setAppointment({
        name: "",
        email: "",
        phone: "",
        doctor: "",
        appointmentDate: "",
        appointmentTime: "",
        reason: ""
      });

    } catch (error) {
      console.error("Backend Error:", error);
      alert("Booking failed: " + error.message);
    }
  };

  return (
    <div className="appointment-page">

      <div className="appointment-container">

        <h1>Book an Appointment</h1>

        <p className="appointment-subtitle">
          Choose your doctor and appointment time
        </p>

        <form onSubmit={handleSubmit}>

          <label>Patient Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter patient name"
            value={appointment.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={appointment.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={appointment.phone}
            onChange={handleChange}
            required
          />

          <label>Select Doctor</label>

          <select
            name="doctor"
            value={appointment.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Choose Doctor</option>

            <option value="Dr. Rahul Sharma">
              Dr. Rahul Sharma - Cardiologist
            </option>

            <option value="Dr. Priya Singh">
              Dr. Priya Singh - Neurologist
            </option>

            <option value="Dr. Amit Kumar">
              Dr. Amit Kumar - Orthopedic
            </option>

            <option value="Dr. Anil Kumar">
              Dr. Anil Kumar - Neuro Surgeon
            </option>

            <option value="Dr. Neha Verma">
              Dr. Neha Verma - General Physician
            </option>
          </select>

          <label>Appointment Date</label>

          <input
            type="date"
            name="appointmentDate"
            value={appointment.appointmentDate}
            onChange={handleChange}
            min={new Date().toLocaleDateString("en-CA")}
            required
          />

          <label>Appointment Time</label>

          <input
            type="time"
            name="appointmentTime"
            value={appointment.appointmentTime}
            onChange={handleChange}
            required
          />

          <label>Reason for Visit</label>

          <textarea
            name="reason"
            placeholder="Describe your problem..."
            rows="4"
            value={appointment.reason}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Book Appointment
          </button>

        </form>

      </div>

    </div>
  );
}

export default Appointment;
