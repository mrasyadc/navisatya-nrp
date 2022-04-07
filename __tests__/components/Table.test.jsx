import { render, screen } from "@testing-library/react";
import Table from "../../components/Table";
// import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
  it("renders a table", () => {
    const { getByText } = render(<Table />);
    const td = getByText(/Muhammad Rasyad/);
    expect(td).toHaveTextContent("Muhammad Rasyad C");
  });
});
