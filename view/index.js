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
const container = document.getElementById("containerm");

var filmes = [];

window.addEventListener("load", () => {
  const URL = "https://crudfilmes2023.onrender.com/movies";
  axios
    .get(URL)
    .then((response) => {
      filmes = response.data;

      console.log(`GET filmes`, filmes);
      filmes.forEach((filme, index) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.setAttribute('data-index',`${index}`)
        div.innerHTML = `
          <h2>${filme.titulo}</h2>
          <p>Release: ${filme.release}</p>
          <p>Elenco: ${filme.cast}</p>
          <p>Gênero: ${filme.genre}</p>
        `;
        div.addEventListener('click', e => populateModal(index))
        container.appendChild(div);
      });
    })
    .catch((error) => console.error(error));
});

const populateModal = index => {
  document.querySelector('.modal-title').innerHTML = filmes[index].titulo
  document.querySelector('.modal-body').innerHTML = filmes[index].enredo || `Esse filme foi lançado em ${filmes[index].release}. A história é muito massa, de ${filmes[index].genre}, mas depois eu conto. Tem muita gente legal: ${filmes[index].cast}.`  
}

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
  const lancamento = document.getElementById("lancamento").value;
  const elenco = document.getElementById("elenco").value;
  const genero = document.getElementById("genero").value;
  const novoFilme = {
    titulo: titulo,
    release: lancamento,
    cast: elenco,
    genre: genero,
  };

  const URL = "https://crudfilmes2023.onrender.com/movies";
  axios
    .post(URL, novoFilme)
    .then((response) => {
      const addedMovie = response.data;
      console.log(`POST: user is added`, addedMovie);
      filmes.push(addedMovie);
    })
    .catch((error) => console.error(error));
});
