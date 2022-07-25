import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;

describe("Create car", () => {
  beforeEach(() => {
    createCarUseCase = new CreateCarUseCase();
  });
  it("Should be able to create a new car", () => {
    const name = "Marcelo";
    createCarUseCase.execute(name);
    expect(name).toBe("Marcelo");
  });
});
