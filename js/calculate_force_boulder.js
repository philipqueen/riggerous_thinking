function calculateForce() {
    const FRICTION = parseFloat(document.getElementById('friction').value);
    const POROSITY = parseFloat(document.getElementById('porosity').value);
    const WET_BULK_DENSITY = parseFloat(document.getElementById('density').value);
    const GRAVITY = 9.8;
    const WIDTH = parseFloat(document.getElementById('width').value);
    const LENGTH = parseFloat(document.getElementById('length').value);
    const HEIGHT = parseFloat(document.getElementById('height').value);
    const VOLUME = WIDTH * LENGTH * HEIGHT;
    const SLOPE = parseFloat(document.getElementById('slope').value);

    const weight = (1 - POROSITY) * WET_BULK_DENSITY * GRAVITY * VOLUME;
    const force_perpendicular = FRICTION * weight * Math.cos(SLOPE * Math.PI / 180);
    const force_parallel = weight * Math.sin(SLOPE * Math.PI / 180);

    const total_force = force_perpendicular - force_parallel;

    const total_force_kn = total_force / 1000;

    document.getElementById('result').innerText = `Total Force: ${total_force_kn.toFixed(2)} kN`;
}