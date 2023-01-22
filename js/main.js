/*variable*/

console.log(document.querySelector("title").innerText)

//crea un numero ENTERO ramdon tomando un rango de minimo a entero
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

//llamado de la funcion cuando carga la pagina
document.addEventListener("DOMContentLoaded", () => {
  const ramdom = getRandomInt(1, 152)
  console.log(ramdom)
  fechtData(ramdom)
})

const fechtData = async (id) => {
  try {
    console.log(id)

    const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data1 = await res1.json()
    const res2 = await fetch(data1.moves[0].move.url)
    const data2 = await res2.json()
    const res3 = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data3 = await res3.json()
    console.log(data2)
    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data1.id}.png`,
      imgJuego: data1.sprites.front_default,
      imgCvg: data1.sprites.other.dream_world.front_default,
      nombre: data1.name,
      experiencia: data1.base_experience,
      hp: data1.stats[0].base_stat,
      ataque: data1.stats[1].base_stat,
      defensa: data1.stats[2].base_stat,
      especial: data1.stats[3].base_stat,
      moveName: data1.moves[0].move.name,
      moveDes: data2.effect_entries[0].effect,
      id: data2.id,
    }
    console.log(pokemon)
    console.dir(data3.results)

    //const pokemones = {
    // pokemonUni:data3.[0]
    //}
    pintarCard(pokemon)
    pintarList(data3.results)
  } catch (error) {
    console.log(error)
  }
}
async function pintarList(list) {
  try {
    const res = await fetch("templates/list-inputs.hbs")
    const templateHbs = await res.text()
    const template = Handlebars.compile(templateHbs)

    const html = template({ list })

    document.getElementsByClassName("inputs-container")[0].innerHTML = html
  } catch (error) {
    console.error(`este error${err}`)
  }
}

const pintarCard = async (pokemon) => {
  try {
    const res = await fetch("templates/card.hbs")
    const templateHbs = await res.text()
    const template = Handlebars.compile(templateHbs)
    const html = template({ pokemon })
    console.log(html)
    document.getElementsByClassName("cards-container")[0].innerHTML = html
  } catch (err) {
    console.error(`este error${err}`)
  }
}
/**HAndlebars math */
Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
  lvalue = parseFloat(lvalue);
  rvalue = parseFloat(rvalue);
      
  return {
      "+": lvalue + rvalue,
      "-": lvalue - rvalue,
      "*": lvalue * rvalue,
      "/": lvalue / rvalue,
      "%": lvalue % rvalue
  }[operator];
});
/**HAndlebars math */
