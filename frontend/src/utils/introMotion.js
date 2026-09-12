export const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const ease = (start, end, value) => {
  const t = clamp((value - start) / (end - start));
  return t * t * (3 - 2 * t);
};

// Pure scroll timeline: all layers reverse naturally when the visitor scrolls up.
export function introFrame(value, reduced = false) {
  const p = clamp(Number.isFinite(value) ? value : 0);
  const approach = ease(0.08, 0.64, p);
  const merge = ease(0.27, 0.57, p);
  return {
    '--field-opacity': reduced ? 0.14 : 1 - ease(0.43, 0.75, p) * 0.88,
    '--field-scale': reduced ? 1 : 1 + approach * 0.35,
    '--world-opacity': reduced ? 1 : ease(0.45, 0.78, p),
    '--name-gap': 1 - merge,
    '--name-opacity': reduced ? 0 : 1 - ease(0.58, 0.72, p),
    '--name-y': `${-merge * 4}vh`,
    '--headset-scale': 1 + approach * 4.5,
    '--headset-opacity': reduced ? 0 : 1 - ease(0.42, 0.68, p),
    '--headset-y': `${-approach * 2}vh`,
    '--headset-rotation': `${-3 + approach * 3}deg`,
    '--opening-opacity': reduced ? 0 : 1 - ease(0.18, 0.46, p),
    '--reveal-opacity': reduced ? 1 : ease(0.66, 0.8, p),
    '--reveal-y': `${(1 - ease(0.66, 0.83, p)) * 25}px`,
    '--fragment-opacity': reduced ? 0 : ease(0.77, 0.94, p),
    '--fragment-y': `${(1 - ease(0.74, 0.98, p)) * 100}px`,
  };
}
