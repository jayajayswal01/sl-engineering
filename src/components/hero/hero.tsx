"use client";

import { motion } from "framer-motion";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>
              Welcome to <span className={styles.highlight}>SL ENGINEERINGS</span>
            </h1>
            <p className={styles.tagline}>
              Building Excellence, Delivering Quality
            </p>
          </motion.div>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your trusted partner in premium cover blocks and cement boundary walls
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button type="button" className={styles.primaryBtn}>
              Get Free Quote
              <span className={styles.btnIcon}>→</span>
            </button>
            <button type="button" className={styles.secondaryBtn}>
              Our Projects
              <span className={styles.btnIcon}>↗</span>
            </button>
          </motion.div>
        </div>

        <div className={styles.heroPattern}></div>
      </section>
    </div>
  );
}
