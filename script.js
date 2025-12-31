alert("IT IS WORKING");
let userName = "";
let pickupLine = "";
let currentStep = 1;

// 🔑 ❤️ CHANGE YOUR PASSWORD HERE ❤️
const HEART_PASSWORD = "1069";

function start() {
  userName = document.getElementById("nameInput").value.trim();
  if (userName === "") {
    alert("Name first cutie 💕");
    return;
  }
  currentStep = 2;
  show("step2");
}

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

function showGift() {
  currentStep = 5;
  show("step5");
}

function goToLock() {
  show("final");
}

function unlock() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");
  const secret = document.getElementById("secret");

  if (input.toLowerCase() === HEART_PASSWORD.toLowerCase()) {
    error.classList.add("hidden");
    secret.classList.remove("hidden");

    // 🐱 CAT MOMENT
    const catMoment = document.getElementById("catMoment");
    const newYearMsg = document.getElementById("newYearMsg");

    const shayariLines = [
      "hazaro lamhe iss naye saal ke,",
      "aapka har din muskurate huye he jaye,",
      "",
      "kabhi ho na udaas haseen chehra aappka,",
      "mera pyaar har dukh ko harate huye jaye 💖"
    ];

    // Show cats first
    catMoment.classList.remove("hidden");

    // After cats → show New Year message
    setTimeout(() => {
      catMoment.classList.add("hidden");
      newYearMsg.classList.remove("hidden");
    }, 4000);

    // After New Year → start shayari typing
    setTimeout(() => {
      typeWriterEffect(shayariLines);
    }, 6500);

  } else {
    error.classList.remove("hidden");
  }
}

function show(id) {
  document.querySelectorAll(".card > div").forEach(div => {
    div.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// ✨ TYPEWRITER EFFECT
function typeWriterEffect(lines) {
  const element = document.getElementById("finalMsg");
  element.innerHTML = "";

  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        element.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 40); // typing speed
      } else {
        element.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(type, 500); // pause between lines
      }
    }
  }

  type();
}
