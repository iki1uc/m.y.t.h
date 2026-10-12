// gate.js — CACHE zu CACHE Brücke, virtuelles Gate
// kein tatsächlicher Raum, nur errechnet, nutzbar als Start oder Ankunft

export const GATE = {
  platforms: {
    start: { id: "TRANS_START", virtual: true, space: false, cache: "CACHE_A", tor: "gelb" },
    arrival: { id: "TRANS_ARRIVAL", virtual: true, space: false, cache: "CACHE_B", tor: "grün" }
  },
  bridge(from="CACHE_A", to="CACHE_B"){
    const same = from===to;
    return {
      from, to,
      ghost: { holds: "reference only", note: "ghost hält nur Referenz, nie Inhalt" },
      tor: same? { color: "yellow", code: "CACHE" } : { color: "green", code: "FLOW" },
      virtual: true, space: false,
      usable: true, // als Start oder Ankunft nutzbar
      nc: `G0 A${from} B${to} // kein G1 Z, kein Reib, nur errechnet`
    };
  },
  transWarb(platform="start"){
    const p = this.platforms[platform];
    return {...p, gate: this.bridge(p.cache, platform==="start"?"CACHE_B":"CACHE_A") };
  }
};
