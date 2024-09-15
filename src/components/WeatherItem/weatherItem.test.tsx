import drop from "@assets/drop.svg";
import { render, screen } from "@testing-library/react-native";
import { WeatherItem } from ".";

describe("Component: WeatherItem", () => {
  it("should show title and value", () => {
    render(<WeatherItem icon={drop} title="Umidade do ar" value="82%" />);

    const title = screen.getByText("Umidade do ar");
    const value = screen.getByText("82%");

    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
