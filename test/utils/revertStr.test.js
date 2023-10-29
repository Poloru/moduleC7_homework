import { revertString } from "../../utils/revertStr.js";

describe("tests for revertString function", () => {
    it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
    it("should reverse string", () => expect(revertString("unittest")).toBe("tsettinu"));
    it("should reverse string", () => expect(revertString("Яблоко")).toBe("околбЯ"));
    it("should reverse string", () => expect(revertString("...")).toBe("..."));
    it("should reverse string", () => expect(revertString("")).toBe(""));
});
