const upbar = document.querySelector(".bar1");
const middlebar = document.querySelector(".bar2");
const downbar = document.querySelector(".bar3");
const burguer = document.querySelector(".bars");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const addButton = document.querySelector(".add-button");
const addMenu = document.querySelector(".add-menu");

burguer.addEventListener("click", () => {
  upbar.classList.toggle("upcross");
  middlebar.classList.toggle("middlecross");
  downbar.classList.toggle("downcross");
  menu.classList.toggle("menuopen");
});

addButton.addEventListener("click", () => {
  addMenu.classList.toggle("add-menuOpen");
});

document.addEventListener("click", function (event) {
  if (event.target !== addMenu && event.target !== addButton) {
    addMenu.classList.replace("add-menuOpen", "add-menu");
  }
});

const filmes = [
  {
    titulo: "Thor: Amor e o Trovão",
    lançamento: "2020",
    elenco: "Chris Hemsworth, Tessa Thompson, Natalie Portman, Christian Bale",
    gênero: "Ação",
  },
  {
    titulo: "Encanto",
    lançamento: "2021",
    elenco: "Emily Blunt, Lin-Manuel Miranda, John Krasinski, Emily Mortimer",
    gênero: "Comédia",
  },
  {
    titulo: "Avatar: O Caminho da Água",
    lançamento: "2022",
    elenco: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    gênero: "Ficção científica",
  },
];
