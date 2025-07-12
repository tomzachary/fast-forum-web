import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  it("renders the site logo", () => {
    render(<Header />);
    expect(screen.getByText("FastForum")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });
});

describe("Header (responsive hamburger menu)", () => {
  it("shows hamburger button on mobile", () => {
    // Simulate mobile viewport
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: true,
          addListener: () => {},
          removeListener: () => {},
        };
      };
    render(<Header />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
  });

  it("toggles menu open/close when hamburger is clicked", () => {
    render(<Header />);
    const button = screen.getByLabelText(/open menu/i);
    fireEvent.click(button);
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();
    // The nav should have class "open"
    expect(screen.getByRole("navigation").className).toMatch(/open/);
    fireEvent.click(button);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
  });

  it("closes menu when a link is clicked", () => {
    render(<Header />);
    const button = screen.getByLabelText(/open menu/i);
    fireEvent.click(button);
    const homeLink = screen.getByRole("link", { name: "Home" });
    fireEvent.click(homeLink);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
  });
});
