export enum ItemType {
  BELTS = 'Belts',
  RINGS = 'Rings',
  AMULETS = 'Amulets',
  CHARMS = 'Charms',
  JEWELS = 'Jewels',
  BOOTS = 'Boots',
  GLOVES = 'Gloves',
  HELMS = 'Helms',
  ARMORS = 'Armors'
}

export enum QualityType {
  NONE,
  NORMAL,
  EXCEPTIONAL,
  ELITE
}

export interface IItem {
  itemType: ItemType;
  items: Array<ISpecificItem>;
}

export interface ISpecificItem {
  name: string;
  type: string;
  quality: QualityType;
  img: string;
  stats: Array<string>;
  magicStats: Array<string>;
}

export const ALL_ITEMS: Array<IItem> = [
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
        name: 'Tarnheim',
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
        type: 'Embossed Playe',
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
  }
]

