import { render, screen } from "@testing-library/react-native";
import { Input } from ".";

describe("Component: Input", () => {
  it("should render without activity indicator if isLoading prop is undefined", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });
});
