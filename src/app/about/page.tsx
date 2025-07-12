"use client";
import React from "react";
import styles from "./about.module.scss";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heading}>About FastForum</h1>
        <p className={styles.subheading}>
          FastForum is a modern, lightning-fast discussion platform built for
          vibrant online communities.
        </p>
      </section>
      <section className={styles.content}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p>
          We believe in open, inclusive, and engaging conversations. FastForum
          empowers users to connect, share ideas, and build meaningful
          relationships in a safe and welcoming environment.
        </p>
        <h2 className={styles.sectionTitle}>What Makes Us Different?</h2>
        <ul className={styles.list}>
          <li>⚡ Blazing fast performance and real-time updates</li>
          <li>🔒 Privacy-first and secure by design</li>
          <li>🎨 Customizable themes and layouts</li>
          <li>📱 Fully responsive and mobile-friendly</li>
          <li>🌍 Open source and community-driven</li>
        </ul>
        <h2 className={styles.sectionTitle}>Join the Conversation</h2>
        <p>
          Whether you’re starting a new community or joining an existing one,
          FastForum is here to help you connect and grow. Thank you for being
          part of our journey!
        </p>
      </section>
    </main>
  );
}
