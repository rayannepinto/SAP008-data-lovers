import { filterByName } from '../src/data.js';

const pokemons = [
  {
    name: "bulbasaur"
  },
  {
    name: "abra"
  },
  {
    name: "zubat"
  }
]

describe ("filterByName", function () {
  it("deve ordernar de a-z", function () {
    const ordenado = filterByName(pokemons, "A-Z")

    expect(ordenado.length).toEqual(pokemons.length)
    expect(ordenado[0].name).toEqual(pokemons[1].name)
  })

  it("deve ordernar de z-a", function () {
    const ordenado = filterByName(pokemons, "Z-A")

    expect(ordenado.length).toEqual(pokemons.length)
    expect(ordenado[0].name).toEqual(pokemons[2].name)
  })
})