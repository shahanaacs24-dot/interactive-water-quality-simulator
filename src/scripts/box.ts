import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { ActionManager } from "@babylonjs/core/Actions/actionManager";
import { ExecuteCodeAction } from "@babylonjs/core/Actions/directActions";

import { IScript } from "babylonjs-editor-tools";

export default class SceneComponent implements IScript {

    public constructor(public mesh: Mesh) {}

    public onStart(): void {

		// Enable shadows on all stations
this.mesh.receiveShadows = true;

if (this.mesh.name === "safetyStation" ||
    this.mesh.name === "phStation" ||
    this.mesh.name === "turbidityStation" ||
    this.mesh.name === "conductivityStation") {

    this.mesh.receiveShadows = true;
}

        this.mesh.actionManager = new ActionManager(this.mesh.getScene());

        this.mesh.actionManager.registerAction(
            new ExecuteCodeAction(
                ActionManager.OnPickTrigger,
                () => {

                    switch (this.mesh.name) {

                       case "safetyStation":
    alert(
        "🦺 Safety Station\n\nWear Gloves ✓\nWear Lab Coat ✓\nSafety Checklist Complete ✓\n\nLab Access Granted!"
    );
    break;

                        case "phStation":
    alert(
        "🧪 pH Calibration Station\n\nBuffer pH 4.0 ✓\nBuffer pH 7.0 ✓\nBuffer pH 10.0 ✓\n\nCalibration Successful ✓\nCurrent Sample pH: 7.2"
    );
    break;
                        case "turbidityStation":
                            alert(
    "💧 Turbidity Station\n\nSample Agitated ✓\nAir Bubbles Removed ✓\n\nTurbidity Reading: 20 NTU"
);
                            break;

                        case "conductivityStation":

    const temperature = 25;
    const conductivity = 530;
    const tds = conductivity * 0.67;

    alert(
        "⚡ Conductivity Station\n\n" +
        "Temperature: " + temperature + "°C\n" +
        "Conductivity: " + conductivity + " µS/cm\n" +
        "TDS: " + tds.toFixed(0) + " ppm"
    );

    break;

						case "logbookStation":

    alert(
        "📒 WATER QUALITY LOGBOOK\n\n" +

        "Tap Water\n" +
        "pH: 7.2\n" +
        "NTU: 20\n" +
        "EC: 530 µS/cm\n\n" +

        "Sea Water\n" +
        "pH: 8.1\n" +
        "NTU: 18\n" +
        "EC: 50000 µS/cm\n\n" +

        "Distilled Water\n" +
        "pH: 7.0\n" +
        "NTU: 0\n" +
        "EC: 5 µS/cm\n\n" +

        "PERFORMANCE SUMMARY\n" +
        "Safety Protocol ✓\n" +
        "pH Calibration ✓\n" +
        "Turbidity Analysis ✓\n" +
        "Conductivity Analysis ✓\n\n" +

        "Final Score: 95%"
    );

    break;


						case "probeCleaningStation":
    alert(
        "🧼 Probe Cleaning Station\n\n" +
        "Probe rinsed with distilled water ✓\n" +
        "Probe dried with lint-free tissue ✓\n\n" +
        "Probe ready for next sample ✓"
    );
    break;

                        default:
                            alert("Station Selected");
                    }
                }
            )
        );
    }

    public onUpdate(): void {}
}