"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./home.module.css";

const products = [
  {
    id: 1,
    title: "Cover Blocks",
    description: "Premium quality concrete cover blocks for perfect spacing",
    image: "/cover-blocks.jpg",
    features: ["High Strength", "Precise Dimensions", "Quality Tested"]
  },
  {
    id: 2,
    title: "Boundary Walls",
    description: "Durable and aesthetic cement boundary wall solutions",
    image: "/boundary-wall.jpg",
    features: ["Long Lasting", "Custom Designs", "Professional Installation"]
  },
  {
    id: 3,
    title: "Construction Services",
    description: "Complete construction solutions for your projects",
    image: "/construction.jpg",
    features: ["Expert Team", "Timely Delivery", "Quality Materials"]
  }
];

const achievements = [
  { number: "500+", label: "Projects Completed", color: "#006bb0" },
  { number: "15+", label: "Years Experience", color: "#ff5700" },
  { number: "100%", label: "Client Satisfaction", color: "#00d084" },
  { number: "50+", label: "Expert Team", color: "#9b51e0" }
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleProductClick = useCallback((index: number) => {
    setActiveProduct(index);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className={styles.highlight}>SL ENGINEERINGS</span>
            <span className={styles.tagline}>Building Excellence, Delivering Quality</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trusted partner in premium cover blocks and cement boundary walls
          </motion.p>
          <motion.div 
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className={styles.primaryBtn}>
              Get Free Quote
              <span className={styles.btnIcon}>→</span>
            </button>
            <button className={styles.secondaryBtn}>
              Our Projects
              <span className={styles.btnIcon}>↗</span>
            </button>
          </motion.div>
        </div>
        <div className={styles.heroPattern}></div>
      </section>

      {/* Products Showcase */}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Our Products</h2>
        <div className={styles.productsContainer}>
          <div className={styles.productsList}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className={`${styles.productCard} ${index === activeProduct ? styles.active : ''}`}
                onClick={() => handleProductClick(index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <ul className={styles.features}>
                    {product.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        onMouseEnter={() => setHoveredFeature(fIndex)}
                        onMouseLeave={() => setHoveredFeature(null)}
                        className={hoveredFeature === fIndex ? styles.activeFeature : ''}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={styles.achievementsSection}>
        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={styles.achievementCard}
              style={{ "--accent-color": achievement.color } as any}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className={styles.achievementNumber}>{achievement.number}</span>
              <span className={styles.achievementLabel}>{achievement.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get in touch with our experts for a personalized solution
          </motion.p>
          <motion.button
            className={styles.contactBtn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Contact Us Now
            <span className={styles.btnIcon}>→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
