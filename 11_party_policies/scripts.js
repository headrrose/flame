let policies = [
  "Harness geothermal vents for arcane power",
  "Guarantee spell-forging apprenticeships",
  "Forge-safe housing in high-temperature zones",
  "Universal access to enchanted tools",
  "Protect natural mana flows from over-mining"
];

function showPolicies() {
  let list = document.getElementById("policyList");

  for (let i = 0; i < policies.length; i++) {
    let item = document.createElement("li");
    item.innerText = policies[i];
    list.appendChild(item);
  }
}

document.getElementById("showPolicies").onclick = showPolicies;
