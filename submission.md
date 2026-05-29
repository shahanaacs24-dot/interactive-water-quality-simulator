# Interactive Water Quality Simulator

## Problem Statement Fit

This project addresses the Water Quality Monitoring and Laboratory Simulation problem statement. The simulator provides an interactive virtual environment where users can perform common water quality assessment procedures including safety checks, pH calibration, turbidity testing, conductivity measurement, probe cleaning, and final result review.

## Target Users

* Environmental science students
* Laboratory trainees
* Water quality technicians
* Educational institutions

The project helps users understand the workflow of water quality testing through an interactive and visual simulation.

## What We Built

We built an interactive 3D laboratory simulation using CreatorEngine and Babylon.js. Users can interact with different stations representing key stages of a water quality testing workflow. Each station provides realistic laboratory feedback and measurement information.

## Core Features

### Safety Station

Interactive safety checklist verification before laboratory access.

### pH Calibration Station

Simulates pH meter calibration using pH 4.0, pH 7.0, and pH 10.0 buffer solutions.

### Turbidity Station

Provides sample preparation and turbidity measurement simulation.

### Conductivity Station

Displays conductivity and temperature readings for water samples.

### Probe Cleaning Station

Simulates proper cleaning procedures before testing another sample.

### Water Quality Logbook

Displays consolidated measurements and performance summary.

## Technical Architecture

The project is built using CreatorEngine and Babylon.js.

System Components:

* 3D scene environment
* Interactive mesh-based stations
* ActionManager click events
* Alert-based information panels
* Scene lighting and shadow system
* Asset management through CreatorEngine

Each station is represented by a mesh object with attached interaction logic implemented through TypeScript scripts.

## Tech Stack

* CreatorEngine
* Babylon.js
* TypeScript
* Vite
* Git
* GitHub

## Innovation / Uniqueness

The project transforms traditional laboratory procedures into an accessible interactive simulation. Users can learn water quality assessment workflows without requiring physical laboratory equipment.

## Demo Instructions

1. Open the simulation.
2. Navigate around the 3D scene.
3. Click the Safety Station.
4. Click the pH Calibration Station.
5. Click the Turbidity Station.
6. Click the Conductivity Station.
7. Click the Probe Cleaning Station.
8. Click the Water Quality Logbook.
9. Review the generated measurements and results.

The complete workflow can be tested in under two minutes.

## Known Limitations

* Uses popup dialogs for interaction.
* Measurements are currently predefined.
* No persistent data storage.
* Single-user simulation.

## Future Work

* Real-time sensor integration.
* Interactive UI panels instead of alert dialogs.
* Data export functionality.
* Multi-user laboratory simulation.
* Additional water quality parameters.
* Analytics dashboard for results.
