import { Secret } from "./Secret";

let existing: Secret = new Secret();

console.log("Original secret:");

existing.logSecret();

let copy = existing.clone();
console.log("Copied secret:");
copy.logSecret();
