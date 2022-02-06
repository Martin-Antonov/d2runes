export enum ItemType {
  CHARMS = 'Charms',
  JEWELS = 'Jewels',
  AMULETS = 'Amulets',
  RINGS = 'Rings',
  BELTS = 'Belts',
  BOOTS = 'Boots',
  GLOVES = 'Gloves',
  HELMS = 'Helms',
  ARMORS = 'Armors',
  SHIELDS = 'Shields',
  WEAPONS = 'Weapons'
}

export enum QualityType {
  NONE = 'None',
  NORMAL = 'Normal',
  EXCEPTIONAL = 'Exceptional',
  ELITE = 'Elite'
}

export enum SubType {
  AXE = 'Axes',
  BOW = 'Bows',
  CROSSBOW = 'Crossbows',
  DAGGER = 'Daggers',
  MACE = 'Maces',
  POLEARM = 'Polearms',
  SCEPTER = 'Scepters',
  SPEAR = 'Spears',
  JAVELIN = 'Javelins',
  STAFF = 'Staves',
  SWORD = 'Swords',
  THROW = 'Throw',
  WAND = 'Wands',
  KATAR = 'Katars'
}

export enum Hero {
  AMAZON = 'Amazon',
  ASSASSIN = 'Assassin',
  NECROMANCER = 'Necromancer',
  SORCERESS = 'Sorceress',
  BARBARIAN = 'Barbarian',
  DRUID = 'Druid',
  PALADIN = 'Paladin'
}

export interface IItemGroup {
  itemType: ItemType;
  itemSubtype?: SubType
  items: Array<ISpecificItem>;
  selected?: boolean;
}

export interface ISpecificItem {
  name: string;
  type: string;
  quality: QualityType;
  img: string;
  stats: string;
  magicStats: string;
  hero?: Hero;
  selected?: boolean;
  builds?: Array<string>;
}

