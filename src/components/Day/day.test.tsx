import clearDay from "@assets/clear_day.svg";
import { render, screen } from "@testing-library/react-native";
import { Day } from ".";

describe("Component: Day", () => {
  it("should render day", () => {
    render(
      <Day
        data={{
          day: "18/07",
          weather: "Limpo",
          min: "30°C",
          max: "34°C",
          icon: clearDay,
        }}
      />
    );

    expect(screen.getByText("18/07")).toBeTruthy();
  });
});
