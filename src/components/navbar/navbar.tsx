"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          SL ENGINEERINGS
        </Link>

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/products" className={styles.navLink}>
            Products
          </Link>
          <Link href="/gallery" className={styles.navLink}>
            Gallery
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
