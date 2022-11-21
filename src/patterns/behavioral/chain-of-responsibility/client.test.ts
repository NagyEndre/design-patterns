import { ArgumentValidator } from "./ArgumentValidator";
import { Authenticator } from "./Authenticator";
import { Handler } from "./BaseHandler";
import RobotController, { RobotOperation } from "./RobotController";

describe("Client POV test of Chain-Of-Responsibility pattern.", () => {
  let firstHandler: Handler;

  beforeEach(() => {
    firstHandler = new ArgumentValidator();
    const h2 = new Authenticator();
    const h3 = new RobotController();
    firstHandler.setNext(h2);
    h2.setNext(h3);
  });

  test.each([null, undefined])("Should throw on invalid arguments", (arg) => {
    expect(() => {
      firstHandler.handle(arg);
    }).toThrow("Invalid argument.");
  });

  test("Should grant permission when correct credential specified.", () => {
    console.log = jest.fn();

    firstHandler.handle({
      user: "Batman",
      password: "BatCave",
      operation: RobotOperation.Reset,
    });

    expect(console.log).toHaveBeenCalledWith("Access granted. Welcome.");
  });

  test("Should start robot program.", () => {
    console.log = jest.fn();

    firstHandler.handle({
      user: "Batman",
      password: "BatCave",
      operation: RobotOperation.Start,
    });

    expect(console.log).toHaveBeenCalledWith("Starting robot program.");
  });
});
