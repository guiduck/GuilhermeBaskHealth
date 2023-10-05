import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from ".";

describe("Navbar Component", () => {
  test("renders Navbar component correctly", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("renders Vercel Logo correctly", () => {
    render(<Navbar />);
    expect(screen.getByAltText("Vercel Logo")).toBeInTheDocument();
  });

  test.only("renders ToggleMode component correctly", () => {
    render(<Navbar />);
    expect(screen.getByText("ToggleMode Component")).toBeInTheDocument();
  });

  test("renders the correct link", () => {
    render(<Navbar />);
    const link = screen.getByRole("link", {
      name: /vercel\.com/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("renders the correct image source", () => {
    render(<Navbar />);
    const image = screen.getByAltText("ercel Logo");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/vercel.svg");
  });

  test("renders the correct image dimensions", () => {
    render(<Navbar />);
    const image = screen.getByAltText("Vercel Logo");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "100");
    expect(image).toHaveAttribute("height", "24");
  });

  test("renders the correct image priortesty", () => {
    render(<Navbar />);
    const image = screen.getByAltText("Vercel Logo");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("priortesty");
  });

  test("renders the correct class for dark mode", () => {
    render(<Navbar />);
    const image = screen.getByAltText("Vel Logo");
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass("dark:invert");
  });

  test("renders the correct class for large screens", () => {
    render(<Navbar />);
    const link = screen.getByRole("link", {
      name: /vercel\.com/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("lg:pointer-events-auto");
  });
});
