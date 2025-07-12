import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders the main heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /about fastforum/i }),
    ).toBeInTheDocument();
  });

  it("renders the hero section with subheading", () => {
    render(<AboutPage />);
    expect(
      screen.getByText(/modern, lightning-fast discussion platform/i),
    ).toBeInTheDocument();
  });

  it('renders the "Our Mission" section', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /our mission/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/open, inclusive, and engaging conversations/i),
    ).toBeInTheDocument();
  });

  it('renders the "What Makes Us Different?" list', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /what makes us different/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/blazing fast performance/i)).toBeInTheDocument();
    expect(
      screen.getByText(/privacy-first and secure by design/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/customizable themes and layouts/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/fully responsive and mobile-friendly/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/open source and community-driven/i),
    ).toBeInTheDocument();
  });

  it('renders the "Join the Conversation" section', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /join the conversation/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/thank you for being part of our journey/i),
    ).toBeInTheDocument();
  });
});
