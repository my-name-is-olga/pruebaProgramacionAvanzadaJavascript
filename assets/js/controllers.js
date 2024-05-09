const imagePath = "./assets/imgs";
const soundPath = "./assets/sounds";

export const getAnimales = async (soundPath) => {
  try {
    const response = await fetch("animales.json");
    if (!response.ok) {
      throw new Error(`error fetching animales.json:${response.statusText}`);
    }
    const data = await response.json();
    return { animales: data.animales, imagePath };
  } catch (error) {
    console.error("error retrieving animal data:", error);
    return { animales: [], imagePath: "", soundPath: `${soundPath}` };
  }
};

function animalCard(animal) {
  const div = document.createElement("div");
  div.textContent = animal.nombre;
  div.addEventListener("click", async () => {
    const { imagePath, soundPath = defaultSoundPath } = await getAnimales();
    animalModal(animal, imagePath, soundPath);
  });
  return div;
}

function animalModal(animal, imagePath, soundPath) {
  const modal = document.getElementById("exampleModal");
  modal.innerHTML = `
  <div id="Animales">
        <h2>${animal.nombre}</h2>
        <img src="${imagePath}/${animal.imagen}" alt="" />
        <audio controls>
        <source src="${soundPath}/${animal.sonido}" type="audio/mp3" />
        </audio>
        </div>`;
  modal.style.display = "block";
}

(async () => {
  const { animales, imagePath } = await getAnimales();
  const animalCards = animales.map(animalCard);
  const container = document.getElementById("Animales");
  animalCards.forEach((card) => container.appendChild(card));
})();
