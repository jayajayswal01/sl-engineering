"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./products.module.css";
import proImage1 from "../../assets/products/pro1.jpg";
import proImage2 from "../../assets/products/pro2.webp";
import proImage3 from "../../assets/products/pro3.jpg";

import type { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  image: StaticImageData;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Cover Blocks",
    category: "Concrete Spacers",
    description: "High-quality concrete cover blocks ensuring perfect spacing and reinforcement protection",
    features: [
      "Precise dimensions",
      "High strength",
      "Uniform quality",
      "Corrosion resistant"
    ],
    specifications: [
      { label: "Size Range", value: "20mm - 75mm" },
      { label: "Material", value: "High-grade Concrete" },
      { label: "Compressive Strength", value: ">40 N/mm²" },
      { label: "Shape", value: "Circular/Square" }
    ],
    image: proImage1
  },
  {
    id: 2,
    name: "Reinforced Boundary Walls",
    category: "Compound Walls",
    description: "Durable and aesthetic boundary walls for enhanced security and privacy",
    features: [
      "Weather resistant",
      "Customizable height",
      "Long-lasting finish",
      "Easy maintenance"
    ],
    specifications: [
      { label: "Height Range", value: "4ft - 8ft" },
      { label: "Material", value: "RCC" },
      { label: "Design Options", value: "Multiple" },
      { label: "Finish", value: "Smooth/Textured" }
    ],
    image: proImage2
  },
  {
    id: 3,
    name: "Designer Wall Panels",
    category: "Decorative Elements",
    description: "Elegant wall panels for enhanced aesthetic appeal",
    features: [
      "Modern designs",
      "UV resistant",
      "Easy installation",
      "Low maintenance"
    ],
    specifications: [
      { label: "Panel Size", value: "2ft x 2ft" },
      { label: "Material", value: "Fiber Concrete" },
      { label: "Patterns", value: "15+ Options" },
      { label: "Durability", value: "10+ Years" }
    ],
    image: proImage3
  }
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<number>(0);
  const [selectedSpec, setSelectedSpec] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.productsSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Premium Products</h2>
          <p className={styles.subtitle}>
            Discover our range of high-quality construction products crafted with precision and care
          </p>
        </div>

        <div className={styles.productShowcase}>
          <div className={styles.productList}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`${styles.productCard} ${index === activeProduct ? styles.active : ''}`}
                onClick={() => setActiveProduct(index)}
              >
                <div className={styles.productImageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className={styles.productImage}
                  />
                  <div className={styles.category}>{product.category}</div>
                </div>
                
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  
                  <div className={styles.features}>
                    <h4>Key Features</h4>
                    <ul>
                      {product.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className={styles.checkmark}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.specifications}>
                    <h4>Technical Specifications</h4>
                    <div className={styles.specGrid}>
                      {product.specifications.map((spec, idx) => (
                        <div
                          key={idx}
                          className={`${styles.specItem} ${selectedSpec === `${product.id}-${idx}` ? styles.activeSpec : ''}`}
                          onMouseEnter={() => setSelectedSpec(`${product.id}-${idx}`)}
                          onMouseLeave={() => setSelectedSpec("")}
                        >
                          <span className={styles.specLabel}>{spec.label}</span>
                          <span className={styles.specValue}>{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className={styles.inquireButton}>
                    Get Quote
                    <span className={styles.buttonIcon}>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.callToAction}>
          <div className={styles.ctaContent}>
            <h3>Looking for Custom Solutions?</h3>
            <p>We can customize our products to meet your specific requirements</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                Request Custom Quote
                <span className={styles.buttonIcon}>→</span>
              </button>
              <button className={styles.secondaryButton}>
                Download Catalogue
                <span className={styles.buttonIcon}>↓</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
