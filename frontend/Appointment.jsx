
import React, { useState } from "react";
import axios from "axios";
import "./Appointment.css";

function Appointment() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: ""
  });

  const doctors = {
    Cardiology: [
      "Dr. Rahul Sharma",
      "Dr. Amit Verma",
      "Dr. Priya Singh"
    ],
    Neurology: [
      "Dr. Anjali Gupta",
      "Dr. Vikram Singh",
      "Dr. Neha Khan"
    ],
    Orthopedics: [
      "Dr. Arjun Kumar",
      "Dr. Rohit Mishra",
      "Dr. Sneha Verma"
    ],
    Dental: [
      "Dr. Ayesha Khan",
      "Dr. Karan Mehta",
      "Dr. Pooja Sharma"
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDepartmentChange = (e) => {
    setFormData({
      ...formData,
      department: e.target.value,
      doctor: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/appointments",
        formData
      );

      alert("Appointment booked successfully!");

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        doctor: "",
        appointmentDate: "",
        appointmentTime: "",
        reason: ""
      });

    } catch (error) {
      console.error("Appointment Error:", error);
      alert("Something went wrong. Please check your backend.");
    }
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">

        <h1>Book Your Appointment</h1>
        <p>Fill in your details to schedule an appointment.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleDepartmentChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Dental">Dental</option>
          </select>

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            disabled={!formData.department}
            required
          >
            <option value="">Select Doctor</option>

            {formData.department &&
              doctors[formData.department].map((doc) => (
                <option key={doc} value={doc}>
                  {doc}
                </option>
              ))}
          </select>

          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />

          <textarea
            name="reason"
            placeholder="Your Message"
            value={formData.reason}
            onChange={handleChange}
          />

          <button type="submit">
            Submit Appointment
          </button>

        </form>
      </div>
    </div>
  );
}

export default Appointment;
