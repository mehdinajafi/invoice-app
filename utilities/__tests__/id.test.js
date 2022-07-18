import { generateUniqueId, generateRandomId } from "../id";

describe("id utilities", () => {
  it("generated random id must be six characters long", () => {
    const id = generateRandomId();
    expect(id).toHaveLength(6);
  });

  it("the first two characters of random id are letters and the next four are numbers", () => {
    const id = generateRandomId();
    const onlyLetters = /^[a-zA-Z]+$/;
    const onlyNumbers = /^[0-9]*$/;
    expect(onlyLetters.test(id.charAt(0))).toBe(true);
    expect(onlyLetters.test(id.charAt(1))).toBe(true);
    expect(onlyNumbers.test(id.charAt(2))).toBe(true);
    expect(onlyNumbers.test(id.charAt(3))).toBe(true);
    expect(onlyNumbers.test(id.charAt(4))).toBe(true);
    expect(onlyNumbers.test(id.charAt(5))).toBe(true);
  });

  it("generateUniqueId works correctly", () => {
    const ids = ["RT3080", "XM9141"];
    const id = generateUniqueId(ids);
    expect(id).toHaveLength(6);
    expect(ids.includes(id)).toBe(false);
  });
});
