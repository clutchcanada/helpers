import removeNonNumbers from "./index";

describe("removeNonNumbers", () => {
  it('should remove non numbers from strings', () => {
    expect(removeNonNumbers("234sdfhs_dsfh7")).toBe("2347");
    expect(removeNonNumbers("2.2")).toBe("2.2");
    expect(removeNonNumbers("2qwe43gfdgdfsfh334")).toBe("243334");
    expect(removeNonNumbers("5__^^^_dsfh%")).toBe("5");
  });
});