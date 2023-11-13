import { render, screen } from "@testing-library/react";

import Header from ".";

describe("<Header />", () => {
  it("should render the heading", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: /Boilerplate Maroto/i }),
    ).toBeInTheDocument(); // use the toBeInTheDocument matcher
  });
});
