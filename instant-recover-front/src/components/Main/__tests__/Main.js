import { render } from "@testing-library/react";

import Main from "../Main";

describe("<Main />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = render(<Main />);
    expect(container).toBeInTheDocument();
  });
});
