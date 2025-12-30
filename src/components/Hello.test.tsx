// src/components/Greeting.test.tsx
import { render, screen } from "@testing-library/react";
import Greeting from "./HelloWorld";

describe("Greeting component", () => {
  it("renders the correct greeting text", () => {
    render(<Greeting name="Petter" />);
    expect(screen.getByText("Hello, Petter!")).toBeInTheDocument();
  });
});
