"use client";

import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((v) => !v);
  const handleClose = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>FastForum</div>
      <button
        className={styles.menuButton}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={handleToggle}
      >
        <svg className={styles.menuIcon} viewBox="0 0 24 24">
          {open ? (
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <Link href="/" className={styles.link} onClick={handleClose}>
          Home
        </Link>
        <Link href="/about" className={styles.link} onClick={handleClose}>
          About
        </Link>
        <Link href="/contact" className={styles.link} onClick={handleClose}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
