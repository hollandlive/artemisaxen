# Visual style — DON'T DEVELOP

Not invented — extracted from the language already used across the 23 real image prompts in
`/Users/artem/Books/dont-develop/pilot/beats/prologue.beats.json` (the video pilot's own SDXL
generation prompts). This is the baseline every new scene prompt should draw from, so the
Prologue and future chapters don't drift visually.

## Recurring descriptors (pulled verbatim from existing prompts)

- **"Photorealistic noir cinematography"** / **"noir still life"** — the two anchor phrases used
  across almost every prompt, for people and objects alike.
- **Palette**: "teal-and-amber palette", otherwise unsaturated dark tones — deep blacks, cold
  blues, warm practical lamp light as the only relief.
- **Lighting**: single-source practicals — desk lamp, monitor glow, streetlight through rain,
  headset LED — never flat/even lighting. "Dim ambient light," "dramatic side lighting,"
  "shallow depth of field" recur often.
- **Mood words**: "tense noir mood/framing," "unsettling," "cold humid atmosphere."
- **Weather/setting motif**: rain is a constant — wet streets, rain-streaked windows, damp coats.
  London at night.
- **Object/atmosphere shots** ("noir still life"): treated as composed product-photography-style
  stills — a folder, a clock, a headset, a phone screen — sharp macro focus, shallow DOF,
  dramatic single-source light.

## Applying this to ChatGPT/DALL-E prompts

The pilot's prompts were written as SDXL comma-separated tag lists (plus a fixed negative
prompt). ChatGPT's image generation reads better as natural-language description. Carry the
same descriptors over in prose form, e.g.:

> SDXL style: "Rain-soaked London street at night, wide shot, double-decker bus reflections in
> puddles... moody cinematic noir lighting, teal-and-amber palette... photorealistic"

> ChatGPT-style: "A photorealistic, cinematic noir photograph of a rain-soaked London street at
> night. Wide shot, double-decker buses reflected in wet puddles, pedestrians hurrying with
> collars up. Moody lighting in a teal-and-amber palette, cold and humid atmosphere."

## Character consistency

Until each character has a complete written physical spec (see `bible/characters/`), attach the
existing low-resolution reference crop (e.g. `michael_canon_closeup.png`, already hosted on
Blob) as an image input alongside the text prompt when generating in ChatGPT — this carries
facial/appearance consistency even where the written spec is still incomplete.
