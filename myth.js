// myth.js — Mythos als Brücke
import { GATE } from "./gate.js";
import { rowColToAxis, armRadius } from "./coord.js";

export const MYTH = {
  origin: "C81 Bildungsschicht",
  gate: GATE.transWarb("start"), // virtuell nutzbar
  home: { ort: "Station Home", calc: true, space: false, slots: 81, arms: 6 },
  note: "Übergang vom Cache zum Cache als Brücke, welch Gate — virtuell, weil kein tatsächlicher Raum"
};
