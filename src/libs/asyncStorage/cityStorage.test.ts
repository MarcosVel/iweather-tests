import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, saveStorageCity } from "./cityStorage";

describe("Storage: CityStorage", () => {
  it("should return null when there is no city in storage", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should return storage saved city", async () => {
    const newCity: CityProps = {
      id: "123",
      name: "Sao Paulo",
      longitude: 123,
      latitude: 456,
    };

    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });
});
