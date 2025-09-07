const loadCategores = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategores(data.categories));
};
const displayCategores = (categories) => {
  const categoriesContainer = document.getElementById("categoriesContainer");
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `<button onclick="load" class=" cursor-pointer hover:bg-green-600 p-2 rounded-md">${category.category_name}</button>`;
    categoriesContainer.append(div);
  });
  categoriesContainer.addEventListener("click", (e) => {
    console.log(e);
    const buttons = categoriesContainer.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("bg-green-500"));
    if (e.target.localName == "button") {
      e.target.classList.add("bg-green-500");
    }
  });
};

const loadAllPlant = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

const displayPlants = (plants) => {
  const allPlant = document.getElementById("allPlant");
  allPlant.innerHTML = "";

  plants.forEach((plant) => {
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="bg-white border border-gray-200 rounded-2xl shadow-md p-2 flex flex-col justify-between ">
    <img src="${plant.image}" alt="${
      plant.name
    }" class="w-full h-30 object-cover rounded-lg mb-4">

    <h2 class="text-xl font-semibold text-gray-800 mb-2">${plant.name}</h2>
    <p class="text-sm text-gray-600 mb-3">${plant.description.slice(
      0,
      80
    )}...</p>

    <div class="flex justify-between items-center mb-4">
      <span class="text-green-600 font-medium">${plant.category}</span>
      <span class="text-lg font-bold text-gray-900">${plant.price} ৳</span>
    </div>

    <button class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition">
      Add to Cart
    </button>
  </div>
`;

    allPlant.appendChild(div);
  });
};

loadCategores();
loadAllPlant();
