"use client";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Welcome to FastForum</h1>
          <p className={styles.subtitle}>
            The fastest way to connect, share, and grow your community. Modern,
            responsive, and built for speed.
          </p>
          <a href="/signup">
            <button className={styles.cta}>Get Started</button>
          </a>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Why FastForum?</h2>
        <p>
          🚀 Lightning-fast performance
          <br />
          💬 Real-time discussions
          <br />
          🔒 Secure and private
          <br />
          📱 Mobile-friendly design
        </p>
      </section>
      <section className={styles.section}>
        <h2>Join the Conversation</h2>
        <p>
          Sign up today and be part of the next generation forum experience.
        </p>
        <a href="/signup">
          <button className={styles.cta}>Sign Up Free</button>
        </a>
      </section>
    </>
  );
}
