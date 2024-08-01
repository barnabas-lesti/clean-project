import { createSandbox, deleteSandbox, doesSandboxFolderExist } from "./generator/generator.functions";

describe("Tool end to end tests", () => {
  beforeEach(() => {
    createSandbox();
  });

  afterEach(() => {
    deleteSandbox();
  });

  it("should have sandbox folder structure for testing", () => {
    expect(doesSandboxFolderExist()).toBeTruthy();
  });
});
