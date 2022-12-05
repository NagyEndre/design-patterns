import { Observer } from "./types";

export class SafetyParticipant implements Observer {
  public notify(): void {
    console.log("Subject has sent notification.");
  }
}
