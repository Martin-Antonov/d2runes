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
  stats: Array<string>;
  magicStats: Array<string>;
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
        stats: [],
        magicStats: []
      },
      {
        name: 'Hellfire Torch',
        type: 'Large Charm',
        quality: QualityType.NONE,
        img: 'assets/items/unique/charms/torch.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Gheed\'s Fortune',
        type: 'Grand Charm',
        quality: QualityType.NONE,
        img: 'assets/items/unique/charms/gheed\'s-fortune.jpg',
        stats: [],
        magicStats: []
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
        stats: [],
        magicStats: []
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Rainbow Facet',
        type: 'Jewel',
        quality: QualityType.NONE,
        img: 'assets/items/unique/jewels/' + Math.floor(Math.random() * 6) + '.jpg',
        stats: [],
        magicStats: []
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
        stats: [],
        magicStats: []
      },
      {
        name: 'The Eye of Etlich',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'The Mahim-Oak Curio',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Saracen\'s Chance',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'The Cat\'s Eye',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Crescent Moon',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Atma\'s Scarab',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'The Rising Sun',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Highlord\'s Wrath',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Mara\'s Kaleidoscope',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Seraph\'s Hymn',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Metalgrid',
        type: 'Amulet',
        quality: QualityType.NONE,
        img: 'assets/items/unique/amulets/' + Math.floor(Math.random() * 3) + '.jpg',
        stats: [],
        magicStats: []
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
        stats: [],
        magicStats: []
      },
      {
        name: 'Manald Heal',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Stone of Jordan',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Dwarf Star',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Raven Frost',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Bul-Kathos\' Wedding Band',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Carrion Wind',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Nature\'s Peace',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Wisp Projector',
        type: 'Ring',
        quality: QualityType.NONE,
        img: 'assets/items/unique/rings/' + Math.floor(Math.random() * 5) + '.jpg',
        stats: [],
        magicStats: []
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
        stats: [],
        magicStats: []
      },
      {
        name: 'Snakecord',
        type: 'Light Belt',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/belts/snakecord.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Nightsmoke',
        type: 'Belt',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/belts/nightsmoke.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Goldwrap',
        type: 'Heavy Belt',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/belts/goldwrap.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Bladebuckle',
        type: 'Plated Belt',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/belts/bladebuckle.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'String of Ears',
        type: 'Demonhide Sash',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/string-of-ears.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Razortail',
        type: 'Sharkskin Belt',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/razortail-nosferatu\'s-coil.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Gloom\'s Trap',
        type: 'Mesh Belt',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/gloom\'s-trap.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Snowclash',
        type: 'Battle Belt',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/snowclash.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Thundergod\'s Vigor',
        type: 'War Belt',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/belts/thundergod\'s-vigor.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Arachnid Mesh',
        type: 'Spiderweb Sash',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/belts/arachnid-mesh.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Nosferatu\'s Coil',
        type: 'Vampirefang Belt',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/belts/razortail-nosferatu\'s-coil.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Verdungo\'s Hearty Cord',
        type: 'Mithril Coil',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/belts/verdungo\'s-hearty-cord.jpg',
        stats: [],
        magicStats: []
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
        stats: [],
        magicStats: []
      },
      {
        name: 'Gorefoot',
        type: 'Heavy Boots',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/boots/gorefoot.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Treads of Cthon',
        type: 'Chain Boots',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/boots/treads-of-cthon.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Goblin Toe',
        type: 'Light Plated Boots',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/boots/goblin-toe.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Tearhaunch',
        type: 'Greaves',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/boots/tearhaunch.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Infernostride',
        type: 'Demonhide Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/infernostride.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Waterwalk',
        type: 'Sharkskin Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/waterwalk-sandstorm-trek.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Silkweave',
        type: 'Mesh Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/silkweave-marrowwalk.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'War Traveler',
        type: 'Battle Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/war-traveler.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Gore Rider',
        type: 'War Boots',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/boots/gore-rider.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Sandstorm Trek',
        type: 'Scarabshell Boots',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/boots/waterwalk-sandstorm-trek.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Marrowwalk',
        type: 'Boneweave Boots',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/boots/silkweave-marrowwalk.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Shadow Dancer',
        type: 'Myrmidon Greaves',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/boots/shadow-dancer.jpg',
        stats: [],
        magicStats: []
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
        stats: [],
        magicStats: []
      },
      {
        name: 'Bloodfist',
        type: 'Heavy Gloves',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/gloves/bloodfist.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Chance Guards',
        type: 'Chain Gloves',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/gloves/chance-guards.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Magefist',
        type: 'Light Gauntlets',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/gloves/magefist.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Frostburn',
        type: 'Gauntlets',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/gloves/frostburn.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Venom Grip',
        type: 'Demonhide Gloves',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/venom-grip.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Gravepalm',
        type: 'Sharkskin Gloves',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/gravepalm.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Ghoulhide',
        type: 'Heavy Bracers',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/ghoulhide.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Lava Gout',
        type: 'Battle Gauntlets',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/lava-gout.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Hellmouth',
        type: 'War Gauntlets',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/gloves/hellmouth-steelrend.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Dracul\'s Grasp',
        type: 'Vampirebone Gloves',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/gloves/dracul\'s-grasp.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Soul Drainer',
        type: 'Vambraces',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/gloves/soul-drainer.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Steelrend',
        type: 'Ogre Gauntlets',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/gloves/hellmouth-steelrend.jpg',
        stats: [],
        magicStats: []
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
        stats: [],
        magicStats: []
      },
      {
        name: 'Tarnhelm',
        type: 'Skull Cap',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/tarnhelm.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Coif of Glory',
        type: 'Helm',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/coif-of-glory.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Duskdeep',
        type: 'Full Helm',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/duskdeep.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Howltusk',
        type: 'Great Helm',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/howltusk.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'The Face of Horror',
        type: 'Mask',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/mask.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Undead Crown',
        type: 'Crown',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/undead-crown.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Wormskull',
        type: 'Bone Helm',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/helms/wormskull.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Peasant Crown',
        type: 'War Hat',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/peasant-crown.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Rockstopper',
        type: 'Sallet',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/rockstopper.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Stealskull',
        type: 'Casque',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/stealskull.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Darksight Helm',
        type: 'Basinet',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/darksight-helm.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Valkyrie Wing',
        type: 'Winged Helm',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/valkyrie-wing.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Blackhorn\'s Face',
        type: 'Death Mask',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/mask.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Crown of Thieves',
        type: 'Grand Crown',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/crown-of-thieves.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Vampire Gaze',
        type: 'Grim Helm',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/vampire-gaze.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Arreat\'s Face',
        type: 'Slayer Guard',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/arreat\'s-face.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.BARBARIAN
      },
      {
        name: 'Jalal\'s Mane',
        type: 'Totemic Mask',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/helms/jalal\'s-mane.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.DRUID
      },
      {
        name: 'Harlequin Crest',
        type: 'Shako',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/harlequin-crest.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Steel Shade',
        type: 'Armet',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/steel-shade.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Veil of Steel',
        type: 'Spired Helm',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/veil-of-steel.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Nightwing\'s Veil',
        type: 'Spired Helm',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/nightwing\'s-veil.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Andariel\'s Visage',
        type: 'Demonhead',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/mask.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Crown of Ages',
        type: 'Corona',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/crown-of-ages.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Giant Skull',
        type: 'Bone Visage',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/giant-skull.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Kira\'s Guardian',
        type: 'Tiara',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/kira\'s-guardian.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Griffon\'s Eye',
        type: 'Diadem',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/griffon\'s-eye.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Wolfhowl',
        type: 'Fury Visor',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/wolfhowl.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.BARBARIAN
      },
      {
        name: 'Demonhorn\'s Edge',
        type: 'Destroyer Helm',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/demonhorn\'s-edge.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.BARBARIAN
      },
      {
        name: 'Halaberd\'s Reign',
        type: 'Conqueror Crown',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/halaberd\'s-reign.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.BARBARIAN
      },
      {
        name: 'Cerebus\' Bite',
        type: 'Blood Spirit',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/cerebus\'-bite.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.DRUID
      },
      {
        name: 'Ravenlore',
        type: 'Sky Spirit',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/ravenlore.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.DRUID
      },
      {
        name: 'Spirit Keeper',
        type: 'Earth Spirit',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/helms/spirit-keeper.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: []
      },
      {
        name: 'Blinkbat\'s Form',
        type: 'Leather Armor',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/blinkbat\'s-form.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'The Centurion',
        type: 'Hard Leather Armor',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/the-centurion.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Twitchthroe',
        type: 'Studded Leather',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/twitchthroe.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Darkglow',
        type: 'Ring Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/darkglow.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Hawkmail',
        type: 'Scale Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/hawkmail.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Venom Ward',
        type: 'Breast Plate',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/venom-ward.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Sparking Mail',
        type: 'Chain Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/sparking-mail.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Iceblink',
        type: 'Splint Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/iceblink.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Heavenly Garb',
        type: 'Light Plate',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/heavenly-garb.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Boneflesh',
        type: 'Plate Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/boneflesh.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Rockfleece',
        type: 'Field Plate',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/rockfleece.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Rattlecage',
        type: 'Gothic Plate',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/rattlecage.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Goldskin',
        type: 'Full Plate Mail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/goldskin.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Silks of the Victor',
        type: 'Ancient Armor',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/armors/silks-of-the-victor.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'The Spirit Shroud',
        type: 'Ghost Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/the-spirit-shroud.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Skin of the Vipermagi',
        type: 'Serpentskin Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/skin-of-the-vipermagi.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Skin of the Flayed One',
        type: 'Demonhide Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/skin-of-the-flayed-one.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Iron Pelt',
        type: 'Trellised Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/iron-pelt.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Crow Caw',
        type: 'Tigulated Mail',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/crow-caw.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Spirit Forge',
        type: 'Linked Mail',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/spirit-forge.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Duriel\'s Shell',
        type: 'Cuirass',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/duriel\'s-shell.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Shaftstop',
        type: 'Mesh Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/shaftstop.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Skullder\'s Ire',
        type: 'Russet Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/skullder\'s-ire.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Que-Hegan\'s Wisdom',
        type: 'Mage Plate',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/que-hegan\'s-wisdom.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Guardian Angel',
        type: 'Templar Coat',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/guardian-angel.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Toothrow',
        type: 'Sharktooth Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/toothrow.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Atma\'s Wail',
        type: 'Embossed Plate',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/atma\'s-wail.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Black Hades',
        type: 'Chaos Armor',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/black-hades.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Corpsemourn',
        type: 'Ornate Plate',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/armors/corpsemourn.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Ormus\' Robes',
        type: 'Dusk Shroud',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/ormus\'-robes.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'The Gladiator\'s Bane',
        type: 'Wire Fleece',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/the-gladiator\'s-bane.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Arkaine\'s Valor',
        type: 'Balrog Skin',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/arkaine\'s-valor.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Leviathan',
        type: 'Kraken Shell',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/leviathan.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Steel Carapace',
        type: 'Shadow Plate',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/steel-carapace.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Templar\'s Might',
        type: 'Sacred Armor',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/templar\'s-might.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Tyrael\'s Might',
        type: 'Sacred Armor',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/armors/tyrael\'s-might.jpg',
        stats: [],
        magicStats: []
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
        stats: [],
        magicStats: []
      },
      {
        name: 'Umbral Disk',
        type: 'Small Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/blackoak-shield-umbral-disk.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Stormguild',
        type: 'Large Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/stormguild.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Steelclash',
        type: 'Kite Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/steelclash-stormshield-tiamat\'s-rebuke.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Swordback Hold',
        type: 'Spiked Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/swordback-hold.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Bverrit Keep',
        type: 'Tower Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/bverrit-keep.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Wall of the Eyeless',
        type: 'Bone Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/head-hunter\'s-glory-wall-of-the-eyeless.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'The Ward',
        type: 'Gothic Shield',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/shields/the-ward-radament\'s-sphere.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Visceratuant',
        type: 'Defender',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/visceratuant.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Moser\'s Blessed Circle',
        type: 'Round Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/moser\'s-blessed-circle.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Stormchaser',
        type: 'Scutum',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/stormchaser.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Tiamat\'s Rebuke',
        type: 'Scutum',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/steelclash-stormshield-tiamat\'s-rebuke.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Lance Guard',
        type: 'Barbed Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/lance-guard.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Gerke\'s Sanctuary',
        type: 'Pavise',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/gerke\'s-sanctuary.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Lidless Wall',
        type: 'Grim Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/lidless-wall.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Radament\'s Sphere',
        type: 'Grim Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/the-ward-radament\'s-sphere.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Herald of Zakarum',
        type: 'Gilded Shield',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/dragonscale-herald-of-zakarum.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.PALADIN
      },
      {
        name: 'Homunculus',
        type: 'Hierophant Trophy',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/shields/darkforce-spawn-homunculus.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.NECROMANCER
      },
      {
        name: 'Blackoak Shield',
        type: 'Luna',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/blackoak-shield-umbral-disk.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Stormshield',
        type: 'Monarch',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/steelclash-stormshield-tiamat\'s-rebuke.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Spike Thorn',
        type: 'Blade Barrier',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/spike-thorn.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Medusa\'s Gaze',
        type: 'Aegies',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/medusa\'s-gaze.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Head Hunter\'s Glory',
        type: 'Troll Nest',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/head-hunter\'s-glory-wall-of-the-eyeless.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Spirit Ward',
        type: 'Ward',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/spirit-ward.jpg',
        stats: [],
        magicStats: []
      },
      {
        name: 'Alma Negra',
        type: 'Sacred Rondache',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/alma-negra.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.PALADIN
      },
      {
        name: 'Dragonscale',
        type: 'Zakarum Shield',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/dragonscale-herald-of-zakarum.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.PALADIN
      },
      {
        name: 'Darkforce Spawn',
        type: 'Bloodlord Skull',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/darkforce-spawn-homunculus.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.NECROMANCER
      },
      {
        name: 'Boneflame',
        type: 'Succubus Skull',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/shields/boneflame.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'DeathSpade',
        type: 'Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/deathspade.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Bladebone',
        type: 'Double Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/bladebone.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Skull Splitter',
        type: 'Military Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/skull-splitter.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Axe of Fechmar',
        type: 'Large Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/axe-of-fechmar.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Goreshovel',
        type: 'Broad Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/goreshovel.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Chieftain',
        type: 'Battle Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/the-chieftain.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Brainhew',
        type: 'Great Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/brainhew-boneslayer-blade.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Humongous',
        type: 'Giant Axe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/axes/executioner\'s-justice-humongous.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Coldkill',
        type: 'Hatchet',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/coldkill.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Butcher\'s Pupil',
        type: 'Cleaver',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/butcher\'s-pupil.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Islestrike',
        type: 'Twin Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/islestrike.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Pompeii\'s Wrath',
        type: 'Crowbill',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/pompeii\'s-wrath.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Guardian Naga',
        type: 'Naga',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/death-cleaver-guardian-naga.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Warlord\'s Trust',
        type: 'Military Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/warlord\'s-trust.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Spellsteel',
        type: 'Bearded Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/ethereal-edge-spellsteel.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Stormrider',
        type: 'Tabar',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/stormrider.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Boneslayer Blade',
        type: 'Gothic Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/brainhew-boneslayer-blade.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Minotaur',
        type: 'Ancient Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/axes/the-minotaur.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Razor\'s Edge',
        type: 'Tomahawk',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/razor\'s-edge-the-gnasher.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Rune Master',
        type: 'Ettin Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/rune-master.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Cranebeak',
        type: 'War Spike',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/cranebeak.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Death Cleaver',
        type: 'Berserker Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/death-cleaver-guardian-naga.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Ethereal Edge',
        type: 'Tomahawk',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/ethereal-edge-spellsteel.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Hellslayer',
        type: 'Decapitator',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/hellslayer.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Messerschmidt\'s Reaver',
        type: 'Champion Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/messerschmidt\'s-reaver.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Executioner\'s Justice',
        type: 'Glorious Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/axes/executioner\'s-justice-humongous.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'Witherstring',
        type: 'Hunter\'s Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/witherstring.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Raven Claw',
        type: 'Long Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/raven-claw.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Rogue\'s Bow',
        type: 'Composite Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/rogue\'s-bow.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Stormstrike',
        type: 'Short Battle Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/stormstrike.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Wizendraw',
        type: 'Long Battle Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/wizendraw.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Hellclap',
        type: 'Short War Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/hellclap.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Blastbark',
        type: 'Long War Bow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/bows/blastbark.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Skystrike',
        type: 'Edge Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/skystrike.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Riphook',
        type: 'Razor Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/riphook.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Kuko Shakaku',
        type: 'Cedar Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/kuko-shakaku.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Endlesshail',
        type: 'Double Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/endlesshail.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Witchwild String',
        type: 'Showrt Siege Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/witchwild-string.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Cliffkiller',
        type: 'Large Siege Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/cliffkiller.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Magewrath',
        type: 'Rune Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/magewrath.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Goldstrike Arch',
        type: 'Gothic Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/goldstrike-arch.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Eaglehorn',
        type: 'Crusader Bow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/bows/eaglehorn.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Widowmaker',
        type: 'Ward Bow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/bows/widowmaker.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Windforce',
        type: 'Hydra Bow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/bows/windforce.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Lycander\'s Aim',
        type: 'Ceremonial Bow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/bows/lycander\'s-aim.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.AMAZON
      },
      {
        name: 'Blood Raven\'s Charge',
        type: 'Matriarchal Bow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/bows/blood-raven\'s-charge.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'Ichorsting',
        type: 'Crossbow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/crossbows/ichorsting.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Hellcast',
        type: 'Heavy Crossbow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/crossbows/hellcast-buriza-do-kyanon-hellrack.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Doomslinger',
        type: 'Repeating Crossbow',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/crossbows/doomslinger.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Langer Briser',
        type: 'Arbalest',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/crossbows/langer-briser.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Pus Spitter',
        type: 'Siege Crossbow',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/crossbows/pus-spitter.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Buriza-Do Kyanon',
        type: 'Ballista',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/crossbows/hellcast-buriza-do-kyanon-hellrack.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Demon Machine',
        type: 'Chu-Ko-Nu',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/crossbows/demon-machine.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Hellrack',
        type: 'Colossus Crossbow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/crossbows/hellcast-buriza-do-kyanon-hellrack.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Gut Siphon',
        type: 'Demon Crossbow',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/crossbows/gut-siphon.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Diggler',
        type: 'Dirk',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/daggers/the-diggler.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Jade Tan Do',
        type: 'Kris',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/daggers/the-jade-tan-do-blackbog\'s-sharp.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Spectral Shard',
        type: 'Blade',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/daggers/spectral-shard-ghostflame.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Spineripper',
        type: 'Poignard',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/daggers/spineripper.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Heart Carver',
        type: 'Rondel',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/daggers/heart-carver.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Blackbog\'s Sharp',
        type: 'Cinquedass',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/daggers/the-jade-tan-do-blackbog\'s-sharp.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Stormspike',
        type: 'Stiletto',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/daggers/stormspike.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Wizardspike',
        type: 'Bone Knife',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/daggers/gull-wizzardspike.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Fleshripper',
        type: 'Fanged Knife',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/daggers/fleshripper.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Ghostflame',
        type: 'Legend Spike',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/daggers/spectral-shard-ghostflame.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'Stoutnail',
        type: 'Spiked Club',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/stoutnail-fleshrender.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Crushflange',
        type: 'Mace',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/crushflange.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Bloodrise',
        type: 'Morning Star',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/bloodrise-moonfall.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The General\'s Tan Do Li Ga',
        type: 'Flail',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/the-general\'s-tan-do-li-ga-baezil\'s-vortex.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Ironstone',
        type: 'War Hammer',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/ironstone.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Bonesnap',
        type: 'Maul',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/bonesnap.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Steeldriver',
        type: 'Great Maul',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/maces/steeldriver.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Dark Clan Crusher',
        type: 'Cudgel',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/dark-clan-crusher.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Fleshrender',
        type: 'Barbed Club',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/stoutnail-fleshrender.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Sureshrill Frost',
        type: 'Flanged Mace',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/sureshrill-frost.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Moonfall',
        type: 'Jagged Star',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/bloodrise-moonfall.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Baezil\'s Vortex',
        type: 'Knout',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/the-general\'s-tan-do-li-ga-baezil\'s-vortex.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Earthshaker',
        type: 'Battle Hammer',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/earthshaker.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Bloodtree Stump',
        type: 'War Club',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/bloodtree-stump.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Gavel of Pain',
        type: 'Martel de Fer',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/maces/the-gavel-of-pain.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Nord\'s Tenderizer',
        type: 'Truncheon',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/nord\'s-tenderizer.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Demon Limb',
        type: 'Tyrant Club',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/demon-limb.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Baranar\'s Star',
        type: 'Devil Star',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/baranar\'s-star.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Horizon\'s Tornado',
        type: 'Scourge',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/horizon\'s-tornado.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Stormlash',
        type: 'Scourge',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/stormlash.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Stone Crusher',
        type: 'Legendary Mallet',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/stone-crusher.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Schaefer\'s Hammer',
        type: 'Legendary Mallet',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/schaefer\'s-hammer.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Windhammer',
        type: 'Ogre Maul',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/windhammer.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Earth Shifter',
        type: 'Thunder Maul',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/earth-shifter.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Cranium Basher',
        type: 'Thunder Maul',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/maces/the-cranium-basher.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'Steelgoad',
        type: 'Voulge',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/steelgoad.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Soul Harvest',
        type: 'Scythe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/soul-harvest.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Battlebranch',
        type: 'Poleaxe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/the-battlebranch.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Woestave',
        type: 'Halberd',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/woestave.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Grim Reaper',
        type: 'War Scythe',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/polearms/the-grim-reaper.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Meat Scraper',
        type: 'Lochaber Axe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/the-meat-scraper.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Blackleach Blade',
        type: 'Bill',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/blackleach-blade.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Athena\'s Wrath',
        type: 'Battle Scythe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/athena\'s-wrath.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Pierre Tombale Couant',
        type: 'Partizan',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/pierre-tombale-couant.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Husoldal Evo',
        type: 'Bec-De-Corbin',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/husoldal-evo.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Grim\'s Burning Dead',
        type: 'Grim Scythe',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/polearms/grim\'s-burning-dead.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Bonehew',
        type: 'Ogre Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/polearms/bonehew.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Reaper\'s Toll',
        type: 'Thresher',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/polearms/the-reaper\'s-toll.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Tomb Reaver',
        type: 'Cryptic Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/polearms/tomb-reaver.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Stormspire',
        type: 'Giant Thresher',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/polearms/stormspire.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'Rusthandle',
        type: 'Grand Scepter',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/scepters/rusthandle.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Stormeye',
        type: 'War Scepter',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/scepters/stormeye.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Zakarum\'s Hand',
        type: 'Rune Scepter',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/scepters/zakarum\'s-hand.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Fetid Sprinkler',
        type: 'Holy Water Sprinkler',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/scepters/the-fetid-sprinkler.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Hand of Blessed Light',
        type: 'Divine Scepter',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/scepters/hand-of-blessed-light.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Heaven\'s Light',
        type: 'Mighty Scepter',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/scepters/heaven\'s-light.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Redeemer',
        type: 'Mighty Scepter',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/scepters/the-redeemer.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Astreon\'s Iron Ward',
        type: 'Caduceus',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/scepters/astreon\'s-iron-ward.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'Razortine',
        type: 'Trident',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/spears/kelpie-snare-razortine.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Bloodthief',
        type: 'Brandistock',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/spears/bloodthief.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Lance of Yaggai',
        type: 'Spetum',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/spears/lance-of-yaggai.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Tannr Gorerod',
        type: 'Pike',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/spears/spire-of-honor-the-tannr-gorerod.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Impaler',
        type: 'War Spear',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/the-impaler.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Kelpie Snare',
        type: 'Fuscina',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/kelpie-snare-razortine.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Soulfeast Tine',
        type: 'War Fork',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/soulfeast-tine.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Hone Sundan',
        type: 'Yari',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/hone-sundan.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Spire of Honor',
        type: 'Lance',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/spire-of-honor-the-tannr-gorerod.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Arioc\'s Needle',
        type: 'Hyperion Spear',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/spears/arioc\'s-needle.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Viperfork',
        type: 'Manacatcher',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/spears/viperfork.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Steel Pillar',
        type: 'War Pike',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/spears/steel-pillar.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Lycander\'s Flank',
        type: 'Ceremonial Pike',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/spears/lycander\'s-flank.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.AMAZON
      },
      {
        name: 'Stoneraven',
        type: 'Matriarchal Spear',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/spears/stoneraven.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.AMAZON
      },
      {
        name: 'Stoneraven',
        type: 'Matriarchal Spear',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/spears/stoneraven.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.AMAZON
        //spear
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'Serpent Lord',
        type: 'Long Staff',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/staves/serpent-lord.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Spire of Lazarus',
        type: 'Gnarled Staff',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/staves/spire-of-lazarus-chromatic-ire-ondal\'s-wisdom.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Salamander',
        type: 'Battle Staff',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/staves/the-salamander.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Iron Jang Bong',
        type: 'War Staff',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/staves/the-iron-jang-bong.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Razorswitch',
        type: 'Jo Staff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/razorswitch.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Ribcracker',
        type: 'Quarterstaff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/ribcracker.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Chromatic Ire',
        type: 'Cedar Staff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/spire-of-lazarus-chromatic-ire-ondal\'s-wisdom.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Warpspear',
        type: 'Gothic Staff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/warpspear.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Skull Collector',
        type: 'Rune Staff',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/skull-collector.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Ondal\'s Wisdom',
        type: 'Elder Staff',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/staves/spire-of-lazarus-chromatic-ire-ondal\'s-wisdom.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Mang Song\'s Lesson',
        type: 'Archon Staff',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/staves/mang-song\'s-lesson.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Eschuta\'s Temper',
        type: 'Eldrich Orb',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/staves/eschuta\'s-temper.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.SORCERESS
      },
      {
        name: 'The Oculus',
        type: 'Swirling Crystal',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/staves/death\'s-fathom-the-oculus.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.SORCERESS
      },
      {
        name: 'Death\'s Fathom',
        type: 'Dimensional Shard',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/staves/death\'s-fathom-the-oculus.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'Blood Crescent',
        type: 'Scimtar',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/blood-crescent-coldsteel-eye.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Skewer of Krintiz',
        type: 'Sabre',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/skewer-of-krintiz.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Gleamscythe',
        type: 'Falchion',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/gleamscythe.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Griswold\'s Edge',
        type: 'Broad Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/griswold\'s-edge.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Hellplague',
        type: 'Long Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/hellplague.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Culwen\'s Point',
        type: 'War Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/culwen\'s-point.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Shadowfang',
        type: 'Two-Handed Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/crainte-vomir-shadowfang.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Soulflay',
        type: 'Claymore',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/soulflay.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Kinemil\'s Awl',
        type: 'Giant Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/kinemil\'s-awl.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Blacktongue',
        type: 'Bastard Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/blacktongue-cloudcrack.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Ripsaw',
        type: 'Flamberge',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/ripsaw.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Patriarch',
        type: 'Great Sword',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/swords/the-patriarch.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Bloodletter',
        type: 'Gladius',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/bloodletter.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Coldsteel Eye',
        type: 'Cutlass',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/blood-crescent-coldsteel-eye.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Hexfire',
        type: 'Shamshir',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/hexfire.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Blade of Ali Baba',
        type: 'Tulwar',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/blade-of-ali-baba.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Ginther\'s Rift',
        type: 'Dimensional Blade',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/ginther\'s-rift.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Headstriker',
        type: 'Battle Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/headstriker.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Plague Bearer',
        type: 'Rune Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/plague-bearer.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Atlantean',
        type: 'Ancient Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/the-atlantean.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Crainte Vomir',
        type: 'Espandon',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/crainte-vomir-shadowfang.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Bing Sz Wang',
        type: 'Dacian Falx',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/bing-sz-wang.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Vile Husk',
        type: 'Tusk Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/the-vile-husk.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Cloudcrack',
        type: 'Gothic Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/blacktongue-cloudcrack.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Todesfaelle Flamme',
        type: 'Zweihander',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/todesfaelle-flamme.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Swordguard',
        type: 'Executioner Sword',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/swords/swordguard.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Djinn Slayer',
        type: 'Ataghan',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/djinn-slayer.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Bloodmoon',
        type: 'Elegant Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/bloodmoon.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Lightsabre',
        type: 'Phase Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/lightsabre.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Azurewrath',
        type: 'Phase Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/azurewrath.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Frostwind',
        type: 'Cryptic Sword',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/frostwind.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Flamebellow',
        type: 'Balrog Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/flamebellow.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Doombringer',
        type: 'Champion Sword',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/doombringer.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Grandfather',
        type: 'Colossus Blade',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/swords/the-grandfather.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'The Scalper',
        type: 'Francisca',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/throw/the-scalper-gimmershred.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Warshrike',
        type: 'Winged Knife',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/throw/warshrike.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Gimmershred',
        type: 'Flying Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/throw/the-scalper-gimmershred.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Lacerator',
        type: 'Winged Axe',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/throw/lacerator.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
        hero: Hero.AMAZON
      },
      {
        name: 'Demon\'s Arch',
        type: 'Balrog Spear',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/javelins/demon\'s-arch.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Wraith Flight',
        type: 'Ghost Glaive',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/javelins/wraith-flight.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Gargoyle\'s Bite',
        type: 'Winged Harpoon',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/javelins/gargoyle\'s-bite.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Thunderstroke',
        type: 'Matriarchal Javelin',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/javelins/thunderstroke.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
        hero: Hero.ASSASSIN
      },
      {
        name: 'Jade Talon',
        type: 'Wrist Sword',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/katars/jade-talon.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.ASSASSIN
      },
      {
        name: 'Shadow Killer',
        type: 'Battle Cestus',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/katars/shadow-killer.jpg',
        stats: [],
        magicStats: [],
        hero: Hero.ASSASSIN
      },
      {
        name: 'Firelizard\'s Talons',
        type: 'Feral Claws',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/katars/firelizard\'s-talons.jpg',
        stats: [],
        magicStats: [],
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
        stats: [],
        magicStats: [],
      },
      {
        name: 'Maelstrom',
        type: 'Yew Wand',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/wands/maelstrom.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Gravenspine',
        type: 'Bone Wand',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/wands/arm-of-king-leoric-gravenspine.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Ume\'s Lament',
        type: 'Grim Wand',
        quality: QualityType.NORMAL,
        img: 'assets/items/unique/weapons/wands/ume\'s-lament.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Suicide Branch',
        type: 'Burnt Wand',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/wands/suicide-branch.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Carin Shard',
        type: 'Petrified Wand',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/wands/carin-shard.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Arm of King Leoric',
        type: 'Tomb Wand',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/wands/arm-of-king-leoric-gravenspine.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Blackhand Key',
        type: 'Grave Wand',
        quality: QualityType.EXCEPTIONAL,
        img: 'assets/items/unique/weapons/wands/blackhand-key.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Boneshade',
        type: 'Lich Wand',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/wands/boneshade.jpg',
        stats: [],
        magicStats: [],
      },
      {
        name: 'Death\'s Web',
        type: 'Unearthed Wand',
        quality: QualityType.ELITE,
        img: 'assets/items/unique/weapons/wands/death\'s-web.jpg',
        stats: [],
        magicStats: [],
      },
    ]
  },
]
