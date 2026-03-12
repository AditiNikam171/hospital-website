import "./Doctors.css";

const doctors = [
  {
    name: "Dr. Amit Sharma",
    qualification: "MBBS, MD Cardiology",
    experience: "12 Years",
    specialization: "Cardiology",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Dr. Neha Patel",
    qualification: "MBBS, MD Neurology",
    experience: "10 Years",
    specialization: "Neurology",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Dr. Rahul Desai",
    qualification: "MBBS, MD Dermatology",
    experience: "9 Years",
    specialization: "Dermatology",
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    name: "Dr. Priya Mehta",
    qualification: "MBBS, MD Pediatrics",
    experience: "11 Years",
    specialization: "Pediatrics",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Dr. Arjun Kapoor",
    qualification: "MBBS, MD Radiology",
    experience: "13 Years",
    specialization: "Radiology",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Dr. Sneha Kulkarni",
    qualification: "MBBS, MD Physiology",
    experience: "8 Years",
    specialization: "Physiology",
    image: "https://randomuser.me/api/portraits/women/51.jpg"
  },
  {
    name: "Dr. Vikram Singh",
    qualification: "MBBS, MD Cardiology",
    experience: "15 Years",
    specialization: "Cardiology",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Dr. Ananya Rao",
    qualification: "MBBS, MD Pediatrics",
    experience: "7 Years",
    specialization: "Pediatrics",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  }
];

function Doctors() {
  return (
    <div className="doctor-page">
      <h1>Our Medical Specialists</h1>

      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.image} alt={doc.name} />

            <h3>{doc.name}</h3>
            <p className="specialization">{doc.specialization}</p>

            <p><strong>Qualification:</strong> {doc.qualification}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;