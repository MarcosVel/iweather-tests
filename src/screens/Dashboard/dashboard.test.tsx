import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse";
import { render, screen, waitFor } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { Dashboard } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Screen: Dashboard", () => {
  it("should show city weather", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "Varginha, MG",
      latitude: 123,
      longitude: 456,
    };

    saveStorageCity(city);

    render(<Dashboard />);

    const cityName = await waitFor(() => screen.findByText(/varginha/i));
    expect(cityName).toBeTruthy();
  });
});
