import { getAnimales } from "./controllers.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./classes.js";

const imagePath = "./assets/imgs/";
const soundPath = "./assets/sounds/";

getAnimales(soundPath).then((animales) => {
  toggleButton.addEventListener("click", () => {
    const selectedAnimal = animalSelect.value;
    if (!selectedAnimal) {
      return;
    }

    const animalImage = document.createElement("img");
    animalImage.src = imagePath + selectedAnimal + ".jpg";
    animalImage.alt = selectedAnimal;

    const animalSound = document.createElement("audio");
    const soundSource = document.createElement("source");
    soundSource.src = soundPath + selectedAnimal + ".mp3";
    animalSound.controls = true;
    animalSound.appendChild(soundSource);

    const animalInfo = document.createElement("div");
    animalInfo.appendChild(animalImage);
    animalInfo.appendChild(animalSound);

    animalesCard.appendChild(animalInfo);
  });
});

const leon = new Leon();
const lobo = new Lobo();
const oso = new Oso();
const serpiente = new Serpiente();
const aguila = new Aguila();

const animalSelect = document.getElementById("animal");
const animalesCard = document.getElementById("Animales");

animalesCard.style.display = "none";

const toggleButton = document.getElementById("btnRegistrar");
