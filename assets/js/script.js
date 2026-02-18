const projectData = {
    triton: {
        title: "Triton Robotics (UCSD)",
        content: `
            <div class="project-detail">
                <h3>2026 Hero Robot (Ongoing)</h3>
                <p>
                    Mechanical Team Lead for Hero Robot. This robot was designed using Onshape.
                    Personally designed:
                </p>

                <ul class="design-list">
                    <li>
                        Indexer and ball path for 42mm TPE golf balls
                        <ul>
                            <li>Driven by a DJI M3508 motor attached via a D-shaft.</li>
                            <li>Indexer lined with bearings to reduce friction.</li>
                            <li>Ball path designed with integrated bearings to ensure smooth feeding into the shooting mechanism.</li>
                        </ul>
                    </li>

                    <li>
                        Yaw mechanism
                        <ul>
                            <li>Swappable input pulley for variable gear ratios.</li>
                            <li>Offset encoder pulley with adjustable mounting for belt tensioning.</li>
                        </ul>
                    </li>

                    <li>
                        Rectangular X-drive mecanum chassis with suspension
                        <ul>
                            <li>Chassis constructed primarily from 6063 aluminum tubing.</li>
                            <li>6061 aluminum gussets used for structural joints.</li>
                            <li>
                                Central 6061 aluminum electronics plate
                                <ul>
                                    <li>Mounts ball storage, indexer, and ball path assembly.</li>
                                    <li>Includes hole pattern for electronics mounting.</li>
                                </ul>
                            </li>
                            <li>
                                Yaw mechanism mounting
                                <ul>
                                    <li>Laser joints and T-slot joints form an I-beam.</li>
                                    <li>Slip ring allows independent turret and chassis rotation.</li>
                                </ul>
                            </li>
                            <li>
                                Suspension system
                                <ul>
                                    <li>Simple pivot using bearings.</li>
                                    <li>RC shock assembly for compliance.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <figure class="full-width">
                    <img src="assets/images/TR-hero.png">
                    <figcaption>Current Robot Assembly</figcaption>
                </figure>

                <div class="gallery-grid">
                    <figure class="full-width">
                        <video controls width="100%" height="480">
                            <source src="assets/images/IndexerVideo.mov" type="video/mp4">
                        </video>
                        <figcaption>Indexer Mechanism Test</figcaption>
                    </figure>

                    <figure>
                        <img src="assets/images/SuspensionAssembly.png">
                        <figcaption>6 inch mecanum wheel suspension assembly</figcaption>
                    </figure>

                    <figure>
                        <img src="assets/images/BallPath.png">
                        <figcaption>Ball path assembly lined with M3 bearings</figcaption>
                    </figure>
                </div>
            </div>

            <div class="project-detail">
                <h3>2025 Infantry Robot</h3>
                <p>
                    Responsible for the linear suspension system design, X-drive omniwheel chassis,
                    and electronics plate. Optimized for weight, height constraints, spring rigidity,
                    and budget. Designed using SolidWorks.
                </p>

                <ul class="design-list">
                    <li>
                        Linear suspension system
                        <ul>
                            <li>6 inch VEX omniwheel attached using a modified Versahub with M3 setscrew.</li>
                            <li>Motor mounted on an aluminum plate attached to a PLA 3D printed module.</li>
                            <li>Interference fit 10mm flanged linear bearings.</li>
                            <li>1045 steel rods with M5 tapped ends for secure chassis attachment.</li>
                            <li>Spring and shock damper used for compliance.</li>
                        </ul>
                    </li>

                    <li>
                        X-drive octagonal omniwheel chassis
                        <ul>
                            <li>Constructed from eight 6063 aluminum tubes.</li>
                            <li>Attached using aluminum gussets and carbon fiber.</li>
                            <li>
                                Polycarbonate electronics plate
                                <ul>
                                    <li>Waterjet manufactured with electronics layout in mind.</li>
                                    <li>Mounted using bent aluminum sheet metal.</li>
                                    <li>TPU bumpers are attached to the outer plate for protection.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <figure class="full-width">
                    <img src="assets/images/TR-inf.png">
                    <figcaption>Full Robot Assembly</figcaption>
                </figure>
                    <div class="full-width" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
                        <iframe 
                            src="https://www.youtube.com/embed/MMNh91HIIWk?rel=0"
                            width="315" 
                            height="560" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            title="Infantry Robot in Action"
                            style="max-width: 100%; border-radius: 10px; aspect-ratio: 9/16;"> </iframe>
                        <p class="cap" style="margin-top: 10px;">Infantry Robot in Action</p>
                    </div>
                <div class="gallery-grid">
                    <figure>
                        <img src="assets/images/compactsuspensionblockassembly.JPG">
                        <figcaption>Suspension assembly</figcaption>
                    </figure>

                    <figure>
                        <img src="assets/images/realChassisAssembly.JPG">
                        <figcaption>Chassis assembly</figcaption>
                    </figure>
                </div>
            </div>
        `
    },
    drone: {
        title: "Personal Project: Custom Autonomous Drone (Ongoing)",
        content: `
            <div class="project-detail">
            <a href="https://github.com/arugoa/drone">Git Repo</a>
                <p>
                    This is a custom drone that I am currently working on building with some of my friends. The goal for the drone is to eventually autonomously navigate using a lidar and computer vision. The stats of the drone are as follows:
                </p>
                <ul class="design-list">
                    <li>
                        Theoretical Max Mass:  2.13 kg
                    </li>
                    <li>
                        Theoretical max flight time: 10.329 s
                    </li>
                </ul>
                 <p>
                    Information about the drone:
                </p>
                <ul class="design-list">
                    <li>
                        MCB: Sparkfun Redboard Arduino Uno
                    </li>
                    <li>
                        ESCs: HobbyKing Skywalker 20A 2-3S LiPo
                    </li>
                    <li>
                        Motors: Turnigy D2822/17 1100KV
                    </li>
                    <li>
                        Propellers:  9 x 4.7R GEMFAN
                    </li>
                    <li>
                        Reciver and Transmitter: Radiomaster XR2 Nano and Radiomaster Pocket Internal repsectively.
                    </li>
                    <li>
                        IMU: Adafruit BNO055
                    </li>
                    <li>
                        Battery: 3S Lipo Battery 2500 mAh
                    </li>
                </ul>
                <p>
                    Thus far, all the individual components have been tested and a power distribution pcb has been designed. The integration of this code and initial flight test remain for the first iteration of this drone, which will not involve autonomy. This involves the initial Power Distribution board, designed to operate at high amperage using a 2 layer stiched copper area design.
                </p>
            <div class = "project-detail">
                <figure class = "full-width">
                        <video controls width="100%" height="100%">
                        <source src="assets/images/DroneTest.mov" type="video/mp4">
                        </video>
                        <figcaption>Initial Drone Flight Test</figcaption>
                </figure>
            </div>
            <div class="gallery-grid">
                <figure class="full-width">
                        <video controls width="100%" height="480">
                            <source src="assets/images/RadiomasterTest.mov" type="video/mp4">
                        </video>
                        <figcaption>Radiomaster Controller Test</figcaption>
                </figure>
                <figure class="full-width">
                        <video controls width="100%" height="480">
                            <source src="assets/images/IMUTest.mov" type="video/mp4">
                        </video>
                        <figcaption>BNO055 IMU Test</figcaption>
                </figure>
                <figure class="full-width">
                        <video controls width="100%" height="480">
                            <source src="assets/images/MotorTest.mov" type="video/mp4">
                        </video>
                        <figcaption>Turnigy Motor Test</figcaption>
                </figure>
                <figure>
                        <img src="assets/images/PDBirl.png">
                        <figcaption>Manufactured Power Distribution Board</figcaption>
                </figure>
                <figure>
                    <video controls width="100%" height="480">
                        <source src="assets/images/InitialPCBTest.mov" type="video/mp4">
                        </video>
                        <figcaption>Initial PCB Voltmeter Test</figcaption>
                </figure>
            </div>
            <figure>
                <img src="assets/images/Schematic_Drone_2026-02-09.png">
                <figcaption>PCB Schematic</figcaption>
            </figure>
            </div>
            `
    },
    exagora: {
        title: "Modular Snake Robot and Drone",
        content: `
            <p>
                Twelve module snake robot using servos with 180 degree movement per module,
                offset by 90 degrees. Integrated pH and temperature sensors with a twelve
                kilogram lift drone.
            </p>

            <div class="gallery-grid">
                <div class="full-width">
                    <iframe
                        src="https://www.youtube.com/embed/rR1GqNzn0RU?rel=0"
                        width="100%"
                        height="480"
                        allow="autoplay"
                        style="border-radius: 10px; border: 1px solid var(--border);">
                    </iframe>
                    <p class="cap">Modular snake robot movement demonstration</p>
                </div>

                <figure>
                    <img src="assets/images/snake-robot1.png">
                    <figcaption>Initial CAD prototype</figcaption>
                </figure>

                <figure>
                    <img src="assets/images/snake-robot2.png">
                    <figcaption>Modular snake assembly</figcaption>
                </figure>

                <figure class="full-width">
                    <img src="assets/images/snake-drone.png">
                    <figcaption>Heavy lift drone integration</figcaption>
                </figure>
            </div>
        `
    },

    frc: {
        title: "FIRST Robotics Competition",
        content: `
            <div class="project-detail">
                <h3>2023 Beach Blitz Winner</h3>
                <p>
                    Designed tank drive base and led turret manufacturing
                    for the Beach Blitz Regional Champion robot.
                </p>
                <ul class = "design-list">
                    <li>The tank drive base uses Falcon 500 motors with Planetary gearboxes. These are attached to the in a tank drive formation with chains and sprockets. The chassis is made using 6061 aluminum tubing with a hole pattern and 1/8" aluminum gussets.</li>
                    <li>The turret uses a Falcon 500 motor with large gear ratio using PCABS 3d printed gears. The pitch control involves a variable hood controlled by another Falcon 500 with spur gears.</li>
                    <li>The climber is a telescope style. It uses a string and spool on a Falcon 500 motor that is tensioned using a spring. Inside are custom ball bearings that allow the aluminum tubes to be housed inside one another. The arm is on a pivot with custom CNC 1/4" aluminum gears.</li>
                </ul>

                <figure>
                    <img src="assets/images/frc-2023.png">
                    <figcaption>Competition robot turret and drive base</figcaption>
                </figure>
            </div>

            <div class="project-detail">
                <h3>2022 FRC Robot</h3>
                <p>
                    Assisted in manufacturing and assembly for the
                    Everybot style climber and intake systems.
                </p>
                <ul class = "design-list">
                    <li>The everybot climber was orginally laser cut wood when testing and was eventually CNCd using 1/4" aluminum.</li>
                    <li>The intake involves PVC pipes that are spun using Falcon 500 Motors to compress balls into the intake. These are then rotated the opposite direction to deposit the balls. This intake is set on a pivot to allow for a 1 DOF rotation.</li>
                </ul>
                <figure>
                    <img src="assets/images/frc-2022.png">
                    <figcaption>Everybot intake and climber modification</figcaption>
                </figure>
            </div>

            <div class="project-detail">
                <h3>Bevel Geared Wrist</h3>
                <p>
                    Design, deployment, and manufacturing of a 3D printed
                    differential bevel geared wrist using Fusion 360.
                </p>

                <figure>
                    <img src="assets/images/frc-wrist.png">
                    <figcaption>3D printed differential bevel geared wrist</figcaption>
                </figure>
            </div>
        `
    }
};

function openProject(id) {
    const modal = document.getElementById("projectModal");
    const body = document.getElementById("modalBody");

    body.innerHTML = `<h2>${projectData[id].title}</h2>${projectData[id].content}`;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function (event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
};
