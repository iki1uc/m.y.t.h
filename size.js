// sim.sek bli.tz — move unmove resumee
// Technik + Real aus dem Nix zum Nix, aber nutzbar

const SIM = {
  sek: 0,
  tick() { this.sek++; return this.sek; }
};

function bli_tz({ from, to }) {
  // from = nix, to = nix, aber dazwischen = real nutzbar
  const ghost = { holds: "reference only" }; // kein Raum
  const move = { G0: `A${from} B${to}`, calc: true, space: false }; // errechneter Sprung
  const unmove = { G0: `A${to} B${from}`, calc: true, space: false }; // zurück ins Nix
  const resumee = {
    // Waanis Schale springt ins Ungewisse, aber berechnet
    waanis: true,
    schale: "extern -> intern -> extern",
    sprung: "ins Ungewisse",
    berechnet: true,
    nutzbar: true, // weil virtuell
    gate: move.G0 + " // " + unmove.G0
  };
  SIM.tick();
  return { move, unmove, resumee, sek: SIM.sek, ghost };
}

// Trick:
bli_tz({ from: "NIX", to: "NIX" })
// move: G0 A NIX B NIX
// unmove: G0 A NIX B NIX
// resumee: waanis Schale springt, berechnet, nutzbar
// ghost hält nur Referenz — Technik wird Real
