import { fibonacci } from "./math.js";

describe("Tests for fibonacci function", () => {
  it("should return the right fibonacci number given a valid value for n > 1", () => {
    expect(fibonacci(2)).toBe(1); 
    expect(fibonacci(3)).toBe(2); 
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(8)).toBe(21); 
    });

  it("should return n when n < 2 is passed in", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    });

  it("should throw an error when n < 0", () => {
    expect(() => fibonacci(-10)).toThrow(new Error('n value must be greater than or equal to 0'));
    expect(() => fibonacci(-1)).toThrow(new Error('n value must be greater than or equal to 0'));
    expect(() => fibonacci(-200)).toThrow(new Error('n value must be greater than or equal to 0'));
    })
});