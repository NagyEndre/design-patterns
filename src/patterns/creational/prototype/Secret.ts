import { Prototype } from "./Prototype";

export class Secret implements Prototype {
  private secret = "top secret string";

  constructor(prototype?: Secret) {
    if (prototype) {
      this.secret = prototype.secret;
    }
  }

  clone(): Secret {
    return new Secret(this);
  }

  logSecret(): void {
    console.log(this.secret);
  }
}
