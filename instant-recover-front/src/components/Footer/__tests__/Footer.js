import { render } from "@testing-library/react";

import Footer from "../Footer";

describe("<Footer />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
