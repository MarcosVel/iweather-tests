import clearDay from "@assets/clear_day.svg";
import { render } from "@testing-library/react-native";
import { Day } from ".";

describe("Component: Day", () => {
  it("should render day", () => {
    const { debug } = render(
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

    debug();
  });
});
