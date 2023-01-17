const upbar = document.querySelector(".bar1");
const middlebar = document.querySelector(".bar2");
const downbar = document.querySelector(".bar3");
const burguer = document.querySelector(".bars");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const addButton = document.querySelector(".add-button");
const addMenu = document.querySelector(".add-menu");
const buttonOption = document.querySelectorAll(".btnOpt");
const form = document.getElementById("formulario-filme");

var filmes = [];

window.addEventListener("load", () => {
  const URL = 'http://localhost:8080/movies'
  axios.get(URL)
    .then(response => {
      filmes = response.data;
      console.log(`GET filmes`, filmes);
    })
    .catch(error => console.error(error));
})

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
  let found = false;
  for (let i = 0; i < buttonOption.length; i++) {
    if (event.target === buttonOption[i]) {
      found = true;
      break;
    }
  }
  if (event.target !== addMenu && event.target !== addButton && !found) {
    addMenu.classList.replace("add-menuOpen", "add-menu");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const lançamento = document.getElementById("lancamento").value;
  const elenco = document.getElementById("elenco").value;
  const gênero = document.getElementById("genero").value;
  const novoFilme = {
    titulo: titulo,
    release: lançamento,
    cast: elenco,
    genre: gênero,
  };

  const URL = 'http://localhost:8080/movies'
  axios.post(URL, novoFilme)
    .then(response => { 
      const addedMovie = response.data;
      console.log(`POST: user is added`, addedMovie);
      filmes.push(addedMovie);
    })
    .catch(error => console.error(error));
});