import { ArgumentValidator } from "./ArgumentValidator";
import { Authenticator } from "./Authenticator";

describe("Client POV test of Chain-Of-Responsibility pattern.", () => {
  test.each([null, undefined])("Should throw on invalid arguments", (arg) => {
    const h1 = new ArgumentValidator();
    const h2 = new Authenticator();
    h1.setNext(h2);

    expect(() => {
      h1.handle(arg);
    }).toThrow("Invalid argument.");
  });

  test("Should grant permission when correct credential specified.", () => {
    const h1 = new ArgumentValidator();
    const h2 = new Authenticator();
    h1.setNext(h2);

    console.log = jest.fn();

    h1.handle({ user: "Batman", password: "BatCave" });

    expect(console.log).toHaveBeenCalledWith("Access granted. Welcome.");
  });
});
