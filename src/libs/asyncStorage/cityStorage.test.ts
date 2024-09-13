import { getStorageCity } from "./cityStorage";

describe("Storage: CityStorage", () => {
  it("should return null when there is no city in storage", async () => {
    const response = await getStorageCity();

    console.log(response);
  });
});
