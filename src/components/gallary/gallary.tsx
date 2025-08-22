"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./gallary.module.css";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  completionYear: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Boundary Wall",
    category: "Boundary Walls",
    description: "Contemporary boundary wall design with premium finish",
    image: "/gallery/boundary-wall-1.jpg",
    location: "Mumbai, Maharashtra",
    completionYear: "2024"
  },
  {
    id: 2,
    title: "Industrial Cover Blocks",
    category: "Cover Blocks",
    description: "High-strength cover blocks for industrial construction",
    image: "/gallery/cover-blocks-1.jpg",
    location: "Pune, Maharashtra",
    completionYear: "2025"
  },
  {
    id: 3,
    title: "Residential Compound Wall",
    category: "Boundary Walls",
    description: "Elegant compound wall with decorative elements",
    image: "/gallery/compound-wall-1.jpg",
    location: "Bangalore, Karnataka",
    completionYear: "2024"
  },
  {
    id: 4,
    title: "Premium Cover Block Solution",
    category: "Cover Blocks",
    description: "Precision-engineered cover blocks for perfect spacing",
    image: "/gallery/cover-blocks-2.jpg",
    location: "Delhi, NCR",
    completionYear: "2025"
  },
  {
    id: 5,
    title: "Commercial Complex Wall",
    category: "Boundary Walls",
    description: "High-security boundary wall for commercial complex",
    image: "/gallery/commercial-wall.jpg",
    location: "Hyderabad, Telangana",
    completionYear: "2024"
  },
  {
    id: 6,
    title: "Specialized Cover Blocks",
    category: "Cover Blocks",
    description: "Custom cover blocks for special applications",
    image: "/gallery/cover-blocks-3.jpg",
    location: "Chennai, Tamil Nadu",
    completionYear: "2025"
  }
];

const categories = ["All", "Boundary Walls", "Cover Blocks"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredItems = selectedCategory === "All"
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <section className={`${styles.gallerySection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Project Gallery</h2>
          <p className={styles.subtitle}>
            Explore our completed projects and quality workmanship
          </p>
        </div>

        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={styles.galleryItem}
              onClick={() => {
                setSelectedItem(item);
                setIsModalOpen(true);
              }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <button className={styles.viewButton}>
                    View Project
                    <span className={styles.buttonIcon}>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedItem && (
          <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button 
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
              <div className={styles.modalImageWrapper}>
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.modalImage}
                />
              </div>
              <div className={styles.modalInfo}>
                <span className={styles.modalCategory}>{selectedItem.category}</span>
                <h3 className={styles.modalTitle}>{selectedItem.title}</h3>
                <p className={styles.modalDescription}>{selectedItem.description}</p>
                <div className={styles.projectDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Location</span>
                    <span className={styles.detailValue}>{selectedItem.location}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Completion Year</span>
                    <span className={styles.detailValue}>{selectedItem.completionYear}</span>
                  </div>
                </div>
                <button className={styles.inquireButton}>
                  Request Similar Project
                  <span className={styles.buttonIcon}>→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={styles.callToAction}>
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss your requirements and create something amazing together</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              Get Free Consultation
              <span className={styles.buttonIcon}>→</span>
            </button>
            <button className={styles.secondaryButton}>
              View More Projects
              <span className={styles.buttonIcon}>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
