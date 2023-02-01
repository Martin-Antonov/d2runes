export const RUNES_D2R = [
  {
    key: "El",
    lvl: 11,
    statsW: ["+1 to Light Radius", "+50 to Attack Rating"],
    statsA: ["+1 to Light Radius", "+15 to Defense"],
  },
  {
    key: "Eld",
    lvl: 11,
    statsW: ["+50 to Attack Rating vs Undead", "+75% Damage vs. Undead"],
    statsA: ["15% Stamina Drain", "7% Increased Chance of Blocking"],
  },
  {
    key: "Tir",
    lvl: 13,
    statsW: ["+2 Mana After Each Kill"],
    statsA: ["+2 Mana After Each Kill"],
  },
  {
    key: "Nef",
    lvl: 13,
    statsW: ["Knockback"],
    statsA: ["+30 Defense vs. Missile"],
  },
  {
    key: "Eth",
    lvl: 15,
    statsW: ["-25% Targets Defense"],
    statsA: ["Regenerate Mana 15%"],
  },
  {
    key: "Ith",
    lvl: 15,
    statsW: ["+9 to Max damage"],
    statsA: ["15% Damage Taken Goes to Mana"],
  },
  {
    key: "Tal",
    lvl: 17,
    statsW: ["+75 Poison Damage Over 5 Seconds"],
    statsA: ["Poison Resist 30%", "Poison Resist 35%"],
  },
  {
    key: "Ral",
    lvl: 19,
    statsW: ["Adds 5-30 Fire damage"],
    statsA: ["Fire Resist 30%", "Fire Resist 35%"],
  },
  {
    key: "Ort",
    lvl: 21,
    statsW: ["Adds 1-50 Lightning Damage"],
    statsA: ["Lightning Resist 30%", "Lightning Resist 35%"],
  },
  {
    key: "Thul",
    lvl: 23,
    statsW: ["Adds 3-14 Cold Damage"],
    statsA: ["Cold Resist 30%", "Cold Resist 35%"],
  },
  {
    key: "Amn",
    lvl: 25,
    statsW: ["7% Life Stolen Per Hit"],
    statsA: ["Attacker Takes Damage Of 14"],
  },
  {
    key: "Sol",
    lvl: 27,
    statsW: ["+9 to Minimum Damage"],
    statsA: ["Damage Reduced By 7"],
  },
  {
    key: "Shael",
    lvl: 29,
    statsW: ["20% Increased Attack Speed"],
    statsA: ["20% Faster Hit Recovery", "20% Faster Block Rate"],
  },
  {
    key: "Dol",
    lvl: 31,
    statsW: ["Monster flee 25%"],
    statsA: ["Replenish Life +7"],
  },
  {
    key: "Hel",
    lvl: 1,
    statsW: ["Requirements -20%"],
    statsA: ["Requirements -15%"],
  },
  {
    key: "Io",
    lvl: 35,
    statsW: ["+10 to Vitality"],
    statsA: ["+10 to Vitality"],
  },
  {
    key: "Lum",
    lvl: 37,
    statsW: ["+10 to Energy"],
    statsA: ["+10 to Energy"],
  },
  {
    key: "Ko",
    lvl: 39,
    statsW: ["+10 to Dexterity"],
    statsA: ["+10 to Dexterity"],
  },
  {
    key: "Fal",
    lvl: 41,
    statsW: ["+10 to Strength"],
    statsA: ["+10 to Strength"],
  },
  {
    key: "Lem",
    lvl: 43,
    statsW: ["75% Extra Gold From Monsters"],
    statsA: ["50% Extra Gold From Monsters"],
  },
  {
    key: "Pul",
    lvl: 45,
    statsW: ["+100 to Attack Rating vs. Demons", "+75% Damage vs Demons"],
    statsA: ["30% Enhanced Defense"],
  },
  {
    key: "Um",
    lvl: 47,
    statsW: ["25% Open Wounds"],
    statsA: ["All Resistances +15%", "All Resistances +22%"],
  },
  {
    key: "Mal",
    lvl: 49,
    statsW: ["Prevent Monster Heal"],
    statsA: ["Magic Damage Reduced By 7", "All Resistances +22%"],
  },
  {
    key: "Ist",
    lvl: 51,
    statsW: ["+30% Better Magic Find"],
    statsA: ["+25% Better Magic Find"],
  },
  {
    key: "Gul",
    lvl: 53,
    statsW: ["20% to Attack Rating"],
    statsA: ["5% to Max Poison Resist"],
  },
  {
    key: "Vex",
    lvl: 55,
    statsW: ["7% Mana Stolen Per Hit"],
    statsA: ["5% to Max Fire Resist"],
  },
  {
    key: "Ohm",
    lvl: 57,
    statsW: ["50% Enhanced Damage"],
    statsA: ["5% to Max Cold Resist"],
  },
  {
    key: "Lo",
    lvl: 59,
    statsW: ["20% Deadly strike"],
    statsA: ["5% to Max Lightning Resist"],
  },
  {
    key: "Sur",
    lvl: 61,
    statsW: ["Hit Blinds Target"],
    statsA: ["Increases Max Mana 5%", "+50 To Mana"],
  },
  {
    key: "Ber",
    lvl: 63,
    statsW: ["20% Chance of Crushing Blow"],
    statsA: ["Damage Reduced By 8%"],
  },
  {
    key: "Jah",
    lvl: 65,
    statsW: ["Ignore Target's Defense"],
    statsA: ["Increase Maximum Life 5%", "+50 To Life"],
  },
  {
    key: "Cham",
    lvl: 67,
    statsW: ["Freeze Target"],
    statsA: ["Cannot be Frozen"],
  },
  {
    key: "Zod",
    lvl: 68,
    statsW: ["Indestructible"],
    statsA: ["Indestructible"],
  },
]

export interface IRune {
  key: string;
  lvl: number;
  statsW: Array<string>;
  statsA: Array<string>;
}


