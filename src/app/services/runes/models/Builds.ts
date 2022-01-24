export const BUDGET_BUILD = ["Spectral Shard", "Suicide Branch", "Skullder\'s Ire", "Skin of the Vipermagi", "Nightsmoke", "Goldwrap", "Snowclash",
  "Moser\'s Blessed Circle", "Peasant Crown", "Tarnhelm", "Rockstopper", "Magefist", "Frostburn", "Chance Guards", "Bloodfist", "Waterwalk"];

export const HERO_BUILDS = [
  {
    hero: "Sorceress", abbr: "(S)", builds: [
      {
        name: 'Blizzard',
        runewords: ["Chains of Honor", "Spirit", "Call to Arms", "Ancient's Pledge", "Rhyme", "Sanctuary", "Lore", "Smoke", "Stealth"],
        items: ["Death\'s Fathom", "Nightwing\'s Veil", "Mara\'s Kaleidoscope", "The Stone of Jordan",
          "Bul-Kathos' Wedding Band", "Arachnid Mesh", "Sandstorm Trek", "The Oculus", "Shako", "War Traveler", "Nagelring", "Hellfire Torch", "Annihilus"]
      },
      {
        name: 'Meteorb',
        runewords: ["Heart of the Oak", "Chains of Honor", "Spirit", "Leaf", "Stealth", "Smoke", "Ancient's Pledge", "Rhyme", "Sanctuary", "Lore"],
        items: ["Shako", "Mara\'s Kaleidoscope", "Sandstorm Trek", "Arachnid Mesh", "The Stone of Jordan", "Bul-Kathos\'s Wedding Band",
          "Magefist", "War Traveler", "Chance Guards", "Goldwrap", "Nagelring", "Hellfire Torch", "Annihilus"]
      },
      {
        name: 'Fire',
        runewords: ["Spirit", "Chains Of Honor", "Leaf", "Stealth", "Smoke", "Ancient's Pledge", "Rhyme", "Sanctuary", "Lore", "Call to Arms"],
        items: ["Eschuta\'s Temper", "Shako", "Mara\'s Kaleidoscope", "Sandstorm Trek", "Arachnid Mesh", "The Stone of Jordan", "Bul-Kathos\'s Wedding Band",
          "Magefist", "Ormus\' Robes", "Hellfire Torch", "Annihilus",
          "War Traveler", "Chance Guards", "Goldwrap", "Nagelring",]
      },
      {
        name: 'Lightning',
        runewords: ["Spirit", "Chains of Honor", "Memory", "Call to Arms", "Heart of the Oak", "Crescent Moon", "Infinity", "Stealth", "Ancient's Pledge", "Rhyme", "Sanctuary", "Nadir", "Lore"],
        items: ["Eschuta\'s Temper", "Griffon\'s Eye", "Mara\'s Kaleidoscope", "Sandstorm Trek", "Arachnid Mesh", "Frostburn", "The Stone of Jordan", "Bul-Kathos\'s Wedding Band",
          "Ormus\' Robes", "Hellfire Torch", "Annihilus",
          "Shako", "War Traveler", "Chance Guards", "Goldwrap", "Nagelring",]},
      {
        name: 'Enchantress',
        runewords: ["Call to Arms", "Spirit", "Passion", "Phoenix", "Chains of Honor", "Heart of the Oak", "Leaf", "Stealth", "Ancient's Pledge", "Rhyme", "Sanctuary", "Lore"],
        items: ["Griffon\'s Eye", "Shako", "Mara\'s Kaleidoscope", "Sandstorm Trek", "Arachnid Mesh", "The Stone of Jordan", "Bul-Kathos\'s Wedding Band",
          "Magefist", "Ormus\' Robes", "Hellfire Torch", "Annihilus",
          "War Traveler", "Chance Guards", "Goldwrap", "Nagelring",]
      },
      {
        name: 'Bear',
        runewords: ["Spirit", "Beast", "Dream", "Chains of honor", "Call to Arms"],
        items: ["Dracul\'s Grasp", "Mara\'s Kaleidoscope", "Sandstorm Trek", "Verdungo\'s Hearty Cord", "The Stone of Jordan", "Bul-Kathos\'s Wedding Band", "Raven Frost",
          "Magefist", "Ormus\' Robes", "Gore Rider", "Hellfire Torch", "Annihilus",
         ]
      },
    ]
  },
  {
    hero: "Paladin", abbr: "(P)", builds: [
      {
        name: 'Smiter',
        runewords: ["Grief", "Chains of Honor", "Exile", "Call to Arms", "Spirit", "Last Wish", "Strength", "Steel", "Black", "Duress", "Stealth", "Smoke", "Ancient's Pledge", "Rhyme", "Sanctuary"],
        items: ["Mara\'s Kaleidoscope", "Highlord\'s Wrath", "Kira\'s Guardian", "Herald of Zakarum", "Dracul\'s Grasp", "Raven Frost", "Verdungo\'s Hearty Cord", "Thundergod\'s Vigor", "Dwarf Star", "Gore Rider", "Goblin Toe", "Hellfire Torch", "Annihilus",]
      },
      {
        name: 'Hammerdin',
        runewords: ["Enigma", "Call to Arms", "Spirit", "Heart of the oak", "Stealth", "Ancient's Pledge", "Rhyme", "Sanctuary", "Lore"],
        items: ["Shako", "Mara\'s Kaleidoscope", "Herald of Zakarum","Sandstorm Trek", "Arachnid Mesh", "The Stone of Jordan", "Bul-Kathos\'s Wedding Band",
           "War Traveler", "Chance Guards", "Nagelring", "Hellfire Torch", "Annihilus"]
      },
      {
        name: 'Zealot',
        runewords: ["Grief", "Exile", "Fortitude", "Last Wish", "Phoenix", "Malice", "Strength", "Steel", "Honor", "Stealth", "Duress", "Treachery", "Ancient's Pledge", "Rhyme", "Sanctuary"],
        items: ["Highlord\'s Wrath", "Herald of Zakarum", "Raven Frost", "Kira\'s Guardian", "Verdungo\'s Hearty Cord", "Dracul\'s Grasp", "Gore Rider", "Goblin Toe", "Hellfire Torch", "Annihilus",]
      },
      {
        name: 'Tesladin',
        runewords: ["Grief", "Dream", "Fortitude", "Crescent Moon", "Call to Arms", "Spirit", "Honor", "Black", "Strength", "Duress", "Treachery", "Rhyme", "Ancient's Pledge", "Sanctuary", "Lore"],
        items: ["Highlord\'s Wrath", "Dwarf Star", "Raven Frost", "Verdungo\'s Hearty Cord", "Dracul\'s Grasp", "Gore Rider", "Goblin Toe",
          "War Traveler", "Chance Guards", "Goldwrap", "Nagelring","Hellfire Torch", "Annihilus", "Thundergod\'s Vigor"]
      },
      {
        name: 'Holy Freeze Zealot',
        runewords: ["Doom", "Exile", "Fortitude", "Grief", "Last Wish", "Phoenix", "Oath", "Honor", "Malice", "Steel", "Strength", "Stealth", "Duress", "Treachery", "Smoke", "Sanctuary", "Rhyme", "Ancient's Pledge", "Spirit", "Lore"],
        items: ["Highlord\'s Wrath", "Herald of Zakarum", "Raven Frost", "Kira\'s Guardian", "Verdungo\'s Hearty Cord", "Dracul\'s Grasp", "Gore Rider", "Goblin Toe", "Hellfire Torch", "Annihilus",]
      },
      {
        name: 'Avenger',
        runewords: ["Dream", "Breath of the Dying", "Chains of Honor", "Spirit", "Call to Arms", "Death", "Fortitude", "Crescent Moon", "Honor", "Oath", "Duress", "Smoke", "Rhyme", "Sanctuary", "Ancient's Pledge", "Lore"]
      },
    ]
  },
  {
    hero: "Barbarian", abbr: "(B)", builds: [
      {
        name: 'Zerker',
        runewords: ["Grief", "Enigma", "Oath", "Honor", "Black", "Duress", "Wealth", "Treachery", "Rhyme", "Ancient's Pledge", "Sanctuary"]
      },
      {
        name: 'Frenzy',
        runewords: ["Breath of the Dying", "Grief", "Doom", "Death", "Fortitude", "Oath", "Black", "Malice", "Steel", "Honor", "Stealth", "Duress", "Lionheart", "Smoke", "Treachery", "Lore"]
      },
      {
        name: 'Whirlwind',
        runewords: ["Grief", "Breath of the Dying", "Doom", "Death", "Beast", "Fortitude", "Malice", "Honor", "Oath", "Kingslayer", "Obedience", "Insight", "Black", "Stealth", "Duress", "Treachery", "Smoke", "Lionheart", "Lore"]
      },
      {
        name: 'Throw',
        runewords: ["Fortitude", "Treachery", "Stealth", "Duress", "Lionheart", "Smoke", "Lore"]
      },
      {
        name: 'Gold Find',
        runewords: ["Wealth"]
      },
      {
        name: 'Singer',
        runewords: ["Heart of the Oak", "Spirit", "Enigma", "Stealth", "Ancient's Pledge", "Sanctuary", "Lore"]
      },
    ]
  },
  {
    hero: "Amazon", abbr: "(Ama)", builds: [
      {
        name: 'Javazon',
        runewords: ["Chains of Honor", "Call to Arms", "Spirit", "Phoenix", "Stealth", "Peace", "Smoke", "Rhyme", "Ancient's Pledge", "Nadir", "Lore"]
      },
      {
        name: 'Bowazon',
        runewords: ["Faith", "Fortitude", "Call to Arms", "Spirit", "Stealth", "Peace", "Duress", "Smoke", "Lore"]
      },
      {
        name: 'Frost/Fire',
        runewords: ["Faith", "Chains of Honor", "Ice", "Stealth", "Peace", "Smoke", "Treachery", "Edge", "Melody", "Harmony", "Nadir", "Lore", "Call to Arms", "Spirit"]
      },
      {
        name: 'Frost Maiden',
        runewords: ["Ice", "Call to Arms", "Chains of Honor", "Stealth", "Peace", "Smoke", "Treachery", "Melody", "Harmony", "Edge", "Lore"]
      },
    ]
  },
  {
    hero: "Druid", abbr: "(D)", builds: [
      {
        name: 'Fire ',
        runewords: ["Heart of the Oak", "Enigma", "Phoenix", "Call to Arms", "Spirit", "Leaf", "Stealth", "Ancient's pledge", "Rhyme", "Sanctuary", "Lore"]
      },
      {
        name: 'Wind',
        runewords: ["Heart of the Oak", "Enigma", "Spirit", "Leaf", "Stealth", "Ancient's Pledge", "Rhyme", "Sanctuary", "Lore"]
      },
      {
        name: 'Fury',
        runewords: ["Grief", "Fortitude", "Chains of Honor", "Oath", "Obedience", "Honor", "Rhyme", "Ancient's Pledge", "Sanctuary", "Stealth", "Duress"]
      },
      {
        name: 'Summon',
        runewords: ["Beast", "Enigma", "Spirit", "Stealth", "Rain", "Ancient's Pledge", "Lore"]
      },
    ]
  },
  {
    hero: "Necromancer", abbr: "(N)", builds: [
      {
        name: 'Bone',
        runewords: ["White", "Heart of the Oak", "Spirit", "Call to Arms", "Stealth", "Ancient's Pledge", "Rhyme", "Lore"]
      },
      {
        name: 'Poison',
        runewords: ["Enigma", "Call to Arms", "Spirit", "White", "Stealth", "Smoke", "Ancient's Pledge", "Rhyme", "Bramble", "Lore"]
      },
      {
        name: 'Summoner',
        runewords: ["Beast", "Enigma", "Spirit", "Call to Arms", "Heart of the Oak", "White", "Stealth", "Smoke", "Ancient's Pledge", "Rhyme", "Lore"]
      },
    ]
  },
  {
    hero: "Assassin", abbr: "(Asn)", builds: [
      {
        name: 'Trapsin',
        runewords: ["Enigma", "Call to Arms", "Spirit", "Heart of the Oak", "Leaf", "Stealth", "Ancient's Pledge", "Rhyme", "Sanctuary", "Lore"]
      },
      {
        name: 'Kicksin',
        runewords: ["Chains of Honor", "Spirit", "Sanctuary", "Rift", "Stealth", "Treachery", "Smoke", "Duress", "Ancient's Pledge", "Rhyme", "Lore"]
      },
      {
        name: 'Whirlwind',
        runewords: ["Chaos", "Fury", "Fortitude", "Call to Arms", "Spirit", "Treachery"]
      },
      {
        name: 'Bladesin',
        runewords: ["Death", "Fortitude", "Phoenix", "Fury", "Stealth", "Duress", "Treachery", "Smoke", "Ancient's Pledge", "Rhyme", "Spirit", "Sanctuary", "Lore"]
      },
    ]
  },
  {
    hero: "Mercenary", abbr: '(MERC)', builds: [
      {
        name: "Mercenary",
        runewords: ["Obedience", "Fortitude", "Infinity", "Insight", "Treachery", "Duress", "Breath of the Dying"]
      }
    ]
  }
];

export interface HeroBuild {
  hero: string;
  abbr: string;
  builds: Array<{ name: string, runewords: Array<string> }>
}
