const projectData = {
triton: {
        title: "Triton Robotics (UCSD)",
        content: `
            <div class="project-detail">
                <h3>2025 Infantry Robot</h3>
                <p>Responsible for the linear suspension system design, X-drive omniwheel chassis, and electronics plate, which were optimized based on various factors like the weight, height restriction, rigidity of the springs, and budget.</p>
                <figure>
                    <img src="assets/images/TR-inf.png">
                    <figcaption>Full Robot Assembly</figcaption>
                </figure>
            </div>
            <div class="project-detail">
                <h3>2026 Hero Robot</h3>
                <p>Led deployment of hero robot. Personally Designed:</p>
                <ul class="design-list">
                    <li>Indexer and ball path for 42mm TPE "golf" balls.</li>
                    <li>Yaw mechanism with a swappable input pulley and an offset encoder pulley with adjustable mounting for tensioning.</li>
                    <li>Rectangular X-drive mecanum chassis with suspension.</li>
                </ul>
                <figure>
                    <img src="assets/images/TR-hero.png">
                    <figcaption>Current Robot Assembly</figcaption>
                </figure>
            </div>`
    },
    exagora: {
        title: "Modular Snake Robot & Drone",
        content: `
            <p>12-module snake using servos. 180-degree movement per module, offset by 90 degrees. Integrated pH/Temp sensors and 12KG lift drone.</p>
            <div class="gallery-grid">
                <div class="full-width">
                    <iframe 
                        src="https://drive.google.com/file/d/1P6xu8IV_fUMWZMB4u3XCrmqqrO3-OLjP/preview" 
                        width="100%" 
                        height="480" 
                        allow="autoplay"
                        style="border-radius: 10px; border: 1px solid var(--border);">
                    </iframe>
                    <p class="cap">Modular Snake Robot movement demonstration.</p>
                </div>
                <figure><img src="assets/images/snake-robot1.png"><figcaption>Initial CAD Prototype</figcaption></figure>
                <figure><img src="assets/images/snake-robot2.png"><figcaption>Modular Snake Assembly</figcaption></figure>
                <figure class="full-width"><img src="assets/images/snake-drone.png"><figcaption>Heavy-Lift Drone Integration</figcaption></figure>
            </div>`
    },
    frc: {
        title: "FIRST Robotics Competition",
        content: `
            <div class="project-detail">
                <h3>2023 Beach Blitz Winner</h3>
                <p>Designed tank drive base and led turret manufacturing for the Beach Blitz Regional Champion robot.</p>
                <figure>
                    <img src="assets/images/frc-2023.png">
                    <figcaption>Competition Robot: Turret and Drive Base Assembly</figcaption>
                </figure>
            </div>
            <div class="project-detail">
                <h3>2022 FRC Robot</h3>
                <p>Assisted in manufacturing and assembly for the Everybot-style climber and intake systems.</p>
                <figure>
                    <img src="assets/images/frc-2022.png">
                    <figcaption>Everybot Modification: Intake and Climber</figcaption>
                </figure>
            </div>
            </div>
            <div class="project-detail">
                <h3>Bevel Geared Wrist</h3>
                <p>Design, deployment, and manufacturing of 3D printed differential bevel geared wrist using Fusion 360. This wrist requires two motors, one on each side of the pulley. When the two motors rotate in the same direction, the whole gearbox rotates, while opposite rotating motors causes the single bevel gear to rotate. This creates a pitch axis and a roll axis for an mechanism attached to this wrist. </p>
                <figure>
                    <img src="assets/images/frc-wrist.png">
                    <figcaption>3D printed differential bevel geared wrist.</figcaption>
                </figure>
            </div>`
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

window.onclick = function(event) {
    let modal = document.getElementById("projectModal");
    if (event.target == modal) { closeModal(); }
}