const componentsApi = {
  getPokemons: async (limit = 10, offset = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    const detailsPromises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();

      return {
        name: pokemon.name,
        image: details.sprites.front_default,
        types: details.types.map(typeInfo => typeInfo.type.name),
        id: details.id,
        abilities: details.abilities.map(abilityInfo => abilityInfo.ability.name),
        moves: details.moves.map(m => m.move.name),
      };
    });

    return Promise.all(detailsPromises);
  },


 getPokemonById: async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

 
  const abilityDescriptions = await Promise.all(
    data.abilities.map(async (abilityInfo) => {
      const res = await fetch(abilityInfo.ability.url);
      const abilityData = await res.json();

      const descricaoPt = abilityData.flavor_text_entries.find(
  entry => entry.language.name === "pt"
)?.flavor_text;

const descricaoEn = abilityData.flavor_text_entries.find(
  entry => entry.language.name === "en"
)?.flavor_text;

return {
  name: abilityInfo.ability.name,
  description: (descricaoPt || descricaoEn || "Descrição indisponível.").replace(/\n|\f/g, " ")
};
    })
  );

  return {
    name: data.name,
    image: data.sprites.front_default,
    id: data.id,
    types: data.types.map(t => t.type.name),
    abilities: data.abilities.map(a => a.ability.name),
    abilitiesDescription: abilityDescriptions,
    moves: data.moves.map(m => m.move.name),
  };
},


  getPokemonByName: async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  const data = await response.json();

  return {
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map(t => t.type.name),
    id: data.id,
    abilities: data.abilities.map(a => a.ability.name),
    moves: data.moves.map(m => m.move.name),
  };
},

getPokemonsByType: async (type, limit = 10, offset = 0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();

  const pokemons = data.pokemon
    .slice(offset, offset + limit)
    .map(p => p.pokemon.name);

  const details = await Promise.all(
    pokemons.map(async (name) => await componentsApi.getPokemonByName(name))
  );

  return details;
},

};

export default componentsApi;
