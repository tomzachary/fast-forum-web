import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "./page";

describe("ContactPage", () => {
  it("renders the contact form", () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", () => {
    render(<ContactPage />);
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it("shows error for invalid email", () => {
    render(<ContactPage />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "not-an-email" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });

  it("shows success message on valid submit", () => {
    render(<ContactPage />);
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Tom" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "tom@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello!" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(screen.getByText(/thank you for reaching out/i)).toBeInTheDocument();
  });
});
