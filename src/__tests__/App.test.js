import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

const renderApp = () => render(<App />);

describe(`App`, () => {
  it(`matches snapshot`, () => {
    const { asFragment } = renderApp();

    expect(asFragment()).toMatchSnapshot();
  });

});
