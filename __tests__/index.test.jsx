// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
// import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Navisatya Student ID Finder/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the table", () => {
    const { getByText } = render(<Home />);
    const td = getByText(/Muhammad Rasyad/);
    expect(td).toHaveTextContent("Muhammad Rasyad C");
  });
});
