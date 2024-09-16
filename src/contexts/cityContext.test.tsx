import { useCity } from "@hooks/useCity";
import { renderHook } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
  it("should change selected city", () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });
    console.log(result);
  });
});
