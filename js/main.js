//{
//() => {
console.log(document.querySelector("title").innerText);

url = "https://pokeapi.co/api/v2/pokemon/133/";

document.addEventListener("DOMContentLoaded", () => {
  fechtData;
});
const fechtData = fetch(url)
  // Exito
  .then((response) => response.json()) // convertir a json
  .then((json) => console.log(json)) //imprimir los datos en la consola
  .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores

const template = document.getElementById("template").content;
// };
//}
