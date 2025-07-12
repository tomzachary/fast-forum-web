"use client";
import React, { useState } from "react";
import styles from "./contact.module.scss";

const initialState = { name: "", email: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [k: string]: string } = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Contact Us</h1>
      {submitted ? (
        <div className={styles.success}>
          Thank you for reaching out! We’ll get back to you soon.
        </div>
      ) : null}
      <hr />
      <form onSubmit={handleSubmit} noValidate className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && (
            <div id="name-error" className={styles.error}>
              {errors.name}
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={styles.input}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <div id="email-error" className={styles.error}>
              {errors.email}
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={styles.textarea}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
          />
          {errors.message && (
            <div id="message-error" className={styles.error}>
              {errors.message}
            </div>
          )}
        </div>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </main>
  );
}
