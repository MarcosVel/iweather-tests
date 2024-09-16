import { render } from "@testing-library/react-native";
import { Routes } from ".";

describe("Routes", () => {
  it("should render Search screen when no city is selected", () => {
    const { debug } = render(<Routes />);
    debug();
  });
});
