import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.logo}>FastForum</div>
        <nav className={styles.nav}>
            <a href="/" className={styles.link}>Home</a>
            <a href="/about" className={styles.link}>About</a>
            <a href="/contact" className={styles.link}>Contact</a>
        </nav>
    </header>
};

export default Header;