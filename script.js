
let userName = "";
let pickupLine = "";
let currentStep = 1;

// 💖 CHANGE PASSWORD HERE
const HEART_PASSWORD = "1069";

// 🔁 STEP SWITCHER
function show(stepId) {
  document.querySelectorAll(".step").forEach(step => {
    step.classList.add("hidden");
  });
  const active = document.getElementById(stepId);
  if (active) active.classList.remove("hidden");
}

// ▶ START
function start() {
  userName = document.getElementById("nameInput").value.trim();
  if (userName === "") {
    alert("Enter name first cutie 💕");
    return;
  }
  currentStep = 2;
  show("step2");
}

// 👉 NEXT STEP
function nextStep(line) {
  pickupLine = line;

  if (currentStep === 2) {
    currentStep = 3;
    show("step3");
  } else if (currentStep === 3) {
    document.getElementById("pickup").innerText = pickupLine;
    currentStep = 4;
    show("step4");
  }
}

// 🎁 GIFT
function showGift() {
  currentStep = 5;
  show("step5");
}

// 🔒 LOCK
function goToLock() {
  show("final");
}

// 🔓 UNLOCK
function unlock() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");
  const secret = document.getElementById("secret");

  if (input.toLowerCase() === HEART_PASSWORD.toLowerCase()) {
    error.classList.add("hidden");
    secret.classList.remove("hidden");

    const catMoment = document.getElementById("catMoment");
    const newYearMsg = document.getElementById("newYearMsg");

    const shayariLines = [
      "hazaro lamhe iss naye saal ke,",
      "aapka har din muskurate huye he jaye,",
      "",
      "kabhi ho na udaas haseen chehra aapka,",
      "mera pyaar har dukh ko harate huye jaye 💖"
    ];

    catMoment.classList.remove("hidden");

    setTimeout(() => {
      catMoment.classList.add("hidden");
      newYearMsg.classList.remove("hidden");
    }, 4000);

    setTimeout(() => {
      typewriterEffect(shayariLines);
    }, 6500);

  } else {
    error.classList.remove("hidden");
  }
}

// ✍ TYPEWRITER EFFECT
function typewriterEffect(lines) {
  const element = document.getElementById("finalMsg");
  element.innerHTML = "";

  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        element.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 40);
      } else {
        element.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(type, 500);
      }
    }
  }
  type();
}
