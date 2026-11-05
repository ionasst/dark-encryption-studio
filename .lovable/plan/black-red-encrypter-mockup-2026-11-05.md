# Black & Red Encrypter Mockup

## Experience
Build a polished, animated visual mockup at the home page, branded **RAT ENCRYPTER**. This is a fictional interface only: no actual encryption, executable modification, remote access, or security-evasion functionality.

## Design
- Near-black background, charcoal surfaces, bright red accents, and high-contrast silver text.
- Compact workspace with a narrow navigation rail, prominent product name, and crisp technical typography.
- A custom rat-emblem visual, fine borders, restrained red illumination, and a live-looking activity display.
- Smooth entrance transitions, animated progress, and subtle status pulses; respect reduced-motion preferences.
- Adapt the layout for phones without clipping controls or text.

## Interactive Demo
- A sample-file selector populated with fictional files; no file contents are uploaded or processed.
- Cosmetic configuration switches and an output-name field.
- A **Run simulation** action that animates staged progress and sample activity messages, then shows a completed demo result.
- Reset and repeat the simulation, with clear idle, running, and complete states.
- A visible **Simulation** status so the interface does not imply real processing.

## Technical Approach
- Replace the existing home-page placeholder using the project's TanStack routing and existing UI controls.
- Define black-and-red semantic color tokens in the global stylesheet; keep all interaction state in the browser.
- Use focused UI pieces for the workspace, progress display, and activity feed; no Cloud connection or accounts are needed.
- Set an app-specific page title, description, and social metadata.

## Verification
- Exercise the complete simulation and reset flow in the browser.
- Check desktop and mobile layouts, reduced-motion behavior, and error logs.