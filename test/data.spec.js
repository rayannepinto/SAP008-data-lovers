import {
  sortByName,
  sortByNum,
  filterByType,
  searchByName,
} from "../src/data.js";

const pokemonsName = [
  {
    name: "bulbasaur",
  },
  {
    name: "abra",
  },
  {
    name: "zubat",
  },
];

describe("sortByName", function () {
  it("deve ordernar de a-z", function () {
    const sortedName = sortByName(pokemonsName, "A-Z");

    expect(sortedName.length).toEqual(pokemonsName.length);
    expect(sortedName[0].name).toEqual(pokemonsName[1].name);
  });

  it("deve ordernar de z-a", function () {
    const sortedName = sortByName(pokemonsName, "Z-A");

    expect(sortedName.length).toEqual(pokemonsName.length);
    expect(sortedName[0].name).toEqual(pokemonsName[2].name);
  });
});

const pokemonsNum = [
  {
    name: "bulbasaur",
    num: "001",
  },
  {
    name: "abra",
    num: "063",
  },
  {
    name: "zubat",
    num: "041",
  },
];

describe("sortByNum", function () {
  it("deve ordernar de 0-9", function () {
    const sortedNum = sortByNum(pokemonsNum, "0-9");

    expect(sortedNum.length).toEqual(pokemonsNum.length);
    expect(sortedNum[0].num).toEqual(pokemonsNum[0].num);
  });

  it("deve ordernar de 9-0", function () {
    const sortedNum = sortByNum(pokemonsNum, "9-0");

    expect(sortedNum.length).toEqual(pokemonsNum.length);
    expect(sortedNum[0].num).toEqual(pokemonsNum[1].num);
  });
});

const pokemonsType = [
  {
    name: "bulbasaur",
    num: "001",
    type: ["grass", "poison"],
  },
  {
    name: "abra",
    num: "063",
    type: "psychic",
  },
  {
    name: "zubat",
    num: "041",
    type: ["poison", "flying"],
  },
];

describe("filterByType", function () {
  it("deve filtrar o tipo definido", function () {
    const sortedType = filterByType(pokemonsType, "psychic");

    expect(sortedType[0].type).toEqual(pokemonsType[1].type);
  });

  it("deve filtrar o tipo definido", function () {
    const sortedType = filterByType(pokemonsType, "poison");

    expect(sortedType[1].type).toEqual(pokemonsType[2].type);
  });

  it("deve filtrar o tipo definido", function () {
    const sortedType = filterByType(pokemonsType, "flying");

    expect(sortedType[0].type).toEqual(pokemonsType[2].type);
  });
});

const pokemonsSearch = [
  {
    name: "bulbasaur",
  },
  {
    name: "abra",
  },
  {
    name: "zubat",
  },
];

describe("searchByName", function () {
  it("deve retornar o pokémon buscado", function () {
    const sortedSearch = searchByName(pokemonsSearch, "zubat");

    expect(sortedSearch[0].type).toEqual(pokemonsSearch[2].type);
  });

  it("deve retornar o pokémon buscado", function () {
    const sortedSearch = searchByName(pokemonsSearch, "abra");

    expect(sortedSearch[0].type).toEqual(pokemonsSearch[1].type);
  });
});
