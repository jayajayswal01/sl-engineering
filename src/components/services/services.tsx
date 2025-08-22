"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./services.module.css";

interface ServiceType {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

const services: ServiceType[] = [
  {
    id: 1,
    title: "Decorative Exterior Coverings",
    description: "Transform your property's appearance with our premium exterior coverings that blend aesthetics with durability.",
    features: [
      "Custom design patterns",
      "Weather-resistant materials",
      "Modern finishes",
      "Long-lasting appeal"
    ],
    icon: "🏗️",
    image: "/decorative-covering.jpg"
  },
  {
    id: 2,
    title: "Functional Waterproofing & Finishing",
    description: "Comprehensive waterproofing solutions that protect your structure while maintaining its aesthetic appeal.",
    features: [
      "Advanced waterproofing technology",
      "Seamless application",
      "UV resistant coating",
      "Quality finish"
    ],
    icon: "💧",
    image: "/waterproofing.jpg"
  },
  {
    id: 3,
    title: "Concrete Block Retaining Walls",
    description: "Engineered retaining walls that combine strength with style for effective land management.",
    features: [
      "High-strength blocks",
      "Custom height options",
      "Drainage systems",
      "Professional installation"
    ],
    icon: "🏢",
    image: "/retaining-wall.jpg"
  },
  {
    id: 4,
    title: "Boundary Wall Types",
    description: "Diverse range of boundary wall solutions tailored to meet your security and aesthetic needs.",
    features: [
      "Multiple design options",
      "Security features",
      "Durable construction",
      "Customizable heights"
    ],
    icon: "🏰",
    image: "/boundary-wall.jpg"
  },
  {
    id: 5,
    title: "Modern Fence Walls with Cement Pillars",
    description: "Contemporary fence designs with robust cement pillars for enhanced security and modern appeal.",
    features: [
      "Contemporary designs",
      "Reinforced pillars",
      "Integrated lighting options",
      "Low maintenance"
    ],
    icon: "🏛️",
    image: "/modern-fence.jpg"
  },
  {
    id: 6,
    title: "Interlocking Concrete Block Wall",
    description: "Innovative interlocking block systems for quick and sturdy wall construction.",
    features: [
      "Quick installation",
      "Perfect alignment",
      "Cost-effective",
      "Strength & durability"
    ],
    icon: "🧱",
    image: "/interlocking-wall.jpg"
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.servicesSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Comprehensive Services</h2>
          <p className={styles.subtitle}>
            Discover our wide range of professional construction solutions tailored to your needs
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${index === activeService ? styles.active : ''}`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className={hoveredFeature === feature ? styles.activeFeature : ''}
                      onMouseEnter={() => setHoveredFeature(feature)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <span className={styles.featureIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={styles.learnMoreBtn}>
                  Learn More
                  <span className={styles.btnIcon}>→</span>
                </button>
              </div>
              <div className={styles.serviceImageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.serviceImage}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <div className={styles.ctaContent}>
            <h3>Ready to Transform Your Space?</h3>
            <p>Get in touch with us for a free consultation and quote</p>
            <button className={styles.ctaButton}>
              Request Quote
              <span className={styles.btnIcon}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
