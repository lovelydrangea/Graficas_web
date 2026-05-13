let currentScreen = "menu";
let gamePaused = false;
import * as THREE from 'three';
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
  currentScreen = id;
}

function pauseGame() {
  gamePaused = true;
  showScreen("pause");
}

function resumeGame() {
  gamePaused = false;
  showScreen("game");
}

