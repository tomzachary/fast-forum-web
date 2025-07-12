import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  it("renders the site logo", () => {
    render(<Footer />);
    expect(screen.getByText("FastForum")).toBeInTheDocument();
  });

  it("renders the copyright", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} FastForum. All rights reserved.`),
    ).toBeInTheDocument();
  });
});
