import { render } from "@testing-library/react";

import Header from "../Header";

describe("<Header />", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Should render correctly", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
});
