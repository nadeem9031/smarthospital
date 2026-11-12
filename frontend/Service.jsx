import React, { useState } from "react";
import "./Service.css";

function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const services = [{
            number: "01",
            title: "Cardiology",
            description: "Expert care for your heart and cardiovascular health.",
            details: "Our Cardiology department provides comprehensive heart care, including ECG, heart checkups, blood pressure management, diagnosis of heart diseases and personalized treatment by experienced cardiologists."
        },
        {
            number: "02",
            title: "Neurology",
            description: "Advanced diagnosis and treatment of brain disorders.",
            details: "Our Neurology department specializes in diagnosing and treating brain, spinal cord and nervous system disorders, including headaches, epilepsy, stroke and nerve problems."
        },
        {
            number: "03",
            title: "Orthopedics",
            description: "Complete care for bones, joints and muscles.",
            details: "We provide expert treatment for bone fractures, joint pain, arthritis, sports injuries and muscle problems with modern diagnostic and treatment facilities."
        },
        {
            number: "04",
            title: "Dental Care",
            description: "Professional dental treatment for a healthy smile.",
            details: "Our Dental Care department offers dental examinations, teeth cleaning, fillings, root canal treatment and other services to maintain healthy teeth and gums."
        },
        {
            number: "05",
            title: "Pediatrics",
            description: "Specialized healthcare for infants and children.",
            details: "Our Pediatrics department provides healthcare for infants and children, including regular health checkups, vaccination, growth monitoring and treatment of childhood illnesses."
        },
        {
            number: "06",
            title: "Eye Care",
            description: "Complete eye examination and vision treatment.",
            details: "Our Eye Care department provides vision testing, eye examinations, diagnosis of eye conditions and treatment recommendations to maintain healthy eyesight."
        }
    ];

    return ( <
        section className = "services"
        id = "services" >

        <
        div className = "services-heading" >
        <
        span > OUR SERVICES < /span> <
        h2 > Our Medical Services < /h2> <
        p >
        We provide quality healthcare services with experienced doctors and modern medical facilities. <
        /p> <
        /div>

        <
        div className = "services-container" >

        {
            services.map((service) => ( <
                div className = "service-card"
                key = { service.number } >

                <
                div className = "service-number" > { service.number } <
                /div>

                <
                h3 > { service.title } < /h3>

                <
                p > { service.description } < /p>

                <
                button className = "read-more"
                onClick = {
                    () => setSelectedService(service) } >
                Read More→ <
                /button>

                <
                /div>
            ))
        }

        <
        /div>

        {
            selectedService && ( <
                div className = "service-modal-overlay"
                onClick = {
                    () => setSelectedService(null) } >
                <
                div className = "service-modal"
                onClick = {
                    (e) => e.stopPropagation() } >

                <
                button className = "close-modal"
                onClick = {
                    () => setSelectedService(null) } >
                ×
                <
                /button>

                <
                span > { selectedService.number } < /span>

                <
                h2 > { selectedService.title } < /h2>

                <
                p > { selectedService.details } < /p>

                <
                button className = "modal-btn"
                onClick = {
                    () => setSelectedService(null) } >
                Close <
                /button>

                <
                /div> <
                /div>
            )
        }

        <
        /section>
    );
}

export default Services;