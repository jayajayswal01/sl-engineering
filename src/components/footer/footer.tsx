"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';
import Logo from '../../assets/logo.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  const socialLinks = [
    { name: 'Facebook', icon: '/facebook.svg', url: '#' },
    { name: 'Instagram', icon: '/instagram.svg', url: '#' },
    { name: 'LinkedIn', icon: '/linkedin.svg', url: '#' },
    { name: 'Twitter', icon: '/twitter.svg', url: '#' }
  ];

  const services = [
    'Cover Blocks',
    'Boundary Walls',
    'Compound Walls',
    'Designer Walls',
    'Custom Projects',
    'Construction Materials'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerPattern}></div>
      
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.companyInfo}>
              <div className={styles.logo}>
                <Image
                  src={Logo}
                  alt="SL Engineerings"
                  width={150}
                  height={120}
                />
              </div>
              <p className={styles.description}>
                Leading manufacturer of premium quality cover blocks and innovative boundary wall solutions. 
                Building excellence since 2000.
              </p>
              <div className={styles.social}>
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    className={styles.socialLink}
                    onMouseEnter={() => setIsHovered(social.name)}
                    onMouseLeave={() => setIsHovered('')}
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className={`${styles.socialIcon} ${isHovered === social.name ? styles.socialIconHovered : ''}`}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.quickLinksSection}>
              <h3>Quick Links</h3>
              <ul className={styles.quickLinks}>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.servicesSection}>
              <h3>Our Services</h3>
              <ul className={styles.servicesList}>
                {services.map((service) => (
                  <li key={service}>
                    <span className={styles.serviceItem}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.newsletterSection}>
              <h3>Newsletter</h3>
              <p>Stay updated with our latest products and services</p>
              <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className={styles.emailInput}
                  />
                  <button type="submit" className={styles.subscribeButton}>
                    Subscribe
                  </button>
                </div>
              </form>
              <div className={styles.contact}>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📞</span>
                  <span>+91 9876543210</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>✉️</span>
                  <span>info@slengineerings.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📍</span>
                  <span>Mumbai, Maharashtra - 400001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} SL ENGINEERINGS. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy-policy" className={styles.bottomLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.bottomLink}>
                Terms of Service
              </Link>
              <Link href="/sitemap" className={styles.bottomLink}>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
