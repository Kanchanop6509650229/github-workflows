const math = require("../math");

describe("simple arithmetic", () => {
  describe("add", () => {
    it("expect 5 + 3 = 8", async () => {
      expect(math.add(5, 3)).toBe(8);
    });
    it("expect 1 + 1 = 11", async () => {
      expect(math.add(1, 1)).toBe(11);
    });
  });
  describe("subtract", () => {
    it("expect 5 - 1 = 4", async () => {
      expect(math.subtract(5, 1)).toBe(4);
    });
  });
  describe("multiply", () => {
    it("expect 2 * 3 = 6", async () => {
      expect(math.multiply(2, 3)).toBe(6);
    });
  });
});
