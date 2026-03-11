// Services.jsx
import { useState } from "react";
import { Users, X, ChevronRight } from "lucide-react";
import cardiologyImg  from "../assets/services/cardiology.png";
import neurologyImg   from "../assets/services/neurology.png";
import dermatologyImg from "../assets/services/dermatology.png";
import emergencyImg   from "../assets/services/emergency.png";
import pediatricsImg  from "../assets/services/pediatrics.png";
import radiologyImg   from "../assets/services/radiology.png";
import "./Services.css";

export function Services() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  const specialties = [
    {
      id: 1,
      name: "Cardiology",
      image: cardiologyImg,
      description:
        "Expert diagnosis and treatment of heart conditions including hypertension, arrhythmias, and complex cardiac procedures using advanced imaging techniques.",
      doctorsCount: 8,
      conditions: ["Coronary Artery Disease", "Heart Failure", "Arrhythmias", "Hypertension", "Valvular Heart Disease"],
      procedures: ["Echocardiography", "Cardiac Catheterization", "Angioplasty & Stenting", "Pacemaker Implantation", "Stress Testing"],
      availability: "Mon–Sat, 8am–8pm",
      color: "#dc2626",
      lightColor: "#fef2f2",
    },
    {
      id: 2,
      name: "Neurology",
      image: neurologyImg,
      description:
        "Comprehensive care for disorders of the brain, spinal cord, and nervous system including stroke, epilepsy, Parkinson's disease, and migraines.",
      doctorsCount: 6,
      conditions: ["Stroke & TIA", "Epilepsy", "Parkinson's Disease", "Multiple Sclerosis", "Migraines"],
      procedures: ["MRI & CT Neuroimaging", "EEG Monitoring", "Nerve Conduction Studies", "Lumbar Puncture", "Deep Brain Stimulation"],
      availability: "Mon–Fri, 9am–6pm",
      color: "#7c3aed",
      lightColor: "#f5f3ff",
    },
    {
      id: 3,
      name: "Dermatology",
      image: dermatologyImg,
      description:
        "Full-spectrum skin care covering medical, surgical, and cosmetic dermatology including acne, eczema, psoriasis, and advanced laser therapies.",
      doctorsCount: 5,
      conditions: ["Acne & Rosacea", "Eczema & Psoriasis", "Skin Cancer", "Alopecia", "Vitiligo"],
      procedures: ["Dermoscopy", "Skin Biopsy", "Laser Therapy", "Chemical Peels", "Cryotherapy"],
      availability: "Mon–Sat, 10am–5pm",
      color: "#b45309",
      lightColor: "#fffbeb",
    },
    {
      id: 4,
      name: "Emergency & Trauma",
      image: emergencyImg,
      description:
        "24/7 emergency care for life-threatening conditions, major trauma, acute injuries, and critical medical events with rapid-response specialist teams.",
      doctorsCount: 12,
      conditions: ["Chest Pain & MI", "Stroke Emergencies", "Severe Trauma", "Burns", "Respiratory Failure"],
      procedures: ["Advanced Life Support", "Emergency Surgery", "Trauma Resuscitation", "Intubation & Ventilation", "Emergency Imaging"],
      availability: "Open 24/7, 365 days",
      color: "#c2410c",
      lightColor: "#fff7ed",
    },
    {
      id: 5,
      name: "Pediatrics",
      image: pediatricsImg,
      description:
        "Dedicated medical care for infants, children, and adolescents including vaccinations, developmental assessments, and treatment of childhood illnesses.",
      doctorsCount: 9,
      conditions: ["Respiratory Infections", "Childhood Asthma", "Developmental Delays", "Nutritional Disorders", "Childhood Diabetes"],
      procedures: ["Well-child Checkups", "Immunisations", "Growth Monitoring", "Developmental Screening", "Allergy Testing"],
      availability: "Mon–Sat, 8am–7pm",
      color: "#15803d",
      lightColor: "#f0fdf4",
    },
    {
      id: 6,
      name: "Radiology",
      image: radiologyImg,
      description:
        "Advanced MRI, CT scans, X-rays, ultrasound, and PET scan imaging with precise radiologist interpretation to guide your treatment plan.",
      doctorsCount: 7,
      conditions: ["Tumour Detection", "Fracture Diagnosis", "Organ Assessment", "Vascular Imaging", "Chest Conditions"],
      procedures: ["MRI Scanning", "CT Scanning", "Digital X-ray", "Ultrasound", "PET-CT"],
      availability: "Mon–Sat, 7am–9pm",
      color: "#1d4ed8",
      lightColor: "#eff6ff",
    },
  ];

  return (
    <div className="services">

      {/* Page Header */}
      <section className="services-hero">
        <h1>Services &amp; Specialties</h1>
        <p>
          We offer a wide range of medical specialties with expert doctors and
          advanced facilities to provide the best possible care.
        </p>
      </section>

      {/* Specialties Grid */}
      <section className="specialties-section">
        <div className="specialties-container">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="specialty-card"
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {/* Image */}
              <div className="specialty-img-wrap">
                <img
                  src={specialty.image}
                  alt={specialty.name}
                  className="specialty-img"
                />
              </div>

              {/* Body */}
              <div className="specialty-body">
                <h3>{specialty.name}</h3>
                <p>{specialty.description}</p>
              </div>

              {/* Footer */}
              <div className="specialty-footer">
                <span className="specialty-doctors">
                  <Users size={14} />
                  {specialty.doctorsCount} Doctors
                </span>
                <span className="specialty-more">
                  View Details <ChevronRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal — expanded detail view */}
      {selectedSpecialty && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedSpecialty(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="modal-header"
              style={{ backgroundColor: selectedSpecialty.color }}
            >
              <div className="modal-header-content">
                <img
                  src={selectedSpecialty.image}
                  alt={selectedSpecialty.name}
                  className="modal-img"
                />
                <div>
                  <h2>{selectedSpecialty.name}</h2>
                  <p>{selectedSpecialty.description}</p>
                  <div className="modal-meta">
                    <span>
                      <Users size={14} />
                      {selectedSpecialty.doctorsCount} Doctors
                    </span>
                    <span>🕐 {selectedSpecialty.availability}</span>
                  </div>
                </div>
              </div>
              <button
                className="modal-close"
                onClick={() => setSelectedSpecialty(null)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Conditions */}
              <div className="modal-section">
                <h4>Conditions Treated</h4>
                <div className="modal-tags">
                  {selectedSpecialty.conditions.map((c) => (
                    <span
                      key={c}
                      className="modal-tag"
                      style={{
                        color: selectedSpecialty.color,
                        backgroundColor: selectedSpecialty.lightColor,
                        border: `1px solid ${selectedSpecialty.color}44`,
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Procedures */}
              <div className="modal-section">
                <h4>Procedures &amp; Services</h4>
                <ul className="modal-list">
                  {selectedSpecialty.procedures.map((p) => (
                    <li key={p}>
                      <ChevronRight
                        size={14}
                        style={{ color: selectedSpecialty.color }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="modal-cta">
                <button className="btn-primary">Book Appointment</button>
                <button className="btn-secondary">Call: (555) 123-4567</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
