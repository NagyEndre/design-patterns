import { BaseHandler } from "./BaseHandler";

export enum RobotOperation {
  Start,
  Pause,
  Resume,
  Reset,
}

export default class RobotController extends BaseHandler {
  public handle(request: any): void {
    const { operation } = request;

    switch (operation) {
      case RobotOperation.Start:
        console.log("Starting robot program.");
        break;
      case RobotOperation.Pause:
        console.log("Pausing robot program.");
        break;
      case RobotOperation.Reset:
        console.log("Resetting robot program.");
        break;
      case RobotOperation.Resume:
        console.log("Resuming robot program.");
        break;
      default:
        throw new Error("Unknown type of requested operation.");
    }
  }
}
