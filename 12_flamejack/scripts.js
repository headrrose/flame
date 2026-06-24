let energy = 0;

function chargeReactor() {
  let pulse = Math.floor(Math.random() * 5) + 1; // 1-10
  energy += pulse;

  document.getElementById("energyDisplay").innerText = "Energy: " + energy + " / 21";

  if (energy < 16) {
    document.getElementById("statusMessage").innerText = " Charging...";
  } else if (energy < 21) {
    document.getElementById("statusMessage").innerText = " Stable energy level!";
  } else if (energy == 21) {
    document.getElementById("statusMessage").innerHTML = "<span style='color: green;'>Perfect Resonance!</span>";
  } else if (energy <= 23) {
    document.getElementById("statusMessage").innerHTML = "<span style='font-size: 18px; color: #ff0000;'>DANGER: Energy level rising..!</span>";
  } else {
    document.getElementById("statusMessage").innerHTML = "<span style='font-size: 24px; color: #470202;'>Overload! Core meltdown!</span>";
    document.getElementById("chargeButton").disabled = true;
  }
}

document.getElementById("chargeButton").onclick = chargeReactor;
