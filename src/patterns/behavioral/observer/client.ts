import { SafetyParticipant } from "./SafetyParticipant";
import { SafetyStop } from "./SafetyStop";

const safetyStop = new SafetyStop();
const safetyParticipant1 = new SafetyParticipant();
const safetyParticipant2 = new SafetyParticipant();

safetyStop.subscribe(safetyParticipant1);
safetyStop.subscribe(safetyParticipant2);

safetyStop.notify();
