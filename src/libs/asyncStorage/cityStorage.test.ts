import { CityProps } from "@services/getCityByNameService";
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

const newCity: CityProps = {
  id: "123",
  name: "Sao Paulo",
  longitude: 123,
  latitude: 456,
};

describe("Storage: CityStorage", () => {
  it("should return null when there is no city in storage", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should return storage saved city", async () => {
    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should remove city storaged", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});
