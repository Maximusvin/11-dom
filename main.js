// 1. створити список з допомогою роботи з домом, пронумерувати список та
// вивести всі його значення. Населення відобразити в млн "40 млн".
// Київ та Україна підсвітити синьо-жовтим кольором.

const countryList = [
  {
    country: "Україна",
    capital: "Київ",
    count: 40000000,
  },
  {
    country: "Грузія",
    capital: "Тбілісі",
    count: 10000000,
  },
  {
    country: "Великобританія",
    capital: "Лондон",
    count: 100000000,
  },
  {
    country: "США",
    capital: "Вашингтон",
    count: 300000000,
  },
];

const listRef = document.querySelector(".country-list");

countryList.map((item) => {
  listRef.insertAdjacentHTML(
    "beforeend",
    `<li>
    ${addCountry(item.country)}
    ${addCapital(item.capital)}
    <p>Count: ${item.count / 1000000} млн</p>
  </li>`
  );
});

function addCountry(item) {
  return item === "Україна"
    ? `<p class="blue">Country: ${item}</p>`
    : `</p>Country: ${item}</p>`;
}

function addCapital(item) {
  return item === "Київ"
    ? `<p class="yellow">Capital: ${item}</p>`
    : `</p>Capital: ${item}</p>`;
}

// 2. Створити список в якому можна буде
// довільно змінювати колір для айтемів(палітра мінімум з 5 кольорів).

const userListRef = document.querySelector(".users");
const btnWrapRef = document.querySelector(".btn-wrap");

const users = ["Max", "Bond", "Pedro", "Sanches", "Amigo"];
const color = [
  "#cf1111",
  "#2038b0",
  "#13c28d",
  "#7fc213",
  "#c27c13",
  "#2A46F7",
  "#87FFED",
  "#313B36",
  "#FF3B36",
];

users.map((user) => {
  userListRef.insertAdjacentHTML("beforeend", `<li>${user}</li>`);
});

color.map((color) => {
  const btn = document.createElement("button");
  btn.textContent = color;
  btn.name = color;
  btn.style.background = color;
  btnWrapRef.append(btn);
});

btnWrapRef.addEventListener("click", (e) => {
  userListRef.style.color = e.target.name;
});
