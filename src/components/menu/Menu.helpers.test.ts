import { formatMenuLabel } from "./Menu.helpers";

describe("formatMenuLabel", () => {
  it("trims and capitalizes the label", () => {
    expect(formatMenuLabel("  file ")).toBe("File");
  });
});
