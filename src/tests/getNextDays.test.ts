import { getNextDays } from "@utils/getNextDays";

it("should return the next five days", () => {
  const days = getNextDays();

  console.log(days);
  expect(days.length).toBe(5);
});
