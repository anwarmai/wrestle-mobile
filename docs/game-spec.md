# Wrestle Mobile — Game Design Specification

Version: 0.1
Date: 2026-06-19

## Overview
A mobile game that teaches users Olympic-style wrestling techniques through playable matches and guided tutorials. Players select gender, country, and weight class, then wrestle 3-period matches (2 minutes each) using an energy-based system and learnable moves (takedown, single leg, double leg, blast double, power half, defenses).

## Platforms
- iOS and Android (Expo / React Native starter)

## Core Goals
- Teach fundamental wrestling moves interactively.
- Simulate realistic match flow (periods, scoring, stamina).
- Provide accessible UI allowing selection of gender, country, and weight class.
- Visual character scaling by weight class and singlet styles matching gender and country.

## Player Options
- Gender: Women or Men (affects singlet models and potentially match categories).
- Country: Select from a country list; country affects singlet colors/flag and player label.
- Weight class: Player chooses weight class (examples: 106 lb, 120 lb, 132 lb, 150 lb, 170 lb, 195 lb, 200 lb). Lighter classes render thinner characters; heavier classes render bulkier characters.

## Match Rules
- Match length: 3 periods x 2 minutes each (standard match flow).
- Scoring: Follow simplified freestyle rules (takedown = 2, exposure/near-fall = 2-3, reversal = 1, escape = 1). Exact scoring schema to be refined.
- Victory: Points after three periods, technical fall, pin (instant win), or injury/forfeit.

## Moves and Systems
- Core move set (initial):
  - Takedown (generic)
  - Single leg
  - Double leg
  - Blast double
  - Power half (power half nelson / finishing hold variant)
  - Defenses: sprawl, whizzer, block, reset
- Move execution: tap/gesture combos or on-screen buttons; timing and energy impact success probability.
- Move chaining: offensive moves can chain into follow-ups (e.g., double leg -> power half) based on posture and stamina.

## Energy / Stamina
- Each wrestler has an Energy bar that depletes when performing high-effort moves or resisting takedowns.
- Energy regeneration: slow passive regen when not actively exerting, faster regen during neutral periods.
- Heavier weight classes: increased max energy but slower movement speed and slower regen (configurable balance).
- Lightweight classes: higher speed, quicker regeneration, lower max energy (configurable numbers in design doc).

## Weight Class Effects
- Movement speed: inversely proportional to weight class (heavier → slower).
- Character visual: sprite/model scales to reflect body mass; e.g., 106 lb appears much leaner than 200 lb.
- Strength/power: heavier classes gain slight bonuses to move power and resistance; lighter classes gain speed/agility bonuses.

## Visuals / Characters
- Singlets: gendered singlet models; color schemes reflect chosen country (flag/kit).
- Character assets: layered sprites or 3D models with adjustable body width to represent weight class; include head/body/limb layers to maintain consistent animation across sizes.
- UI elements: energy bar, period timer, score display, control pad/buttons for moves.

## UI / UX Flow
1. Main menu: Play, Tutorials, Settings, Profile.
2. Play: select Gender → Country → Weight class → Opponent (AI difficulty) → Start match.
3. In-match HUD: top shows score and period timer; bottom shows controls and Energy bar.
4. Post-match: performance summary, move breakdown, tips for improvement, XP/rewards.

## Tutorials & Teaching
- Guided drills for each move with slow-motion and success/failure feedback.
- Practice mode: unlimited time, no scoring, focus on learning mechanics.
- Challenge mode: time-limited objectives (execute X takedowns, defend Y attacks).

## Difficulty & AI
- AI profiles by aggression/defense and weight class tendencies.
- Difficulty tiers adjust AI decision speed, reaction timing, and risk-taking.

## Data Model (high-level)
- PlayerProfile: {id, displayName, gender, country, selectedWeightClass, avatarReference, stats}
- WrestlerStats: {strength, speed, stamina, techniqueLevel}
- MatchState: {period, timeRemaining, scoreA, scoreB, energyA, energyB, events[]}
- Move: {id, name, energyCost, baseSuccessChance, chainableTo[]}

## Accessibility
- Large button mode and haptic/visual feedback for move success.
- Color contrast options for singlet/country palettes.
- Tutorial captions and optional audio guidance.

## Analytics / Telemetry
- Track completion of tutorials, most-used moves, common failures, average match length to tune balance.

## Assets Checklist
- Singlet textures for countries (men/women variants)
- Character body sprites/models for each weight band
- UI sprites (energy bar, buttons, icons)
- Sound effects for impacts, whistles, crowd, and UI

## Configurable Parameters (for designers)
- Period length (default 120s)
- Energy costs and regen rates per move
- Speed multiplier per weight class
- Scoring weights (points per action)

## Numeric Defaults (initial)
These values are initial suggestions for designers and can be tuned later.

- Period length: 120 seconds (per period)
- Energy system:
  - Base max energy (medium-weight baseline): 100 units
  - Energy cost per move:
    - Takedown (generic): 18
    - Single leg: 15
    - Double leg: 18
    - Blast double: 22
    - Power half: 20
    - Defensive actions (sprawl/whizzer): 8
  - Passive regen rate: 4 units / 5 seconds (when idle)
  - Active regen penalty: regen disabled for 3s after high-effort move

- Weight class multipliers (examples)
  - Speed multiplier (applied to base movement speed):
    - 106 lb: 1.15
    - 120 lb: 1.10
    - 132 lb: 1.05
    - 150 lb: 1.00 (baseline)
    - 170 lb: 0.95
    - 195 lb: 0.90
    - 200+ lb: 0.88
  - Max energy multiplier (increases with weight):
    - 106 lb: 0.90
    - 120 lb: 0.95
    - 132 lb: 1.00
    - 150 lb: 1.05
    - 170 lb: 1.10
    - 195 lb: 1.15
    - 200+ lb: 1.18
  - Energy regen rate modifier (heavier = slower):
    - 106 lb: 1.10 (faster regen)
    - 120 lb: 1.08
    - 132 lb: 1.03
    - 150 lb: 1.00
    - 170 lb: 0.95
    - 195 lb: 0.92
    - 200+ lb: 0.90

- Visual scaling guidance:
  - Character body width scales linearly with weight class multiplier (use sprite scale or bone width).
  - Suggested width scale range: 0.85 (106 lb) → 1.20 (200+ lb).

Note: These numbers are starting points for playtesting. Tweak for feel and fairness during iteration.

## Extensibility & Future Work
- Add online vs. play and matchmaking
- Add wrestler customization (faces, names), tournaments and rankings
- Add video replays and coaching overlay

## Open Questions / Next Specs to Write
- Precise scoring rules to match a chosen wrestling rule set (freestyle vs. folkstyle).
- Exact numerical balance for energy and speed across weight classes.
- Animation approach (2D layered sprites vs. skeletal 3D models).

---

_Last updated: 2026-06-19 — add and evolve this file as features and balance decisions are made._
