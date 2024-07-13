import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// Smoke test for App
it("renders without crashing", function() {
        render(<App />)
    }
    );

// Snapshot test for App, renders the same each time
it("matches snapshot", function() {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});