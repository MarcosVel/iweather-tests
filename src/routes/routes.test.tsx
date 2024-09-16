import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse";
import { render } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api";
import { act, screen, waitFor } from "@testing-library/react-native";
import { Routes } from ".";

describe("Routes", () => {
  it("should render Search screen when no city is selected", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/escolha um local/i));
    expect(title).toBeTruthy();
  });

  it("should render Dashboard screen when city is selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "Varginha",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(city.name);
    expect(title).toBeTruthy();
  });
});
