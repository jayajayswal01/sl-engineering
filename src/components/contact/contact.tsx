"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./contact.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  productType: string;
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    productType: ""
  });
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📱",
      title: "Phone",
      primary: "+91 9876543210",
      secondary: "+91 9876543211",
      action: "call"
    },
    {
      icon: "📧",
      title: "Email",
      primary: "info@slengineerings.com",
      secondary: "support@slengineerings.com",
      action: "email"
    },
    {
      icon: "📍",
      title: "Address",
      primary: "123 Construction Hub",
      secondary: "Mumbai, Maharashtra - 400001",
      action: "locate"
    }
  ];

  const productTypes = [
    "Cover Blocks",
    "Boundary Walls",
    "Compound Walls",
    "Designer Walls",
    "Custom Projects"
  ];

  return (
    <section className={`${styles.contactSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.contactPattern}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`${styles.infoCard} ${activeInfo === info.title ? styles.active : ''}`}
                  onMouseEnter={() => setActiveInfo(info.title)}
                  onMouseLeave={() => setActiveInfo(null)}
                >
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{info.icon}</span>
                  </div>
                  <div className={styles.infoContent}>
                    <h3>{info.title}</h3>
                    <p className={styles.primaryInfo}>{info.primary}</p>
                    <p className={styles.secondaryInfo}>{info.secondary}</p>
                  </div>
                  <button className={styles.actionButton}>
                    {info.action}
                    <span className={styles.buttonIcon}>→</span>
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.businessHours}>
              <h3>Business Hours</h3>
              <div className={styles.hoursGrid}>
                <div className={styles.hourRow}>
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className={styles.hourRow}>
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className={`${styles.hourRow} ${styles.closed}`}>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="productType">Product Interest</label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a product</option>
                    {productTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
                <span className={styles.buttonIcon}>→</span>
              </button>
            </form>
          </div>
        </div>

        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.8144769244794!2d72.87723!3d19.079907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzQ3LjciTiA3MsKwNTInMzguMCJF!5e0!3m2!1sen!2sin!4v1629789876543!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "20px" }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
