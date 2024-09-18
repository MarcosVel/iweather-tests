import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse";
import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api";
import { Dashboard } from ".";

describe("Screen: Dashboard", () => {
  it("should show city weather", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "Varginha, MG",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    render(<Dashboard />);

    const cityName = await waitFor(() => screen.findByText(/varginha/i));
    expect(cityName).toBeTruthy();
  });

  it("should show another selected city weather.", async () => {
    const city = {
      id: "1",
      name: "Varginha, MG",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    /**
     * Need to:
     * 1 - fetch weather info of the first selected city
     * 2 - fetch info of the city
     * 3 - fetch weather info of the new city selected
     */

    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const cityName = "Sao Paulo";

    await waitFor(() =>
      act(() => {
        const search = screen.getByTestId("search-input");
        fireEvent.changeText(search, cityName);
      })
    );

    await waitFor(() =>
      act(() => {
        fireEvent.press(screen.getByText(cityName, { exact: false }));
      })
    );

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy();
  });
});
