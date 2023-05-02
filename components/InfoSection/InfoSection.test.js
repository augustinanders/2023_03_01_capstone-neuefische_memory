import React from "react";
import { render, act } from "@testing-library/react";

import InfoSection from "./index";
import store from "../../zustand/store";

test("displays the number of failed attempts correctly", () => {
  store.setState({ numFailedAttempts: 2 });
  const { getByText } = render(<InfoSection />);
  expect(getByText(/🤯 failed: 2x/)).toBeInTheDocument();
});

test("updates when the number of failed attempts changes", () => {
  act(() => {
    store.setState({ numFailedAttempts: 2 });
  });

  const { getByText, rerender } = render(<InfoSection />);
  expect(getByText(/🤯 failed: 2x/)).toBeInTheDocument();

  act(() => {
    store.setState({ numFailedAttempts: 3 });
  });
  rerender(<InfoSection />);
  expect(getByText(/🤯 failed: 3x/)).toBeInTheDocument();
});
