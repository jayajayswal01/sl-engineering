"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "/window.svg",
      title: "Premium Quality",
      description: "Superior materials and craftsmanship in every project",
      color: "#006bb0"
    },
    {
      icon: "/globe.svg",
      title: "Expert Team",
      description: "Experienced professionals at your service",
      color: "#ff5700"
    },
    {
      icon: "/file.svg",
      title: "Custom Solutions",
      description: "Tailored boundary walls and cover blocks",
      color: "#00b894"
    }
  ];

  return (
    <section className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              Welcome to{" "}
              <span className={styles.highlight}>
                SL ENGINEERINGS
                <span className={styles.accent}>™</span>
              </span>
            </h1>
            <div className={styles.titleDecoration}></div>
          </div>

          <p className={styles.subtitle}>
            Transforming Spaces with Excellence in
            <span className={styles.typingText}>
              {" "}Cover Blocks | Cement Walls | Premium Construction
            </span>
          </p>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureItem} ${index === activeFeature ? styles.active : ''}`}
                style={{"--accent-color": feature.color} as any}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={styles.featureIcon}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className={styles.icon}
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className={styles.featureBackground}></div>
              </div>
            ))}
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </div>

          <div className={styles.cta}>
            <button className={styles.primaryButton}>
              Get Free Quote
              <span className={styles.buttonIcon}>→</span>
            </button>
            <button className={styles.secondaryButton}>
              View Our Work
              <span className={styles.buttonIcon}>↗</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.scrollText}>Scroll to explore</div>
      </div>
    </section>
  );
}
