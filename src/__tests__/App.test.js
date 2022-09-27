import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

const title = "Rick and Morty";
const tagline = `"I'm a scientist because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it."`;

const renderApp = () => render(<App />);

describe(`App`, () => {
  it(`matches snapshot`, () => {
    const { asFragment } = renderApp();

    expect(asFragment()).toMatchSnapshot();
  });

  it(`displays a heading with the text ${title}`, () => {
    renderApp();

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it(`displays a tagline with the text: ${tagline}`, () => {
    renderApp();

    expect(screen.getByText(tagline)).toBeInTheDocument();
  });
});
