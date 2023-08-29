import pokeball from "../assets/pokeball.svg";

const pokemonEnvironments = {
  water: "/water.hdr",
  grass: "/forest.hdr",
  ground: "/water.hdr",
};

export type TPokeColors = {
  [key: string]: TPokeColor;
};

export type TPokeColor = {
  mainBackground: string;
  secondaryBackground: string;
  border: string;
  normalBorder: string;
  gradient: string;
};
const pokeColors: TPokeColors = {
  water: {
    mainBackground: "bg-[#9db7f5]",
    secondaryBackground: "bg-[#6890f0]",
    border: "hover:border-[#6890f0]",
    normalBorder: "border-[#6890f0]",
    gradient: "from-[rgba(47,128,237,.75)] to-[rgba(86,204,242,.75)]",
  },
  grass: {
    mainBackground: "bg-[#a7db8d]",
    secondaryBackground: "bg-[#78c850]",
    border: "hover:border-[#78c850]",
    normalBorder: "border-[#78c850]",
    gradient:
      "from-[rgba(41,255,198,.75)] via-[rgba(32,227,178,.75)] to-[rgba(12,235,235,.75)]",
  },
  fire: {
    mainBackground: "bg-[#f5ac78]",
    secondaryBackground: "bg-[#f08030]",
    border: "hover:border-[#f08030]",
    normalBorder: "border-[#f08030]",
    gradient: "from-[rgba(245,175,25,.75)] to-[rgba(241,39,17,.75)]",
  },
  electric: {
    mainBackground: "bg-[#fae078]",
    secondaryBackground: "bg-[#f8d030]",
    border: "hover:border-[#f8d030]",
    normalBorder: "border-[#f8d030]",
    gradient:
      "from-[rgba(250,224,120,.75)] via-[rgba(248,208,48,.75)] to-[rgba(247,174,18,.75)]",
  },
  bug: {
    mainBackground: "bg-[#c6d16e]",
    secondaryBackground: "bg-[#a8b820]",
    normalBorder: "border-[#a8b820]",
    border: "hover:border-[#a8b820]",
    gradient: "from-[rgba(141,194,111,.75)] to-[rgba(118,184,82,.75)]",
  },
  dragon: {
    mainBackground: "bg-[#a27dfa]",
    secondaryBackground: "bg-[#7038f8]",
    normalBorder: "border-[#7038f8]",
    border: "hover:border-[#7038f8]",
    gradient: "from-[rgba(31,209,249,.75)] to-[rgba(182,33,254,.75)]",
  },
  fairy: {
    mainBackground: "bg-[#f4bdc9]",
    secondaryBackground: "bg-[#ee99ac]",
    border: "hover:border-[#ee99ac]",
    normalBorder: "border-[#ee99ac]",
    gradient: "from-[rgba(255,221,225,.9)] to-[rgba(238, 156, 167, .9)]",
  },
  ghost: {
    mainBackground: "bg-[#a292bc]",
    secondaryBackground: "bg-[#705898]",
    border: "hover:border-[#705898]",
    normalBorder: "border-[#705898]",
    gradient: "from-[rgba(51,51,153,.85)] to-[rgba(255,0,204,.85)]",
  },
  ground: {
    mainBackground: "bg-[#ebd69d]",
    secondaryBackground: "bg-[#e0c068]",
    border: "hover:border-[#e0c068]",
    normalBorder: "border-[#e0c068]",
    gradient: "from-[rgba(255,212,82,.85)] to-[rgba(84,74,125,.85)]",
  },
  ice: {
    mainBackground: "bg-[#bce6e6]",
    secondaryBackground: "bg-[#98d8d8]",
    border: "hover:border-[#98d8d8]",
    normalBorder: "border-[#98d8d8]",
    gradient:
      "from-[hsla(0,0%,100%,.75)] via-[rgba(109,213,250,.75)] to-[rgba(41,128,185,.75)]",
  },
  normal: {
    mainBackground: "bg-[#c6c6a7]",
    secondaryBackground: "bg-[#a8a878]",
    border: "hover:border-[#a8a878]",
    normalBorder: "border-[#a8a878]",
    gradient: "from-[rgba(222,203,164,.8)] to-[rgba(62,81,81,.8)]",
  },
  poison: {
    mainBackground: "bg-[#c183c1]",
    secondaryBackground: "bg-[#a040a0]",
    border: "hover:border-[#a040a0]",
    normalBorder: "border-[#a040a0]",
    gradient:
      "from-[rgba(253,239,249,.85)] via-[rgba(236,56,188,.85)] to-[rgba(115,3,192,.85)]",
  },
  psychic: {
    mainBackground: "bg-[#fa92b2]",
    secondaryBackground: "bg-[#f85888]",
    border: "hover:border-[#f85888]",
    normalBorder: "border-[#f85888]",
    gradient:
      "from-[rgba(75,192,200,.85)] via-[rgba(199,121,208,.85)] to-[rgba(254,172,94,.85)]",
  },
  rock: {
    mainBackground: "bg-[#d1c17d]",
    secondaryBackground: "bg-[#b8a038]",
    border: "hover:border-[#b8a038]",
    normalBorder: "border-[#b8a038]",
    gradient: "from-[rgba(255,255,252,.85)] to-[rgba(190,183,164,.85)]",
  },
  steel: {
    mainBackground: "bg-[#d1d1e0]",
    secondaryBackground: "bg-[#b8b8d0]",
    border: "hover:border-[#b8b8d0]",
    normalBorder: "border-[#b8b8d0]",
    gradient: "from-[rgba(184,198,219,.85)] to-[rgba(245,247,250,.85)]",
  },
  fighting: {
    mainBackground: "bg-[#d67873]",
    secondaryBackground: "bg-[#c03028]",
    border: "hover:border-[#c03028]",
    normalBorder: "border-[#c03028]",
    gradient: "from-[rgba(227,93,91,.85)] to-[rgba(229,57,53,.85)]",
  },
  flying: {
    mainBackground: "bg-[#a890f0]",
    secondaryBackground: "bg-[#a890f0]",
    border: "hover:border-[#a890f0]",
    normalBorder: "border-[#a890f0]",
    gradient: "from-[rgba(142,84,233,.85)] to-[rgba(71,118,230,.85)]",
  },
  dark: {
    mainBackground: "bg-[#1a1819]",
    secondaryBackground: "bg-[#3a2d26]",
    border: "hover:border-[#3a2d26]",
    normalBorder: "border-[#3a2d26]",
    gradient:
      "from-[rgba(93,38,193,.85)] via-[rgba(161,127,224,.85)] to-[rgba(89, 193, 115, .85)]",
  },
};

export type TAbility = {
  ability: { name: string; url: string };
};
export type TSprite = string | null;
export type TSprites = {
  back_default: TSprite;
  back_female: TSprite;
  back_shiny: TSprite;
  back_shiny_female: TSprite;
  front_default: TSprite;
  front_shiny: TSprite;
  front_shiny_female: TSprite;
};

export type TType = {
  slot: number;
  type: { name: string; url: string };
};

export type TStat = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};
export type TPokemon = {
  name: string;
  abilities: TAbility[];
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  forms: { name: string; url: string }[];
  location_area_encounters: string;
  sprites: TSprites;
  types: TType[];
  stats: TStat[];
};

export type TPokemonInfo = {
  base_happiness: number;
  capture_rate: number;
  color: { name: string; url: string };
  egg_groups: { name: string; url: string };
  evolution_chain: { url: string };
  generation: { name: string; url: string };
  growth_rate: { name: string; url: string };
  habitat: { name: string; url: string };
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  order: number;
  shape: { name: string; url: string };
};
export { pokemonEnvironments, pokeball, pokeColors };
