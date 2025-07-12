import React from "react";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <span className={styles.logo}>FastForum</span>
      <span className={styles.copy}>
        &copy; {new Date().getFullYear()} FastForum. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
