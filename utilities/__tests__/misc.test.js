import { addCommas, formatDate } from "../misc";

describe("mics utilities", () => {
  it.each([
    [1, "1"],
    [1.2, "1.2"],
    [12, "12"],
    [123, "123"],
    [1234, "1,234"],
    [1234.65, "1,234.65"],
  ])("addCommas should work correctly when price is: %i", (price, expected) => {
    expect(addCommas(price)).toBe(expected);
  });

  it("formatDate should work correctly when date is given", () => {
    const date = new Date(1658135118916);
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("2022-07-18");
  });

  it("formatDate should work correctly when 'now' is given", () => {
    const date = new Date();
    const formattedDate = formatDate("now");
    expect(new Date(formattedDate).toString().slice(0, 15)).toStrictEqual(
      date.toString().slice(0, 15)
    );
  });
});
