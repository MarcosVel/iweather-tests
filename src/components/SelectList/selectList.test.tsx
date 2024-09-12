import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: SelectList", () => {
  it("should return city details selected.", () => {
    const data = [
      { id: "1", name: "Sao Paulo", latitude: 123, longitude: 456 },
      { id: "2", name: "Brasilia", latitude: 789, longitude: 987 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/sao/i);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[1]);
  });
});
