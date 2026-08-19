# Prologue — Seedance video candidates (Flow AI iOS, free tier, credits now exhausted)

Six clips generated before this pipeline was formalized, sitting in
`bible/scenes/ch01/` (mixed in with the Chapter 1 files — not renamed/moved,
just documented here). Not deleted per Elizar's instruction. Verdict below is
based on two hard gates: **character identity fidelity to canon**, then
**cinematic/technical quality** — lighting/time-of-day is judged separately
since it's fixable by context (insert vs. establishing shot) rather than a
flat pass/fail.

All six share the same defect: shot in bright grey daylight, while the
Prologue and Chapter 1 are both set at night. None should be used as an
establishing or primary scene shot as-is.

| File | Content | Identity | Verdict | Why |
|---|---|---|---|---|
| `495C3C29-CDA3-4350-98A4-F07A50B1DD59.MP4` | Michael, talking-head close-up, mouth moving naturally | ✅ matches canon | **REUSABLE_AS_INSERT** | Background is blurred enough that the daylight tell is soft — could work as a tight cutaway insert with a darkening/cool grade pass. Best performance quality of the six. |
| `6717E849-8F22-4F48-963F-6D266FEDC000.MP4` | Helen, extreme close-up on eyes/face | ❌ drifts from canon | **REJECT** | Skin texture/freckle pattern reads as a different person under this much magnification — an identity fidelity problem, independent of lighting. Don't use even as an insert. |
| `0E412B75-B5C3-4DB5-8C6E-1A5A812219F8.MP4` | Michael reading folder, office, Gherkin view | ✅ matches canon | **REJECT** | Broad daylight, wide shot — the daylight is the whole frame, nothing to hide it behind. Also redundant with the already-approved night version (`ch00-scene-05`, `michael_folder_at_office_holding.PNG`). |
| `AD731651-0A0C-4FA6-B6FF-F78975BD4665.MP4` | Helen reading folder, same office/window | ✅ matches canon | **REJECT** | Same reason as above — full daylight wide shot, no way to disguise it. |
| `FFE7923F-D097-4F64-9493-F3A99528DD8B.MP4` | Michael + Helen conversation, two-shot | ✅ matches canon | **REJECT for now** | Full daylight wide shot. Keep in mind only if the book ever has a genuine daytime scene — not usable for anything set at night. |
| `61776478-1881-433D-A35F-29C0EAA56F78.MP4` | Hands holding a phone, chat app UI | ⚠️ n/a (no face) | **REJECT** | The on-screen app UI text is garbled/unreadable nonsense — a hard content defect regardless of lighting or identity. |

## Bottom line

One reusable candidate (`495C3C29`, Michael talking-head), one hard identity
reject (`6717E849`), one hard content reject (`61776478`), three lighting
rejects that would need a genuine daytime scene to ever make sense
(`0E412B75`, `AD731651`, `FFE7923F`).

Not wired into any scene's `asset` yet — this is a classification record,
not a decision to use `495C3C29` in production. If it gets used later, it
should be tagged as an insert/cutaway, not a scene's primary asset.