export const ALL_ITEMS: Array<IItemGroup> = [

  {
    itemType: ItemType.CHARMS, items: [
      {
        name: 'Annihilus',
        type: 'Small Charm',
        quality: QualityType.NONE,
        img: 'assets/items/unique/charms/annihilus.jpg',
        stats: "Required Level: 70",
        magicStats: "+1 to All Skills\n" +
          "+10-20 to All Attributes\n" +
          "All Resistances +10-20\n" +
          "+5-10% to Experience Gained",
      },
      {
        name: 'Hellfire Torch',
        type: 'Large Charm',
        quality: QualityType.NONE,
        img: 'assets/items/unique/charms/torch.jpg',
        stats: "Required Level: 75",
        magicStats: "25% Chance to cast level 10 Firestorm on attack\n" +
          "+3 to (Random Class) Skill Levels\n" +
          "+10-20 to All Attributes\n" +
          "All Resistances +10 - 20\n" +
          "+8 to Light Radius\n" +
          "Level 30 Hydra (10/10 Charges)",
      },
      {
        name: 'Gheed\'s Fortune',
        type: 'Grand Charm',
        quality: QualityType.NONE,
        img: 'assets/items/unique/charms/gheed\'s-fortune.jpg',
        stats: "Required Level: 62",
        magicStats: "80-160% Extra Gold From Monsters\n" +
          "Reduces All Vendor Prices 10-15%\n" +
          "20-40% Better Chance of Getting Magic Items",
      },
    ]
  },
  {
    itemType: ItemType.JEWELS, items: [
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: "Required Level: 49",
        magicStats: "100% Chance to Cast Level 29 Blaze When You Level-Up\n" +
          "Adds 17-45 Fire Damage\n" +
          "+3-5% to Fire Skill Damage\n" +
          "-(3-5)% to Enemy Fire Resistance",
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: "Required Level: 49",
        magicStats: "100% Chance to Cast Level 43 Frost Nova When You Level-Up\n" +
          "Adds 24-38 Cold Damage, 0.12 sec Duration (Normal)\n" +
          "+3-5% to Cold Skill Damage\n" +
          "-(3-5)% to Enemy Cold Resistance",
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: "Required Level: 49",
        magicStats: "100% Chance to Cast Level 41 Nova When You Level-Up\n" +
          "Adds 1-74 Lightning Damage\n" +
          "+3-5% to Lightning Skill Damage\n" +
          "-(3-5)% to Enemy Lightning Resistance",
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: "Required Level: 49",
        magicStats: "100% Chance to Cast Level 23 Venom When You Level-Up\n" +
          "+37 Poison Damage Over 2 Seconds\n" +
          "+3-5% to Poison Skill Damage\n" +
          "-(3-5)% to Enemy Poison Resistance",
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: "Required Level: 49",
        magicStats: "100% Chance to Cast Level 31 Meteor When You Die\n" +
          "Adds 17-45 Fire Damage\n" +
          "+3-5% to Fire Skill Damage\n" +
          "-(3-5)% to Enemy Fire Resistance",
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: "Required Level: 49",
        magicStats: "100% Chance to Cast Level 37 Blizzard When You Die\n" +
          "Adds 24-38 Cold Damage, 0.12 sec Duration (Normal)\n" +
          "+3-5% to Cold Skill Damage\n" +
          "-(3-5)% to Enemy Cold Resistance",
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: "Required Level: 49",
        magicStats: "100% Chance to Cast Level 47 Chain Lightning When You Die\n" +
          "Adds 1-74 Lightning Damage\n" +
          "+3-5% to Lightning Skill Damage\n" +
          "-(3-5)% to Enemy Lightning Resistance",
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: "Required Level: 49",
        magicStats: "100% Chance to Cast Level 51 Poison Nova When You Die\n" +
          "+37 Poison Damage Over 2 Seconds\n" +
          "+3-5% to Poison Skill Damage\n" +
          "-(3-5)% to Enemy Poison Resistance",
      },
    ]
  },
  {
    itemType: ItemType.AMULETS, items: [
      {
        name: 'Nokozan Relic',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 20/75\n" +
          "Required Level: 10",
        magicStats: "+20% Faster Hit Recovery\n" +
          "Adds 3-6 Fire damage\n" +
          "+10% to Maximum Fire Resist\n" +
          "Fire Resist +50%\n" +
          "+3 to Light Radius",
      },
      {
        name: 'The Eye of Etlich',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 5/75\n" +
          "Required Level: 15",
        magicStats: "+1-5 to Light Radius\n" +
          "+1 to All Skills\n" +
          "3-7% Life Stolen Per Hit\n" +
          "Adds (1-2) to (3-5) Cold Damage\n" +
          "Cold Duration: 2-10 Seconds\n" +
          "+10-40 Defense vs. Missiles",
      },
      {
        name: 'The Mahim-Oak Curio',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 10/75\n" +
          "Required Level: 25",
        magicStats: "+10 Defense\n" +
          "+10% Enhanced Defense\n" +
          "+10% Bonus to Attack Rating\n" +
          "All Resistances +10\n" +
          "+10 to All Attributes",
      },
      {
        name: 'Saracen\'s Chance',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 5/75\n" +
          "Required Level: 47",
        magicStats: "10% Chance to Cast Level 2 Iron Maiden When Struck\n" +
          "All Resistances +15-25\n" +
          "+12 to All Attributes",
      },
      {
        name: 'The Cat\'s Eye',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 5/75\n" +
          "Required Level: 50",
        magicStats: "+30% Faster Run/Walk\n" +
          "+20% Increased Attack Speed\n" +
          "+100 Defense vs. Missiles\n" +
          "+100 Defense\n" +
          "+25 to Dexterity",
      },
      {
        name: 'Crescent Moon',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 5/75\n" +
          "Required Level: 50",
        magicStats: "10% Damage Taken Goes to Mana\n" +
          "+45 to Mana\n" +
          "3-6% Life Stolen Per Hit\n" +
          "11-15% Mana Stolen Per Hit\n" +
          "Magic Damage Reduced By 10\n" +
          "-2 to Light Radius",
      },
      {
        name: 'Atma\'s Scarab',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 5/75\n" +
          "Required Level: 60",
        magicStats: "5% Chance to Cast Level 2 Amplify Damage On Striking\n" +
          "20% Bonus to Attack Rating\n" +
          "+40 Poison Damage over 4 seconds\n" +
          "Poison Resist +75%\n" +
          "+3 to Light Radius\n" +
          "Attacker Takes Damage of 5",
      },
      {
        name: 'The Rising Sun',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 5/75\n" +
          "Required Level: 60",
        magicStats: "+2 to Fire Skills\n" +
          "2% Chance to Cast Level 13-19 Meteor When Struck\n" +
          "+ (0.75 Per Character Level) 0-74 Fire Absorb (Based On Character Level)\n" +
          "Adds 24-48 Fire Damage\n" +
          "Replenish Life +10\n" +
          "+4 to Light Radius",
      },
      {
        name: 'Highlord\'s Wrath',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 5/75\n" +
          "Required Level: 65",
        magicStats: "+1 to All Skills\n" +
          "+20% Increased Attack Speed\n" +
          "+ (0.375 Per Character Level) 0-37 % Deadly Strike (Based On Character Level)\n" +
          "Lightning Resist +35%\n" +
          "Adds 1-30 Lightning Damage\n" +
          "Attacker Takes Lightning Damage Of 15",
      },
      {
        name: 'Mara\'s Kaleidoscope',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 5/75\n" +
          "Required Level: 67",
        magicStats: "+2 to All Skills\n" +
          "All Resistances +20-30\n" +
          "+5 to All Attributes",
      },
      {
        name: 'Seraph\'s Hymn',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 3/75\n" +
          "Required Level: 65",
        magicStats: "+2 to All Skills\n" +
          "+1-2 to Defensive Auras (Paladin Only)\n" +
          "+20-50% Damage to Demons\n" +
          "+150-250 to Attack Rating Against Demons\n" +
          "+20-50% Damage to Undead\n" +
          "+150-250 to Attack Rating Against Undead\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Metalgrid',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: "Rarity: 2/75\n" +
          "Required Level: 81",
        magicStats: "+400-450 to Attack Rating\n" +
          "Level 22 Iron Golem (11 Charges)\n" +
          "Level 12 Iron Maiden (20 Charges)\n" +
          "All Resistances +25-35\n" +
          "+300-350 Defense",
      },
    ]
  },
  {
    itemType: ItemType.RINGS, items: [
      {
        name: 'Nagelring',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: "Rarity: 15/59\n" +
          "Required Level: 7",
        magicStats: "Magic Damage Reduced By 3\n" +
          "+50-75 to Attack Rating\n" +
          "Attacker Takes Damage of 3\n" +
          "15-30% Better Chance Of Getting Magic Items",
      },
      {
        name: 'Manald Heal',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: "Rarity:15/59\n" +
          "Required Level: 15",
        magicStats: "4-7% Mana Stolen Per Hit\n" +
          "Replenish Life +5-8\n" +
          "Regenerate Mana 20%\n" +
          "+20 to Life",
      },
      {
        name: 'Stone of Jordan',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: "Rarity:1/59\n" +
          "Required Level: 29",
        magicStats: "+1 to All Skills\n" +
          "+25% Mana\n" +
          "+1-12 Lightning Damage\n" +
          "+20 Mana",
      },
      {
        name: 'Dwarf Star',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: "Rarity:10/59\n" +
          "Required Level: 45",
        magicStats: "Fire Absorb 15%\n" +
          "Heal Stamina Plus 15%\n" +
          "+40 Maximum Stamina\n" +
          "+40 to Life\n" +
          "100% Extra Gold From Monsters\n" +
          "Magic Damage Reduced By 12-15",
      },
      {
        name: 'Raven Frost',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: "Rarity:10/59\n" +
          "Required Level: 43",
        magicStats: "+150-250 to Attack Rating\n" +
          "Adds 15-45 Cold Damage\n" +
          "+15-20 to Dexterity\n" +
          "+40 to Mana\n" +
          "Cold Absorb 20%\n" +
          "Cannot Be Frozen",
      },
      {
        name: 'Bul-Kathos\' Wedding Band',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: "Rarity:1/59\n" +
          "Required Level: 58",
        magicStats: "+1 to All Skills\n" +
          "+ (0.5 Per Character Level) 0-49 to Life (Based On Character Level)\n" +
          "3-5% Life Stolen Per Hit\n" +
          "+50 Maximum Stamina",
      },
      {
        name: 'Carrion Wind',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: "Rarity:3/59\n" +
          "Required Level: 60",
        magicStats: "10% Chance to Cast Level 10 Poison Nova When Struck\n" +
          "8% Chance to Cast Level 13 Twister On Striking\n" +
          "6-9% Life Stolen Per Hit\n" +
          "+100-160 Defense vs. Missiles\n" +
          "Poison Resist +55%\n" +
          "10% Damage Taken Goes to Mana\n" +
          "Level 21 Poison Creeper (15 Charges)",
      },
      {
        name: 'Nature\'s Peace',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: "Rarity:3/59\n" +
          "Required Level: 69",
        magicStats: "Slain Monsters Rest In Peace\n" +
          "Prevent Monster Heal\n" +
          "Poison Resist +20-30%\n" +
          "Damage Reduced by 7-11\n" +
          "Level 5 Oak Sage",
      },
      {
        name: 'Wisp Projector',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: "Rarity:1/59\n" +
          "Required Level: 76",
        magicStats: "10% Chance to Cast Level 16 Lightning On Striking\n" +
          "Lightning Absorb 10-20%\n" +
          "10-20% Better Chance of Getting Magic Items\n" +
          "Level 7 Spirit of Barbs (11 charges)\n" +
          "Level 5 Heart of Wolverine (13 charges)\n" +
          "Level 2 Oak Sage (15 charges)",
      },
    ]
  },
  {
    itemType: ItemType.BELTS, items: [
      {
        name: 'Lenymo',
        type: 'Sash',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/belts/lenymo.jpg',
        stats: "Defense: 2\n" +
          "Required Level: 7\n" +
          "Durability: 12",
        magicStats: "Regenerate Mana 30%\n" +
          "All Resistances +5\n" +
          "+15 to Mana\n" +
          "+1 to Light Radius",
      },
      {
        name: 'Snakecord',
        type: 'Light Belt',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/belts/snakecord.jpg',
        stats: "Defense: 14-15\n" +
          "Required Level: 12\n" +
          "Durability: 14",
        magicStats: "+20-30% Enhanced Defense\n" +
          "+10 Defense\n" +
          "Replenish Life +5\n" +
          "Poison Resist +25%\n" +
          "Poison Length Reduced By 50%\n" +
          "+12 Poison Damage Over 3 Seconds",
      },
      {
        name: 'Nightsmoke',
        type: 'Belt',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/belts/nightsmoke.jpg',
        stats: "Defense: 22-24\n" +
          "Required Level: 20\n" +
          "Required Strength: 25\n" +
          "Durability: 16",
        magicStats: "+30-50% Enhanced Defense\n" +
          "+15 Defense\n" +
          "50% Damage Taken Goes to Mana\n" +
          "Damage Reduced By 2\n" +
          "All Resistances +10\n" +
          "+20 to Mana",
      },
      {
        name: 'Goldwrap',
        type: 'Heavy Belt',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/belts/goldwrap.jpg',
        stats: "Defense: 34-36\n" +
          "Required Level: 27\n" +
          "Required Strength: 45\n" +
          "Durability: 18",
        magicStats: "+40-60% Enhanced Defense\n" +
          "+25 Defense\n" +
          "10% Increased Attack Speed\n" +
          "30% Better Chance Of Getting Magic Items\n" +
          "50-80% Extra Gold From Monsters\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Bladebuckle',
        type: 'Plated Belt',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/belts/bladebuckle.jpg',
        stats: "Defense: 51-54\n" +
          "Required Level: 29\n" +
          "Required Strength: 60\n" +
          "Durability: 24",
        magicStats: "+80-100% Enhanced Defense\n" +
          "+30 Defense\n" +
          "+30% Faster Hit Recovery\n" +
          "+10 to Dexterity\n" +
          "+5 to Strength\n" +
          "Damage Reduced By 3\n" +
          "Attacker Takes Damage of 8",
      },
      {
        name: 'String of Ears',
        type: 'Demonhide Sash',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/string-of-ears.jpg',
        stats: "Defense: 102-113\n" +
          "Required Level: 29\n" +
          "Required Strength: 20\n" +
          "Durability: 22",
        magicStats: "+150-180% Enhanced Defense\n" +
          "+15 Defense\n" +
          "6-8% Life Stolen Per Hit\n" +
          "Damage Reduced By 10-15%\n" +
          "Magic Damage Reduced 10-15",
      },
      {
        name: 'Razortail',
        type: 'Sharkskin Belt',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/razortail-nosferatu\'s-coil.jpg',
        stats: "Defense: 96-107\n" +
          "Required Level: 32\n" +
          "Required Strength: 20\n" +
          "Durability: 14",
        magicStats: "+120-150% Enhanced Defense\n" +
          "+15 Defense\n" +
          "+10 to Maximum Damage\n" +
          "Piercing Attack (33)\n" +
          "+15 to Dexterity\n" +
          "Attacker Takes Damage of 1-99(1 Per Character Level)",
      },
      {
        name: 'Gloom\'s Trap',
        type: 'Mesh Belt',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/gloom\'s-trap.jpg',
        stats: "Defense: 90-102\n" +
          "Required Level: 36\n" +
          "Required Strength: 58\n" +
          "Durability: 16",
        magicStats: "+120-150% Enhanced Defense\n" +
          "5% Mana Stolen Per Hit\n" +
          "Increase Maximum Mana 15%\n" +
          "Regenerate Mana 15%\n" +
          "+15 to Vitality\n" +
          "-3 to Light Radius",
      },
      {
        name: 'Snowclash',
        type: 'Battle Belt',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/snowclash.jpg',
        stats: "Defense: 98-116\n" +
          "Required Level: 42\n" +
          "Required Strength: 88\n" +
          "Durability: 18",
        magicStats: "+130-170% Enhanced Defense\n" +
          "5% Chance to Cast Level 7-20 Blizzard When Struck\n" +
          "+15 Cold Absorb\n" +
          "15% to Maximum Cold Resist\n" +
          "Adds 13-21 Cold Damage (3 sec. Duration, Normal)\n" +
          "+2 to Chilling Armor (Sorceress Only)\n" +
          "+2 to Blizzard (Sorceress Only)\n" +
          "+3 to Glacial Spike (Sorceress Only)",
      },
      {
        name: 'Thundergod\'s Vigor',
        type: 'War Belt',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/thundergod\'s-vigor.jpg',
        stats: "Defense: 137-159\n" +
          "Required Level: 47\n" +
          "Required Strength: 110\n" +
          "Durability: 24",
        magicStats: "+160-200% Enhanced Defense\n" +
          "Adds 1-50 Lightning Damage\n" +
          "5% Chance to Cast Level 7 Fist of the Heavens When Struck\n" +
          "+20 Lightning Absorb\n" +
          "10% to Maximum Lightning Resist\n" +
          "+20 to Strength\n" +
          "+20 to Vitality\n" +
          "+3 to Lightning Fury (Amazon Only)\n" +
          "+3 to Lightning Strike (Amazon Only)",
      },
      {
        name: 'Arachnid Mesh',
        type: 'Spiderweb Sash',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/belts/arachnid-mesh.jpg',
        stats: "Defense: 119-138\n" +
          "Required Level: 80\n" +
          "Required Strength: 50\n" +
          "Durability: 12",
        magicStats: "+90-120% Enhanced Defense\n" +
          "Slows Target By 10%\n" +
          "+1 to All Skills\n" +
          "+20% Faster Cast Rate\n" +
          "Increases Maximum Mana 5%\n" +
          "Level 3 Venom (11 Charges)",
      },
      {
        name: 'Nosferatu\'s Coil',
        type: 'Vampirefang Belt',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/belts/razortail-nosferatu\'s-coil.jpg',
        stats: "Defense: 56-63\n" +
          "Required Level: 51\n" +
          "Required Strength: 50\n" +
          "Durability: 14",
        magicStats: "Slows Target By 10%\n" +
          "+2 to Mana After Each Kill\n" +
          "5-7% Life Stolen Per Hit\n" +
          "+15 to Strength\n" +
          "10% Increased Attack Speed\n" +
          "-3 to Light Radius",
      },
      {
        name: 'Verdungo\'s Hearty Cord',
        type: 'Mithril Coil',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/belts/verdungo\'s-hearty-cord.jpg',
        stats: "Defense: 125-158\n" +
          "Required Level: 63\n" +
          "Required Strength: 106\n" +
          "Durability: 16",
        magicStats: "+90-140% Enhanced Defense\n" +
          "10% Faster Hit Recovery\n" +
          "+30-40 to Vitality\n" +
          "Replenish Life +10-13\n" +
          "+100-120 Maximum Stamina\n" +
          "Damage Reduced By 10-15%",
      },
    ]
  },

  {
    itemType: ItemType.BOOTS, items: [
      {
        name: 'Hotspur',
        type: 'Boots',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/boots/hotspur.jpg',
        stats: "Defense: 10\n" +
          "Required Level: 5\n" +
          "Durability: 12",
        magicStats: "+10-20% Enhanced Defense\n" +
          "+6 Defense\n" +
          "Fire Resist +45%\n" +
          "15% to Max Fire Resist\n" +
          "Adds 3-6 Fire Damage\n" +
          "+15 to Life",
      },
      {
        name: 'Gorefoot',
        type: 'Heavy Boots',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/boots/gorefoot.jpg',
        stats: "Defense: 20-21\n" +
          "Required Level: 9\n" +
          "Required Strength: 18\n" +
          "Durability: 14",
        magicStats: "+20-30% Enhanced Defense\n" +
          "20% Faster Run/Walk\n" +
          "2% Mana Stolen Per Hit\n" +
          "Attacker Takes Damage of 2\n" +
          "+12 Defense\n" +
          "+2 to Leap (Barbarian Only)",
      },
      {
        name: 'Treads of Cthon',
        type: 'Chain Boots',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/boots/treads-of-cthon.jpg',
        stats: "Defense: 25-26\n" +
          "Required Level: 15\n" +
          "Required Strength: 30\n" +
          "Durability: 16",
        magicStats: "+30-40% Enhanced Defense\n" +
          "+12 Defense\n" +
          "50% Slower Stamina Drain\n" +
          "30% Faster Run/Walk\n" +
          "+50 Defense vs. Missiles\n" +
          "+10 to Life",
      },
      {
        name: 'Goblin Toe',
        type: 'Light Plated Boots',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/boots/goblin-toe.jpg',
        stats: "Defense: 33-34\n" +
          "Required Level: 22\n" +
          "Required Strength: 50\n" +
          "Durability: 18",
        magicStats: "+50-60% Enhanced Defense\n" +
          "25% Chance of a Crushing Blow\n" +
          "-1 to Light Radius\n" +
          "Damage Reduced By 1\n" +
          "Magic Damage Reduced By 1\n" +
          "+15 Defense",
      },
      {
        name: 'Tearhaunch',
        type: 'Greaves',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/boots/tearhaunch.jpg',
        stats: "Defense: 60-63\n" +
          "Required Level: 29\n" +
          "Required Strength: 70\n" +
          "Durability: 24",
        magicStats: "+60-80% Enhanced Defense\n" +
          "20% Faster Run/Walk\n" +
          "All Resistances +10\n" +
          "+35 Defense\n" +
          "+5 to Dexterity\n" +
          "+5 to Strength\n" +
          "+2 to Vigor (Paladin Only)",
      },
      {
        name: 'Infernostride',
        type: 'Demonhide Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/infernostride.jpg',
        stats: "Defense: 103\n" +
          "Durability: 12 of 12\n" +
          "Required Strength: 20\n" +
          "Required Level: 29",
        magicStats: "5% Chance to cast level 8 Blaze when struck\n" +
          "+20% Faster Run/Walk\n" +
          "Adds 12-33 Fire damage\n" +
          "+146% Enhanced Defense\n" +
          "+15 Defense\n" +
          "+10% to Maximum Fire Resist\n" +
          "Fire Resist +30%\n" +
          "55% Extra Gold from Monsters\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Waterwalk',
        type: 'Sharkskin Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/waterwalk-sandstorm-trek.jpg',
        stats: "Defense: 112-124\n" +
          "Required Level: 32\n" +
          "Required Strength: 47\n" +
          "Durability: 14",
        magicStats: "+180-210% Enhanced Defense\n" +
          "20% Faster Run/Walk\n" +
          "+100 Defense vs. Missile\n" +
          "+15 to Dexterity\n" +
          "+5% Maximum Fire Resist\n" +
          "Heal Stamina Plus 50%\n" +
          "+40 Max Stamina\n" +
          "+45-65 to Life",
      },
      {
        name: 'Silkweave',
        type: 'Mesh Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/silkweave-marrowwalk.jpg',
        stats: "Defense: 112-130\n" +
          "Required Level: 36\n" +
          "Required Strength: 65\n" +
          "Durability: 16",
        magicStats: "+150-190% Enhanced Defense\n" +
          "30% Faster Run/Walk\n" +
          "+5 to Mana After Each Kill\n" +
          "Increase Maximum Mana 10%\n" +
          "+200 Defense vs. Missile",
      },
      {
        name: 'War Traveler',
        type: 'Battle Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/war-traveler.jpg',
        stats: "Defense: 120-139\n" +
          "Required Level: 42\n" +
          "Required Strength: 95\n" +
          "Durability: 48\n" +
          "Assassin Kick Damage: 37-64",
        magicStats: "+150-190% Enhanced Defense\n" +
          "25% Faster Run/Walk\n" +
          "+10 to Vitality\n" +
          "+10 to Strength\n" +
          "Adds 15-25 Damage\n" +
          "40% Slower Stamina Drain\n" +
          "Attacker Takes Damage Of 5-10\n" +
          "30-50% Better Chance of Getting Magic Items",
      },
      {
        name: 'Gore Rider',
        type: 'War Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/gore-rider.jpg',
        stats: "Defense: 140-162\n" +
          "Required Level: 47\n" +
          "Required Strength: 94\n" +
          "Durability: 34\n" +
          "Assassin Kick Damage: 39-80",
        magicStats: "+160-200% Enhanced Defense\n" +
          "30% Faster Run/Walk\n" +
          "10% Chance Of Open Wounds\n" +
          "15% Chance Of Crushing Blow\n" +
          "15% Deadly Strike\n" +
          "Requirements -25%\n" +
          "+20 Maximum Stamina",
      },
      {
        name: 'Sandstorm Trek',
        type: 'Scarabshell Boots',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/boots/waterwalk-sandstorm-trek.jpg',
        stats: "Defense: 158-178\n" +
          "Required Level: 64\n" +
          "Required Strength: 91\n" +
          "Durability: 14\n" +
          "Assassin Kick Damage: 60-110",
        magicStats: "+140-170% Enhanced Defense\n" +
          "+20% Faster Hit Recovery\n" +
          "+20% Faster Run/Walk\n" +
          "+ (1 Per Character Level) +1-99 Maximum Stamina (Based On Character Level)\n" +
          "+10-15 to Strength\n" +
          "+10-15 to Vitality\n" +
          "50% Slower Stamina Drain\n" +
          "Poison Resist +40-70%\n" +
          "Repairs 1 Durability In 20 Seconds",
      },
      {
        name: 'Marrowwalk',
        type: 'Boneweave Boots',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/boots/silkweave-marrowwalk.jpg',
        stats: "Defense: 183-204\n" +
          "Required Level: 66\n" +
          "Required Strength: 118\n" +
          "Durability: 16",
        magicStats: "+170-200% Enhanced Defense\n" +
          "+20% Faster Run/Walk\n" +
          "+1-2 to Skeleton Mastery (Necromancer Only)\n" +
          "+10-20 to Strength\n" +
          "+17 to Dexterity\n" +
          "Regenerate Mana 10%\n" +
          "Heal Stamina Plus 10%\n" +
          "Half Freeze Duration\n" +
          "Level 33 Bone Prison (13 Charges)\n" +
          "Level 12 Life Tap (10 Charges)",
      },
      {
        name: 'Shadow Dancer',
        type: 'Myrmidon Greaves',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/boots/shadow-dancer.jpg',
        stats: "Defense: 122-144\n" +
          "Required Level: 71\n" +
          "Required Strength: 167\n" +
          "Durability: 24\n" +
          "Assassin Kick Damage: 83-149",
        magicStats: "+70-100% Enhanced Defense\n" +
          "+1-2 to Shadow Disciplines (Assassin Only)\n" +
          "+30% Faster Run/Walk\n" +
          "+30% Faster Hit Recovery\n" +
          "+15-25 to Dexterity\n" +
          "Requirements -20%",
      },
    ]
  },
  {
    itemType: ItemType.GLOVES, items: [
      {
        name: 'The Hand of Broc',
        type: 'Leather Gloves',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/gloves/the-hand-of-broc.jpg',
        stats: "Defense: 14\n" +
          "Durability: 12 of 12\n" +
          "Required Level: 5",
        magicStats: "3% Mana stolen per hit\n" +
          "3% Life stolen per hit\n" +
          "+14% Enhanced Defense\n" +
          "+10 Defense\n" +
          "+20 to Mana\n" +
          "Poison Resist +10%",
      },
      {
        name: 'Bloodfist',
        type: 'Heavy Gloves',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/gloves/bloodfist.jpg',
        stats: "Defense: 17-18\n" +
          "Required Level: 9\n" +
          "Durability: 14",
        magicStats: "+10-20% Enhanced Defense\n" +
          "+10 Defense\n" +
          "+10% Increased Attack Speed\n" +
          "+30% Faster Hit Recovery\n" +
          "+40 to Life\n" +
          "+5 to Min Damage",
      },
      {
        name: 'Chance Guards',
        type: 'Chain Gloves',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/gloves/chance-guards.jpg',
        stats: "Defense: 27-28\n" +
          "Required Level: 15\n" +
          "Required Strength: 25\n" +
          "Durability: 16",
        magicStats: "+20-30% Enhanced Defense\n" +
          "+15 Defense\n" +
          "+25 to Attack Rating\n" +
          "25-40% Better Chance of Getting Magic Items\n" +
          "200% Extra Gold From Monsters\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Magefist',
        type: 'Light Gauntlets',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/gloves/magefist.jpg',
        stats: "Defense: 24-25\n" +
          "Required Level: 23\n" +
          "Required Strength: 45\n" +
          "Durability: 18",
        magicStats: "+20-30% Enhanced Defense\n" +
          "+10 Defense\n" +
          "+1 to Fire Skills\n" +
          "+20% Faster Cast Rate\n" +
          "Regenerate Mana 25%\n" +
          "Adds 1-6 Fire Damage",
      },
      {
        name: 'Frostburn',
        type: 'Gauntlets',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/gloves/frostburn.jpg',
        stats: "Defense: 47-49\n" +
          "Required Level: 29\n" +
          "Required Strength: 60\n" +
          "Durability: 24",
        magicStats: "+10-20% Enhanced Defense\n" +
          "+30 Defense\n" +
          "+5% Enhanced Damage\n" +
          "Increase Maximum Mana 40%\n" +
          "Adds 1-6 Cold Damage",
      },
      {
        name: 'Venom Grip',
        type: 'Demonhide Gloves',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/venom-grip.jpg',
        stats: "Defense: 97-118\n" +
          "Required Level: 29\n" +
          "Required Strength: 20\n" +
          "Durability: 12",
        magicStats: "+130-160% Enhanced Defense\n" +
          "+15-25 Defense\n" +
          "5% Chance of Crushing Blow\n" +
          "+60 Poison Damage Over 4 Seconds\n" +
          "5% Life Stolen Per Hit\n" +
          "5% to Maximum Poison Resist\n" +
          "Poison Resist +30%",
      },
      {
        name: 'Gravepalm',
        type: 'Sharkskin Gloves',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/gravepalm.jpg',
        stats: "Defense: 96-112\n" +
          "Required Level: 32\n" +
          "Required Strength: 20\n" +
          "Durability: 14",
        magicStats: "+140-180% Enhanced Defense\n" +
          "+100-200% Damage to Undead\n" +
          "+100-200 to Attack Rating Against Undead\n" +
          "+10 to Energy\n" +
          "+10 to Strength",
      },
      {
        name: 'Ghoulhide',
        type: 'Heavy Bracers',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/ghoulhide.jpg',
        stats: "Defense: 112-130\n" +
          "Required Level: 36\n" +
          "Required Strength: 58\n" +
          "Durability: 16",
        magicStats: "+150-190% Enhanced Defense\n" +
          "+ 8-792 to Attack Rating Against Undead (+8 Per Character Level)\n" +
          "+ 2-198 % Damage to Undead (+2 Per Character Level)\n" +
          "4-5% Mana Stolen Per Hit\n" +
          "+20 to Life",
      },
      {
        name: 'Lava Gout',
        type: 'Battle Gauntlets',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/lava-gout.jpg',
        stats: "Defense: 120-144\n" +
          "Required Level: 42\n" +
          "Required Strength: 88\n" +
          "Durability: 38",
        magicStats: "+150-200% Enhanced Defense\n" +
          "2% Chance to Cast Level 10 Enchant On Striking\n" +
          "Half Freeze Duration\n" +
          "Adds 13-46 Fire Damage\n" +
          "+20% Increased Attack Speed\n" +
          "Fire Resist +24%",
      },
      {
        name: 'Hellmouth',
        type: 'War Gauntlets',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/hellmouth-steelrend.jpg',
        stats: "Defense: 135-162\n" +
          "Required Level: 47\n" +
          "Required Strength: 110\n" +
          "Durability: 39",
        magicStats: "+150-200% Enhanced Defense\n" +
          "4% Chance to Cast Level 12 Firestorm On Striking\n" +
          "2% Chance to Cast Level 4 Meteor On Striking\n" +
          "+15 Fire Absorb\n" +
          "Adds 15-72 Fire Damage",
      },
      {
        name: 'Dracul\'s Grasp',
        type: 'Vampirebone Gloves',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/gloves/dracul\'s-grasp.jpg',
        stats: "Defense: 125-145\n" +
          "Required Level: 76\n" +
          "Required Strength: 50\n" +
          "Durability: 14",
        magicStats: "+90-120% Enhanced Defense\n" +
          "+10-15 to Strength\n" +
          "+5-10 Life After Each Kill\n" +
          "25% Chance of Open Wounds\n" +
          "7-10% Life Stolen Per Hit\n" +
          "5% Chance to Cast Level 10 Life Tap On Striking",
      },
      {
        name: 'Soul Drainer',
        type: 'Vambraces',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/gloves/soul-drainer.jpg',
        stats: "Defense: 129-149\n" +
          "Required Level: 74\n" +
          "Required Strength: 106\n" +
          "Durability: 16",
        magicStats: "+90-120% Enhanced Defense\n" +
          "4-7% Mana Stolen Per Hit\n" +
          "4-7% Life Stolen Per Hit\n" +
          "-50 to Monster Defense Per Hit\n" +
          "8% Chance to Cast Level 3 Weaken On Striking",
      },
      {
        name: 'Steelrend',
        type: 'Ogre Gauntlets',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/gloves/hellmouth-steelrend.jpg',
        stats: "Defense: 232-281\n" +
          "Required Level: 70\n" +
          "Required Strength: 185\n" +
          "Durability: 24",
        magicStats: "+170-210 Defense\n" +
          "+30-60% Enhanced Damage\n" +
          "10% Chance of Crushing Blow\n" +
          "+15-20 to Strength",
      },
    ]
  },
  {
    itemType: ItemType.HELMS, items: [
      {
        name: 'Biggin\'s Bonnet',
        type: 'Cap',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/biggin\'s-bonnet.jpg',
        stats: "Defense: 17-19\n" +
          "Required Level: 3\n" +
          "Durability: 12",
        magicStats: "+30% Enhanced Damage\n" +
          "+14 Defense\n" +
          "+30 to Attack Rating\n" +
          "+15 to Mana\n" +
          "+15 to Life",
      },
      {
        name: 'Tarnhelm',
        type: 'Skull Cap',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/tarnhelm.jpg',
        stats: "Defense: 8-11\n" +
          "Required Level: 15\n" +
          "Required Strength:15\n" +
          "Durability: 18",
        magicStats: "+1 to All Skill Levels\n" +
          "25-50% Better Chance of Getting Magic Items\n" +
          "75% Extra Gold From Monsters",
      },
      {
        name: 'Coif of Glory',
        type: 'Helm',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/coif-of-glory.jpg',
        stats: "Defense: 25-28\n" +
          "Required Level: 14\n" +
          "Required Strength: 26\n" +
          "Durability: 24",
        magicStats: "+10 Defense\n" +
          "Attacker Takes Lightning Damage of 7\n" +
          "Hit Blinds Target\n" +
          "Lightning Resist +15%\n" +
          "+100 Defense vs. Missiles",
      },
      {
        name: 'Duskdeep',
        type: 'Full Helm',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/duskdeep.jpg',
        stats: "Defense: 49\n" +
          "Durability: 30\n" +
          "Required Strength: 41\n" +
          "Required Level: 17",
        magicStats: "+8 to Maximum Damage\n" +
          "+44% Enhanced Defense\n" +
          "+11 Defense\n" +
          "All Resistances +15\n" +
          "Damage Reduced by 7\n" +
          "-2 to Light Radius",
      },
      {
        name: 'Howltusk',
        type: 'Great Helm',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/howltusk.jpg',
        stats: "Defense: 64\n" +
          "Required Level: 25\n" +
          "Required Strength: 63\n" +
          "Durability: 40",
        magicStats: "35% Damage Taken Goes to Mana\n" +
          "+80% Enhanced Defense\n" +
          "Magic Damage Reduced By 2\n" +
          "Attacker Takes Damage of 3\n" +
          "Knockback\n" +
          "Hit Causes Monster to Flee 25%",
      },
      {
        name: 'The Face of Horror',
        type: 'Mask',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/mask.jpg',
        stats: "Defense: 34-52\n" +
          "Required Level: 20\n" +
          "Required Strength: 23\n" +
          "Durability: 20",
        magicStats: "+25 Defense\n" +
          "+50% Damage to Undead\n" +
          "Hit Causes Monsters to Flee 50%\n" +
          "All Resistances +10\n" +
          "+20 to Strength",
      },
      {
        name: 'Undead Crown',
        type: 'Crown',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/undead-crown.jpg',
        stats: "Defense: 99-113\n" +
          "Required Level: 29\n" +
          "Required Strength: 55\n" +
          "Durability: 50",
        magicStats: "+30-60% Enhanced Defense\n" +
          "+50% Damage Vs. Undead\n" +
          "+50-100 Attack Rating Vs. Undead\n" +
          "Half Freeze Duration\n" +
          "5% Life Stolen Per Hit\n" +
          "Poison Resist +50%\n" +
          "+40 Defense\n" +
          "+3 to Skeleton Mastery (Necromancer Only)",
      },
      {
        name: 'Wormskull',
        type: 'Bone Helm',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/wormskull.jpg',
        stats: "Defense: 36\n" +
          "Durability: 40 of 40\n" +
          "Required Strength: 25\n" +
          "Required Level: 21",
        magicStats: "+1 to Necromancer Skill Levels\n" +
          "+80 Poison damage over 8 seconds\n" +
          "5% Life stolen per hit\n" +
          "+10 to Mana\n" +
          "Poison Resist +25%",
      },
      {
        name: 'Peasant Crown',
        type: 'War Hat',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/peasant-crown.jpg',
        stats: "Defense: 108\n" +
          "Required Level: 28\n" +
          "Required Strength: 20\n" +
          "Durability: 12",
        magicStats: "+100% Enhanced Defense\n" +
          "+1 to All Skills\n" +
          "15% Faster Run/Walk\n" +
          "Replenish Life +6-12\n" +
          "+20 to Energy\n" +
          "+20 to Vitality",
      },
      {
        name: 'Rockstopper',
        type: 'Sallet',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/rockstopper.jpg',
        stats: "Defense: 163-201\n" +
          "Required Level: 31\n" +
          "Required Strength: 43\n" +
          "Durability: 18",
        magicStats: "+160-220% Enhanced Defense\n" +
          "Damage Reduced By 10%\n" +
          "30% Faster Hit Recovery\n" +
          "Cold Resist +20-40%\n" +
          "Fire Resist +20-50%\n" +
          "Lightning Resist +20-40%\n" +
          "+15 to Vitality",
      },
      {
        name: 'Stealskull',
        type: 'Casque',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/stealskull.jpg',
        stats: "Defense: 219-248\n" +
          "Required Level: 35\n" +
          "Required Strength: 59\n" +
          "Durability: 24",
        magicStats: "+200-240% Enhanced Defense\n" +
          "10% Increased Attack speed\n" +
          "10% Faster Hit Recovery\n" +
          "5% Life Stolen Per Hit\n" +
          "5% Mana Stolen Per Hit\n" +
          "30-50% Better Chance of Getting Magic Items",
      },
      {
        name: 'Darksight Helm',
        type: 'Basinet',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/darksight-helm.jpg',
        stats: "Defense: (77-282)\n" +
          "Required Level: 38\n" +
          "Required Strength: 82\n" +
          "Durability: 30",
        magicStats: "+ 2-198 Defense (+ 2 Per Character Level)\n" +
          "6% Chance to Cast Level 3 Dim Vision When Struck\n" +
          "Level 5 Cloak of Shadows (30 Charges)\n" +
          "Cannot Be Frozen\n" +
          "Fire Resist +20-40%\n" +
          "5% Mana Stolen Per Hit\n" +
          "-4 to Light Radius",
      },
      {
        name: 'Valkyrie Wing',
        type: 'Winged Helm',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/valkyrie-wing.jpg',
        stats: "Defense: 247-297\n" +
          "Required Level: 44\n" +
          "Required Strength: 115\n" +
          "Durability: 40",
        magicStats: "+150-200% Defense\n" +
          "+1-2 to Amazon Skill Levels\n" +
          "20% Faster Run/Walk\n" +
          "20% Faster Hit Recovery\n" +
          "+2-4 to Mana After Each Kill",
      },
      {
        name: 'Blackhorn\'s Face',
        type: 'Death Mask',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/mask.jpg',
        stats: "Defense: 243-278\n" +
          "Required Level: 41\n" +
          "Required Strength: 55\n" +
          "Durability: 20",
        magicStats: "+180-220% Enhanced Defense\n" +
          "Slows Target By 20%\n" +
          "Attacker Takes Lightning Damage of 25\n" +
          "Prevent Monster Heal\n" +
          "+20 Lightning Absorb\n" +
          "Lightning Resist +15%",
      },
      {
        name: 'Crown of Thieves',
        type: 'Grand Crown',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/crown-of-thieves.jpg',
        stats: "Defense: 296-342\n" +
          "Required Level: 49\n" +
          "Required Strength: 103\n" +
          "Durability: 50",
        magicStats: "+160-200% Enhanced Defense\n" +
          "9-12% Life Stolen Per Hit\n" +
          "Fire Resist +33%\n" +
          "+35 to Mana\n" +
          "+50 to Life\n" +
          "+25 to Dexterity\n" +
          "80-100% Extra Gold From Monsters",
      },
      {
        name: 'Vampire Gaze',
        type: 'Grim Helm',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/vampire-gaze.jpg',
        stats: "Defense: 252\n" +
          "Required Level: 41\n" +
          "Required Strength: 58\n" +
          "Durability: 40",
        magicStats: "+100% Enhanced Defense\n" +
          "Adds 6-22 Cold Damage - 4 Second Duration\n" +
          "15% Slower Stamina Drain\n" +
          "6-8% Life Stolen Per Hit\n" +
          "6-8% Mana Stolen Per Hit\n" +
          "Damage Reduced By 15-20%\n" +
          "Magic Damage Reduced By 10-15",
      },
      {
        name: 'Arreat\'s Face',
        type: 'Slayer Guard',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/arreat\'s-face.jpg',
        stats: "Defense: 302-363\n" +
          "Required Level: 42\n" +
          "Required Strength: 118\n" +
          "Durability: 55\n" +
          "(Barbarian Only)",
        magicStats: "+150-200% Enhanced Defense\n" +
          "30% Faster Hit Recovery\n" +
          "20% Bonus to Attack Rating\n" +
          "+2 to Barbarian Skill Levels\n" +
          "3-6% Life Stolen Per Hit\n" +
          "All Resistances +30\n" +
          "+20 to Strength\n" +
          "+20 to Dexterity\n" +
          "+2 to Combat Skills (Barbarian Only)",
        hero: Hero.BARBARIAN
      },
      {
        name: 'Jalal\'s Mane',
        type: 'Totemic Mask',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/jalal\'s-mane.jpg',
        stats: "Defense: 247-297\n" +
          "Required Level: 42\n" +
          "Required Strength: 65\n" +
          "Durability: 20\n" +
          "(Druid Only)",
        magicStats: "+150-200% Enhanced Defense\n" +
          "30% Faster Hit Recovery\n" +
          "20% Bonus to Attack Rating\n" +
          "+2 to Druid Skill Levels\n" +
          "All Resistances +30\n" +
          "+5 to Mana After Each Kill\n" +
          "+20 to Strength\n" +
          "+20 to Energy\n" +
          "+2 to Shape Shifting Skills (Druid Only)",
        hero: Hero.DRUID
      },
      {
        name: 'Harlequin Crest',
        type: 'Shako',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/harlequin-crest.jpg',
        stats: "Defense: 98-141\n" +
          "Required Level: 62\n" +
          "Required Strength: 50\n" +
          "Durability: 12",
        magicStats: "+2 to All Skills\n" +
          "+1-148 to Life (+1.5 Per Character Level)\n" +
          "+1-148 to Mana (+1.5 Per Character Level)\n" +
          "Damage Reduced By 10%\n" +
          "50% Better Chance of Getting Magic Items\n" +
          "+2 to All Attributes",
      },
      {
        name: 'Steel Shade',
        type: 'Armet',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/steel-shade.jpg',
        stats: "Defense: 300-345\n" +
          "Required Level: 62\n" +
          "Required Strength: 109\n" +
          "Durability: 24",
        magicStats: "+100-130% Enhanced Defense\n" +
          "Replenish Life +10-18\n" +
          "+4-8% Mana Stolen Per Hit\n" +
          "+5-11 Fire Absorb",
      },
      {
        name: 'Veil of Steel',
        type: 'Spired Helm',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/veil-of-steel.jpg',
        stats: "Defense: 396\n" +
          "Required Level: 73\n" +
          "Required Strength: 192\n" +
          "Durability: 60",
        magicStats: "+60% Enhanced Defense\n" +
          "+140 to Defense\n" +
          "All Resistances +50\n" +
          "+15 to Strength\n" +
          "+15 to Vitality\n" +
          "-4 to Light Radius",
      },
      {
        name: 'Nightwing\'s Veil',
        type: 'Spired Helm',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/nightwing\'s-veil.jpg',
        stats: "Defense: 304-352\n" +
          "Required Level: 67\n" +
          "Required Strength: 96\n" +
          "Durability: 40",
        magicStats: "+90-120% Enhanced Defense\n" +
          "+2 to All Skills\n" +
          "+8-15% to Cold Skill Damage\n" +
          "+10-20 to Dexterity\n" +
          "+5-9 Cold Absorb\n" +
          "Half Freeze Duration\n" +
          "Requirements -50%",
      },
      {
        name: 'Andariel\'s Visage',
        type: 'Demonhead',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/mask.jpg',
        stats: "Defense: 310-387\n" +
          "Required Level: 83\n" +
          "Required Strength: 102\n" +
          "Durability: 20",
        magicStats: "+100-150% Enhanced Defense\n" +
          "+2 to All Skills\n" +
          "20% Increased Attack Speed\n" +
          "8-10% Life Stolen Per Hit\n" +
          "+25-30 to Strength\n" +
          "+10% to Maximum Poison Resist\n" +
          "Fire Resist -30%\n" +
          "Poison Resist +70%\n" +
          "15% Chance to Cast Level 15 Poison Nova When Struck\n" +
          "Level 3 Venom (20 charges)",
      },
      {
        name: 'Crown of Ages',
        type: 'Corona',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/crown-of-ages.jpg',
        stats: "Defense: 349-399\n" +
          "Required Level: 82\n" +
          "Required Strength: 174",
        magicStats: "+50% Enhanced Defense\n" +
          "+100-150 Defense\n" +
          "+1 to All Skills\n" +
          "Damage Reduced By 10-15%\n" +
          "All Resistances +20-30\n" +
          "+30% Faster Hit Recovery\n" +
          "Socketed (1-2)\n" +
          "Indestructible",
      },
      {
        name: 'Giant Skull',
        type: 'Bone Visage',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/giant-skull.jpg',
        stats: "Defense: 350-477\n" +
          "Required Level: 65\n" +
          "Required Strength: 106\n" +
          "Durability: 40",
        magicStats: "+250-320 Defense\n" +
          "10% Chance Of Crushing Blow\n" +
          "Knockback\n" +
          "+25-35 to Strength\n" +
          "Socketed (1-2)",
      },
      {
        name: 'Kira\'s Guardian',
        type: 'Tiara',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/kira\'s-guardian.jpg',
        stats: "Defense: 90-170\n" +
          "Required Level: 77\n" +
          "Durability: 25",
        magicStats: "+50-120 Defense\n" +
          "+20% Faster Hit Recovery\n" +
          "Cannot Be Frozen\n" +
          "All Resistances +50-70",
      },
      {
        name: 'Griffon\'s Eye',
        type: 'Diadem',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/griffon\'s-eye.jpg',
        stats: "Defense: 150-260\n" +
          "Required Level: 76\n" +
          "Durability: 20",
        magicStats: "+100-200 Defense\n" +
          "+1 to All Skills\n" +
          "+25% Faster Cast Rate\n" +
          "-15-20% to Enemy Lightning Resistance\n" +
          "+10-15% to Lightning Skill Damage",
      },
      {
        name: 'Wolfhowl',
        type: 'Fury Visor',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/wolfhowl.jpg',
        stats: "Defense: 332-377\n" +
          "Required Level: 79\n" +
          "Required Strength: 129\n" +
          "Durability: 35\n" +
          "(Barbarian Only)",
        magicStats: "+120-150% Enhanced Defense\n" +
          "+2-3 to Warcries (Barbarian Only)\n" +
          "+3-6 to Feral Rage\n" +
          "+3-6 to Lycanthropy\n" +
          "+3-6 to Werewolf\n" +
          "+8-15 to Strength\n" +
          "+8-15 to Dexterity\n" +
          "+8-15 to Vitality\n" +
          "Level 15 Summon Dire Wolf (18 Charges)",
        hero: Hero.BARBARIAN
      },
      {
        name: 'Demonhorn\'s Edge',
        type: 'Destroyer Helm',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/demonhorn\'s-edge.jpg',
        stats: "Defense: 345-408\n" +
          "Required Level: 61\n" +
          "Required Strength: 151\n" +
          "Durability: 45\n" +
          "(Barbarian Only)",
        magicStats: "120-160% Enhanced Defense\n" +
          "10% Increased Attack Speed\n" +
          "3-6% Life Stolen Per Hit\n" +
          "Attacker Takes Damage of 55-77\n" +
          "+1-3 to Warcries (Barbarian Only)\n" +
          "+1-3 to Combat Masteries (Barbarian Only)\n" +
          "+1-3 to Combat Skills (Barbarian Only)",
        hero: Hero.BARBARIAN
      },
      {
        name: 'Halaberd\'s Reign',
        type: 'Conqueror Crown',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/halaberd\'s-reign.jpg',
        stats: "Defense: 384-432\n" +
          "Required Level: 77\n" +
          "Required Strength: 174\n" +
          "Durability: 50\n" +
          "(Barbarian Only)",
        magicStats: "Replenish Life +15-23\n" +
          "+20% Faster Hit Recovery\n" +
          "+2 to Barbarian Skill Levels\n" +
          "+1 to Combat Masteries (Barbarian Only)\n" +
          "+1-2 to Battle Command (Barbarian Only)\n" +
          "+1-2 to Battle Orders (Barbarian Only)",
        hero: Hero.BARBARIAN
      },
      {
        name: 'Cerebus\' Bite',
        type: 'Blood Spirit',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/cerebus\'-bite.jpg',
        stats: "Defense: 335-350\n" +
          "Required Level: 63\n" +
          "Required Strength: 86\n" +
          "Durability: 20\n" +
          "(Druid Only)",
        magicStats: "+130-140% Enhanced Defense\n" +
          "60-120% Bonus to Attack Rating\n" +
          "7-10% Life Stolen Per Hit\n" +
          "33% Chance of Open Wounds\n" +
          "+2-4 to Shape Shifting Skills (Druid Only)\n" +
          "+1-2 to Feral Rage (Druid Only)",
        hero: Hero.DRUID
      },
      {
        name: 'Ravenlore',
        type: 'Sky Spirit',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/ravenlore.jpg',
        stats: "Defense: 343-390\n" +
          "Required Level: 74\n" +
          "Required Strength: 113\n" +
          "Durability: 20\n" +
          "(Druid Only)",
        magicStats: "+120-150% Enhanced Defense\n" +
          "+7 to Raven (Druid Only)\n" +
          "+3 to Elemental Skills (Druid Only)\n" +
          "+20-30 to Energy\n" +
          "-10-20% to Enemy Fire Resist\n" +
          "All Resistances +15-25",
        hero: Hero.DRUID
      },
      {
        name: 'Spirit Keeper',
        type: 'Earth Spirit',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/spirit-keeper.jpg',
        stats: "Defense: 413-443\n" +
          "Required Level: 67\n" +
          "Required Strength: 104\n" +
          "Durability: 20\n" +
          "(Druid Only)",
        magicStats: "+170-190% Enhanced Defense\n" +
          "+1-2 to Druid Skill Levels\n" +
          "+20% Faster Hit Recovery\n" +
          "+10% to Maximum Poison Resist\n" +
          "Fire Resist +30-40%\n" +
          "+9-14 Lightning Absorb\n" +
          "Cold Absorb 15-25%",
        hero: Hero.DRUID
      },
    ]
  },
  {
    itemType: ItemType.ARMORS, items: [
      {
        name: 'Greyform',
        type: 'Quilted Armor',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/greyform.jpg',
        stats: "Defense: 28-31\n" +
          "Required Level: 7\n" +
          "Required Strength: 12\n" +
          "Durability: 20",
        magicStats: "+20 Defense\n" +
          "5% Life Stolen Per Hit\n" +
          "Magic Damage Reduced By 3\n" +
          "Cold Resist 20%\n" +
          "Fire Resist 20%\n" +
          "+10 to Dexterity",
      },
      {
        name: 'Blinkbat\'s Form',
        type: 'Leather Armor',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/blinkbat\'s-form.jpg',
        stats: "Defense: 39-42\n" +
          "Required Level: 12\n" +
          "Required Strength: 15\n" +
          "Durability: 24",
        magicStats: "+25 Defense\n" +
          "+50 Defense vs. Missiles\n" +
          "10% Faster Run/Walk\n" +
          "40% Faster Hit Recovery\n" +
          "Adds 3-6 Fire Damage",
      },
      {
        name: 'The Centurion',
        type: 'Hard Leather Armor',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/the-centurion.jpg',
        stats: "Defense: 51-54\n" +
          "Required Level: 14\n" +
          "Required Strength: 20\n" +
          "Durability: 28",
        magicStats: "+30 Defense\n" +
          "Replenish Life +5\n" +
          "+50 to Attack Rating\n" +
          "+15 to Mana\n" +
          "+15 to Max Stamina\n" +
          "+15 to Life\n" +
          "25% Slow Stamina Drain\n" +
          "Damage Reduced By 2",
      },
      {
        name: 'Twitchthroe',
        type: 'Studded Leather',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/twitchthroe.jpg',
        stats: "Defense: 57-60\n" +
          "Required Level: 16\n" +
          "Required Strength: 27\n" +
          "Durability: 32",
        magicStats: "+25 Defense\n" +
          "25% Increase chance of Block\n" +
          "20% Faster Hit Recovery\n" +
          "20% Increased Attack Speed\n" +
          "+10 to Dexterity\n" +
          "+10 to Strength",
      },
      {
        name: 'Darkglow',
        type: 'Ring Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/darkglow.jpg',
        stats: "Defense: 83-98\n" +
          "Required Level: 14\n" +
          "Required Strength: 36\n" +
          "Durability: 26",
        magicStats: "+70-100% Enhanced Defense\n" +
          "5% to Max Poison Resist\n" +
          "5% to Max Cold Resist\n" +
          "5% to Max Lightning Resist\n" +
          "5% to Max Fire Resist\n" +
          "+50 Defense vs. Melee\n" +
          "+20 to Attack Rating\n" +
          "All Resistances +10\n" +
          "+3 to Light Radius",
      },
      {
        name: 'Hawkmail',
        type: 'Scale Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/hawkmail.jpg',
        stats: "Defense: 109-122\n" +
          "Required Level: 15\n" +
          "Required Strength: 44\n" +
          "Durability: 36",
        magicStats: "+80-100% Enhanced Defense\n" +
          "10% Faster Run/Walk\n" +
          "15% to Max Cold Resist\n" +
          "Cold Resist +15%\n" +
          "Cannot Be Frozen",
      },
      {
        name: 'Venom Ward',
        type: 'Breast Plate',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/venom-ward.jpg',
        stats: "Defense: 110-138\n" +
          "Required Level: 20\n" +
          "Required Strength: 30\n" +
          "Durability: 50",
        magicStats: "+60-100% Enhanced Defense\n" +
          "+2 to Light Radius\n" +
          "15% to Max Poison Resist\n" +
          "Poison Resist +90%\n" +
          "Poison Length Reduced By 50%",
      },
      {
        name: 'Sparking Mail',
        type: 'Chain Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/sparking-mail.jpg',
        stats: "Defense: 133-140\n" +
          "Required Level: 17\n" +
          "Required Strength: 48\n" +
          "Durability: 45",
        magicStats: "+75-85% Enhanced Defense\n" +
          "Lightning Resist +30%\n" +
          "Attacker Takes Lightning Damage of 10-14\n" +
          "Adds 1-20 Lightning Damage",
      },
      {
        name: 'Iceblink',
        type: 'Splint Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/iceblink.jpg',
        stats: "Defense: 163-172\n" +
          "Required Level: 22\n" +
          "Required Strength: 51\n" +
          "Durability: 30",
        magicStats: "+70-80% Enhanced Defense\n" +
          "Freezes Target\n" +
          "Cold Resist +30%\n" +
          "Magic Damage Reduced By 1\n" +
          "+4 to Light Radius",
      },
      {
        name: 'Heavenly Garb',
        type: 'Light Plate',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/heavenly-garb.jpg',
        stats: "Defense: 216\n" +
          "Required Level: 29\n" +
          "Required Strength: 41\n" +
          "Durability: 60",
        magicStats: "+100% Enhanced Defense\n" +
          "Regenerate Mana 25%\n" +
          "All Resistances +10\n" +
          "+15 to Energy\n" +
          "+50% Damage to Undead\n" +
          "+100 to Attack Rating Against Undead",
      },
      {
        name: 'Boneflesh',
        type: 'Plate Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/boneflesh.jpg',
        stats: "Defense: 234-257\n" +
          "Required Level: 26\n" +
          "Required Strength: 65\n" +
          "Durability: 60",
        magicStats: "+100-120% Enhanced Defense\n" +
          "5% Life Stolen Per Hit\n" +
          "25% Chance Of Open Wounds\n" +
          "+35 to Attack Rating",
      },
      {
        name: 'Rockfleece',
        type: 'Field Plate',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/rockfleece.jpg',
        stats: "Defense: 212-243\n" +
          "Required Level: 28\n" +
          "Required Strength: 50\n" +
          "Durability: 48",
        magicStats: "+100-130% Enhanced Defense\n" +
          "Requirements -10%\n" +
          "Damage Reduced By 10%\n" +
          "+5 to Strength\n" +
          "Damage Reduced By 5",
      },
      {
        name: 'Rattlecage',
        type: 'Gothic Plate',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/rattlecage.jpg',
        stats: "Defense: 328-335\n" +
          "Required Level: 29\n" +
          "Required Strength: 70\n" +
          "Durability: 55",
        magicStats: "+200 Defense\n" +
          "25% Chance of Crushing Blow\n" +
          "Hit Causes Monster to Flee 40%\n" +
          "+45 to Attack Rating",
      },
      {
        name: 'Goldskin',
        type: 'Full Plate Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/goldskin.jpg',
        stats: "Defense: 356-405\n" +
          "Required Level: 28\n" +
          "Required Strength: 80\n" +
          "Durability: 70",
        magicStats: "+120-150% Enhanced Defense\n" +
          "+2 to Light Radius\n" +
          "All Resistances +35\n" +
          "Attacker Takes Damage of 10\n" +
          "100% Extra Gold From Monsters",
      },
      {
        name: 'Silks of the Victor',
        type: 'Ancient Armor',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/silks-of-the-victor.jpg',
        stats: "Defense: 468-514\n" +
          "Required Level: 28\n" +
          "Required Strength: 100\n" +
          "Durability: 60",
        magicStats: "+100-120% Enhanced Defense\n" +
          "+1 to All Skills\n" +
          "5% Mana Stolen Per Hit\n" +
          "+2 to Light Radius",
      },
      {
        name: 'The Spirit Shroud',
        type: 'Ghost Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/the-spirit-shroud.jpg',
        stats: "Defense: 295\n" +
          "Required Level: 28\n" +
          "Required Strength: 38\n" +
          "Durability: 20",
        magicStats: "+150% Enhanced Defense\n" +
          "Cannot Be Frozen\n" +
          "+1 to All Skills\n" +
          "Replenish Life +10\n" +
          "Magic Damage Reduced By 7-11",
      },
      {
        name: 'Skin of the Vipermagi',
        type: 'Serpentskin Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/skin-of-the-vipermagi.jpg',
        stats: "Defense: 279\n" +
          "Required Level: 29\n" +
          "Required Strength: 43\n" +
          "Durability: 24",
        magicStats: "+120% Enhanced Defense\n" +
          "+1 to All Skills\n" +
          "30% Faster Cast Rate\n" +
          "Magic Damage Reduced By 9-13\n" +
          "All Resistances +20-35",
      },
      {
        name: 'Skin of the Flayed One',
        type: 'Demonhide Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/skin-of-the-flayed-one.jpg',
        stats: "Defense: 342-397\n" +
          "Required Level: 31\n" +
          "Required Strength: 50\n" +
          "Durability: 58",
        magicStats: "+150-190% Enhanced Defense\n" +
          "Repairs 1 Durability In 10 Seconds\n" +
          "5-7% Life Stolen Per Hit\n" +
          "Replenish Life +15-25\n" +
          "Attacker Takes Damage of 15",
      },
      {
        name: 'Iron Pelt',
        type: 'Trellised Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/iron-pelt.jpg',
        stats: "Defense: (234-528) - (311-605)\n" +
          "Required Level: 33\n" +
          "Required Strength: 61\n" +
          "Durability: 157",
        magicStats: "+50-100% Enhanced Defense\n" +
          "+3-297 Defense (+3 Per Character Level)\n" +
          "Damage Reduced by 15-20\n" +
          "Magic Damage Reduced by 10-16\n" +
          "+25 to Life",
      },
      {
        name: 'Crow Caw',
        type: 'Tigulated Mail',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/crow-caw.jpg',
        stats: "Defense: 477-534\n" +
          "Required Level: 37\n" +
          "Required Strength: 86\n" +
          "Durability: 36",
        magicStats: "+150-180% Enhanced Defense\n" +
          "15% Increased Attack Speed\n" +
          "15% Faster Hit Recovery\n" +
          "35% Chance of Open Wounds\n" +
          "+15 Dexterity",
      },
      {
        name: 'Spirit Forge',
        type: 'Linked Mail',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/spirit-forge.jpg',
        stats: "Defense: 380-449\n" +
          "Required Level: 35\n" +
          "Required Strength: 74\n" +
          "Durability: 26",
        magicStats: "+120-160% Enhanced Defense\n" +
          "+1-123 Life (+1.25 Per Character Level)\n" +
          "Fire Resist +5%\n" +
          "Adds 20-65 Fire Damage\n" +
          "+15 to Strength\n" +
          "Socketed (2)\n" +
          "+4 to Light Radius",
      },
      {
        name: 'Duriel\'s Shell',
        type: 'Cuirass',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/duriel\'s-shell.jpg',
        stats: "Defense: (528-650) - (610-732)\n" +
          "Required Level: 41\n" +
          "Required Strength: 65\n" +
          "Durability: 150",
        magicStats: "+160-200% Enhanced Defense\n" +
          "+ (1.25 Per Character Level) 1-123 Defense (Based On Character Level)\n" +
          "+ (1 Per Character Level) 1-99 to Life (Based On Character Level)\n" +
          "Fire Resist +20%\n" +
          "Lightning Resist +20%\n" +
          "Poison Resist +20%\n" +
          "Cold Resist +50%\n" +
          "Cannot Be Frozen\n" +
          "+15 to Strength",
      },
      {
        name: 'Shaftstop',
        type: 'Mesh Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/shaftstop.jpg',
        stats: "Defense: 599-684\n" +
          "Required Level: 38\n" +
          "Required Strength: 92\n" +
          "Durability: 45",
        magicStats: "+180-220% Enhanced Defense\n" +
          "Damage Reduced By 30%\n" +
          "+250 Defense vs. Missiles\n" +
          "+60 to Life",
      },
      {
        name: 'Skullder\'s Ire',
        type: 'Russet Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/skullder\'s-ire.jpg',
        stats: "Defense: 634-732\n" +
          "Required Level: 42\n" +
          "Required Strength: 97\n" +
          "Durability: 90",
        magicStats: "+160-200% Enhanced Defense\n" +
          "Repairs 1 Durability In 5 Seconds\n" +
          "+ (1.25 Per Character Level) 1-123 % Better Chance Of Getting Magic Items (Based On Character Level)\n" +
          "+1 to All Skill Levels\n" +
          "Magic Damage Reduced By 10",
      },
      {
        name: 'Que-Hegan\'s Wisdom',
        type: 'Mage Plate',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/que-hegan\'s-wisdom.jpg',
        stats: "Defense: 628-681\n" +
          "Required Level: 51\n" +
          "Required Strength: 55\n" +
          "Durability: 60",
        magicStats: "+140-160% Enhanced Defense\n" +
          "+1 to All Skill Levels\n" +
          "+3 to Mana After Each Kill\n" +
          "20% Faster Cast Rate\n" +
          "20% Faster Hit Recovery\n" +
          "Magic Damage Reduced By 6-10\n" +
          "+15 to Energy",
      },
      {
        name: 'Guardian Angel',
        type: 'Templar Coat',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/guardian-angel.jpg',
        stats: "Defense: 770-825\n" +
          "Required Level: 45\n" +
          "Required Strength: 118\n" +
          "Durability: 60",
        magicStats: "+180-200% Enhanced Defense\n" +
          "+20% Increased Chance to Block\n" +
          "+30% Faster Block Rate\n" +
          "+2-247 to Attack Rating Against Demons (+2.5 Per Character Level)\n" +
          "+1 to Paladin Skill Levels\n" +
          "+4 to Light Radius\n" +
          "15% to Maximum Poison Resist\n" +
          "15% to Maximum Cold Resist\n" +
          "15% to Maximum Lightning Resist\n" +
          "15% to Maximum Fire Resist",
      },
      {
        name: 'Toothrow',
        type: 'Sharktooth Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/toothrow.jpg',
        stats: "Defense: 713-888\n" +
          "Required Level: 48\n" +
          "Required Strength: 103\n" +
          "Durability: 63",
        magicStats: "+160-220% Enhanced Defense\n" +
          "+40-60 Defense\n" +
          "40% Chance of Open Wounds\n" +
          "Fire Resist +15%\n" +
          "+10 Strength\n" +
          "Attacker Takes Damage of 20-40",
      },
      {
        name: 'Atma\'s Wail',
        type: 'Embossed Plate',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/atma\'s-wail.jpg',
        stats: "Defense: (670-866) - (792-988)\n" +
          "Required Level: 51\n" +
          "Required Strength: 125\n" +
          "Durability: 105",
        magicStats: "+120-160% Enhanced Defense\n" +
          "+ (2 Per Character Level) 2-198 Defense (Based On Character Level)\n" +
          "30% Faster Hit Recovery\n" +
          "Replenish Life +10\n" +
          "Increase Maximum Mana 15%\n" +
          "+15 to Dexterity\n" +
          "+20% Better Chance Of Getting Magic Items",
      },
      {
        name: 'Black Hades',
        type: 'Chaos Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/black-hades.jpg',
        stats: "Defense: 823-1029\n" +
          "Required Level: 53\n" +
          "Required Strength: 140\n" +
          "Durability: 70",
        magicStats: "+140-200% Enhanced Defense\n" +
          "+30-60% Damage to Demons\n" +
          "+200-250 to Attack Rating Against Demons\n" +
          "Half Freeze Duration\n" +
          "Socketed (3)\n" +
          "-2 to Light Radius",
      },
      {
        name: 'Corpsemourn',
        type: 'Ornate Plate',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/corpsemourn.jpg',
        stats: "Defense: 1127-1262\n" +
          "Required Level: 55\n" +
          "Required Strength: 170\n" +
          "Durability: 60",
        magicStats: "+150-180% Enhanced Defense\n" +
          "Level 5 Corpse Explosion (40 Charges)\n" +
          "Adds 12-36 Fire Damage\n" +
          "6% Chance to Cast Level 2 Iron Maiden When Struck\n" +
          "Cold Resist +35%\n" +
          "+10 to Vitality\n" +
          "+8 to Strength",
      },
      {
        name: 'Ormus\' Robes',
        type: 'Dusk Shroud',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/ormus\'-robes.jpg',
        stats: "Defense: 371-487\n" +
          "Required Level: 75\n" +
          "Required Strength: 77\n" +
          "Durability: 20",
        magicStats: "+10-20 Defense\n" +
          "+20% Faster Cast Rate\n" +
          "+10-15% to Cold Skill Damage\n" +
          "+10-15% to Fire Skill Damage\n" +
          "+10-15% to Lightning Skill Damage\n" +
          "+3 Bonus to a Random* Sorceress Skill (Sorceress Only)\n" +
          "*no Masteries, Hyrda or Frozen Orb\n" +
          "Regenerate Mana 10-15%"
      },
      {
        name: 'The Gladiator\'s Bane',
        type: 'Wire Fleece',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/the-gladiator\'s-bane.jpg',
        stats: "Defense: 1255-1496\n" +
          "Required Level: 85\n" +
          "Required Strength: 111\n" +
          "Durability: 135",
        magicStats: "+150-200% Enhanced Defense\n" +
          "+50 Defense\n" +
          "Cannot Be Frozen\n" +
          "30% Faster Hit Recovery\n" +
          "Poison Length Reduced By 50%\n" +
          "Attacker Takes Damage Of 20\n" +
          "Damage Reduced By 15-20\n" +
          "Magic Damage Reduced By 15-20",
      },
      {
        name: 'Arkaine\'s Valor',
        type: 'Balrog Skin',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/arkaine\'s-valor.jpg',
        stats: "Defense: 1295-1450\n" +
          "Required Level: 85\n" +
          "Required Strength: 165\n" +
          "Durability: 30",
        magicStats: "+150-180% Enhanced Defense\n" +
          "+1-2 to All Skills\n" +
          "+0-49 to Vitality (+0.5 Per Character Level)\n" +
          "30% Faster Hit Recovery\n" +
          "Damage Reduced By 10-15",
      },
      {
        name: 'Leviathan',
        type: 'Kraken Shell',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/leviathan.jpg',
        stats: "Defense: 1514-1722\n" +
          "Required Level: 65\n" +
          "Required Strength: 174",
        magicStats: "+170-200% Enhanced Defense\n" +
          "+100-150 Defense\n" +
          "+40-50 to Strength\n" +
          "Damage Reduced By 15-25%\n" +
          "Indestructible",
      },
      {
        name: 'Steel Carapace',
        type: 'Shadow Plate',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/steel-carapace.jpg',
        stats: "Defense: 1618-1785\n" +
          "Required Level: 66\n" +
          "Required Strength: 230\n" +
          "Durability: 70",
        magicStats: "+190-220% Enhanced Defense\n" +
          "Regenerate Mana 10-15%\n" +
          "+20% Faster Hit Recovery\n" +
          "Cold Resist +40-60%\n" +
          "Damage Reduced by 9-14\n" +
          "Repairs 1 Durability in 20 Seconds\n" +
          "8% Chance to Cast Level 6 Iron Maiden When Struck",
      },
      {
        name: 'Templar\'s Might',
        type: 'Sacred Armor',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/templar\'s-might.jpg',
        stats: "Defense: 1622-1923\n" +
          "Required Level: 74\n" +
          "Required Strength: 232\n" +
          "Durability: 60",
        magicStats: "+170-220% Enhanced Defense\n" +
          "+250-300 Defense vs. Missiles\n" +
          "+10-15 to Strength\n" +
          "+10-15 to Vitality\n" +
          "+20% Faster Hit Recovery\n" +
          "+40-50 Maximum Stamina\n" +
          "+1-2 to Offensive Auras (Paladin Only)",
      },
      {
        name: 'Tyrael\'s Might',
        type: 'Sacred Armor',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/tyrael\'s-might.jpg',
        stats: "Defense: 1322-1502\n" +
          "Required Level: 84\n" +
          "Required Strength: None",
        magicStats: "+120-150% Enhanced Defense\n" +
          "+50-100% Damage to Demons\n" +
          "+20% Faster Run/Walk\n" +
          "+20-30 to Strength\n" +
          "All Resistances +20-30\n" +
          "Cannot Be Frozen\n" +
          "Requirements -100%\n" +
          "Slain Monsters Rest in Peace\n" +
          "Indestructible",
      },
    ]
  },
  {
    itemType: ItemType.SHIELDS, items: [
      {
        name: 'Pelta Lunata',
        type: 'Buckler',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/pelta-lunata.jpg',
        stats: "Defense: 39\n" +
          "Required Level: 2\n" +
          "Required Strength: 12\n" +
          "Durability: 20-24\n" +
          "Chance to Block:\n" +
          "Paladin: 50%\n" +
          "Amazon/Assassin/Barbarian: 45%\n" +
          "Druid/Necromancer/Sorceress: 40%\n" +
          "Paladin Smite Damage: 1 to 3",
        magicStats: "+30-40% Enhanced Defense\n" +
          "+30 Defense\n" +
          "20% Increased Chance to Block\n" +
          "40% Faster Block Rate\n" +
          "+10 to Energy\n" +
          "+10 to Vitality\n" +
          "+2 to Strength",
      },
      {
        name: 'Umbral Disk',
        type: 'Small Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/blackoak-shield-umbral-disk.jpg',
        stats: "Defense: 45-46\n" +
          "Required Level: 9\n" +
          "Required Strength: 22\n" +
          "Durability: 26-31\n" +
          "Chance to Block:\n" +
          "Paladin: 65%,\n" +
          "Amazon/Assassin/Barbarian: 60%\n" +
          "Druid/Necromancer/Sorceress: 55%\n" +
          "Paladin Smite Damage: 2 to 3",
        magicStats: "+40-50% Enhanced Defense\n" +
          "+30 Defense\n" +
          "30% Increased Chance to Block\n" +
          "Hit Blinds Target\n" +
          "+20 to Life\n" +
          "+10 to Dexterity\n" +
          "-2 to Light Radius\n" +
          "+10-15 Durability",
      },
      {
        name: 'Stormguild',
        type: 'Large Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/stormguild.jpg',
        stats: "Defense: 52-54\n" +
          "Required Level: 13\n" +
          "Required Strength: 34\n" +
          "Durability: 34-39\n" +
          "Chance to Block:\n" +
          "Paladin: 72%\n" +
          "Amazon/Assassin/Barbarian: 67%\n" +
          "Druid/Necromancer/Sorceress: 62%\n" +
          "Paladin Smite Damage: 2 to 4",
        magicStats: "+50-60% Enhanced Defense\n" +
          "+30 Defense\n" +
          "+30% Increased Chance to Block\n" +
          "Lightning Resist +25%\n" +
          "Adds 1-6 Lightning Damage\n" +
          "Attacker Takes Lightning Damage Of 3\n" +
          "Magic Damage Reduced By 1",
      },
      {
        name: 'Steelclash',
        type: 'Kite Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/steelclash-stormshield-tiamat\'s-rebuke.jpg',
        stats: "Defense: 50-58\n" +
          "Required Level: 17\n" +
          "Required Strength: 47\n" +
          "Durability: 45-50\n" +
          "Chance to Block:\n" +
          "Paladin: 63%\n" +
          "Amazon/Assassin/Barbarian: 58%\n" +
          "Druid/Necromancer/Sorceress: 53%\n" +
          "Paladin Smite Damage: 2 to 5",
        magicStats: "+60-100% Enhanced Defense\n" +
          "+20 Defense\n" +
          "25% Increased Chance to Block\n" +
          "20% Faster Block Rate\n" +
          "All Resistances +15\n" +
          "+1 to Paladin Skill Levels\n" +
          "+3 to Light Radius\n" +
          "Damage Reduced By 3",
      },
      {
        name: 'Swordback Hold',
        type: 'Spiked Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/swordback-hold.jpg',
        stats: "Defense: 43-51\n" +
          "Required Level: 15\n" +
          "Required Strength: 30\n" +
          "Durability: 40\n" +
          "Chance to Block:\n" +
          "Paladin: 60%\n" +
          "Amazon/Assassin/Barbarian: 55%\n" +
          "Druid/Necromancer/Sorceress: 50%\n" +
          "Paladin Smite Damage: 5 to 9",
        magicStats: "+30-60% Enhance Defense\n" +
          "+10 Defense\n" +
          "20% Increased Chance to Block\n" +
          "50% Chance of Open Wounds\n" +
          "Attacker Takes Damage of 10",
      },
      {
        name: 'Bverrit Keep',
        type: 'Tower Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/bverrit-keep.jpg',
        stats: "Defense: 76-87\n" +
          "Required Level: 19\n" +
          "Required Strength: 75\n" +
          "Durability: 140-160\n" +
          "Chance to Block:\n" +
          "Paladin: 64%\n" +
          "Amazon/Assassin/Barbarian: 59%\n" +
          "Druid/Necromancer/Sorceress: 54%}}\n" +
          "Paladin Smite Damage: 1 to 5",
        magicStats: "+80-120% Defense\n" +
          "+30 Defense\n" +
          "10% Increased Chance to Block\n" +
          "Fire Resist +75%\n" +
          "+5 to Strength\n" +
          "Magic Damage Reduced By 5",
      },
      {
        name: 'Wall of the Eyeless',
        type: 'Bone Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/head-hunter\'s-glory-wall-of-the-eyeless.jpg',
        stats: "Defense: 50-53\n" +
          "Required Level: 20\n" +
          "Required Strength: 25\n" +
          "Durability: 40\n" +
          "Chance to Block:\n" +
          "Paladin: 50%\n" +
          "Amazon/Assassin/Barbarian: 45%\n" +
          "Druid/Necromancer/Sorceress: 40%\n" +
          "Paladin Smite Damage: 3 to 6",
        magicStats: "+30-40% Enhanced Defense\n" +
          "+10 Defense\n" +
          "+5 to Mana after Each Kill\n" +
          "20% Faster Cast Rate\n" +
          "3% Mana Stolen Per Hit\n" +
          "Poison Resist +20%",
      },
      {
        name: 'The Ward',
        type: 'Gothic Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/the-ward-radament\'s-sphere.jpg',
        stats: "Defense: 112\n" +
          "Required Level: 26\n" +
          "Required Strength: 60\n" +
          "Durability: 40\n" +
          "Chance to Block:\n" +
          "Paladin: 56%\n" +
          "Amazon/Assassin/Barbarian: 51%\n" +
          "Druid/Necromancer/Sorceress: 46%\n" +
          "Paladin Smite Damage: 2 to 6",
        magicStats: "+100% Enhanced Defense\n" +
          "+40 Defense\n" +
          "10% Increased Chance to Block\n" +
          "All Resistances +30-50\n" +
          "Magic Damage Reduced By 2\n" +
          "+10 to Strength",
      },
      {
        name: 'Visceratuant',
        type: 'Defender',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/visceratuant.jpg',
        stats: "Defense: 100-125\n" +
          "Required Level: 28\n" +
          "Required Strength: 38\n" +
          "Durability: 68\n" +
          "Chance to Block:\n" +
          "Paladin: 70%\n" +
          "Amazon/Assassin/Barbarian: 65%\n" +
          "Druid/Necromancer/Sorceress: 60%\n" +
          "Paladin Smite Damage: 8 to 12",
        magicStats: "+100-150% Enhanced Defense\n" +
          "30% Increased Chance to Block\n" +
          "30% Faster Block Rate\n" +
          "+1 to Sorceress Skill Levels\n" +
          "Attacker Takes Lightning Damage of 10",
      },
      {
        name: 'Moser\'s Blessed Circle',
        type: 'Round Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/moser\'s-blessed-circle.jpg',
        stats: "Defense: 156-179\n" +
          "Required Level: 31\n" +
          "Required Strength: 53\n" +
          "Durability: 64\n" +
          "Chance to Block:\n" +
          "Paladin: 67%\n" +
          "Amazon/Assassin/Barbarian: 62%\n" +
          "Druid/Necromancer/Sorceress: 57%\n" +
          "Paladin Smite Damage: 7 to 14",
        magicStats: "+180-220% Enhanced Defense\n" +
          "+25% Increased Chance to Block\n" +
          "30% Faster Block Rate\n" +
          "All Resistances +25\n" +
          "Socketed (2)",
      },
      {
        name: 'Stormchaser',
        type: 'Scutum',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/stormchaser.jpg',
        stats: "Defense: 161-198\n" +
          "Required Level: 35\n" +
          "Required Strength: 71\n" +
          "Durability: 62\n" +
          "Chance to Block:\n" +
          "Paladin: 64%\n" +
          "Amazon/Assassin/Barbarian: 59%\n" +
          "Druid/Necromancer/Sorceress: 54%\n" +
          "Paladin Smite Damage: 11 to 15",
        magicStats: "+160-220% Enhanced Defense\n" +
          "+20% Increased Chance to Block\n" +
          "4% Chance to Cast Level 5 Tornado When Struck\n" +
          "4% Chance to Cast Level 6 Blizzard When Struck\n" +
          "10% Faster Block Rate\n" +
          "+150 to Attack Rating\n" +
          "Lightning Resist +50%\n" +
          "Half Freeze Duration\n" +
          "Adds 1-60 Lightning Damage",
      },
      {
        name: 'Tiamat\'s Rebuke',
        type: 'Scutum',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/steelclash-stormshield-tiamat\'s-rebuke.jpg',
        stats: "Defense: 163-204\n" +
          "Required Level: 38\n" +
          "Required Strength: 91\n" +
          "Durability: 116\n" +
          "Chance to Block:\n" +
          "Paladin: 48%\n" +
          "Amazon/Assassin/Barbarian: 43%\n" +
          "Druid/Necromancer/Sorceress: 38%\n" +
          "Paladin Smite Damage: 15 to 24",
        magicStats: "+140-200% Enhanced Defense\n" +
          "Adds 27-53 Cold Damage - 6 Second Duration\n" +
          "Adds 35-95 Fire Damage\n" +
          "Adds 1-120 Lightning Damage\n" +
          "3% Chance to Cast Level 6 Hydra When Struck\n" +
          "5% Chance to Cast Level 7 Nova When Struck\n" +
          "5% Chance to Cast Level 9 Frost Nova When Struck\n" +
          "All Resistances +25-35%",
      },
      {
        name: 'Lance Guard',
        type: 'Barbed Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/lance-guard.jpg',
        stats: "Defense: 134-173\n" +
          "Required Level: 35\n" +
          "Required Strength: 65\n" +
          "Durability: 55\n" +
          "Chance to Block:\n" +
          "Paladin: 47%\n" +
          "Amazon/Assassin/Barbarian: 42%\n" +
          "Druid/Necromancer/Sorceress: 37%\n" +
          "Paladin Smite Damage: 18 to 35",
        magicStats: "+70-120% Enhanced Defense\n" +
          "15% Damage Taken Goes to Mana\n" +
          "30% Faster Hit Recovery\n" +
          "20% Deadly Strike\n" +
          "+50 to Life\n" +
          "Attacker Takes Damage of 47",
      },
      {
        name: 'Gerke\'s Sanctuary',
        type: 'Pavise',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/gerke\'s-sanctuary.jpg',
        stats: "Defense: 221-268\n" +
          "Required Level: 44\n" +
          "Required Strength: 133\n" +
          "Durability: 172\n" +
          "Chance to Block:\n" +
          "Paladin: 84%\n" +
          "Amazon/Assassin/Barbarian: 79%\n" +
          "Druid/Necromancer/Sorceress: 74%\n" +
          "Paladin Smite Damage: 10 to 17",
        magicStats: "+180-240% Enhanced Defense\n" +
          "+30% Increased Chance to Block\n" +
          "All Resistances +20-30\n" +
          "Replenish Life +15\n" +
          "Damage Reduced By 11-16\n" +
          "Magic Damage Reduced By 14-18",
      },
      {
        name: 'Lidless Wall',
        type: 'Grim Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/lidless-wall.jpg',
        stats: "Defense: 271-347\n" +
          "Required Level: 41\n" +
          "Required Strength: 58\n" +
          "Durability: 70\n" +
          "Chance to Block:\n" +
          "Paladin: 50%\n" +
          "Amazon/Assassin/Barbarian: 45%\n" +
          "Druid/Necromancer/Sorceress: 40%\n" +
          "Paladin Smite Damage: 14 to 20",
        magicStats: "+80-130% Enhanced Defense\n" +
          "+1 to All Skills\n" +
          "Increase Maximum Mana 10%\n" +
          "20% Faster Cast Rate\n" +
          "+3-5 to Mana After Each Kill\n" +
          "+10 to Energy\n" +
          "+1 to Light Radius",
      },
      {
        name: 'Radament\'s Sphere',
        type: 'Grim Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/the-ward-radament\'s-sphere.jpg',
        stats: "Defense: 244-282\n" +
          "Required Level: 50\n" +
          "Required Strength: 110\n" +
          "Durability: 100\n" +
          "Chance to Block:\n" +
          "\n" +
          "Paladin: 66%\n" +
          "Amazon/Assassin/Barbarian: 61%\n" +
          "Druid/Necromancer/Sorceress: 56%\n" +
          "Paladin Smite Damage: 12 to 16",
        magicStats: "+160-200% Enhanced Defense\n" +
          "+20% Increased Chance to Block\n" +
          "+20% Faster Block Rate\n" +
          "5% Chance to Cast Level 5 Poison Nova When Struck\n" +
          "Level 6 Poison Explosion (40 Charges)\n" +
          "Poison Resist +75%\n" +
          "+80 Poison Damage Over 4 Seconds",
      },
      {
        name: 'Herald of Zakarum',
        type: 'Gilded Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/dragonscale-herald-of-zakarum.jpg',
        stats: "Defense: 422-507\n" +
          "Required Level: 42\n" +
          "Required Strength: 89\n" +
          "Chance to Block: 82%\n" +
          "Smite Damage: 20 to 28\n" +
          "Durability: 50\n" +
          "(Paladin Only)",
        magicStats: "+150-200% Enhanced Defense\n" +
          "30% Increased Chance Of Block\n" +
          "30% Faster Block Rate\n" +
          "20% Bonus to Attack Rating\n" +
          "+20 to Strength\n" +
          "+20 to Vitality\n" +
          "All Resistances +50\n" +
          "+2 to Paladin Skill Levels\n" +
          "+2 to Combat Skills (Paladin Only)",
        hero: Hero.PALADIN
      },
      {
        name: 'Homunculus',
        type: 'Hierophant Trophy',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/darkforce-spawn-homunculus.jpg',
        stats: "Defense: 177-213\n" +
          "Defense: 58-70\n" +
          "Required Level: 42\n" +
          "Required Strength: 58\n" +
          "Durability: 20\n" +
          "Chance to Block: 72%\n" +
          "(Necromancer Only)",
        magicStats: "+150-200% Enhanced Defense\n" +
          "+5 to Mana After Each Kill\n" +
          "40% Increased Chance to Block\n" +
          "30% Faster Block Rate\n" +
          "+2 to Necromancer Skill Levels\n" +
          "+20 to Energy\n" +
          "Regenerate Mana 33%\n" +
          "All Resistances +40\n" +
          "+2 to Curses (Necromancer Only)",
        hero: Hero.NECROMANCER
      },
      {
        name: 'Blackoak Shield',
        type: 'Luna',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/blackoak-shield-umbral-disk.jpg',
        stats: "Defense: (322-372)\n" +
          "Required Level: 61\n" +
          "Required Strength: 100\n" +
          "Durability: 129\n" +
          "Chance to Block:\n" +
          "Paladin: 50%\n" +
          "Amazon/Assassin/Barbarian: 45%\n" +
          "Druid/Necromancer/Sorceress: 40%\n" +
          "Paladin Smite Damage: 17 to 29",
        magicStats: "+160-200% Enhanced Defense\n" +
          "+ (0.625 Per Character Level) +0-61 Absorb Cold Damage (Based On Character Level)\n" +
          "+ (1.25 Per Character Level) +1-123 to Life (Based On Character Level)\n" +
          "+ (0.5 Per Character Level) +0-49 to Dexterity (Based On Character Level)\n" +
          "+50% Faster Block Rate\n" +
          "+4% Chance to Cast Level 5 Weaken When Struck\n" +
          "Half Freeze Duration",
      },
      {
        name: 'Stormshield',
        type: 'Monarch',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/steelclash-stormshield-tiamat\'s-rebuke.jpg',
        stats: "Defense: (136-504) - (151-519)\n" +
          "Required Level: 73\n" +
          "Required Strength: 156\n" +
          "Chance to Block:\n" +
          "Paladin: 77%\n" +
          "Amazon/Assassin/Barbarian: 72%\n" +
          "Druid/Necromancer/Sorceress: 67%\n" +
          "Paladin Smite Damage: 12 to 34",
        magicStats: "+3-371 Defense (+3.75 Per Character Level)\n" +
          "+25% Increased Chance to Block\n" +
          "35% Faster Block Rate\n" +
          "Damage Reduced By 35%\n" +
          "Cold Resist +60%\n" +
          "Lightning Resist +25%\n" +
          "+30 to Strength\n" +
          "Attacker Takes Lightning Damage of 10\n" +
          "Indestructible",
      },
      {
        name: 'Spike Thorn',
        type: 'Blade Barrier',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/spike-thorn.jpg',
        stats: "Defense: 325.6-410\n" +
          "Required Level: 70\n" +
          "Required Strength: 118\n" +
          "Durability: 333\n" +
          "Chance to Block:\n" +
          "Paladin: 50%\n" +
          "Amazon/Assassin/Barbarian: 45%\n" +
          "Druid/Necromancer/Sorceress: 40%\n" +
          "Paladin Smite Damage: 26 to 40",
        magicStats: "+120-150% Enhanced Defense\n" +
          "+30% Faster Hit Recovery\n" +
          "Damage Reduced By 15-20%\n" +
          "+ (1.375 Per Character Level) Attacker Takes Damage of 1-136 (Based On Character Level)\n" +
          "Socketed (1)",
      },
      {
        name: 'Medusa\'s Gaze',
        type: 'Aegies',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/medusa\'s-gaze.jpg',
        stats: "Defense: 405-453\n" +
          "Required Level: 76\n" +
          "Required Strength: 219\n" +
          "Durability: 92\n" +
          "Chance to Block:\n" +
          "Paladin: 54%\n" +
          "Amazon/Assassin/Barbarian: 49%\n" +
          "Druid/Necromancer/Sorceress: 44%\n" +
          "Paladin Smite Damage: 18 to 28",
        magicStats: "+150-180% Enhanced Defense\n" +
          "5-9% Life Stolen Per Hit\n" +
          "Slows Target By 20%\n" +
          "Cold Resist +40-80%\n" +
          "10% Chance to Cast Level 7 Lower Resist When Struck\n" +
          "100% Chance to Cast Level 44 Nova When You Die",
      },
      {
        name: 'Head Hunter\'s Glory',
        type: 'Troll Nest',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/head-hunter\'s-glory-wall-of-the-eyeless.jpg',
        stats: "Defense: 478-593\n" +
          "Required Level: 75\n" +
          "Required Strength: 106\n" +
          "Durability: 74\n" +
          "Chance to Block:\n" +
          "Paladin: 50%\n" +
          "Amazon/Assassin/Barbarian: 45%\n" +
          "Druid/Necromancer/Sorceress: 40%\n" +
          "Paladin Smite Damage: 24 to 38",
        magicStats: "+320-420 Defense\n" +
          "+300-350 Defense vs. Missiles\n" +
          "Fire Resist +20-30%\n" +
          "Poison Resist +30-40%\n" +
          "+5-7 Life After Each Kill\n" +
          "Socketed (1-3)",
      },
      {
        name: 'Spirit Ward',
        type: 'Ward',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/spirit-ward.jpg',
        stats: "Defense: 393-478\n" +
          "Required Level: 68\n" +
          "Required Strength: 185\n" +
          "Chance to Block:\n" +
          "Paladin: 74-84%\n" +
          "Amazon/Assassin/Barbarian: 69-79%\n" +
          "Druid/Necromancer/Sorceress: 64-74%\n" +
          "Paladin Smite Damage: 11 to 35",
        magicStats: "+130-180% Enhanced Defense\n" +
          "+25% Faster Block Rate\n" +
          "20-30% Increased Chance to Block\n" +
          "All Resistances +30-40\n" +
          "+6-11 Cold Absorb\n" +
          "5% Chance to Cast Level 8 Fade When Struck",
      },
      {
        name: 'Alma Negra',
        type: 'Sacred Rondache',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/alma-negra.jpg',
        stats: "Defense: 461-511\n" +
          "Required Level: 77\n" +
          "Required Strength: 109\n" +
          "Chance to Block: 78%\n" +
          "Smite Damage: 35 to 58\n" +
          "Durability: 68\n" +
          "(Paladin Only)",
        magicStats: "+180-210% Enhanced Defense\n" +
          "+1-2 to Paladin Skill Levels\n" +
          "20% Increased Chance of Block\n" +
          "30% Faster Block Rate\n" +
          "+40-75% Enhanced Damage\n" +
          "40-75% Bonus to Attack Rating\n" +
          "Magic Damage Reduced By 5-9",
        hero: Hero.PALADIN
      },
      {
        name: 'Dragonscale',
        type: 'Zakarum Shield',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/dragonscale-herald-of-zakarum.jpg',
        stats: "Defense: 523-582\n" +
          "Required Level: 80\n" +
          "Required Strength: 142\n" +
          "Chance to Block: 52%\n" +
          "Smite Damage: 46\n" +
          "Durability: 65\n" +
          "(Paladin Only)",
        magicStats: "+170-200% Enhanced Defense\n" +
          "Adds 211-371 Fire Damage\n" +
          "+15% to Fire Skill Damage\n" +
          "+10 to Hydra\n" +
          "+5% to Maximum Fire Resist\n" +
          "+15-25 to Strength\n" +
          "Fire Absorb 10-20%",
        hero: Hero.PALADIN
      },
      {
        name: 'Darkforce Spawn',
        type: 'Bloodlord Skull',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/darkforce-spawn-homunculus.jpg',
        stats: "Defense: 357-417\n" +
          "Required Level: 65\n" +
          "Required Strength: 106\n" +
          "Durability: 20\n" +
          "Chance to Block: 32%\n" +
          "(Necromancer Only)",
        magicStats: "+140-180% Enhanced Defense\n" +
          "+1-3 to Summoning Skills (Necromancer Only)\n" +
          "+1-3 to Poison and Bone Spells (Necromancer Only)\n" +
          "+1-3 to Curses (Necromancer Only)\n" +
          "+30% Faster Cast Rate\n" +
          "Increase Maximum Mana 10%",
        hero: Hero.NECROMANCER
      },
      {
        name: 'Boneflame',
        type: 'Succubus Skull',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/boneflame.jpg',
        stats: "Defense: 323-367\n" +
          "Required Level: 72\n" +
          "Required Strength: 95\n" +
          "Durability: 20\n" +
          "Chance to Block: 30%\n" +
          "(Necromancer Only)",
        magicStats: "+120-150% Enhanced Defense\n" +
          "+20% Faster Run/Walk\n" +
          "+2-3 to Necromancer Skill Levels\n" +
          "All Resistances +20-30\n" +
          "15% Chance to Cast Level 3 Terror When Struck",
        hero: Hero.NECROMANCER
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.AXE, items: [
      {
        name: 'The Gnasher',
        type: 'Hand Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/razor\'s-edge-the-gnasher.jpg',
        stats: "One-Hand Damage: (4-5) to (9-10)\n" +
          "Required Level: 5\n" +
          "Durability: 28\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+60-70% Enhanced Damage\n" +
          "20% Chance of Crushing Blow\n" +
          "50% Chance of Open Wounds\n" +
          "+8 to Strength",
      },
      {
        name: 'DeathSpade',
        type: 'Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/deathspade.jpg',
        stats: "One-Hand Damage: 14 to (17-18)\n" +
          "Required Level: 9\n" +
          "Required Strength: 32\n" +
          "Durability: 24\n" +
          "Axe Class - Fast Attack Speed",
        magicStats: "+60-70% Enhanced Damage\n" +
          "+8 to Minimum Damage\n" +
          "15% Bonus to Attack Rating\n" +
          "Hit Blinds Target\n" +
          "+4 points of Mana after each kill",
      },
      {
        name: 'Bladebone',
        type: 'Double Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/bladebone.jpg',
        stats: "One-Hand Damage: (6-7) to (16-19)\n" +
          "Required Level: 15\n" +
          "Required Strength: 43\n" +
          "Durability: 24\n" +
          "Axe Class – Normal Attack Speed",
        magicStats: "+30-50% Enhanced Damage\n" +
          "+100% Damage to Undead\n" +
          "Adds 8-12 Fire Damage\n" +
          "20% Increased Attack Rate\n" +
          "+40 to Attack Rating Against Undead\n" +
          "+20 Defense",
      },
      {
        name: 'Skull Splitter',
        type: 'Military Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/skull-splitter.jpg',
        stats: "One-Hand Damage: (11-14) to (17-22)\n" +
          "Required Level: 21\n" +
          "Required Strength: 49\n" +
          "Required Dexterity: 33\n" +
          "Durability: 26\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+60-100% Enhanced Damage\n" +
          "Adds 1-(12-15) Lightning Damage\n" +
          "+50-100 to Attack Rating\n" +
          "15% Chance Of Open Wounds\n" +
          "Hit Blinds Target +2\n" +
          "Regenerate Mana 20%",
      },
      {
        name: 'Rakescar',
        type: 'War Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/rakescar.jpg',
        stats: "One-Hand Damage: (17-25) to (31-45)\n" +
          "Required Level: 27\n" +
          "Required Strength: 67\n" +
          "Durability: 26\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+75-150% Enhanced Damage\n" +
          "+38 Poison Damage Over 3 Seconds\n" +
          "30% Increased Attack Speed\n" +
          "+50 to Attack Rating\n" +
          "Poison Resist +50%",
      },
      {
        name: 'Axe of Fechmar',
        type: 'Large Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/axe-of-fechmar.jpg',
        stats: "Two-Hand Damage: (10-11) to (22-24)\n" +
          "Required Level: 8\n" +
          "Required Strength: 35\n" +
          "Durability: 30\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+70-90% Enhanced Damage\n" +
          "Freezes Target +3\n" +
          "Cold Resist +50%\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Goreshovel',
        type: 'Broad Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/goreshovel.jpg',
        stats: "Two-Hand Damage: (14-15) to (34-36)\n" +
          "Required Level: 14\n" +
          "Required Strength: 48\n" +
          "Durability: 35\n" +
          "Axe Class – Normal Attack Speed",
        magicStats: "+40-50% Enhanced Damage\n" +
          "+9 to Maximum Damage\n" +
          "60% Chance of Open Wounds\n" +
          "30% Increased Attack Speed\n" +
          "+25 to Strength",
      },
      {
        name: 'The Chieftain',
        type: 'Battle Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/the-chieftain.jpg',
        stats: "Two-Hand Damage: 24 to 64\n" +
          "Required Level: 19\n" +
          "Required Strength: 54\n" +
          "Durability: 40\n" +
          "Axe Class – Slow Attack Speed",
        magicStats: "+100% Enhanced Damage\n" +
          "20% Increased Attack Speed\n" +
          "Adds 1-40 Lightning Damage\n" +
          "All Resistances +10-20\n" +
          "+6 to Mana After Each Kill",
      },
      {
        name: 'Brainhew',
        type: 'Great Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/brainhew-boneslayer-blade.jpg',
        stats: "Two-Hand Damage: (27-30) to (45-54)\n" +
          "Required Level: 25\n" +
          "Required Strength: 63\n" +
          "Required Dexterity: 39\n" +
          "Durability: 50\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+50-80% Enhanced Damage\n" +
          "+14 to Minimum Damage\n" +
          "Adds 15-35 Fire Damage\n" +
          "10-13% Mana Stolen Per Hit\n" +
          "+25 to Mana\n" +
          "+4 to Light Radius",
      },
      {
        name: 'Humongous',
        type: 'Giant Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/executioner\'s-justice-humongous.jpg',
        stats: "Two-Hand Damage: (47-56) to (96-124)\n" +
          "Required Level: 29\n" +
          "Required Strength: 84\n" +
          "Durability: 50\n" +
          "Axe Class – Slow Attack Speed",
        magicStats: "+80-120% Enhanced Damage\n" +
          "Adds 8-(15-25) damage\n" +
          "33% chance of Crushing Blow\n" +
          "Requirements 20%\n" +
          "+20-30 to Strength",
      },
      {
        name: 'Coldkill',
        type: 'Hatchet',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/coldkill.jpg',
        stats: "One-Hand Damage: (25-29) to (52-60)\n" +
          "Required Level: 36\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 25\n" +
          "Range: 1\n" +
          "Durability: 28\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+150-190% Enhanced Damage\n" +
          "30% Increased Attack Speed\n" +
          "10% Chance to Cast Level 10 Ice Blast On Striking\n" +
          "10% Chance to Cast Level 5 Frost Nova When Struck\n" +
          "+40 Cold Damage - 2 Second Duration\n" +
          "15% to Maximum Cold Resist\n" +
          "Cold Resist +15%",
      },
      {
        name: 'Butcher\'s Pupil',
        type: 'Cleaver',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/butcher\'s-pupil.jpg',
        stats: "One-Hand Damage: (55-60) to (132-149)\n" +
          "Required Level: 39\n" +
          "Required Strength: 68\n" +
          "Range: 2\n" +
          "Axe Class – Normal Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Adds 30-50 Damage\n" +
          "35% Deadly Strike\n" +
          "25% Chance of Open Wounds\n" +
          "30% Increased Attack Speed\n" +
          "Indestructible",
      },
      {
        name: 'Islestrike',
        type: 'Twin Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/islestrike.jpg',
        stats: "One-Hand Damage: (35-37) to (102-110)\n" +
          "Required Level: 43\n" +
          "Required Strength: 85\n" +
          "Range: 2\n" +
          "Durability: 24\n" +
          "Axe Class – Normal Attack Speed",
        magicStats: "+170-190% Enhanced Damage\n" +
          "25% Chance of Crushing Blow\n" +
          "+2 to Druid Skill Levels\n" +
          "+50 Defense vs. Missiles\n" +
          "+10 to All Attributes\n" +
          "+1 Fury (Druid Only)\n" +
          "+1 Maul (Druid Only)",
      },
      {
        name: 'Pompeii\'s Wrath',
        type: 'Crowbill',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/pompeii\'s-wrath.jpg',
        stats: "One-Hand Damage: (33-37) to (81-91)\n" +
          "Required Level: 45\n" +
          "Required Strength: 94\n" +
          "Required Dexterity: 70\n" +
          "Range: 2\n" +
          "Durability: 26\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "\n" +
          "Required Level: 45\n" +
          "Required Strength: 94\n" +
          "Required Dexterity: 70\n" +
          "Range: 2\n" +
          "Durability: 26\n" +
          "Axe Class – Fast Attack Speed\n" +
          "+140-170% Enhanced Damage\n" +
          "Adds 35-150 Fire Damage\n" +
          "Slows Target By 50%\n" +
          "4% Chance to Cast Level 8 Volcano On Striking\n" +
          "Knockback",
      },
      {
        name: 'Guardian Naga',
        type: 'Naga',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/death-cleaver-guardian-naga.jpg',
        stats: "One-Hand Damage: (40-44) to (132-145)\n" +
          "Required Level: 48\n" +
          "Required Strength: 121\n" +
          "Range: 3\n" +
          "Durability: 26\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+150-180% Enhanced Damage\n" +
          "+20 to Maximum Damage\n" +
          "+250 Poison Damage Over 10 Seconds\n" +
          "5% Chance to Cast Level 8 Poison Nova On Striking\n" +
          "Poison Resist +30%\n" +
          "Attacker Takes Damage of 15",
      },
      {
        name: 'Warlord\'s Trust',
        type: 'Military Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/warlord\'s-trust.jpg',
        stats: "Two-Hand Damage: 38 to 93\n" +
          "Required Level: 35\n" +
          "Required Strength: 73\n" +
          "Range: 2\n" +
          "Durability: 30\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+175% Enhanced Damage\n" +
          "Repairs 1 Durability In 4 Seconds\n" +
          "+ (0.5 Per Character Level) 0-49 to Vitality (Based On Character Level)\n" +
          "Replenish Life +20\n" +
          "All Resistances +10\n" +
          "+75 Defense",
      },
      {
        name: 'Spellsteel',
        type: 'Bearded Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/ethereal-edge-spellsteel.jpg',
        stats: "Two-Hand Damage: 55 to 129\n" +
          "Required Level: 39\n" +
          "Required Strength: 37\n" +
          "Range: 2\n" +
          "Durability: 35\n" +
          "Axe Class – Normal Attack Speed",
        magicStats: "+165% Enhanced Damage\n" +
          "10% Faster Cast Rate\n" +
          "Requirements -60%\n" +
          "Regenerate Mana 25%\n" +
          "+100 to Mana\n" +
          "Level 12 Firestorm (60 Charges)\n" +
          "Level 10 Holy Bolt (100 Charges)\n" +
          "Level 3 Decrepify (30 Charges)\n" +
          "Level 1 Teleport (20 Charges)\n" +
          "Magic Damage Reduced By 12-15",
      },
      {
        name: 'Stormrider',
        type: 'Tabar',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/stormrider.jpg',
        stats: "Two-Hand Damage: 83-229\n" +
          "Required Level: 41\n" +
          "Required Strength: 101\n" +
          "Range: 2\n" +
          "Durability: 90\n" +
          "Axe Class - Slow Attack Speed",
        magicStats: "+100% Enhanced Damage\n" +
          "Adds 35-75 Damage\n" +
          "Adds 1-200 Lightning Damage\n" +
          "15% Chance to Cast Level 5 Charged Bolt When Struck\n" +
          "10% Chance to Cast Level 13-20 Charged Bolt On Striking\n" +
          "5% Chance to Cast Level 10 Chain Lightning On Striking\n" +
          "Attacker Takes Lightning Damage Of 15",
      },
      {
        name: 'Boneslayer Blade',
        type: 'Gothic Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/brainhew-boneslayer-blade.jpg',
        stats: "Two-Hand Damage: (50-57) to (196-224)\n" +
          "Required Level: 42\n" +
          "Required Strength: 115\n" +
          "Required Dexterity: 79\n" +
          "Range: 3\n" +
          "Durability: 50\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+180-220% Enhanced Damage\n" +
          "+ (5 Per Character Level) 5-495 to Attack Rating Against Undead (Based On Character Level)\n" +
          "+ (2.5 Per Character Level) 2-247 % Damage to Undead (Based On Character Level)\n" +
          "50% Chance to Cast Level 12-28 Holy Bolt When Struck\n" +
          "Level 20 Holy Bolt (200 Charges)\n" +
          "20% Increased Attack Speed\n" +
          "35% Bonus to Attack Rating\n" +
          "+8 to Strength",
      },
      {
        name: 'The Minotaur',
        type: 'Ancient Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/the-minotaur.jpg',
        stats: "Two-Hand Damage: (123-149) to (234-285)\n" +
          "Required Level: 45\n" +
          "Required Strength: 125\n" +
          "Range: 4\n" +
          "Durability: 50\n" +
          "Axe Class - Slow Attack Speed",
        magicStats: "+140-200% Enhanced Damage\n" +
          "Adds 20-30 Damage\n" +
          "Slows Target By 50%\n" +
          "30% Chance of Crushing Blow\n" +
          "Hit Blinds Target +2\n" +
          "Half Freeze Duration\n" +
          "+15-20 to Strength",
      },
      {
        name: 'Razor\'s Edge',
        type: 'Tomahawk',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/razor\'s-edge-the-gnasher.jpg',
        stats: "One-Hand Damage: (90-107) to (159-188)\n" +
          "Required Level: 67\n" +
          "Required Strength: 125\n" +
          "Required Dexterity: 67\n" +
          "Durability: 28\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+175-225% Enhanced Damage\n" +
          "+40% Increased Attack Speed\n" +
          "-33% Target Defense\n" +
          "50% Deadly Strike\n" +
          "50% Chance of Open Wounds",
      },
      {
        name: 'Rune Master',
        type: 'Ettin Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/rune-master.jpg',
        stats: "One-Hand Damage: (105-122) to (211-244)\n" +
          "Required Level: 72\n" +
          "Required Strength: 145\n" +
          "Required Dexterity: 45\n" +
          "Durability: 24\n" +
          "Axe Class – Normal Attack Speed",
        magicStats: "+220-270% Enhanced Damage\n" +
          "+5% to Maximum Cold Resist\n" +
          "Cannot Be Frozen\n" +
          "Socketed (3-5)",
      },
      {
        name: 'Cranebeak',
        type: 'War Spike',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/cranebeak.jpg',
        stats: "One-Hand Damage: (102-120) to (163-192)\n" +
          "Required Level: 63\n" +
          "Required Strength: 133\n" +
          "Required Dexterity: 54\n" +
          "Durability: 26\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+240-300% Enhanced Damage\n" +
          "+40% Increased Attack Speed\n" +
          "-25% Target Defense\n" +
          "Adds 1-305 Lightning Damage\n" +
          "20-50% Better Chance of Getting Magic Items\n" +
          "Level 8 Raven (15 charges)",
      },
      {
        name: 'Death Cleaver',
        type: 'Berserker Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/death-cleaver-guardian-naga.jpg',
        stats: "One-Hand Damage: (79-91) to (234-269)\n" +
          "Required Level: 70\n" +
          "Required Strength: 138\n" +
          "Required Dexterity: 59\n" +
          "Durability: 26\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+230-280% Enhanced Damage\n" +
          "+40% Increased Attack Speed\n" +
          "-33% Target Defense\n" +
          "66% Deadly Strike\n" +
          "+6-9 Life After Each Kill",
      },
      {
        name: 'Ethereal Edge',
        type: 'Silver-Edged Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/ethereal-edge-spellsteel.jpg',
        stats: "Two-Hand Damage: (232-260) to (412-462)\n" +
          "Required Level: 74\n" +
          "Required Strength: 156\n" +
          "Required Dexterity: 55\n" +
          "Axe Class – Normal Attack Speed",
        magicStats: "+150-180% Enhanced Damage\n" +
          "+150-200% Damage to Demons\n" +
          "+270-350 to Attack Rating\n" +
          "+25% Increased Attack Speed\n" +
          "+10-12 Fire Absorb\n" +
          "+5-10 Life After Each Demon Kill\n" +
          "Indestructible\n" +
          "Ethereal (Cannot Be Repaired)",
      },
      {
        name: 'Hellslayer',
        type: 'Decapitator',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/hellslayer.jpg',
        stats: "Two-Hand Damage: 98 to (278-680)\n" +
          "Required Level: 66\n" +
          "Required Strength: 189\n" +
          "Required Dexterity: 33\n" +
          "Durability: 40\n" +
          "Axe Class – Normal Attack Speed",
        magicStats: "+100% Enhanced Damage\n" +
          "+ (3 Per Character Level) 3-297% Enhanced Maximum Damage (Based On Character Level)\n" +
          "Adds 150-250 Fire Damage\n" +
          "+ (0.5 Per Character Level) 0-49 to Strength (Based On Character Level)\n" +
          "+ (0.5 Per Character Level) 0-49 to Vitality (Based On Character Level)\n" +
          "+25 to Life\n" +
          "10% Chance to Cast Level 16-20 Fire Ball On Attack",
      },
      {
        name: 'Messerschmidt\'s Reaver',
        type: 'Champion Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/messerschmidt\'s-reaver.jpg',
        stats: "Two-Hand Damage: 177 to (283-514)\n" +
          "Required Level: 70\n" +
          "Required Strength: 167\n" +
          "Required Dexterity: 59\n" +
          "Durability: 75\n" +
          "Axe Class – Fast Attack Speed",
        magicStats: "+200% Enhanced Damage\n" +
          "+ (2.5 Per Character Level) 2-247% Enhanced Maximum Damage (Based On Character Level)\n" +
          "Adds 20-240 Fire Damage\n" +
          "100% Bonus to Attack Rating\n" +
          "+15 to All Attributes",
      },
      {
        name: 'Executioner\'s Justice',
        type: 'Glorious Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/executioner\'s-justice-humongous.jpg',
        stats: "Two-Hand Damage: (204-234) to (421-483)\n" +
          "Required Level: 75\n" +
          "Required Strength: 164\n" +
          "Required Dexterity: 55\n" +
          "Durability: 50\n" +
          "Axe Class – Normal Attack Speed",
        magicStats: "+240-290% Enhanced Damage\n" +
          "25% Chance Of Crushing Blow\n" +
          "30% Increased Attack Speed\n" +
          "-33% Target Defense\n" +
          "50% Chance to Cast Level 6 Decrepify When You Kill An Enemy",
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.BOW, items: [
      {
        name: 'Pluckeye',
        type: 'Short Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/pluckeye.jpg',
        stats: "Two-Hand Damage: 2 to 8\n" +
          "Required Level: 7\n" +
          "Required Dexterity: 15\n" +
          "Bow Class- Normal Attack Speed",
        magicStats: "+100% Enhanced Damage\n" +
          "+28 to Attack Rating\n" +
          "3% Mana Stolen Per Hit\n" +
          "+10 to Life\n" +
          "+2 to Mana After Each Kill\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Witherstring',
        type: 'Hunter\'s Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/witherstring.jpg',
        stats: "Two-Hand Damage: 3 to 12\n" +
          "Required Level: 13\n" +
          "Required Dexterity: 28\n" +
          "Bow Class - Fast Attack Speed",
        magicStats: "+40-50% Enhanced Damage\n" +
          "Fires Magic Arrows [Level 3]\n" +
          "Adds 1-3 Damage\n" +
          "30% Increased Attack Speed\n" +
          "+50 to Attack Rating",
      },
      {
        name: 'Raven Claw',
        type: 'Long Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/raven-claw.jpg',
        stats: "Two-Hand Damage: 4 to 16\n" +
          "Required Dexterity: 19\n" +
          "Required Strength: 22\n" +
          "Required Level: 15\n" +
          "Bow Class - Normal Attack Speed",
        magicStats: "Fires Explosive Arrows or Bolts\n" +
          "+65% Enhanced Damage\n" +
          "50% Bonus to Attack Rating\n" +
          "+3 to Strength\n" +
          "+3 to Dexterity",
      },
      {
        name: 'Rogue\'s Bow',
        type: 'Composite Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/rogue\'s-bow.jpg',
        stats: "Two-Hand Damage: 5 to 12\n" +
          "Required Level: 20\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 35\n" +
          "Bow Class - Fast Attack Speed",
        magicStats: "+40-60% Enhanced Damage\n" +
          "+100% Damage to Undead\n" +
          "30% Deadly Strike\n" +
          "50% Increased Attack Speed\n" +
          "+60 to Attack Rating\n" +
          "All Resistances +10",
      },
      {
        name: 'Stormstrike',
        type: 'Short Battle Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/stormstrike.jpg',
        stats: "Two-Hand Damage: (8-9) to (18-20)\n" +
          "Required Level: 25\n" +
          "Required Strength: 30\n" +
          "Required Dexterity: 40\n" +
          "Bow Class - Normal Attack Speed",
        magicStats: "+70-90% Enhanced Damage\n" +
          "Adds 1-30 Lightning damage\n" +
          "Piercing Attack (25)\n" +
          "+28 to Attack Rating\n" +
          "Lightning Resist +25%\n" +
          "+8 to Strength",
      },
      {
        name: 'Wizendraw',
        type: 'Long Battle Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/wizendraw.jpg',
        stats: "Two-Hand Damage: 5 to (30-32)\n" +
          "Required Level: 26\n" +
          "Required Strength: 40\n" +
          "Required Dexterity: 50\n" +
          "Bow Class - Slow Attack Speed",
        magicStats: "+70-80% Enhanced Damage\n" +
          "+50-100 to Attack Rating\n" +
          "Fires Magic Arrows [Level 5]\n" +
          "20% Increased Attack Speed\n" +
          "Cold Resist 26%\n" +
          "+15 to Energy\n" +
          "+30 to Mana\n" +
          "-(20-35)% to Enemy Cold Resistance",
      },
      {
        name: 'Hellclap',
        type: 'Short War Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/hellclap.jpg',
        stats: "Two-Hand Damage: 10 to 26\n" +
          "Required Level: 27\n" +
          "Required Strength: 35\n" +
          "Required Dexterity: 55\n" +
          "Bow Class - Normal Attack Speed",
        magicStats: "+70-90% Enhanced Damage\n" +
          "Adds 15-(30-50) Fire Damage\n" +
          "10% Increased Attack Speed\n" +
          "+50-75 to Attack Rating\n" +
          "+1 to Fire Skills\n" +
          "Fire Resist +40%\n" +
          "+12 to Dexterity",
      },
      {
        name: 'Blastbark',
        type: 'Long War Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/blastbark.jpg',
        stats: "Two-Hand Damage: 5 to (39-52)\n" +
          "Required Level: 28\n" +
          "Required Strength: 50\n" +
          "Required Dexterity: 65\n" +
          "Bow Class - Slow Attack Speed",
        magicStats: "+70-130% Enhanced Damage\n" +
          "+1 to Amazon Skill Levels\n" +
          "3% Mana stolen per hit\n" +
          "+5 to Strength\n" +
          "+2 to Exploding Arrow (Amazon Only)",
      },
      {
        name: 'Skystrike',
        type: 'Edge Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/skystrike.jpg',
        stats: "Two-Hand Damage: (15-21) to (47-57)\n" +
          "Required Level: 28\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 43\n" +
          "Bow Class - Normal Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Adds 1-250 Lightning Damage\n" +
          "2% Chance to Cast Level 6 Meteor On Striking\n" +
          "30% Increased Attack Speed\n" +
          "+100 to Attack Rating\n" +
          "+1 to Amazon Skill Levels\n" +
          "+10 to Energy",
      },
      {
        name: 'Riphook',
        type: 'Razor Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/riphook.jpg',
        stats: "Two-Hand Damage: 22 to (61-70)\n" +
          "Required Level: 31\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 62\n" +
          "Bow Class - Fast Attack Speed",
        magicStats: "180-220% Enhanced Damage\n" +
          "Slows Target By 30%\n" +
          "30% Chance of Open Wounds\n" +
          "30% Increased Attack Speed\n" +
          "7-10% Life Stolen Per Hit\n" +
          "+35 to Mana",
      },
      {
        name: 'Kuko Shakaku',
        type: 'Cedar Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/kuko-shakaku.jpg',
        stats: "Two-Hand Damage: 25 to (72-81)\n" +
          "Required Level: 33\n" +
          "Required Strength: 53\n" +
          "Required Dexterity: 49\n" +
          "Bow Class - Normal Attack Speed",
        magicStats: "+150-180% Enhanced Damage\n" +
          "Fires Explosive Arrows Or Bolts [Level 7]\n" +
          "Piercing Attack (50)\n" +
          "Adds 40-180 Fire Damage\n" +
          "+3 to Immolation Arrow (Amazon Only)\n" +
          "+3 to Bow and Crossbow Skills (Amazon Only)",
      },
      {
        name: 'Endlesshail',
        type: 'Double Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/endlesshail.jpg',
        stats: "Two-Hand Damage: (30-35) to (72-83)\n" +
          "Required Level: 36\n" +
          "Required Strength: 58\n" +
          "Required Dexterity: 73\n" +
          "Bow Class - Fast Attack Speed",
        magicStats: "+180-220% Enhanced Damage\n" +
          "Adds 15-30 Cold Damage - 3 Second Duration\n" +
          "Cold Resist +35%\n" +
          "+50 Defense vs. Missiles\n" +
          "+40 to Mana\n" +
          "+3-5 to Strafe (Amazon Only)",
      },
      {
        name: 'Witchwild String',
        type: 'Showrt Siege Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/witchwild-string.jpg',
        stats: "Two-Hand Damage: 32) to (75-81)\n" +
          "Required Level: 39\n" +
          "Required Strength: 65\n" +
          "Required Dexterity: 80\n" +
          "Bow Class - Normal Attack Speed",
        magicStats: "+150-170% Enhanced Damage\n" +
          "Fires Magic Arrows [Level 20]\n" +
          "2% Chance to Cast Level 5 Amplify Damage On Striking\n" +
          "+1-99 % Deadly Strike (+1 Per Character Level)\n" +
          "All Resistances +40\n" +
          "Socketed (2)",
      },
      {
        name: 'Cliffkiller',
        type: 'Large Siege Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/cliffkiller.jpg',
        stats: "Two-Hand Damage: (34-43) to (141-168)\n" +
          "Required Level: 41\n" +
          "Required Strength: 80\n" +
          "Required Dexterity: 95\n" +
          "Bow Class - Slow Attack Speed",
        magicStats: "+190-230% Enhanced Damage\n" +
          "Adds (5-10)-(20-30) Damage\n" +
          "+2 to Amazon Skill Levels\n" +
          "+80 Defense vs. Missiles\n" +
          "+50 to Life\n" +
          "Knockback",
      },
      {
        name: 'Magewrath',
        type: 'Rune Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/magewrath.jpg',
        stats: "Two-Hand Damage: 55 to (127-137)\n" +
          "Required Level: 43\n" +
          "Required Strength: 73\n" +
          "Required Dexterity: 103\n" +
          "Bow Class - Normal Attack Speed",
        magicStats: "+120-150% Enhanced Damage\n" +
          "Adds 25-50 Damage\n" +
          "+200-250 to Attack Rating\n" +
          "+1 to Amazon Skill Levels\n" +
          "Hit Blinds Target (Same effect as Dim Vision\n" +
          "15% Mana Stolen Per Hit\n" +
          "Magic Damage Reduced By 9-13\n" +
          "+10 to Dexterity\n" +
          "+3 Guided Arrow (Amazon Only)",
      },
      {
        name: 'Goldstrike Arch',
        type: 'Gothic Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/goldstrike-arch.jpg',
        stats: "Two-Hand Damage: 30 to (150-175)\n" +
          "Required Level: 46\n" +
          "Required Strength: 95\n" +
          "Required Dexterity: 118\n" +
          "Bow Class - Slow Attack Speed",
        magicStats: "+200-250% Enhanced Damage\n" +
          "+100-200% Damage to Demons\n" +
          "+100-200% Damage to Undead\n" +
          "50% Increased Attack Speed\n" +
          "5% Chance to Cast Level 7 Fist of the Heavens On Striking\n" +
          "Replenish Life +12\n" +
          "+100-150% Bonus to Attack Rating",
      },
      {
        name: 'Eaglehorn',
        type: 'Crusader Bow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/bows/eaglehorn.jpg',
        stats: "Two-Hand Damage: 45 to (190-313)\n" +
          "Required Level: 69\n" +
          "Required Strength: 97\n" +
          "Required Dexterity: 121\n" +
          "Bow Class - Slow Attack Speed",
        magicStats: "+200% Enhanced Damage\n" +
          "+2-198% Enhanced Maximum Damage (+2 Per Character Level)\n" +
          "+1 to Amazon Skill Levels\n" +
          "+6-594 to Attack Rating (+6 Per Character Level)\n" +
          "+25 to Dexterity\n" +
          "Ignores Target's Defense",
      },
      {
        name: 'Widowmaker',
        type: 'Ward Bow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/bows/widowmaker.jpg',
        stats: "Two-Hand Damage: (50-60) to (132-159)\n" +
          "Required Level: 65\n" +
          "Required Strength: 72\n" +
          "Required Dexterity: 146\n" +
          "Bow Class - Normal Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Ignore Target's Defense\n" +
          "33% Deadly Strike\n" +
          "+3-5 to Guided Arrow\n" +
          "Fires Magic Arrows [Level 11]",
      },
      {
        name: 'Windforce',
        type: 'Hydra Bow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/bows/windforce.jpg',
        stats: "Two-Hand Damage: 35 to (241-547)\n" +
          "Required Level: 73\n" +
          "Required Strength: 134\n" +
          "Required Dexterity: 167\n" +
          "Bow Class - Slow Attack Speed",
        magicStats: "+250% Enhanced Damage\n" +
          "+3-309 to Maximum Damage (+3.125 Per Character Level)\n" +
          "20% Increased Attack Speed\n" +
          "6-8% Mana Stolen Per Hit\n" +
          "Heal Stamina Plus 30%\n" +
          "+10 to Strength\n" +
          "+5 to Dexterity\n" +
          "Knockback",
      },
      {
        name: 'Lycander\'s Aim',
        type: 'Ceremonial Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/lycander\'s-aim.jpg',
        stats: "Two-Hand Damage: (72-82) to (152-173)\n" +
          "Required Level: 42\n" +
          "Required Strength: 73\n" +
          "Required Dexterity: 110\n" +
          "(Amazon Only)\n" +
          "Bow Class - Slow Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Adds 25-50 Damage\n" +
          "+20% Increased Attack Speed\n" +
          "+2 to Amazon Skill Levels\n" +
          "5-8% Mana Stolen Per Hit\n" +
          "+20 to Energy\n" +
          "+20 to Dexterity\n" +
          "+20% Enhanced Defense\n" +
          "+2 to Bow and Crossbow Skills (Amazon Only)",
        hero: Hero.AMAZON
      },
      {
        name: 'Blood Raven\'s Charge',
        type: 'Matriarchal Bow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/bows/blood-raven\'s-charge.jpg',
        stats: "Two-Hand Damage: magic(56-66) to (131-155)\n" +
          "Required Level: 71\n" +
          "Required Strength: 87\n" +
          "Required Dexterity: 187\n" +
          "(Amazon Only)\n" +
          "Bow Class - Fast Attack Speed",
        magicStats: "+180-230% Enhanced Damage\n" +
          "200-300% Bonus to Attack Rating\n" +
          "Fires Explosive Arrows Or Bolts [Level 13]\n" +
          "Level 5 Revive (30 charges)\n" +
          "+2-4 to Bow and Crossbow Skills (Amazon Only)",
        hero: Hero.AMAZON
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.CROSSBOW, items: [
      {
        name: 'Leadcrow',
        type: 'Light Crossbow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/crossbows/leadcrow.jpg',
        stats: "Two-Hand Damage: 10 to 15\n" +
          "Required Level: 9\n" +
          "Required Strength: 21\n" +
          "Required Dexterity: 27\n" +
          "Crossbow Class - Normal Attack Speed",
        magicStats: "+70% Enhanced Damage\n" +
          "25% Deadly Strike\n" +
          "+40 to Attack Rating\n" +
          "Poison Resist +30%\n" +
          "+10 to Life\n" +
          "+10 to Dexterity",
      },
      {
        name: 'Ichorsting',
        type: 'Crossbow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/crossbows/ichorsting.jpg',
        stats: "Two-Hand Damage: 13 to 24\n" +
          "Required Level: 18\n" +
          "Required Strength: 40\n" +
          "Required Dexterity: 33\n" +
          "Crossbow Class - Slow Attack Speed",
        magicStats: "+50% Enhanced Damage\n" +
          "Adds 30 Poison Damage Over 3 Seconds\n" +
          "20% Increased Attack Speed\n" +
          "Piercing Attack (50)\n" +
          "+50 to Attack Rating\n" +
          "+20 to Dexterity",
      },
      {
        name: 'Hellcast',
        type: 'Heavy Crossbow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/crossbows/hellcast-buriza-do-kyanon-hellrack.jpg',
        stats: "Two-Hand Damage: (23-25) to (44-46)\n" +
          "Required Level: 27\n" +
          "Required Strength: 60\n" +
          "Required Dexterity: 40\n" +
          "Crossbow Class - Slow Attack Speed",
        magicStats: "+70-80% Enhanced Damage\n" +
          "Fires Explosive Arrows Or Bolts [Level 5]\n" +
          "Adds 15-35 Fire Damage\n" +
          "20% Increased Attack Speed\n" +
          "+70 to Attack Rating\n" +
          "15% to Max Fire Resist\n" +
          "Fire Resist +15%",
      },
      {
        name: 'Doomslinger',
        type: 'Repeating Crossbow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/crossbows/doomslinger.jpg',
        stats: "Two-Hand Damage: (9-12) to (19-24)\n" +
          "Required Level: 28\n" +
          "Required Strength: 40\n" +
          "Required Dexterity: 50\n" +
          "Crossbow Class - Fast Attack Speed",
        magicStats: "+60-100% Enhanced Damage\n" +
          "Piercing Attack (35)\n" +
          "30% Increased Attack Speed\n" +
          "+1 to Amazon Skill Levels\n" +
          "+15 to Life",
      },
      {
        name: 'Langer Briser',
        type: 'Arbalest',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/crossbows/langer-briser.jpg',
        stats: "Two-Hand Damage: (37-42) to (82-111)\n" +
          "Required Level: 32\n" +
          "Required Strength: 52\n" +
          "Required Dexterity: 61\n" +
          "Crossbow Class - Normal Attack Speed",
        magicStats: "+170-200% Enhanced Damage\n" +
          "+10-30 to Maximum Damage\n" +
          "33% Chance Of Open Wounds\n" +
          "Adds 1-212 Lightning Damage\n" +
          "+30 to Life\n" +
          "Knockback\n" +
          "30-60% Better Chance Of Getting Magic Items",
      },
      {
        name: 'Pus Spitter',
        type: 'Siege Crossbow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/crossbows/pus-spitter.jpg',
        stats: "Two-Hand Damage: (50-64) to (105-134)\n" +
          "Required Level: 36\n" +
          "Required Strength: 32\n" +
          "Required Dexterity: 28\n" +
          "Crossbow Class - Slow Attack Speed",
        magicStats: "+150-220% Enhanced Damage\n" +
          "+150 Poison Damage Over 8 Seconds\n" +
          "Requirements -60%\n" +
          "9% Chance to Cast Level 6 Poison Nova When Struck\n" +
          "4% Chance to Cast Level 1 Lower Resist On Striking\n" +
          "+ (5 Per Character Level) 5-495 to Attack Rating (Based On Character Level)\n" +
          "10% Increased Attack Speed\n" +
          "+2 to Necromancer Skill Levels",
      },
      {
        name: 'Buriza-Do Kyanon',
        type: 'Ballista',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/crossbows/hellcast-buriza-do-kyanon-hellrack.jpg',
        stats: "Two-Hand Damage: (82-99) to (139-412)\n" +
          "Required Level: 41\n" +
          "Required Strength: 110\n" +
          "Required Dexterity: 80\n" +
          "Crossbow Class - Slow Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "+ (2.5 Per Character Level) 2-247 to Maximum Damage (Based On Character Level)\n" +
          "Adds 32-196 Cold Damage - 8 Second Duration\n" +
          "Piercing Attack (100)\n" +
          "Freezes Target +3\n" +
          "+75-150 Defense\n" +
          "+35 to Dexterity\n" +
          "80% Increased Attack Speed",
      },
      {
        name: 'Demon Machine',
        type: 'Chu-Ko-Nu',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/crossbows/demon-machine.jpg',
        stats: "Two-Hand Damage: 31-137\n" +
          "Required Level: 49\n" +
          "Required Strength: 80\n" +
          "Required Dexterity: 95\n" +
          "Crossbow Class – Very Fast Attack Speed",
        magicStats: "+123% Enhanced Damage\n" +
          "+66 to Maximum Damage\n" +
          "Fires Explosive Bolts [Level 6]\n" +
          "+632 to Attack Rating\n" +
          "Piercing Attack (66)\n" +
          "+321 Defense\n" +
          "+36 to Mana",
      },
      {
        name: 'Hellrack',
        type: 'Colossus Crossbow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/crossbows/hellcast-buriza-do-kyanon-hellrack.jpg',
        stats: "Two-Hand Damage: (89-105) to (254-300)\n" +
          "Required Level: 76\n" +
          "Required Strength: 163\n" +
          "Required Dexterity: 77\n" +
          "Crossbow Class - Slow Attack Speed",
        magicStats: "+180-230% Enhanced Damage\n" +
          "100-150% Bonus to Attack Rating\n" +
          "Adds 63-324 Fire Damage\n" +
          "Adds 63-324 Lightning Damage\n" +
          "Adds 63-324 Cold Damage\n" +
          "+20% Increased Attack Speed\n" +
          "Level 18 Immolation Arrow (150 charges)\n" +
          "Socketed (2)",
      },
      {
        name: 'Gut Siphon',
        type: 'Demon Crossbow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/crossbows/gut-siphon.jpg',
        stats: "Two-Hand Damage: (67-83) to (104-128)\n" +
          "Required Level: 71\n" +
          "Required Strength: 141\n" +
          "Required Dexterity: 98\n" +
          "Crossbow Class – Very Fast Attack Speed",
        magicStats: "+160-220% Enhanced Damage\n" +
          "Piercing Attack [33]\n" +
          "12-18% Life Stolen Per Hit\n" +
          "33% Chance of Open Wounds\n" +
          "Slows Target by 25%",
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.DAGGER, items: [
      {
        name: 'Gull',
        type: 'Dagger',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/daggers/gull-wizzardspike.jpg',
        stats: "One-Hand Damage: 2 to 19\n" +
          "Required Level: 4\n" +
          "Durability: 16\n" +
          "Dagger Class - Very Fast Attack Speed",
        magicStats: "Adds 1-15 damage\n" +
          "100% Better Chance of Getting Magic Items\n" +
          "-5 to Mana",
      },
      {
        name: 'The Diggler',
        type: 'Dirk',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/daggers/the-diggler.jpg',
        stats: "One-Hand Damage: 4 to 13\n" +
          "Required Level: 11\n" +
          "Required Dexterity: 25\n" +
          "Durability: 20\n" +
          "Dagger Class - Fast Attack Speed",
        magicStats: "+50% Enhanced Damage\n" +
          "Ignore Target's Defense\n" +
          "30% Increased Attack Speed\n" +
          "Cold Resist +25%\n" +
          "Fire Resist +25%\n" +
          "+10 to Dexterity",
      },
      {
        name: 'The Jade Tan Do',
        type: 'Kris',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/daggers/the-jade-tan-do-blackbog\'s-sharp.jpg',
        stats: "One-Hand Damage: 2 to 11\n" +
          "Required Level: 19\n" +
          "Required Dexterity: 45\n" +
          "Durability: 24\n" +
          "Dagger Class - Very Fast Attack Speed",
        magicStats: "+100-150 to Attack Rating\n" +
          "+180 Poison Damage Over 4 Seconds\n" +
          "Poison Resist +95%\n" +
          "+20% to Maximum Poison Resist\n" +
          "Cannot Be Frozen",
      },
      {
        name: 'Spectral Shard',
        type: 'Blade',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/daggers/spectral-shard-ghostflame.jpg',
        stats: "One-Hand Damage: 4 to 15\n" +
          "Required Level: 25\n" +
          "Required Strength: 35\n" +
          "Required Dexterity: 51\n" +
          "Durability: 24\n" +
          "Dagger Class - Fast Attack Speed",
        magicStats: "50% Faster Cast Rate\n" +
          "+55 to Attack Rating\n" +
          "All Resistances +10\n" +
          "+50 to Mana",
      },
      {
        name: 'Spineripper',
        type: 'Poignard',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/daggers/spineripper.jpg',
        stats: "One-Hand Damage: (33-35) to (81-88)\n" +
          "Required Level: 32\n" +
          "Required Strength: 25\n" +
          "Durability: 16\n" +
          "Dagger Class - Very Fast Attack Speed",
        magicStats: "+200-240% Enhanced Damage\n" +
          "Adds 15-27 Damage\n" +
          "15% Increased Attack Speed\n" +
          "+1 to Necromancer Skill Levels\n" +
          "Prevent Monster Heal\n" +
          "Ignore Target's Defense\n" +
          "8% Life Stolen Per Hit\n" +
          "+10 to Dexterity",
      },
      {
        name: 'Heart Carver',
        type: 'Rondel',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/daggers/heart-carver.jpg',
        stats: "One-Hand Damage: (44-49) to (110-123)\n" +
          "Required Level: 36\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 58\n" +
          "Durability: 20\n" +
          "Dagger Class - Fast Attack Speed",
        magicStats: "+190-240% Enhanced Damage\n" +
          "Adds 15-35 Damage\n" +
          "35% Deadly Strike\n" +
          "Ignore Target's Defense\n" +
          "+4 to Grim Ward (Barbarian Only)\n" +
          "+4 to Find Item (Barbarian Only)\n" +
          "+4 to Find Potion (Barbarian Only)",
      },
      {
        name: 'Blackbog\'s Sharp',
        type: 'Cinquedass',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/daggers/the-jade-tan-do-blackbog\'s-sharp.jpg',
        stats: "One-Hand Damage: 30 to 76\n" +
          "Required Level 38\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 88\n" +
          "Durability: 24\n" +
          "Dagger Class - Very Fast Attack Speed",
        magicStats: "+488 Poison Damage Over 10 Seconds\n" +
          "Adds 15-45 Damage\n" +
          "30% Increased Attack Speed\n" +
          "Slows Target By 50%\n" +
          "+50 Defense\n" +
          "+4 to Poison Nova (Necromancer Only)\n" +
          "+4 to Poison Explosion (Necromancer Only)\n" +
          "+5 to Poison Dagger (Necromancer Only)",
      },
      {
        name: 'Stormspike',
        type: 'Stiletto',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/daggers/stormspike.jpg',
        stats: "One-Hand Damage: 47 to 90\n" +
          "Required Level 41\n" +
          "Required Strength: 47\n" +
          "Required Dexterity: 97\n" +
          "Durability: 24\n" +
          "Dagger Class – Fast Attack Speed",
        magicStats: "+150% Enhanced Damage\n" +
          "Adds 1-120 Lightning Damage\n" +
          "25% Chance to Cast Level 3 Charged Bolt When Struck\n" +
          "Lightning Resist + (1 Per Character Level) 1-99 % (Based On Character Level)\n" +
          "Attacker Takes Lightning Damage of 20",
      },
      {
        name: 'Wizardspike',
        type: 'Bone Knife',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/daggers/gull-wizzardspike.jpg',
        stats: "One-Hand Damage: 23 to 49\n" +
          "Required Level: 61\n" +
          "Required Strength: 38\n" +
          "Required Dexterity: 75\n" +
          "Dagger Class - Very Fast Attack Speed",
        magicStats: "+ (2 Per Character Level) 2-198 to Mana (Based On Character Level)\n" +
          "50% Faster Cast Rate\n" +
          "Regenerate Mana 15%\n" +
          "Increase Maximum Mana 15%\n" +
          "All Resistances +75\n" +
          "Indestructible",
      },
      {
        name: 'Fleshripper',
        type: 'Fanged Knife',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/daggers/fleshripper.jpg',
        stats: "One-Hand Damage: (45-60) to (174-228)\n" +
          "Required Level: 68\n" +
          "Required Strength: 42\n" +
          "Required Dexterity: 86\n" +
          "Durability: 36\n" +
          "Dagger Class - Very Fast Attack Speed",
        magicStats: "+200-300% Enhanced Damage\n" +
          "-50% Target Defense\n" +
          "25% Chance of Crushing Blow\n" +
          "33% Deadly Strike\n" +
          "50% Chance of Open Wounds\n" +
          "Prevent Monster Heal\n" +
          "Slows Target By 20%",
      },
      {
        name: 'Ghostflame',
        type: 'Legend Spike',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/daggers/spectral-shard-ghostflame.jpg',
        stats: "One-Hand Damage: (133-156) to (203-238)\n" +
          "Required Level: 66\n" +
          "Required Strength: 55\n" +
          "Required Dexterity: 57\n" +
          "Dagger Class - Fast Attack Speed",
        magicStats: "+190-240% Enhanced Damage\n" +
          "Ignore Target's Defense\n" +
          "+108 Magic Damage\n" +
          "10-15% Mana Stolen Per Hit\n" +
          "+2 to Light Radius\n" +
          "Indestructible\n" +
          "Ethereal (Cannot Be Repaired)",
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.MACE, items: [
      {
        name: 'Felloak',
        type: 'Club',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/felloak.jpg',
        stats: "One-Hand Damage: 1 to 10\n" +
          "Required Level: 3\n" +
          "Durability: 24\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+70-80% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "Adds 6-8 Fire Damage\n" +
          "Knockback\n" +
          "Lightning Resist +60%\n" +
          "Fire Resist +20%",
      },
      {
        name: 'Stoutnail',
        type: 'Spiked Club',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/stoutnail-fleshrender.jpg',
        stats: "One-Hand Damage: 10 to 16\n" +
          "Required Level: 5\n" +
          "Durability: 36\n" +
          "Mace Class - Normal Attack Speed",
        magicStats: "+100% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "+7 to Vitality\n" +
          "Attacker Takes Damage of 3-10\n" +
          "Magic Damage Reduced By 2",
      },
      {
        name: 'Crushflange',
        type: 'Mace',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/crushflange.jpg',
        stats: "One-Hand Damage: 4 to (15-16)\n" +
          "Required Level: 9\n" +
          "Required Strength: 27\n" +
          "Durability: 60\n" +
          "Mace Class - Normal Attack Speed",
        magicStats: "+50-60% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "33% Chance Of Crushing Blow\n" +
          "Knockback\n" +
          "Fire Resist +50%\n" +
          "+15 to Strength\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Bloodrise',
        type: 'Morning Star',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/bloodrise-moonfall.jpg',
        stats: "One-Hand Damage: 15 to 35\n" +
          "Required Level: 15\n" +
          "Required Strength: 36\n" +
          "Durability: 72\n" +
          "Mace Class – Normal Attack Speed",
        magicStats: "One-Hand Damage: 15 to 35\n" +
          "Required Level: 15\n" +
          "Required Strength: 36\n" +
          "Durability: 72\n" +
          "Mace Class – Normal Attack Speed",
      },
      {
        name: 'The General\'s Tan Do Li Ga',
        type: 'Flail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/the-general\'s-tan-do-li-ga-baezil\'s-vortex.jpg',
        stats: "One-Hand Damage: 2 to (56-58)\n" +
          "Required Level: 21\n" +
          "Required Strength: 41\n" +
          "Required Dexterity: 35\n" +
          "Durability: 30\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+50-60% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "Adds 1-20 Damage\n" +
          "20% Increased Attack Speed\n" +
          "5% Mana Stolen Per Hit\n" +
          "Slows Target By 50%\n" +
          "+25 Defense",
      },
      {
        name: 'Ironstone',
        type: 'War Hammer',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/ironstone.jpg',
        stats: "One-Hand Damage: 40 to 61\n" +
          "Durability: 55 of 55\n" +
          "Required Strength: 53\n" +
          "Required Level: 27\n" +
          "Mace Class - Slow Attack Speed",
        magicStats: "+111% Enhanced Damage\n" +
          "+138 to Attack Rating\n" +
          "Adds 1-10 Lightning Damage\n" +
          "+10 to Strength\n" +
          "+50% Damage to Undead",
      },
      {
        name: 'Bonesnap',
        type: 'Maul',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/bonesnap.jpg',
        stats: "Two-Hand Damage: (90-120) to (129-172)\n" +
          "Required Level: 24\n" +
          "Required Strength: 69\n" +
          "Durability: 60\n" +
          "Mace Class – Slow Attack Speed",
        magicStats: "+200-300% Enhanced Damage\n" +
          "+100% Damage to Undead\n" +
          "40% chance of Crushing Blow\n" +
          "Cold Resist +30%\n" +
          "Fire Resist +30%",
      },
      {
        name: 'Steeldriver',
        type: 'Great Maul',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/steeldriver.jpg',
        stats: "Two-Hand Damage: (95-133) to (145-203)\n" +
          "Required Level: 29\n" +
          "Required Strength: 50\n" +
          "Durability: 60\n" +
          "Mace Class – Very Slow Attack Speed",
        magicStats: "+150-250% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "40% Increased Attack Speed\n" +
          "Requirements -50%\n" +
          "Heal Stamina plus 25%",
      },
      {
        name: 'Dark Clan Crusher',
        type: 'Cudgel',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/dark-clan-crusher.jpg',
        stats: "One-Hand Damage: 17 to 61\n" +
          "Required Level: 34\n" +
          "Required Strength: 25\n" +
          "Durability: 24\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+195% Enhanced Damage\n" +
          "+200% Damage to Demons\n" +
          "+50% Damage to Undead\n" +
          "+200 to Attack Rating Against Demons\n" +
          "+20-25% Bonus to Attack Rating\n" +
          "+15 Life After Each Demon Kill\n" +
          "+2 to Druid Skill Levels",
      },
      {
        name: 'Fleshrender',
        type: 'Barbed Club',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/stoutnail-fleshrender.jpg',
        stats: "One-Hand Damage: (62.2-72) to (109.8-128)\n" +
          "Required Level: 38\n" +
          "Required Strength: 30\n" +
          "Durability: 56\n" +
          "Mace Class - Normal Attack Speed",
        magicStats: "+130-200% Enhanced Damage\n" +
          "Adds 35-50 Damage\n" +
          "+50% Damage to Undead\n" +
          "20% Deadly Strike\n" +
          "20% Chance of Crushing Blow\n" +
          "25% Chance of Open Wounds\n" +
          "+1 to Druid Skills\n" +
          "+2 to Shape Shifting Skills (Druid Only)\n" +
          "Prevent Monster Heal",
      },
      {
        name: 'Sureshrill Frost',
        type: 'Flanged Mace',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/sureshrill-frost.jpg',
        stats: "One-Hand Damage: (42-47) to (67-74)\n" +
          "Required Level: 39\n" +
          "Required Strength: 61\n" +
          "Durability: 60\n" +
          "Mace Class - Normal Attack Speed",
        magicStats: "+150-180% Enhanced Damage\n" +
          "Adds 5-10 Damage\n" +
          "+50% Damage to Undead\n" +
          "Adds 63-112 Cold Damage, 5 sec. Cold Duration (Normal)\n" +
          "Freezes Target +3\n" +
          "Level 9 Frozen Orb (50 Charges)\n" +
          "Cannot Be Frozen",
      },
      {
        name: 'Moonfall',
        type: 'Jagged Star',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/bloodrise-moonfall.jpg',
        stats: "One-Hand Damage: (54-60) to (83-92)\n" +
          "Required Level: 42\n" +
          "Required Strength: 74\n" +
          "Durability: 72\n" +
          "Mace Class – Normal Attack Speed",
        magicStats: "+120-150% Enhanced Damage\n" +
          "Adds 10-15 Damage\n" +
          "+50% Damage to Undead\n" +
          "Adds 55-115 Fire Damage\n" +
          "5% Chance to Cast Level 6 Meteor On Striking\n" +
          "Level 11 Meteor (60 Charges)\n" +
          "Magic Damage Reduced By 9-12\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Baezil\'s Vortex',
        type: 'Knout',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/the-general\'s-tan-do-li-ga-baezil\'s-vortex.jpg',
        stats: "One-Hand Damage: (33-39) to (91-105)\n" +
          "Required Level: 45\n" +
          "Required Strength: 82\n" +
          "Required Dexterity: 73\n" +
          "Durability: 30\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+160-200% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "Adds 1-150 Lightning Damage\n" +
          "20% Increased Attack Speed\n" +
          "5% Chance to Cast Level 8 Nova On Striking\n" +
          "Level 15 Nova (80 Charges)\n" +
          "Lightning Resist +25%\n" +
          "+100 to Mana",
      },
      {
        name: 'Earthshaker',
        type: 'Battle Hammer',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/earthshaker.jpg',
        stats: "One-Hand Damage: 98 to 162\n" +
          "Required Level: 43\n" +
          "Required Strength: 100\n" +
          "Durability: 105\n" +
          "Mace Class – Slow Attack Speed",
        magicStats: "+180% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "5% Chance to Cast Level 7 Fissure On Striking\n" +
          "+30% Increased Attack Speed\n" +
          "Hit Blinds Target\n" +
          "Knockback\n" +
          "+3 to Elemental Skills (Druid Only)",
      },
      {
        name: 'Bloodtree Stump',
        type: 'War Club',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/bloodtree-stump.jpg',
        stats: "Two-Hand Damage: (148-169) to (218-249)\n" +
          "Required Level: 48\n" +
          "Required Strength: 124\n" +
          "Durability: 100\n" +
          "Mace Class – Slow Attack Speed",
        magicStats: "+180-220% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "50% Chance Of Crushing Blow\n" +
          "All Resistances +20\n" +
          "+25 to Strength\n" +
          "+2 to Masteries (Barbarian Only)\n" +
          "+3 to Mace Mastery (Barbarian Only)",
      },
      {
        name: 'The Gavel of Pain',
        type: 'Martel de Fer',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/the-gavel-of-pain.jpg',
        stats: "wo-Hand Damage: (152-170) to (257-287)\n" +
          "Required Level: 45\n" +
          "Required Strength: 169\n" +
          "Mace Class – Very Slow Attack Speed",
        magicStats: "+130-160% Enhanced Damage\n" +
          "Adds 12-30 Damage\n" +
          "+50% Damage to Undead\n" +
          "5% Chance to Cast Level 1 Iron Maiden When Struck\n" +
          "5% Chance to Cast Level 1 Amplify Damage On Striking\n" +
          "Level 8 Amplify Damage (3 Charges)\n" +
          "Attacker Takes Damage of 26\n" +
          "Indestructible",
      },
      {
        name: 'Nord\'s Tenderizer',
        type: 'Truncheon',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/nord\'s-tenderizer.jpg',
        stats: "One-Hand Damage: (129-150) to (159-184)\n" +
          "Required Level: 68\n" +
          "Required Strength: 88\n" +
          "Required Dexterity: 43\n" +
          "Durability: 55\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+270-330% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "Adds 205-455 Cold Damage, 5 sec. Duration (Normal)\n" +
          "Freezes Target +2-4\n" +
          "Cold Absorb 5-15%\n" +
          "+25% Increased Attack Speed\n" +
          "Level 16 Blizzard (12 charges)\n" +
          "+150-180% Bonus to Attack Rating",
      },
      {
        name: 'Demon Limb',
        type: 'Tyrant Club',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/demon-limb.jpg',
        stats: "One-Hand Damage: (89-105) to (162-191)\n" +
          "Required Level: 63\n" +
          "Required Strength: 133\n" +
          "Durability: 65\n" +
          "Mace Class - Normal Attack Speed",
        magicStats: "+180-230% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "+123% Damage to Demons\n" +
          "Adds 222-333 Fire Damage\n" +
          "7-13% Life Stolen Per Hit\n" +
          "Fire Resist +15-20%\n" +
          "Level 23 Enchant (20 Charges)\n" +
          "Repairs 1 Durability in 20 Seconds",
      },
      {
        name: 'Baranar\'s Star',
        type: 'Devil Star',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/baranar\'s-star.jpg',
        stats: "One-Hand Damage: 129 to 159\n" +
          "Required Level: 65\n" +
          "Required Strength: 153\n" +
          "Required Dexterity: 44\n" +
          "Durability: 172\n" +
          "Mace Class – Normal Attack Speed",
        magicStats: "+200% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "Adds 1-200 Fire Damage\n" +
          "Adds 1-200 Lightning Damage\n" +
          "Adds 1-200 Cold Damage, Duration 0-7 sec.\n" +
          "50% Increased Attack Speed\n" +
          "200% Bonus to Attack Rating\n" +
          "+15 to Dexterity\n" +
          "+15 to Strength",
      },
      {
        name: 'Horizon\'s Tornado',
        type: 'Scourge',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/horizon\'s-tornado.jpg',
        stats: "One-Hand Damage: (9-11) to (264-304)\n" +
          "Required Level: 64\n" +
          "Required Strength: 100\n" +
          "Required Dexterity: 62\n" +
          "Durability: 65\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+230-280% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "+50% Increased Attack Speed\n" +
          "Slows Target By 20%\n" +
          "20% Chance to Cast Level 15 Tornado On Striking\n" +
          "Requirements -20%",
      },
      {
        name: 'Stormlash',
        type: 'Scourge',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/stormlash.jpg',
        stats: "One-Hand Damage: (10-12) to (272-320)\n" +
          "Required Level: 82\n" +
          "Required Strength: 125\n" +
          "Required Dexterity: 77\n" +
          "Durability: 65\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+240-300% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "Adds 1-473 Lightning Damage\n" +
          "+30% Increased Attack Speed\n" +
          "+33% Chance of Crushing Blow\n" +
          "20% Chance to Cast Level 18 Tornado On Striking\n" +
          "15% Chance to Cast Level 10 Static Field On Striking\n" +
          "+3-9 Lightning Absorb\n" +
          "Attacker Takes Lightning Damage of 30",
      },
      {
        name: 'Stone Crusher',
        type: 'Legendary Mallet',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/stone-crusher.jpg',
        stats: "One-Hand Damage: (190-210) to (231-256)\n" +
          "Required Level: 68\n" +
          "Required Strength: 189\n" +
          "Durability: 65\n" +
          "Mace Class – Slow Attack Speed",
        magicStats: "+280-320% Enhanced Damage\n" +
          "Damage +10-30\n" +
          "50% Damage to Undead\n" +
          "-25% Target Defense\n" +
          "40% Chance of Crushing Blow\n" +
          "-100 to Monster Defense Per Hit\n" +
          "+20-30 to Strength",
      },
      {
        name: 'Schaefer\'s Hammer',
        type: 'Legendary Mallet',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/schaefer\'s-hammer.jpg',
        stats: "One-Hand Damage: (100-114) to (124-338)\n" +
          "Required Level: 79\n" +
          "Required Strength: 189\n" +
          "Mace Class – Slow Attack Speed",
        magicStats: "+100-130% Enhanced Damage\n" +
          "+ (2 Per Character Level) 2-198 to Maximum Damage (Based On Character Level)\n" +
          "Adds 50-200 Lightning Damage\n" +
          "+50% Damage to Undead\n" +
          "20% Chance to Cast Level 10 Static Field On Striking\n" +
          "20% Increased Attack Speed\n" +
          "+ (8 Per Character Level) 8-792 to Attack Rating (Based On Character Level)\n" +
          "Lightning Resist +75%\n" +
          "+50 to Life\n" +
          "+1 to Light Radius\n" +
          "Indestructible",
      },
      {
        name: 'Windhammer',
        type: 'Ogre Maul',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/windhammer.jpg',
        stats: "Two-Hand Damage: (215-254) to (296-349)\n" +
          "Required Level: 68\n" +
          "Required Strength: 225\n" +
          "Durability: 60\n" +
          "Mace Class – Slow Attack Speed",
        magicStats: "+180-230% Enhanced Damage\n" +
          "50% Chance of Crushing Blow\n" +
          "60% Increased Attack Speed\n" +
          "33% Chance to Cast Level 22 Twister On Striking\n" +
          "+50% Damage to Undead",
      },
      {
        name: 'Earth Shifter',
        type: 'Thunder Maul',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/earth-shifter.jpg',
        stats: "Two-Hand Damage: (115-132) to (630-720)\n" +
          "Required Level: 69\n" +
          "Required Strength: 253\n" +
          "Durability: 60\n" +
          "Mace Class – Very Slow Attack Speed",
        magicStats: "+250-300% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "+7 to Elemental Skills (Druid Only)\n" +
          "25% Chance to Cast Level 14 Fissure On Striking\n" +
          "10% Increased Attack Speed\n" +
          "33% Chance of Crushing Blow\n" +
          "10% Faster Cast Rate\n" +
          "Level 14 Volcano (30 charges)",
      },
      {
        name: 'The Cranium Basher',
        type: 'Thunder Maul',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/the-cranium-basher.jpg',
        stats: "Two-Hand Damage: (119-132) to (560-632)\n" +
          "Required Level: 87\n" +
          "Required Strength: 253\n" +
          "Mace Class – Very Slow Attack Speed",
        magicStats: "+200-240% Enhanced Damage\n" +
          "+20 to Minimum Damage\n" +
          "+50% Damage to Undead\n" +
          "75% Chance Of Crushing Blow\n" +
          "4% Chance to Cast Level 1 Amplify Damage On Striking\n" +
          "20% Increased Attack Speed\n" +
          "All Resistances +25\n" +
          "+25 to Strength\n" +
          "+20 to Maximum Damage (not shown)\n" +
          "Indestructible",
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.POLEARM, items: [
      {
        name: 'Dimoak\'s Hew',
        type: 'Bardiche',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/dimoak\'s-hew.jpg',
        stats: "Two-Hand Damage: 2 to 54\n" +
          "Required Level: 8\n" +
          "Required Strength: 40\n" +
          "Durability: 50\n" +
          "Polearm Class - Slow Attack Speed",
        magicStats: "+100% Enhanced Damage\n" +
          "+20% Increased Attack Speed\n" +
          "+15 Dexterity\n" +
          "-8 Defense",
      },
      {
        name: 'Steelgoad',
        type: 'Voulge',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/steelgoad.jpg',
        stats: "Two-Hand Damage: (9-10) to (33-37)\n" +
          "Required Level: 14\n" +
          "Required Strength: 50\n" +
          "Durability: 70-90\n" +
          "Polearm Class - Normal Attack Speed",
        magicStats: "+60-80% Enhanced Damage\n" +
          "30% Deadly Strike\n" +
          "+30 to Attack Rating\n" +
          "All Resistances +5\n" +
          "Hit Causes monster to flee 75%",
      },
      {
        name: 'Soul Harvest',
        type: 'Scythe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/soul-harvest.jpg',
        stats: "Two-Hand Damage: (12-15) to (30-38)\n" +
          "Required Level: 19\n" +
          "Required Strength: 41\n" +
          "Required Dexterity: 41\n" +
          "Durability: 65\n" +
          "Polearm Class - Fast Attack Speed",
        magicStats: "+50-90% Enhanced Damage\n" +
          "30% chance of Open Wounds\n" +
          "10% Mana Stolen Per Hit\n" +
          "+45 to Attack Rating\n" +
          "+5 to Energy\n" +
          "All Resistances +20",
      },
      {
        name: 'The Battlebranch',
        type: 'Poleaxe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/the-battlebranch.jpg',
        stats: "Two-Hand Damage: 30 to 65\n" +
          "Durability: 65 of 65\n" +
          "Required Strength: 62\n" +
          "Required Level: 25\n" +
          "Polearm Class - Fast Attack Speed",
        magicStats: "+30% Increased Attack Speed\n" +
          "+68% Enhanced Damage\n" +
          "+66 to Attack Rating\n" +
          "7% Life stolen per hit\n" +
          "+10 to Dexterity",
      },
      {
        name: 'Woestave',
        type: 'Halberd',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/woestave.jpg',
        stats: "Two-Hand Damage: (14-16) to (54-62)\n" +
          "Required Level: 28\n" +
          "Required Strength: 75\n" +
          "Required Dexterity: 47\n" +
          "Durability: 55\n" +
          "Polearm Class - Normal Attack Speed",
        magicStats: "+20-40% Enhanced Damage\n" +
          "50% Chance Of Open Wounds\n" +
          "Slows Target By 50%\n" +
          "Hit Blinds Target +3\n" +
          "-50 to Monster Defense Per Hit\n" +
          "Freezes Target\n" +
          "Prevent Monster Heal\n" +
          "-3 to Light Radius",
      },
      {
        name: 'The Grim Reaper',
        type: 'War Scythe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/the-grim-reaper.jpg',
        stats: "Two-Hand Damage: 33 to 43\n" +
          "Required Level: 29\n" +
          "Required Strength: 80\n" +
          "Required Dexterity: 80\n" +
          "Durability: 55\n" +
          "Polearm Class - Fast Attack Speed",
        magicStats: "+20% Enhanced Damage\n" +
          "+15 to Minimum Damage\n" +
          "100% Deadly Strike\n" +
          "5% Mana stolen per hit\n" +
          "Prevent Monster Heal",
      },
      {
        name: 'The Meat Scraper',
        type: 'Lochaber Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/the-meat-scraper.jpg',
        stats: "Two-Hand Damage: (15-18) to (145-174)\n" +
          "Required Level: 41\n" +
          "Required Strength: 80\n" +
          "Durability: 50\n" +
          "Polearm Class - Slow Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "50% Chance Of Open Wounds\n" +
          "30% Increased Attack Speed\n" +
          "10% Life Stolen Per Hit\n" +
          "25% Better Chance Of Getting Magic Items\n" +
          "+3 to Masteries (Barbarian Only)",
      },
      {
        name: 'Blackleach Blade',
        type: 'Bill',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/blackleach-blade.jpg',
        stats: "Two-Hand Damage: (28-33) to (107-250)\n" +
          "Required Level: 42\n" +
          "Required Strength: 72\n" +
          "Durability: 50\n" +
          "Polearm Class - Slow Attack Speed",
        magicStats: "+100-140% Enhanced Damage\n" +
          "+ (1.25 Per Character Level) 1-123 to Maximum Damage (Based On Character Level)\n" +
          "5% Chance to Cast Level 5 Weaken On Striking\n" +
          "Requirements -25%\n" +
          "-2 to Light Radius\n" +
          "8% Life Stolen Per Hit",
      },
      {
        name: 'Athena\'s Wrath',
        type: 'Battle Scythe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/athena\'s-wrath.jpg',
        stats: "Two-Hand Damage: (45-50) to (113-224)\n" +
          "Required Level: 42\n" +
          "Required Strength: 82\n" +
          "Required Dexterity: 82\n" +
          "Durability: 65\n" +
          "Polearm Class - Fast Attack Speed",
        magicStats: "+150-180% Enhanced Damage\n" +
          "+ (1 Per Character Level) 1-99 to Maximum Damage (Based On Character Level)\n" +
          "+ (1 Per Character Level) 1-99 to Life (Based On Character Level)\n" +
          "30% Increased Attack Speed\n" +
          "+1-3 to Druid Skill Levels\n" +
          "+15 to Dexterity",
      },
      {
        name: 'Pierre Tombale Couant',
        type: 'Partizan',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/pierre-tombale-couant.jpg',
        stats: "Two-Hand Damage: (100-120) to (215-260)\n" +
          "Required Level: 43\n" +
          "Required Strength: 113\n" +
          "Required Dexterity: 67\n" +
          "Durability: 65\n" +
          "Polearm Class - Slow Attack Speed",
        magicStats: "+160-220% Enhanced Damage\n" +
          "Adds 12-20 Damage\n" +
          "55% Deadly Strike\n" +
          "+100-200 to Attack Rating\n" +
          "+3 to Barbarian Skill Levels\n" +
          "6% Mana Stolen Per Hit\n" +
          "30% Faster Hit Recovery",
      },
      {
        name: 'Husoldal Evo',
        type: 'Bec-De-Corbin',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/husoldal-evo.jpg',
        stats: "Two-Hand Damage: (53-59) to (253-287)\n" +
          "Required Level: 44\n" +
          "Required Strength: 133\n" +
          "Required Dexterity: 91\n" +
          "Durability: 55\n" +
          "Polearm Class - Normal Attack Speed",
        magicStats: "+160-200% Enhanced Damage\n" +
          "Adds 20-32 Damage\n" +
          "20% Increased Attack Speed\n" +
          "+200-250 to Attack Rating\n" +
          "Prevent Monster Heal\n" +
          "Replenish Life +20",
      },
      {
        name: 'Grim\'s Burning Dead',
        type: 'Grim Scythe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/grim\'s-burning-dead.jpg',
        stats: "Two-Hand Damage: (72-84) to (168-196)\n" +
          "Required Level: 45\n" +
          "Required Strength: 70\n" +
          "Required Dexterity: 70\n" +
          "Durability: 55\n" +
          "Polearm Class - Fast Attack Speed",
        magicStats: "+140-180% Enhanced Damage\n" +
          "Adds 131-232 Fire Damage\n" +
          "+3 to Necromancer Skill Levels\n" +
          "-50% Target Defense\n" +
          "+20% Enhanced Defense\n" +
          "+200-250 to Attack Rating\n" +
          "Fire Resist +45%\n" +
          "Requirements -50%\n" +
          "Attacker Takes Damage of 8",
      },
      {
        name: 'Bonehew',
        type: 'Ogre Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/polearms/bonehew.jpg',
        stats: "Two-Hand Damage: (103-117) to (536-609)\n" +
          "Required Level: 64\n" +
          "Required Strength: 195\n" +
          "Required Dexterity: 75\n" +
          "Durability: 50\n" +
          "Polearm Class - Slow Attack Speed",
        magicStats: "+270-320% Enhanced Damage\n" +
          "Level 14 Corpse Explosion (30 charges)\n" +
          "Prevent Monster Heal\n" +
          "30% Increased Attack Speed\n" +
          "50% Chance to Cast Level 16 Bone Spear On Striking\n" +
          "Socketed (2)",
      },
      {
        name: 'The Reaper\'s Toll',
        type: 'Thresher',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/polearms/the-reaper\'s-toll.jpg',
        stats: "Two-Hand Damage: (34-40) to (408-479)\n" +
          "Required Level: 75\n" +
          "Required Strength: 114\n" +
          "Required Dexterity: 89\n" +
          "Durability: 65\n" +
          "Polearm Class - Fast Attack Speed",
        magicStats: "+190-240% Enhanced Damage\n" +
          "Ignore Target's Defense\n" +
          "Adds 4-44 Cold Damage\n" +
          "11-15% Life Stolen Per Hit\n" +
          "33% Deadly Strike\n" +
          "33% Chance to Cast Level 1 Decrepify On Striking\n" +
          "Requirements -25%",
      },
      {
        name: 'Tomb Reaver',
        type: 'Cryptic Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/polearms/tomb-reaver.jpg',
        stats: "Two-Hand Damage: (99-125) to (450-570)\n" +
          "Required Level: 84\n" +
          "Required Strength: 165\n" +
          "Required Dexterity: 103\n" +
          "Durability: 65\n" +
          "Polearm Class - Slow Attack Speed",
        magicStats: "+200-280% Enhanced Damage\n" +
          "+150-230% Damage to Undead\n" +
          "+60% Increased Attack Speed\n" +
          "+250-350 to Attack Rating Against Undead\n" +
          "All Resistances +30-50\n" +
          "10% Reanimate As: Returned\n" +
          "+10-14 Life After Each Kill\n" +
          "+50-80% Better Chance of Getting Magic Items\n" +
          "+4 to Light Radius\n" +
          "Socketed (1-3)",
      },
      {
        name: 'Stormspire',
        type: 'Giant Thresher',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/polearms/stormspire.jpg',
        stats: "Two-Hand Damage: (100-140) to (285-399)\n" +
          "Required Level: 70\n" +
          "Required Strength: 188\n" +
          "Required Dexterity: 140\n" +
          "Polearm Class - Fast Attack Speed",
        magicStats: "150-250% Enhanced Damage\n" +
          "Adds 1-237 Lightning Damage\n" +
          "2% Chance to Cast Level 20 Charged Bolt When Struck\n" +
          "5% Chance to Cast Level 5 Chain Lightning When Struck\n" +
          "30% Increased Attack Speed\n" +
          "Lightning Resist +50%\n" +
          "+10 to Strength\n" +
          "Attacker Takes Lightning Damage of 27\n" +
          "Indestructible",
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.SCEPTER, items: [
      {
        name: 'Knell Striker',
        type: 'Scepter',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/scepters/knell-striker.jpg',
        stats: "One-Hand Damage: 10 to (18-19)\n" +
          "Required Level: 5\n" +
          "Required Strength: 25\n" +
          "Durability: 50\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+70-80% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "25% Chance Of Crushing Blow\n" +
          "+35 to Attack Rating\n" +
          "Poison Resist +20%\n" +
          "Fire Resist +20%\n" +
          "+15 to Mana",
      },
      {
        name: 'Rusthandle',
        type: 'Grand Scepter',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/scepters/rusthandle.jpg',
        stats: "One-Hand Damage: 15 to (34-35)\n" +
          "Required Level: 18\n" +
          "Required Strength: 37\n" +
          "Durability: 60\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+50-60% Enhanced Damage\n" +
          "Adds 3-7 damage\n" +
          "+100-110% Damage to Undead\n" +
          "8% Life stolen per hit\n" +
          "+1 to Paladin Skill Levels\n" +
          "Magic damage reduced by 1\n" +
          "+3 to Thorns (Paladin Only)\n" +
          "+1-3 to Vengeance (Paladin Only)",
      },
      {
        name: 'Stormeye',
        type: 'War Scepter',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/scepters/stormeye.jpg',
        stats: "One-Hand Damage: (18-22) to (30-37)\n" +
          "Required Level: 30\n" +
          "Required Strength: 55\n" +
          "Durability: 70\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+80-120% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "Adds 3-5 Cold Damage, Cold Duration: 3 seconds\n" +
          "Adds 1-6 Lightning Damage\n" +
          "Replenish Life +10\n" +
          "+1 to Fist of the Heavens (Paladin Only)\n" +
          "+3 to Holy Shock (Paladin Only)\n" +
          "+3-5 to Resist Lightning (Paladin Only)",
      },
      {
        name: 'Zakarum\'s Hand',
        type: 'Rune Scepter',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/scepters/zakarum\'s-hand.jpg',
        stats: "One-Hand Damage: (36-41) to (67-76)\n" +
          "Required Level: 37\n" +
          "Required Strength: 58\n" +
          "Durability: 50\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+180-220% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "30% Increased Attack Speed\n" +
          "6% Chance to Cast Level 5 Blizzard On Striking\n" +
          "8% Mana Stolen Per Hit\n" +
          "Ignore Target's Defense\n" +
          "Regenerate Mana 10%\n" +
          "Heal Stamina Plus 15%\n" +
          "+2 to Holy Shock (Paladin Only)\n" +
          "+2 to Holy Freeze (Paladin Only)",
      },
      {
        name: 'The Fetid Sprinkler',
        type: 'Holy Water Sprinkler',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/scepters/the-fetid-sprinkler.jpg',
        stats: "One-Hand Damage: (51-55) to (118-129)\n" +
          "Required Level: 38\n" +
          "Required Strength: 76\n" +
          "Durability: 60\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+160-190% Enhanced Damage\n" +
          "Adds 15-25 Damage\n" +
          "+50% Damage to Undead\n" +
          "+2 to Paladin Skill Levels\n" +
          "10% Chance to Cast Level 1 Confuse On Striking\n" +
          "5% Chance to Cast Level 1 Decrepify On Striking\n" +
          "+160 Poison Damage Over 4 Seconds\n" +
          "+150-200 to Attack Rating",
      },
      {
        name: 'Hand of Blessed Light',
        type: 'Divine Scepter',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/scepters/hand-of-blessed-light.jpg',
        stats: "One-Hand Damage: (56-61) to (132-143)\n" +
          "Required Level: 42\n" +
          "Required Strength: 103\n" +
          "Durability: 70\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+130-160% Enhanced Damage\n" +
          "Adds 20-45 Damage\n" +
          "+50% Damage to Undead\n" +
          "+2 to Paladin Skill Levels\n" +
          "100% Bonus to Attack Rating\n" +
          "Regenerate Mana 15%\n" +
          "+50 Defense\n" +
          "5% Chance to Cast Level 4 Fist of the Heavens On Striking\n" +
          "+2 to Fist Of The Heavens (Paladin Only)\n" +
          "+4 Holy Bolt (Paladin Only)\n" +
          "+4 to Light Radius",
      },
      {
        name: 'Heaven\'s Light',
        type: 'Mighty Scepter',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/scepters/heaven\'s-light.jpg',
        stats: "One-Hand Damage: (140-160) to (182-208)\n" +
          "Required Level: 61\n" +
          "Required Strength: 125\n" +
          "Required Dexterity: 65\n" +
          "Durability: 50\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+250-300% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "-33% Target Defense\n" +
          "+20% Increased Attack Speed\n" +
          "33% Chance of Crushing Blow\n" +
          "+15-20 Life After Each Demon Kill\n" +
          "+2-3 to Paladin Skill Levels\n" +
          "+3 to Light Radius\n" +
          "Socketed (1-2)",
      },
      {
        name: 'The Redeemer',
        type: 'Mighty Scepter',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/scepters/the-redeemer.jpg',
        stats: "One-Hand Damage: (140-160) to (182-208)\n" +
          "Required Level: 72\n" +
          "Required Strength: 50\n" +
          "Required Dexterity: 26\n" +
          "Durability: 50\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+250-300% Enhanced Damage\n" +
          "Damage +60-120\n" +
          "+50% Damage to Undead\n" +
          "+200-250% Damage to Demons\n" +
          "+2 to Paladin Skill Levels\n" +
          "-33% Target Defense\n" +
          "+2-4 to Redemption (Paladin Only)\n" +
          "+2-4 to Holy Bolt (Paladin Only)\n" +
          "+3 to Light Radius\n" +
          "Requirements -60%",
      },
      {
        name: 'Astreon\'s Iron Ward',
        type: 'Caduceus',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/scepters/astreon\'s-iron-ward.jpg',
        stats: "One-Hand Damage: (125-144) to (146-167)\n" +
          "Required Level: 66\n" +
          "Required Strength: 97\n" +
          "Required Dexterity: 70\n" +
          "Durability: 70\n" +
          "Mace Class - Fast Attack Speed",
        magicStats: "+240-290% Enhanced Damage\n" +
          "Damage +40-85\n" +
          "+50% Damage to Undead\n" +
          "Adds 80-240 Magic Damage\n" +
          "33% Chance of Crushing Blow\n" +
          "Slows Target By 25%\n" +
          "Damage Reduced By 4-7\n" +
          "+2-4 to Combat Skills (Paladin Only)\n" +
          "+10% Increased Attack Speed\n" +
          "150-200% Bonus to Attack Rating",
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.SPEAR, items: [
      {
        name: 'The Dragon Chang',
        type: 'Spear',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/spears/the-dragon-chang.jpg',
        stats: "Two-Hand Damage: 13 to 15\n" +
          "Required Level: 8\n" +
          "Required Dexterity: 20\n" +
          "Durability:: 30\n" +
          "Spear Class - Normal Attack Speed",
        magicStats: "100% Damage to Undead\n" +
          "+10 to Minimum Damage\n" +
          "Adds 3-6 Fire Damage\n" +
          "+35 to Attack Rating\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Razortine',
        type: 'Trident',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/spears/kelpie-snare-razortine.jpg',
        stats: "Two-Hand Damage: (11-13) to (19-22)\n" +
          "Required Level: 12\n" +
          "Required Strength: 38\n" +
          "Required Dexterity: 24\n" +
          "Durability: 35\n" +
          "Spear Class - Slow Attack Speed",
        magicStats: "+30-50% Enhanced Damage\n" +
          "Slows Target By 25%\n" +
          "30% Increased Attack Speed\n" +
          "-50% target defense\n" +
          "+8 to Dexterity\n" +
          "+15 to Strength",
      },
      {
        name: 'Bloodthief',
        type: 'Brandistock',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/spears/bloodthief.jpg',
        stats: "Two-Hand Damage: 11 to 27\n" +
          "Durability: 28 of 28\n" +
          "Required Dexterity: 50\n" +
          "Required Strength: 40\n" +
          "Required Level: 17\n" +
          "Spear Class - Normal Attack Speed",
        magicStats: "+59% Enhanced Damage\n" +
          "9% Life stolen per hit\n" +
          "35% Chance of Open Wounds\n" +
          "+10 to Strength\n" +
          "+26 to Life",
      },
      {
        name: 'Lance of Yaggai',
        type: 'Spetum',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/spears/lance-of-yaggai.jpg',
        stats: "Two-Hand Damage: 15 to 23\n" +
          "Required Level: 22\n" +
          "Required Strength: 54\n" +
          "Required Dexterity: 35\n" +
          "Durability: 28\n" +
          "Spear Class - Slow Attack Speed",
        magicStats: "Adds 1-60 Lightning Damage\n" +
          "All Resistances +15\n" +
          "40% Increased Attack Speed\n" +
          "Attacker takes damage of 8",
      },
      {
        name: 'The Tannr Gorerod',
        type: 'Pike',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/spears/spire-of-honor-the-tannr-gorerod.jpg',
        stats: "Two-Hand Damage: (25-28) to (113-126)\n" +
          "Required Level: 27\n" +
          "Required Strength: 60\n" +
          "Required Dexterity: 45\n" +
          "Durability: 25\n" +
          "Spear Class - Very Slow Attack Speed",
        magicStats: "+80-100% Enhanced Damage\n" +
          "Adds 23-54 Fire Damage\n" +
          "+60 to Attack Rating\n" +
          "Fire Resist +15%\n" +
          "15% to Maximum Fire Resist\n" +
          "+30 to Life\n" +
          "+3 to Light Radius",
      },
      {
        name: 'The Impaler',
        type: 'War Spear',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/the-impaler.jpg',
        stats: "Two-Hand Damage: (24-27) to (88-99)\n" +
          "Required Level: 31\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 25\n" +
          "Durability: 30\n" +
          "Spear Class - Normal Attack Speed",
        magicStats: "+140-170% Enhanced Damage\n" +
          "40% Chance Of Open Wounds\n" +
          "+20% Increased Attack Speed\n" +
          "Ignore Target's Defense\n" +
          "+150 to Attack Rating\n" +
          "Prevent Monster Heal\n" +
          "+5 to Impale (Amazon Only)\n" +
          "+3 to Power Strike (Amazon Only)",
      },
      {
        name: 'Kelpie Snare',
        type: 'Fuscina',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/kelpie-snare-razortine.jpg',
        stats: "Two-Hand Damage: (75-83) to (138-153)\n" +
          "Required Level: 33\n" +
          "Required Strength: 77\n" +
          "Required Dexterity: 25\n" +
          "Durability: 35\n" +
          "Spear Class - Slow Attack Speed",
        magicStats: "+140-180% Enhanced Damage\n" +
          "Adds 30-50 Damage\n" +
          "Slows Target By 75%\n" +
          "+1-123 to Life (+1.25 Per Character Level)\n" +
          "Fire Resist +50%\n" +
          "+10 to Strength",
      },
      {
        name: 'Soulfeast Tine',
        type: 'War Fork',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/soulfeast-tine.jpg',
        stats: "Two-Hand Damage: (40-46) to (100-116)\n" +
          "Required Level: 35\n" +
          "Required Strength: 64\n" +
          "Required Dexterity: 76\n" +
          "Durability: 43\n" +
          "Spear Class - Fast Attack Speed",
        magicStats: "+150-190% Enhanced Damage\n" +
          "+150-250 to Attack Rating\n" +
          "Requirements -20%\n" +
          "7% Life Stolen Per Hit\n" +
          "7% Mana Stolen Per Hit\n" +
          "20% Stamina Drain",
      },
      {
        name: 'Hone Sundan',
        type: 'Yari',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/hone-sundan.jpg',
        stats: "Two-Hand Damage: (95-107) to (193-217)\n" +
          "Required Level: 37\n" +
          "Required Strength: 101\n" +
          "Durability: 28\n" +
          "Spear Class - Slow Attack Speed",
        magicStats: "+160-200% Enhanced Damage\n" +
          "Adds 20-40 Damage\n" +
          "45% Chance of Crushing Blow\n" +
          "Repairs 1 Durability In 10 Seconds\n" +
          "Socketed (3)",
      },
      {
        name: 'Spire of Honor',
        type: 'Lance',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/spire-of-honor-the-tannr-gorerod.jpg',
        stats: "Two-Hand Damage: (87-101) to (325-382)\n" +
          "Required Level: 39\n" +
          "Required Strength: 110\n" +
          "Required Dexterity: 88\n" +
          "Durability: 25\n" +
          "Spear Class - Very Slow Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Adds 20-40 Damage\n" +
          "+ (1.5 Per Character Level) 1-148 % Damage to Demons (Based On Character Level)\n" +
          "20% Faster Hit Recovery\n" +
          "Replenish Life +20\n" +
          "+25% Bonus to Attack Rating\n" +
          "+25% Enhanced Defense\n" +
          "+3 to Combat Skills (Paladin Only)\n" +
          "+3 to Light Radius",
      },
      {
        name: 'Arioc\'s Needle',
        type: 'Hyperion Spear',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/spears/arioc\'s-needle.jpg',
        stats: "Two-Hand Damage: (98-115) to (333-392)\n" +
          "Required Level: 81\n" +
          "Required Strength: 155\n" +
          "Required Dexterity: 120\n" +
          "Durability: 30\n" +
          "Spear Class - Normal Attack Speed",
        magicStats: "+180-230% Enhanced Damage\n" +
          "50% Deadly Strike\n" +
          "+394 Poison Damage Over 10 Seconds\n" +
          "+30% Increased Attack Speed\n" +
          "+2-4 to All Skills\n" +
          "Ignore Target's Defense",
      },
      {
        name: 'Viperfork',
        type: 'Manacatcher',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/spears/viperfork.jpg',
        stats: "Two-Hand Damage: (121-142) to (266-312)\n" +
          "Required Level: 71\n" +
          "Required Strength: 132\n" +
          "Required Dexterity: 134\n" +
          "Durability: 28\n" +
          "Spear Class - Fast Attack Speed",
        magicStats: "+190-240% Enhanced Damage\n" +
          "+200-250 to Attack Rating\n" +
          "+50% Increased Attack Speed\n" +
          "+325 Poison Damage Over 10 Seconds\n" +
          "Poison Resist +30-50%\n" +
          "15% Chance to Cast Level 9 Poison Explosion On Striking",
      },
      {
        name: 'Steel Pillar',
        type: 'War Pike',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/spears/steel-pillar.jpg',
        stats: "Two-Hand Damage: (102-118) to (551-640)\n" +
          "Required Level: 69\n" +
          "Required Strength: 165\n" +
          "Required Dexterity: 106\n" +
          "Spear Class - Very Slow Attack Speed",
        magicStats: "+210-260% Enhanced Damage\n" +
          "25% Chance of Crushing Blow\n" +
          "-20% Target Defense\n" +
          "+25% Increased Attack Speed\n" +
          "+50-80% Enhanced Defense\n" +
          "Indestructible",
      },
      {
        name: 'Lycander\'s Flank',
        type: 'Ceremonial Pike',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/lycander\'s-flank.jpg',
        stats: "Two-Hand Damage: (130-151) to (305-353)\n" +
          "Required Level: 42\n" +
          "Required Strength: 115\n" +
          "Required Dexterity: 98\n" +
          "Durability: 25\n" +
          "Spear Class - Normal Attack Speed\n" +
          "(Amazon Only)",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Adds 25-50 Damage\n" +
          "+2 to Amazon Skill Levels\n" +
          "+30% Increased Attack Speed\n" +
          "5-9% Life Stolen Per Hit\n" +
          "+20 to Strength\n" +
          "+20 to Vitality\n" +
          "+20% Enhanced Defense\n" +
          "+2 to Javelin and Spear Skills (Amazon Only)",
        hero: Hero.AMAZON
      },
      {
        name: 'Stoneraven',
        type: 'Matriarchal Spear',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/spears/stoneraven.jpg',
        stats: "Two-Hand Damage: (214-247) to (316-361)\n" +
          "Required Level: 64\n" +
          "Required Strength: 114\n" +
          "Required Dexterity: 142\n" +
          "Durability: 28\n" +
          "Spear Class - Slow Attack Speed\n" +
          "(Amazon Only)",
        magicStats: "+230-280% Enhanced Damage\n" +
          "Adds 101-187 Magic Damage\n" +
          "+400-600 Defense\n" +
          "All Resistances +30-50\n" +
          "+1-3 to Javelin and Spear Skills (Amazon Only)",
        hero: Hero.AMAZON
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.STAFF, items: [
      {
        name: 'Bane Ash',
        type: 'Short Staff',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/staves/bane-ash.jpg',
        stats: "Two-Hand Damage: 1 to (7-8)\n" +
          "Required Level: 5\n" +
          "Durability: 20\n" +
          "Staff Class - Fast Attack Speed",
        magicStats: "+50-60% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "20% Increased Attack Speed\n" +
          "+30 to Mana\n" +
          "Fire Resist +50%\n" +
          "Adds 4-6 Fire Damage\n" +
          "+5 to Fire Bolt (Sorceress Only)\n" +
          "+2 to Warmth (Sorceress Only)",
      },
      {
        name: 'Serpent Lord',
        type: 'Long Staff',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/staves/serpent-lord.jpg',
        stats: "Two-Hand Damage: 2 to (10-11)\n" +
          "Required Level: 9\n" +
          "Durability: 30\n" +
          "Staff Class -Normal Attack Speed",
        magicStats: "+30-40% Enhanced Damage (varies)\n" +
          "+50% Damage to Undead\n" +
          "+12 Poison Damage Over 3 Seconds\n" +
          "100% Mana Stolen Per Hit\n" +
          "-50% Target Defense\n" +
          "+10 to Mana\n" +
          "Poison Resist +50%\n" +
          "-1 to Light Radius",
      },
      {
        name: 'Spire of Lazarus',
        type: 'Gnarled Staff',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/staves/spire-of-lazarus-chromatic-ire-ondal\'s-wisdom.jpg',
        stats: "Two-Hand Damage: 4 to 12\n" +
          "Required Level: 18\n" +
          "Durability: 35\n" +
          "Staff class - Slow Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "Adds 1-28 Lightning Damage\n" +
          "+1 to Sorceress Skill Levels\n" +
          "+2 to Lightning (Sorceress Only)\n" +
          "+1 to Chain Lightning (Sorceress Only)\n" +
          "+3 to Static Field (Sorceress Only)\n" +
          "Regenerate Mana 43%\n" +
          "+15 to Energy\n" +
          "Damage Reduced By 5\n" +
          "Lightning Resist +75%",
      },
      {
        name: 'The Salamander',
        type: 'Battle Staff',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/staves/the-salamander.jpg',
        stats: "Two-Hand Damage: 6 to 13\n" +
          "Required Level: 21\n" +
          "Durability: 40\n" +
          "Staff class - Normal Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "Adds 15-32 Fire Damage\n" +
          "Fire Resist +30%\n" +
          "+2 to Fire Skills\n" +
          "+3 to Warmth (Sorceress Only)\n" +
          "+2 to Fire Ball (Sorceress Only)\n" +
          "+1 to Fire Wall (Sorceress Only)",
      },
      {
        name: 'The Iron Jang Bong',
        type: 'War Staff',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/staves/the-iron-jang-bong.jpg',
        stats: "Two-Hand Damage: 25 to 56\n" +
          "Required Level: 28\n" +
          "Durability: 50\n" +
          "Staff class - Very Slow Attack Speed",
        magicStats: "+100% Enhanced Damage\n" +
          "+50% Damage to Undead\n" +
          "50% bonus to Attack Rating\n" +
          "20% Faster Cast Rate\n" +
          "+2 to Sorceress Skill Levels\n" +
          "+3 to Frost Nova (Sorceress Only)\n" +
          "+2 to Blaze (Sorceress Only)\n" +
          "+2 to Nova (Sorceress Only)\n" +
          "+30 Defense",
      },
      {
        name: 'Razorswitch',
        type: 'Jo Staff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/razorswitch.jpg',
        stats: "Two-Hand Damage: 6 to 21\n" +
          "Durability: 20 of 20\n" +
          "Required Strength: 25\n" +
          "Required Level: 28\n" +
          "Staff Class - Fast Attack Speed",
        magicStats: "+1 to All Skills\n" +
          "+30% Faster Cast Rate\n" +
          "+80 to Life\n" +
          "+175 to Mana\n" +
          "All Resistances + 50\n" +
          "Magic Damage Reduced by 15\n" +
          "Attacker Takes Damage of 15\n" +
          "+50% Damage to Undead",
      },
      {
        name: 'Ribcracker',
        type: 'Quarterstaff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/ribcracker.jpg',
        stats: "Two-Hand Damage: (54-62) to (143-169)\n" +
          "Required Level: 31\n" +
          "Required Strength: 25\n" +
          "Durability: 130\n" +
          "Staff class - Normal Attack Speed",
        magicStats: "+200-300% Enhanced Damage\n" +
          "Adds 30-65 Damage\n" +
          "+50% Damage to Undead\n" +
          "50% Chance Of Crushing Blow\n" +
          "50% Increased Attack Speed\n" +
          "50% Faster Hit Recovery\n" +
          "+100% Enhanced Defense\n" +
          "+100 Defense\n" +
          "+15 to Dexterity",
      },
      {
        name: 'Chromatic Ire',
        type: 'Cedar Staff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/spire-of-lazarus-chromatic-ire-ondal\'s-wisdom.jpg',
        stats: "Two-Hand Damage: 11 to 32\n" +
          "Required Level: 35\n" +
          "Required Strength: 25\n" +
          "Durability: 35\n" +
          "Staff class - Slow Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "20% Faster Cast Rate\n" +
          "+3 to Sorceress Skill Levels\n" +
          "Increase Maximum Life 20-25%\n" +
          "All Resistances +20-40\n" +
          "Attacker Takes Lightning Of 20\n" +
          "+1 to Cold Mastery (Sorceress Only)\n" +
          "+1 to Lightning Mastery (Sorceress Only)\n" +
          "+1 to Fire Mastery (Sorceress Only)",
      },
      {
        name: 'Warpspear',
        type: 'Gothic Staff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/warpspear.jpg',
        stats: "Two-Hand Damage: 14 to 34\n" +
          "Required Level: 39\n" +
          "Required Strength: 25\n" +
          "Durability: 40\n" +
          "Staff class - Normal Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "Ignore Target's Defense\n" +
          "+250 Defense vs. Missiles\n" +
          "+3 to Sorceress Skill Levels\n" +
          "+3 to Energy Shield (Sorceress Only)\n" +
          "+3 to Telekinesis (Sorceress Only)\n" +
          "+3 to Teleport (Sorceress Only)",
      },
      {
        name: 'Skull Collector',
        type: 'Rune Staff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/skull-collector.jpg',
        stats: "Two-Hand Damage: 24 to 58\n" +
          "Required Level: 41\n" +
          "Required Strength: 25\n" +
          "Durability: 50\n" +
          "Staff class - Very Slow Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "+20 to Mana After Each Kill\n" +
          "Increase Maximum Mana 20%\n" +
          "+ 1-99% Better Chance Of Getting Magic Items(+1 Per Character Level)\n" +
          "+2 to All Skills",
      },
      {
        name: 'Ondal\'s Wisdom',
        type: 'Elder Staff',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/staves/spire-of-lazarus-chromatic-ire-ondal\'s-wisdom.jpg',
        stats: "Two-Hand Damage: 80 to 93\n" +
          "Required Level: 66\n" +
          "Required Strength: 44\n" +
          "Required Dexterity: 37\n" +
          "Durability: 35\n" +
          "Staff class - Normal Attack Speed",
        magicStats: "+2-4 to All Skills\n" +
          "+45% Faster Cast Rate\n" +
          "+450-550 Defense\n" +
          "+40-50 to Energy\n" +
          "Magic Damage Reduced by 5-8\n" +
          "+5% to Experience Gained\n" +
          "+50% Damage to Undead",
      },
      {
        name: 'Mang Song\'s Lesson',
        type: 'Archon Staff',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/staves/mang-song\'s-lesson.jpg',
        stats: "Two-Hand Damage: 83 to 99\n" +
          "Required Level: 82\n" +
          "Required Strength: 34\n" +
          "Durability: 26\n" +
          "Staff class - Slow Attack Speed",
        magicStats: "+5 to All Skills\n" +
          "+30% Faster Cast Rate\n" +
          "-(7-15)% to Enemy Lightning Resistance\n" +
          "-(7-15)% to Enemy Cold Resistance\n" +
          "-(7-15)% to Enemy Fire Resistance\n" +
          "Regenerate Mana 10%\n" +
          "+50% Damage to Undead",
      },
      {
        name: 'Eschuta\'s Temper',
        type: 'Eldrich Orb',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/staves/eschuta\'s-temper.jpg',
        stats: "One-Hand Damage: 18 to 50\n" +
          "Required Level: 72\n" +
          "Durability: 30\n" +
          "Staff Class - Fast Attack Speed",
        magicStats: "+1-3 to Sorceress Skill Levels\n" +
          "+40% Faster Cast Rate\n" +
          "+10-20% to Fire Skill Damage\n" +
          "+10-20% to Lightning Skill Damage\n" +
          "+20-30 to Energy",
        hero: Hero.SORCERESS
      },
      {
        name: 'The Oculus',
        type: 'Swirling Crystal',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/death\'s-fathom-the-oculus.jpg',
        stats: "One-Hand Damage: 18 to 42\n" +
          "Required Level: 42\n" +
          "Durability: 50\n" +
          "Staff Class - Slow Attack Speed",
        magicStats: "+3 to Sorceress Skill Levels\n" +
          "+5 to Mana After Each Kill\n" +
          "All Resistances +20\n" +
          "25% Chance to Cast Level 1 Teleport When Struck\n" +
          "+30% Faster Cast Rate\n" +
          "+20 to Vitality\n" +
          "+20 to Energy\n" +
          "+20% Enhanced Defense\n" +
          "50% Better Chance Of Getting Magic Items",
        hero: Hero.SORCERESS
      },
      {
        name: 'Death\'s Fathom',
        type: 'Dimensional Shard',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/staves/death\'s-fathom-the-oculus.jpg',
        stats: "One-Hand Damage: 30 to 53\n" +
          "Required Level: 73\n" +
          "Durability: 50\n" +
          "Staff Class - Slow Attack Speed",
        magicStats: "+3 to Sorceress Skill Levels\n" +
          "+20% Faster Cast Rate\n" +
          "+15-30% to Cold Skill Damage\n" +
          "Lightning Resist +25-40%\n" +
          "Fire Resist +25-40%",
        hero: Hero.SORCERESS
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.SWORD, items: [
      {
        name: 'Rixot\'s Keen',
        type: 'Short Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/rixot\'s-keen.jpg',
        stats: "One-Hand Damage: 9 to 14\n" +
          "Required Level: 2\n" +
          "Durability: 24\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+100% Enhanced Damage\n" +
          "+5 to Minimum Damage\n" +
          "25% Chance of Crushing Blow\n" +
          "20% Bonus to Attack Rating\n" +
          "+25 Defense\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Blood Crescent',
        type: 'Scimtar',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/blood-crescent-coldsteel-eye.jpg',
        stats: "One-Hand Damage: 3 to (9-10)\n" +
          "Required Level: 7\n" +
          "Required Dexterity: 21\n" +
          "Durability: 22\n" +
          "Sword Class - Very Fast Attack Speed",
        magicStats: "+60-80% Enhanced Damage\n" +
          "33% Chance Of Open Wounds\n" +
          "15% Increased Attack Speed\n" +
          "15% Life Stolen Per Hit\n" +
          "All Resistances +15\n" +
          "+15 to Life\n" +
          "+4 to Light Radius",
      },
      {
        name: 'Skewer of Krintiz',
        type: 'Sabre',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/skewer-of-krintiz.jpg',
        stats: "One-Hand Damage: 7 to 19\n" +
          "Required Level: 10\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 25\n" +
          "Durability: 32\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+50% Enhanced Damage\n" +
          "Adds 3-7 Damage\n" +
          "Ignore Target's Defense\n" +
          "7% Mana Stolen Per Hit\n" +
          "+10 to Dexterity\n" +
          "+10 to Strength",
      },
      {
        name: 'Gleamscythe',
        type: 'Falchion',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/gleamscythe.jpg',
        stats: "One-Hand Damage: (14-18) to (27-34)\n" +
          "Required Level: 13\n" +
          "Required Strength: 33\n" +
          "Durability: 32\n" +
          "Sword Class - Slow Attack Speed",
        magicStats: "+60-100% Enhanced Damage\n" +
          "Adds 3-5 Cold Damage - 2 Second Duration\n" +
          "20% Increased Attack Speed\n" +
          "+20 Defense\n" +
          "+30 to Mana\n" +
          "+3 to Light Radius",
      },
      {
        name: 'Griswold\'s Edge',
        type: 'Broad Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/griswold\'s-edge.jpg',
        stats: "One-Hand Damage: (12-15) to (25-30)\n" +
          "Required Level: 17\n" +
          "Required Strength: 48\n" +
          "Durability: 32\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+80-120% Enhanced Damage\n" +
          "Adds (10-12) to (15-25) Fire Damage\n" +
          "10% Increased Attack Speed\n" +
          "+100 to Attack Rating\n" +
          "+12 to Strength\n" +
          "Knockback",
      },
      {
        name: 'Hellplague',
        type: 'Long Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/hellplague.jpg',
        stats: "One-Hand Damage: 5 to (32-34)\n" +
          "Required Level: 22\n" +
          "Required Strength: 55\n" +
          "Required Dexterity: 39\n" +
          "Durability: 44\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+70-80% Enhanced Damage\n" +
          "+2 to Fire Skills\n" +
          "Adds 25-75 Fire Damage\n" +
          "Adds 28-56 Poison Damage Over 6 Seconds\n" +
          "5% Life Stolen Per Hit\n" +
          "5% Mana Stolen Per Hit",
      },
      {
        name: 'Culwen\'s Point',
        type: 'War Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/culwen\'s-point.jpg',
        stats: "One-Hand Damage: (13-14) to (34-36)\n" +
          "Required Level: 29\n" +
          "Required Strength: 71\n" +
          "Required Dexterity: 45\n" +
          "Durability: 44\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+70-80% Enhanced Damage\n" +
          "+1 to All skills\n" +
          "Poison Length Reduced By 50%\n" +
          "20% Increased Attack Speed\n" +
          "20% Faster Hit Recovery\n" +
          "+60 to Attack Rating",
      },
      {
        name: 'Shadowfang',
        type: 'Two-Handed Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/crainte-vomir-shadowfang.jpg',
        stats: "One-Hand Damage: 4 to 18\n" +
          "Two-Hand Damage: 16 to 34\n" +
          "Required Level: 12\n" +
          "Required Strength: 35\n" +
          "Required Dexterity: 27\n" +
          "Durability: 44\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+100% Enhanced Damage\n" +
          "Adds 10-30 Cold Damage, Cold Duration: 6 seconds\n" +
          "9% Mana Stolen Per Hit\n" +
          "9% Life Stolen Per Hit\n" +
          "Cold Resist 20%\n" +
          "-2 to Light Radius",
      },
      {
        name: 'Soulflay',
        type: 'Claymore',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/soulflay.jpg',
        stats: "One-Hand Damage: (8-10) to (20-24)\n" +
          "Two-Hand Damage: (22-26) to (51-60)\n" +
          "Required Level: 19\n" +
          "Required Strength: 47\n" +
          "Durability: 50\n" +
          "Sword Class - Normal Attack Speed",
        magicStats: "+70-100% Enhanced Damage\n" +
          "+10% Increased Attack Speed\n" +
          "4% Life stolen per hit\n" +
          "4-10% Mana stolen per hit\n" +
          "All Resistances +5",
      },
      {
        name: 'Kinemil\'s Awl',
        type: 'Giant Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/kinemil\'s-awl.jpg',
        stats: "One-Hand Damage: (5-6) to (28-32)\n" +
          "Two-Hand Damage: (16-18) to (50-56)\n" +
          "Required Level: 23\n" +
          "Required Strength: 56\n" +
          "Required Dexterity: 34\n" +
          "Durability: 50\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+80-100% Enhanced Damage\n" +
          "+100-150 to Attack Rating\n" +
          "Adds 6-(20-40) Fire Damage\n" +
          "+20 to Mana\n" +
          "+6 to Holy Fire (Paladin Only)",
      },
      {
        name: 'Blacktongue',
        type: 'Bastard Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/blacktongue-cloudcrack.jpg',
        stats: "One-Hand Damage: (10-11) to (28-30)\n" +
          "Two-Hand Damage: (30-32) to (42-44)\n" +
          "Required Level: 26\n" +
          "Required Strength: 62\n" +
          "Durability: 40\n" +
          "Sword Class - Normal Attack Speed",
        magicStats: "+50-60% Enhanced Damage\n" +
          "+113 Poison Damage Over 6 Seconds\n" +
          "Prevent Monster Heal\n" +
          "+50 to Attack Rating\n" +
          "Poison Resist +50%",
      },
      {
        name: 'Ripsaw',
        type: 'Flamberge',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/ripsaw.jpg',
        stats: "One-Hand Damage: (16-18) to (42-45)\n" +
          "Two-Hand Damage: (23-26) to (61-67)\n" +
          "Required Level: 26\n" +
          "Required Strength: 70\n" +
          "Required Dexterity: 49\n" +
          "Durability: 50\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+80-100% Enhanced Damage\n" +
          "+15 to Maximum Damage\n" +
          "80% Chance of Open Wounds\n" +
          "6% Mana stolen per hit",
      },
      {
        name: 'The Patriarch',
        type: 'Great Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/the-patriarch.jpg',
        stats: "One-Hand Damage: (24-26) to (40-44)\n" +
          "Two-Hand Damage: (50-55) to (84-92)\n" +
          "Required Level: 29\n" +
          "Required Strength: 100\n" +
          "Required Dexterity: 60\n" +
          "Durability: 50\n" +
          "Sword Class - Normal Attack Speed",
        magicStats: "+100-120% Enhanced Damage\n" +
          "Hit Blinds Target\n" +
          "+10 to Strength\n" +
          "100% Extra Gold From Monsters\n" +
          "Magic Damage Reduced By 3\n" +
          "Damage Reduced By 3",
      },
      {
        name: 'Bloodletter',
        type: 'Gladius',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/bloodletter.jpg',
        stats: "One-Hand Damage: 31 to 97\n" +
          "Required Level: 30\n" +
          "Required Strength: 25\n" +
          "Durability: 54\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+140% Enhanced Damage\n" +
          "Adds 12-45 Damage\n" +
          "+90 to Attack Rating\n" +
          "20% Increased Attack Speed\n" +
          "10% Slower Stamina Drain\n" +
          "8% Life Stolen Per Hit\n" +
          "+1-3 to Whirlwind (Barbarian Only)\n" +
          "+2-4 to Sword Mastery (Barbarian Only)",
      },
      {
        name: 'Coldsteel Eye',
        type: 'Cutlass',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/blood-crescent-coldsteel-eye.jpg',
        stats: "One-Hand Damage: (24-28) to (63-73)\n" +
          "Required Level: 31\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 52\n" +
          "Durability: 72\n" +
          "Sword Class - Very Fast Attack Speed",
        magicStats: "+200-250% Enhanced Damage\n" +
          "50% Chance Of Deadly Strike\n" +
          "20% Increased Attack Speed\n" +
          "6% Mana Stolen Per Hit\n" +
          "Slows Target By 30%\n" +
          "Hit Blinds Target",
      },
      {
        name: 'Hexfire',
        type: 'Shamshir',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/hexfire.jpg',
        stats: "One-Hand Damage: (59-61) to (97-102)\n" +
          "Required Level: 33\n" +
          "Required Strength: 58\n" +
          "Required Dexterity: 58\n" +
          "Durability: 32\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+140-160% Enhanced Damage\n" +
          "Adds 35-40 Damage\n" +
          "+3 to Fire Skills\n" +
          "Level 6 Hydra (36 Charges)\n" +
          "Ignore Target's Defense\n" +
          "Fire Resist +25%\n" +
          "10% to Maximum Fire Resist",
      },
      {
        name: 'Blade of Ali Baba',
        type: 'Tulwar',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/blade-of-ali-baba.jpg',
        stats: "One-Hand Damage: (25-35) to (56-77)\n" +
          "Required Level: 35\n" +
          "Required Strength: 70\n" +
          "Required Dexterity: 42\n" +
          "Durability: 32\n" +
          "Sword Class – Slow Attack Speed",
        magicStats: "+60-120% Enhanced Damage\n" +
          "+ (2.5 Per Character Level) 2-247 % Extra Gold From Monsters (Based On Character Level)\n" +
          "+ (1 Per Character Level) 1-99 % Better Chance of Getting Magic Items (Based On Character Level)\n" +
          "+15 to Mana\n" +
          "+5-15 to Dexterity\n" +
          "Socketed (2)",
      },
      {
        name: 'Ginther\'s Rift',
        type: 'Dimensional Blade',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/ginther\'s-rift.jpg',
        stats: "One-Hand Damage: (26-32) to (70-87)\n" +
          "Required Level: 37\n" +
          "Required Strength: 85\n" +
          "Required Dexterity: 60\n" +
          "Durability: 60\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+100-150% Enhanced Damage\n" +
          "Adds 50-120 Magic Damage\n" +
          "30% Increased Attack Speed\n" +
          "Magic Damage Reduced By 7-12\n" +
          "Repairs 1 Durability in 5 Seconds",
      },
      {
        name: 'Headstriker',
        type: 'Battle Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/headstriker.jpg',
        stats: "One-Hand Damage: 40 to (86-184)\n" +
          "Required Level: 39\n" +
          "Required Strength: 92\n" +
          "Required Dexterity: 43\n" +
          "Durability: 32\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "150% Enhanced Damage\n" +
          "+ (1 Per Character Level) 1-99 to Maximum Damage (Based On Character Level)\n" +
          "(1.5 Per Character Level) 1-148 % Deadly Strike (Based On Character Level)\n" +
          "Prevent Monster Heal\n" +
          "+15 to Strength",
      },
      {
        name: 'Plague Bearer',
        type: 'Rune Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/plague-bearer.jpg',
        stats: "One-Hand Damage: 35 to 150\n" +
          "Required Level: 41\n" +
          "Required Strength: 103\n" +
          "Required Dexterity: 79\n" +
          "Durability: 44\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "150% Enhanced Damage\n" +
          "Adds 10-45 Damage\n" +
          "+300 Poison Damage Over 8 Seconds\n" +
          "5% Chance to Cast Level 4 Poison Nova On Striking\n" +
          "Poison Resist +45%\n" +
          "+5 to Rabies (Druid Only)",
      },
      {
        name: 'The Atlantean',
        type: 'Ancient Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/the-atlantean.jpg',
        stats: "One-Hand Damage: (54-63) to (129-150)\n" +
          "Required Level: 42\n" +
          "Required Strength: 127\n" +
          "Required Dexterity: 88\n" +
          "Durability: 144\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+200-250% Enhanced Damage\n" +
          "+2 to Paladin Skill Levels\n" +
          "50% Bonus to Attack Rating\n" +
          "+75 Defense\n" +
          "+8 to Vitality\n" +
          "+12 to Dexterity\n" +
          "+16 to Strength",
      },
      {
        name: 'Crainte Vomir',
        type: 'Espandon',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/crainte-vomir-shadowfang.jpg',
        stats: "One-Hand Damage: (20-24) to (67-78)\n" +
          "Two-Hand Damage: (46-54) to (104-120)\n" +
          "Required Level: 42\n" +
          "Required Strength: 73\n" +
          "Required Dexterity: 61\n" +
          "Durability: 44\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+160-200% Enhanced Damage\n" +
          "50% Increased Attack Speed\n" +
          "Slows Target By 35%\n" +
          "-70 to Monster Defense Per Hit\n" +
          "20% Faster Run/Walk\n" +
          "Damage Reduced By 10%",
      },
      {
        name: 'Bing Sz Wang',
        type: 'Dacian Falx',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/bing-sz-wang.jpg',
        stats: "One-Hand Damage: (29-33) to (69-78)\n" +
          "Two-Hand Damage: (59-67) to (140-158)\n" +
          "Required Level: 43\n" +
          "Required Strength: 64\n" +
          "Required Dexterity: 14\n" +
          "Durability: 50\n" +
          "Sword Class - Normal Attack Speed",
        magicStats: "+130-160% Enhanced Damage\n" +
          "Adds 50-140 Cold Damage - 3 Second Duration\n" +
          "5% Chance to Cast Level 3 Frozen Orb On Striking\n" +
          "Freezes Target +2\n" +
          "Requirements -30%\n" +
          "+20 to Strength",
      },
      {
        name: 'The Vile Husk',
        type: 'Tusk Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/the-vile-husk.jpg',
        stats: "One-Hand Damage: (25-30) to (92-111)\n" +
          "Two-Hand Damage: (47-57) to (145-174)\n" +
          "Required Level: 44\n" +
          "Required Strength: 104\n" +
          "Required Dexterity: 71\n" +
          "Durability: 50\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "+ (7.5 Per Character Level) 7-742% Damage to Undead (Based On Character Level)\n" +
          "+ (10 Per Character Level) 10-990 to Attack Rating against Undead (Based On Character Level)\n" +
          "+250 Poison Damage Over 6 Seconds\n" +
          "6% Chance to Cast Level 1 Amplify Damage On Striking\n" +
          "Poison Resist +50%",
      },
      {
        name: 'Cloudcrack',
        type: 'Gothic Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/blacktongue-cloudcrack.jpg',
        stats: "One-Hand Damage: (35-42) to (100-120)\n" +
          "Two-Hand Damage: (97-117) to (150-180)\n" +
          "Required Level: 45\n" +
          "Required Strength: 113\n" +
          "Required Dexterity: 20\n" +
          "Durability: 40\n" +
          "Sword Class - Normal Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "6% Chance to Cast Level 7 Fist of the Heavens On Striking\n" +
          "Adds 1-240 Lightning Damage\n" +
          "10% to Maximum Lightning Resist\n" +
          "+30 Defense\n" +
          "Attacker Takes Lightning Damage Of 15\n" +
          "+2 to Defensive Auras (Paladin Only)\n" +
          "+2 to Offensive Auras (Paladin Only)\n" +
          "+2 to Light Radius",
      },
      {
        name: 'Todesfaelle Flamme',
        type: 'Zweihander',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/todesfaelle-flamme.jpg',
        stats: "One-Hand Damage: (41-49) to (77-91)\n" +
          "Two-Hand Damage: (63-75) to (118-140)\n" +
          "Durability: 50\n" +
          "Required Level: 46\n" +
          "Required Strength: 125\n" +
          "Required Dexterity: 94\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+120-160% Enhanced Damage\n" +
          "Adds 50-200 Fire Damage\n" +
          "10% Chance to Cast Level 6 Fire Ball On Attack\n" +
          "Level 10 Fire Wall (20 Charges)\n" +
          "Level 10 Enchant (45 Charges)\n" +
          "+10 Fire Absorb\n" +
          "Fire Resist +40%",
      },
      {
        name: 'Swordguard',
        type: 'Executioner Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/swordguard.jpg',
        stats: "One-Hand Damage: (64-67) to (108-112)\n" +
          "Two-Hand Damage: (126-131) to (216-224)\n" +
          "Required Level: 48\n" +
          "Required Strength: 85\n" +
          "Required Dexterity: 55\n" +
          "Durability: 50\n" +
          "Sword Class - Normal Attack Speed",
        magicStats: "+170-180% Enhanced Damage\n" +
          "+ (5 Per Character Level) 5-495 Defense (Based On Character Level)\n" +
          "30% Damage Taken Goes to Mana\n" +
          "Requirements -50%\n" +
          "All Resistances +10-20\n" +
          "20% Faster Hit Recovery\n" +
          "20% Increased Chance Of Blocking\n" +
          "+100 Defense vs. Missiles\n" +
          "+200 Defense vs. Melee",
      },
      {
        name: 'Djinn Slayer',
        type: 'Ataghan',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/djinn-slayer.jpg',
        stats: "One-Hand Damage: (75-88) to (133-156)\n" +
          "Required Level: 65\n" +
          "Required Strength: 138\n" +
          "Required Dexterity: 95\n" +
          "Durability: 22\n" +
          "Sword Class - Very Fast Attack Speed",
        magicStats: "+190-240% Enhanced Damage\n" +
          "+100-150% Damage to Demons\n" +
          "Adds 250-500 Fire Damage\n" +
          "3-6% Mana Stolen Per Hit\n" +
          "+3-7 Lightning Absorb\n" +
          "+200-300 to Attack Rating Against Demons\n" +
          "Socketed (1-2)",
      },
      {
        name: 'Bloodmoon',
        type: 'Elegant Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/bloodmoon.jpg',
        stats: "One-Hand Damage: (102-118) to (139-162)\n" +
          "Required Level: 61\n" +
          "Required Strength: 109\n" +
          "Required Dexterity: 122\n" +
          "Durability: 32\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+210-260% Enhanced Damage\n" +
          "10-15% Life Stolen Per Hit\n" +
          "50% Chance of Open Wounds\n" +
          "+7-13 Life After Each Kill\n" +
          "Level 15 Blood Golem (9 charges)",
      },
      {
        name: 'Lightsabre',
        type: 'Phase Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/lightsabre.jpg',
        stats: "One-Hand Damage: (87-103) to (117-135)\n" +
          "Required Level: 58\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 136\n" +
          "Sword Class - Very Fast Attack Speed",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Adds 10-30 Damage\n" +
          "Adds 60-120 Magic Damage\n" +
          "Adds 1-200 Lightning Damage\n" +
          "5-7% Mana Stolen Per Hit\n" +
          "5% Chance to Cast Level 14-20 Chain Lightning On Attack\n" +
          "20% Increased Attack Speed\n" +
          "Ignore Target's Defense\n" +
          "Lightning Absorb 25%\n" +
          "+7 to Light Radius",
      },
      {
        name: 'Azurewrath',
        type: 'Phase Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/azurewrath.jpg',
        stats: "One-Hand Damage: (102-114) to (115-129)\n" +
          "Required Level: 85\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 136\n" +
          "Sword Class - Very Fast Attack Speed",
        magicStats: "+230-270% Enhanced Damage\n" +
          "+30% Increased Attack Speed\n" +
          "Adds 250-500 Magic Damage\n" +
          "Adds 250-500 Cold Damage, 10 sec. Duration\n" +
          "+1 to All Skills\n" +
          "+5-10 to All Attributes\n" +
          "Level 10-13 Sanctuary Aura When Equipped\n" +
          "Indestructible\n" +
          "+3 to Light Radius",
      },
      {
        name: 'Frostwind',
        type: 'Cryptic Sword',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/frostwind.jpg',
        stats: "One-Hand Damage: (14-16) to (215-254)\n" +
          "Required Level: 70\n" +
          "Required Strength: 99\n" +
          "Required Dexterity: 109\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+180-230% Enhanced Damage\n" +
          "Adds 237-486 Cold Damage, 6 sec. Duration\n" +
          "+7-14 to Arctic Blast\n" +
          "Freezes Target +4\n" +
          "Cold Absorb 7-15%\n" +
          "Half Freeze Duration\n" +
          "+25% Increased Attack Speed",
      },
      {
        name: 'Flamebellow',
        type: 'Balrog Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/flamebellow.jpg',
        stats: "One-Hand Damage: (40-51) to (202-255)\n" +
          "Two-Hand Damage: (148-187) to (318-401)\n" +
          "Required Level: 71\n" +
          "Required Strength: 185\n" +
          "Required Dexterity: 87\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+170-240% Enhanced Damage\n" +
          "Adds 233-482 Fire Damage\n" +
          "+3 to Fire Skills\n" +
          "+12-18 to Inferno\n" +
          "+10-20 to Strength\n" +
          "+5-10 to Vitality\n" +
          "12% Chance to Cast Level 16 Firestorm On Striking\n" +
          "Fire Absorb 20-30%",
      },
      {
        name: 'Doombringer',
        type: 'Champion Sword',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/doombringer.jpg',
        stats: "One-Hand Damage: (97-114) to (251-289)\n" +
          "Two-Hand Damage: (228-278) to (332-390)\n" +
          "Required Level: 69\n" +
          "Required Strength: 163\n" +
          "Required Dexterity: 103\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+180-250% Enhanced Damage\n" +
          "Adds 30-100 Damage\n" +
          "8% Chance to Cast Level 3 Weaken On Striking\n" +
          "40% Bonus to Attack Rating\n" +
          "Increase Maximum Life 20%\n" +
          "5-7% Life Stolen Per Hit\n" +
          "Indestructible",
      },
      {
        name: 'The Grandfather',
        type: 'Colossus Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/the-grandfather.jpg',
        stats: "One-Hand Damage: (62-87) to (164-474)\n" +
          "Two-Hand Damage: (145-203) to (289-649)\n" +
          "Required Level: 81\n" +
          "Required Strength: 189\n" +
          "Required Dexterity: 110\n" +
          "Sword Class - Fast Attack Speed",
        magicStats: "+150-250% Enhanced Damage\n" +
          "+ (2.5 Per Character Level) 2-247 to Maximum Damage (Based On Character Level)\n" +
          "+50% Bonus to Attack Rating\n" +
          "+80 to Life\n" +
          "+20 to All Attributes\n" +
          "Indestructible",
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.THROW, items: [
      {
        name: 'Deathbit',
        type: 'Battle Dart',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/throw/deathbit.jpg',
        stats: "Throw Damage: (25-30) to (55-67)\n" +
          "One-Hand Damage: (18-22) to (36-44)\n" +
          "Required Level: 44\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 52\n" +
          "Dagger Class – Fast Attack Speed\n" +
          "Max Stack (160)",
        magicStats: "+130-180% Enhanced Damage\n" +
          "40% Deadly Strike\n" +
          "+200-450 to Attack Rating\n" +
          "7-9% Life Stolen Per Hit\n" +
          "4-6% Mana Stolen Per Hit\n" +
          "Replenishes Quantity [1 in 4 sec.]",
      },
      {
        name: 'The Scalper',
        type: 'Francisca',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/throw/the-scalper-gimmershred.jpg',
        stats: "Throw Damage: (45-54) to (82-99)\n" +
          "One-Hand Damage: (27-33) to (55-66)\n" +
          "Required Level: 57\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 80\n" +
          "Axe Class – Normal Attack Speed}}\n" +
          "Max Stack (130)",
        magicStats: "+150-200% Enhanced Damage\n" +
          "33% Chance Of Open Wounds\n" +
          "+4 to Mana After Each Kill\n" +
          "20% Increased Attack Speed\n" +
          "25% Bonus to Attack Rating\n" +
          "4-6% Life Stolen Per Hit\n" +
          "Replenishes Quantity [1 in 3 sec.]",
      },
      {
        name: 'Warshrike',
        type: 'Winged Knife',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/throw/warshrike.jpg',
        stats: "Throw Damage: (69-80) to (117-136)\n" +
          "One-Hand Damage: (81-94) to (105-122)\n" +
          "Required Level: 75\n" +
          "Required Strength: 45\n" +
          "Required Dexterity: 142\n" +
          "Dagger Class – Very Fast Attack Speed\n" +
          "Max Stack: (200)",
        magicStats: "+200-250% Enhanced Damage\n" +
          "50% Deadly Strike\n" +
          "+30% Increased Attack Speed\n" +
          "Piercing Attack [50]\n" +
          "25% Chance to Cast Level 9 Nova On Striking\n" +
          "Replenishes Quantity [1 in 3 sec.]",
      },
      {
        name: 'Gimmershred',
        type: 'Flying Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/throw/the-scalper-gimmershred.jpg',
        stats: "Throw Damage: (39-46) to (171-204)\n" +
          "One-Hand Damage: (44-52) to (169-201)\n" +
          "Required Level: 70\n" +
          "Required Strength: 88\n" +
          "Required Dexterity: 108\n" +
          "Axe Class – Normal Attack Speed\n" +
          "Max Stack: (240)",
        magicStats: "+160-210% Enhanced Damage\n" +
          "Adds 218-483 Fire Damage\n" +
          "Adds 29-501 Lightning Damage\n" +
          "Adds 176-397 Cold Damage, 4 sec. Duration (Normal)\n" +
          "+30% Increased Attack Speed\n" +
          "Increased Stack Size [60]",
      },
      {
        name: 'Lacerator',
        type: 'Winged Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/throw/lacerator.jpg',
        stats: "Throw Damage: (17-21) to (150-186)\n" +
          "One-Hand Damage: (27-34) to (140-173)\n" +
          "Required Level: 68\n" +
          "Required Strength: 96\n" +
          "Required Dexterity: 122\n" +
          "Axe Class – Fast Attack Speed\n" +
          "Max Stack: (180)",
        magicStats: "+150-210% Enhanced Damage\n" +
          "+30% Increased Attack Speed\n" +
          "33% Chance of Open Wounds\n" +
          "Prevent Monster Heal\n" +
          "Hit Causes Monster to Flee 50%\n" +
          "33% Chance to Cast Level 3 Amplify Damage On Striking\n" +
          "Replenishes Quantity [1 in 4 sec.]",
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.JAVELIN, items: [
      {
        name: 'Titan\'s Revenge',
        type: 'Ceremonial Javelin',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/javelins/titan\'s-revenge.jpg',
        stats: "Throw Damage: (70-79) to (185-212)\n" +
          "One-Hand Damage: (70-79) to (137-155)\n" +
          "Required Level: 42\n" +
          "Required Strength: 25\n" +
          "Required Dexterity: 109\n" +
          "Max Stack: 140\n" +
          "Javelin Class – Very Fast Attack Speed\n" +
          "(Amazon Only)",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Adds 25-50 Damage\n" +
          "+2 to Amazon Skill Levels\n" +
          "5-9% Life Stolen Per Hit\n" +
          "+30% Faster Run/Walk\n" +
          "+20 to Strength\n" +
          "+20 to Dexterity\n" +
          "Replenishes Quantity [1 in 3 sec.]\n" +
          "Increased Stack Size [60]\n" +
          "+2 to Javelin and Spear Skills (Amazon Only)",
        hero: Hero.AMAZON
      },
      {
        name: 'Demon\'s Arch',
        type: 'Balrog Spear',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/javelins/demon\'s-arch.jpg',
        stats: "Throw Damage: (104-124) to (161-192)\n" +
          "One-Hand Damage: (85-102) to (163-195)\n" +
          "Required Level: 68\n" +
          "Required Strength: 127\n" +
          "Required Dexterity: 95\n" +
          "Javelin Class – Normal Attack Speed\n" +
          "Max Stack (80)",
        magicStats: "+160-210% Enhanced Damage\n" +
          "Adds 232-323 Fire Damage\n" +
          "Adds 23-333 Lightning Damage\n" +
          "+30% Increased Attack Speed\n" +
          "6-12% Life Stolen Per Hit\n" +
          "Replenishes Quantity [1 in 3 sec.]",
      },
      {
        name: 'Wraith Flight',
        type: 'Ghost Glaive',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/javelins/wraith-flight.jpg',
        stats: "Throw Damage: (112-130) to (317-368)\n" +
          "One-Hand Damage: (70-81) to (225-261)\n" +
          "Required Level: 76\n" +
          "Required Strength: 79\n" +
          "Required Dexterity: 127\n" +
          "Javelin Class – Slow Attack Speed",
        magicStats: "+150-190% Enhanced Damage\n" +
          "9-13% Life Stolen Per Hit\n" +
          "+15 to Mana After Each Kill\n" +
          "Replenishes Quantity [1 in 2 sec.]\n" +
          "Ethereal (Cannot Be Repaired)",
      },
      {
        name: 'Gargoyle\'s Bite',
        type: 'Winged Harpoon',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/javelins/gargoyle\'s-bite.jpg',
        stats: "Throw Damage: (30-36) to (215-254)\n" +
          "One-Hand Damage: (75-89) to (98-115)\n" +
          "Required Level: 70\n" +
          "Required Strength: 76\n" +
          "Required Dexterity: 145\n" +
          "Javelin Class – Fast Attack Speed\n" +
          "Max Stack (80)",
        magicStats: "+180-230% Enhanced Damage\n" +
          "+293 Poison Damage Over 10 Seconds\n" +
          "Level 11 Plague Javelin (60 charges)\n" +
          "9-15% Life Stolen Per Hit\n" +
          "Replenishes Quantity [1 in 3 sec.]",
      },
      {
        name: 'Thunderstroke',
        type: 'Matriarchal Javelin',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/javelins/thunderstroke.jpg',
        stats: "Throw Damage: (87-105) to (165-198)\n" +
          "One-Hand Damage: 75-90) to (135-162)\n" +
          "Required Level: 69\n" +
          "Required Strength: 107\n" +
          "Required Dexterity: 151\n" +
          "Javelin Class – Very Fast Attack Speed\n" +
          "Max Stack (80)\n" +
          "(Amazon Only)",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Adds 1-511 Lightning Damage\n" +
          "+15% Increased Attack Speed\n" +
          "-15% to Enemy Lightning Resistance\n" +
          "20% Chance to Cast Level 14 Lightning On Striking\n" +
          "+2-4 to Javelin and Spear Skills (Amazon Only)\n" +
          "+3 to Lightning Bolt (Amazon Only)",
        hero: Hero.AMAZON
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.KATAR, items: [
      {
        name: 'Bartuc\'s Cut-Throat',
        type: 'Greater Talons',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/katars/bartuc\'s-cut-throat.jpg',
        stats: "Damage: (77-88) to (137-155)\n" +
          "Required Level: 42\n" +
          "Required Strength: 79\n" +
          "Required Dexterity: 79\n" +
          "Durability: 69\n" +
          "Katar Class - Very Fast Attack Speed\n" +
          "(Assassin Only)",
        magicStats: "+150-200% Enhanced Damage\n" +
          "Adds 25-50 Damage\n" +
          "30% Faster Hit Recovery\n" +
          "20% Bonus to Attack Rating\n" +
          "5-9% Life Stolen Per Hit\n" +
          "+20 to Strength\n" +
          "+20 to Dexterity\n" +
          "+2 to Assassin Skill Levels\n" +
          "+1 to Martial Arts Skills (Assassin Only)",
        hero: Hero.ASSASSIN
      },
      {
        name: 'Jade Talon',
        type: 'Wrist Sword',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/katars/jade-talon.jpg',
        stats: "Damage: (98-115) to (130-153)\n" +
          "Required Level: 66\n" +
          "Required Strength: 105\n" +
          "Required Dexterity: 105\n" +
          "Durability: 56\n" +
          "Katar Class - Very Fast Attack Speed\n" +
          "(Assassin Only)",
        magicStats: "+190-240% Enhanced Damage\n" +
          "+1-2 to Martial Arts (Assassin Only)\n" +
          "+1-2 to Shadow Disciplines (Assassin Only)\n" +
          "+30% Faster Hit Recovery\n" +
          "10-15% Mana Stolen Per Hit\n" +
          "All Resistances +40-50",
        hero: Hero.ASSASSIN
      },
      {
        name: 'Shadow Killer',
        type: 'Battle Cestus',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/katars/shadow-killer.jpg',
        stats: "Damage: (145-172) to (170-201)\n" +
          "Required Level: 78\n" +
          "Required Strength: 100\n" +
          "Required Dexterity: 100\n" +
          "Katar Class - Very Fast Attack Speed\n" +
          "(Assassin Only)",
        magicStats: "+170-220% Enhanced Damage\n" +
          "-25% Target Defense\n" +
          "Freezes Target +2\n" +
          "+10-15 to Mana After Each Kill\n" +
          "33% Chance to Cast Level 8 Frost Nova On Striking\n" +
          "Indestructible\n" +
          "Ethereal (Cannot Be Repaired)",
        hero: Hero.ASSASSIN
      },
      {
        name: 'Firelizard\'s Talons',
        type: 'Feral Claws',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/katars/firelizard\'s-talons.jpg',
        stats: "Damage: (66-81) to (159-196)\n" +
          "Required Level: 67\n" +
          "Required Strength: 113\n" +
          "Required Dexterity: 113\n" +
          "Durability: 52\n" +
          "Katar Class - Very Fast Attack Speed\n" +
          "(Assassin Only)",
        magicStats: "+200-270% Enhanced Damage\n" +
          "Adds 236-480 Fire Damage\n" +
          "+15% Increased Attack Speed\n" +
          "+1-3 to Martial Arts (Assassin Only)\n" +
          "+1-2 to Wake of Inferno (Assassin Only)\n" +
          "+1-2 to Wake of Fire (Assassin Only)\n" +
          "Fire Resist +40-70%",
        hero: Hero.ASSASSIN
      },
    ]
  },
  {
    itemType: ItemType.WEAPONS, itemSubtype: SubType.WAND, items: [
      {
        name: 'Torch of Iro',
        type: 'Wand',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/wands/torch-of-iro.jpg',
        stats: "One-Hand Damage: 2 to 4\n" +
          "Required Level: 5\n" +
          "Durability: 15\n" +
          "Staff Class - Fast Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "Adds 5-9 Fire Damage\n" +
          "+1 to Necromancer Skill Levels\n" +
          "+10 to Energy\n" +
          "Regenerate Mana 5%\n" +
          "6% Life Stolen Per Hit\n" +
          "+3 to Light Radius",
      },
      {
        name: 'Maelstrom',
        type: 'Yew Wand',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/wands/maelstrom.jpg',
        stats: "One-Hand Damage: 2 to 8\n" +
          "Required Level: 14\n" +
          "Durability: 15\n" +
          "Staff Class - Normal Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "Adds 1-9 Lightning Damage\n" +
          "+13 to Mana\n" +
          "30% Faster Cast Rate\n" +
          "Lightning Resist +40%\n" +
          "+1-3 to Iron Maiden (Necromancer Only)\n" +
          "+1-3 to Amplify Damage (Necromancer Only)\n" +
          "+1-3 to Terror (Necromancer Only)\n" +
          "+1-3 to Corpse Explosion (Necromancer Only)",
      },
      {
        name: 'Gravenspine',
        type: 'Bone Wand',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/wands/arm-of-king-leoric-gravenspine.jpg',
        stats: "One-Hand Damage: 3 to 7\n" +
          "Required Level: 20\n" +
          "Durability: 15\n" +
          "Staff Class - Very Fast Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "+2 to Necromancer Skill Levels\n" +
          "Adds 4-8 Cold Damage, Cold Duration: 3 seconds\n" +
          "5% Mana Stolen Per Hit\n" +
          "+25-50 Mana\n" +
          "+10 to Dexterity\n" +
          "+10 to Strength",
      },
      {
        name: 'Ume\'s Lament',
        type: 'Grim Wand',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/wands/ume\'s-lament.jpg',
        stats: "One-Hand Damage: 5 to 11\n" +
          "Required Level: 28\n" +
          "Durability: 15\n" +
          "Staff Class - Fast Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "+2 to Necromancer Skill Levels\n" +
          "20% Faster Cast Rate\n" +
          "+40 to Mana\n" +
          "Hit Causes Monster to Flee 50%\n" +
          "+2 to Decrepify (Necromancer Only)\n" +
          "+3 to Terror (Necromancer Only)",
      },
      {
        name: 'Suicide Branch',
        type: 'Burnt Wand',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/wands/suicide-branch.jpg',
        stats: "One-Hand Damage: 8 to 18\n" +
          "Required Level: 33\n" +
          "Required Strength: 25\n" +
          "Durability: 15\n" +
          "Staff Class - Fast Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "+1 to All Skills\n" +
          "50% Faster Cast Rate\n" +
          "Increase Maximum Mana 10%\n" +
          "All Resistances +10\n" +
          "+40 to Life\n" +
          "Attacker Takes Damage of 25",
      },
      {
        name: 'Carin Shard',
        type: 'Petrified Wand',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/wands/carin-shard.jpg',
        stats: "One-Hand Damage: 8 to 24\n" +
          "Required Level: 35\n" +
          "Required Strength: 25\n" +
          "Durability: 15\n" +
          "Staff Class - Normal Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "+ (1.25 Per Character Level) 1-123 to Mana (Based On Character Level)\n" +
          "+ (1.25 Per Character Level) 1-123 to Life (Based On Character Level)\n" +
          "+1 to Necromancer Skill Levels\n" +
          "+2 to Summoning Skills (Necromancer Only)\n" +
          "10% Faster Cast Rate\n" +
          "30% Faster Hit Recovery\n" +
          "Replenish Life +5",
      },
      {
        name: 'Arm of King Leoric',
        type: 'Tomb Wand',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/wands/arm-of-king-leoric-gravenspine.jpg',
        stats: "One-Hand Damage: 10 to 22\n" +
          "Required Level: 36\n" +
          "Required Strength: 25\n" +
          "Durability: 15\n" +
          "Staff Class - Very Fast Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "10% Chance to Cast Level 2 Bone Prison When Struck\n" +
          "5% Chance to Cast Level 10 Bone Spirit When Struck\n" +
          "+ (1.25 Per Character Level) 1-123 to Mana (Based On Character Level)\n" +
          "10% Faster Cast Rate\n" +
          "+2 to Terror (Necromancer Only)\n" +
          "+2 to Raise Skeletal Mage (Necromancer Only)\n" +
          "+3 to Skeleton Mastery (Necromancer Only)\n" +
          "+3 to Raise Skeleton (Necromancer Only)\n" +
          "+2 to Summoning Skills (Necromancer Only)\n" +
          "+2 to Poison and Bone Spells (Necromancer Only)",
      },
      {
        name: 'Blackhand Key',
        type: 'Grave Wand',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/wands/blackhand-key.jpg',
        stats: "One-Hand Damage: 13 to 29\n" +
          "Required Level: 41\n" +
          "Required Strength: 25\n" +
          "Durability: 15\n" +
          "Staff Class - Fast Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "+2 to Necromancer Skill Levels\n" +
          "+1 to Curses (Necromancer Only)\n" +
          "20% Damage Taken Goes to Mana\n" +
          "30% Faster Cast Rate\n" +
          "Fire Resist +37%\n" +
          "+50 to Life\n" +
          "Level 13 Grim Ward (30 Charges)\n" +
          "-2 to Light Radius",
      },
      {
        name: 'Boneshade',
        type: 'Lich Wand',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/wands/boneshade.jpg',
        stats: "One-Hand Damage: 10 to 31\n" +
          "Required Level: 79\n" +
          "Required Strength: 25\n" +
          "Durability: 17\n" +
          "Staff Class - Very Fast Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "+2 to Necromancer Skill Levels\n" +
          "+1-2 to Bone Spirit (Necromancer Only)\n" +
          "+2-3 to Bone Spear (Necromancer Only)\n" +
          "+2-3 to Bone Wall (Necromancer Only)\n" +
          "+4-5 to Bone Armor (Necromancer Only)\n" +
          "+4-5 to Teeth (Necromancer Only)\n" +
          "+25% Faster Cast Rate",
      },
      {
        name: 'Death\'s Web',
        type: 'Unearthed Wand',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/wands/death\'s-web.jpg',
        stats: "One-Hand Damage: 22 to 28\n" +
          "Required Level: 66\n" +
          "Required Strength: 25\n" +
          "Durability: 18\n" +
          "Staff Class - Fast Attack Speed",
        magicStats: "+50% Damage to Undead\n" +
          "-40-50% to Enemy Poison Resistance\n" +
          "+7-12 to Mana After Each Kill\n" +
          "+7-12 Life After Each Kill\n" +
          "+2 to All Skills\n" +
          "+1-2 to Poison and Bone Spells (Necromancer Only)",
      },
    ]
  },
]
