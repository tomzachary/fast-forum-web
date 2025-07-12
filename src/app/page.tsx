'use client'
import Button from "@/components/button/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button onClick={() => alert("Button clicked!")} label="Click Me" className={styles.button} />
    </div>
  );
}
