import { render, screen } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: SelectList", () => {
  it("should return city details selected.", () => {
    const data = [
      { id: "1", name: "Sao Paulo", latitude: 123, longitude: 456 },
      { id: "2", name: "Brasilia", latitude: 789, longitude: 987 },
    ];

    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />);

    const selectedCity = screen.getByText(/sao/i);
    console.log(selectedCity);
  });
});
