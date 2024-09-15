import { render, screen } from "@testing-library/react-native";
import { NextDays } from ".";
import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should render next days", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            weather: "Limpo",
            min: "11°C",
            max: "20°C",
            icon: clearDay,
          },
          {
            day: "19/07",
            weather: "Nublado",
            min: "13°C",
            max: "18°C",
            icon: clearDay,
          },
          {
            day: "20/07",
            weather: "Limpo",
            min: "20°C",
            max: "31°C",
            icon: clearDay,
          },
          {
            day: "21/07",
            weather: "Limpo",
            min: "30°C",
            max: "36°C",
            icon: clearDay,
          },
          {
            day: "22/07",
            weather: "Limpo",
            min: "30°C",
            max: "34°C",
            icon: clearDay,
          },
        ]}
      />
    );

    expect(screen.getByText("19/07")).toBeTruthy();
  });
});
