import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { Search } from ".";

describe("Screen: Search", () => {
  it("should show city option.", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    render(<Search />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.changeText(searchInput, "Sao Paulo");

    const option = await waitFor(() => screen.findByText(/sao paulo/i));
    expect(option).toBeTruthy();
  });
});
