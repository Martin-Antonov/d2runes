"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUNEWORDS_D2R = void 0;
exports.RUNEWORDS_D2R = [
    {
        name: "Nadir",
        word: "Nef Tir",
        itemType: "Helms",
        level: 13,
        stats: [
            '+50% Enhanced Defense',
            '+10 Defense',
            '+30 Defense vs. Missile',
            '+5 to Strength',
            '+2 to Mana After Each Kill',
            '-33% Extra Gold From Monsters',
            '-3 to Light Radius',
            'Level 13 Cloak of Shadows (9 Charges)'
        ],
        itemTypeShort: "Helms",
        bases: [
            { item: 'Any Helm', foundIn: 'Buy from Charsi/Fara' },
        ],
    },
    {
        name: "Steel",
        word: "Tir El",
        itemType: "Swords/Axes/Maces",
        level: 13,
        stats: [
            '25% Increased Attack Speed',
            '20% Enhanced Damage',
            '+3 to Minimum Damage',
            '+3 to Maximum Damage',
            '+50 to Attack Rating',
            '50% Chance Of Open Wounds',
            '+2 to Mana After Each Kill',
            '+1 to Light Radius'
        ],
        itemTypeShort: "Swords/Axes/Maces",
        bases: [
            { item: 'Flail', foundIn: 'Buy from Fara' },
            { item: 'Sabre', foundIn: 'Buy from Fara' },
        ],
    },
    {
        name: "Malice",
        word: "Ith El Eth",
        itemType: "Axes/Fists/Maces/Polearms/Staves/Spears/Swords/Scepters/Clubs/Hammers",
        level: 15,
        stats: [
            '+33% Enhanced Damage',
            '+9 to Maximum Damage',
            '-25% Target Defense',
            '+50 to Attack Rating',
            '100% Chance Of Open Wounds',
            'Prevent Monster Heal',
            '-100 to Monster Defense per Hit',
            'Drain Life -5'
        ],
        itemTypeShort: "Melee Weapons",
        bases: [
            { item: 'Flail', foundIn: 'Buy from Fara' },
        ],
    },
    {
        name: "Stealth",
        word: "Tal Eth",
        stats: [
            '25% Faster Run/Walk',
            '25% Faster Cast Rate',
            '25% Faster Hit Recovery',
            '+6 to Dexterity',
            'Regenerate Mana 15%',
            '+15 to Maximum Stamina',
            'Poison Resist +30%',
            'Magic Damage Reduced by 3'
        ],
        itemType: "Body Armor",
        level: 17,
        itemTypeShort: "Body Armor",
        bases: [
            { item: 'Any Armor', foundIn: 'Buy from Charsi/Fara' },
        ],
    },
    {
        name: "Leaf", word: "Tir Ral", itemType: "Staves", level: 19, stats: [
            "+3 to Fire Skills",
            "Adds 5-30 Fire Damage",
            "+3 to Inferno (Sorceress Only)",
            "+3 to Warmth (Sorceress Only)",
            "+3 to Fire Bolt (Sorceress Only)",
            "+2-198 to Defense (Based On Character Level)",
            "Cold Resist +33%",
            "+2 to Mana After Each Kill"
        ], itemTypeShort: "Staves (Not Orbs/Wands)",
        bases: [
            { item: 'Any Staff (with +Skills for Sorc)', foundIn: 'Buy from Drognan' },
        ],
    },
    {
        name: "Ancient's Pledge", word: "Ral Ort Tal", itemType: "Shields", level: 21, stats: [
            '+50% Enhanced Defense',
            'Cold Resist +43%',
            'Lightning Resist +13% (48% Total)',
            'Fire Resist +13% (48% Total)',
            'Poison Resist +13% (48% Total)',
            '10% Damage Goes to Mana'
        ], itemTypeShort: "Shields",
        bases: [
            { item: 'Any Shield', foundIn: 'Buy from Fara' },
        ],
    },
    {
        name: "Holy Thunder", word: "Eth Ral Ort Tal", itemType: "Scepters", level: 21, stats: [
            '+60% Enhanced Damage',
            '+10 to Maximum Damage',
            '-25% Target Defense',
            'Adds 5-30 Fire Damage',
            'Adds 21-110 Lightning Damage',
            '+75 Poison Damage for 5 seconds',
            '+3 to Holy Shock (Paladin only)',
            '+5 to Maximum Lightning Resist',
            '+60% Lightning Resist',
            'Level 7 Chain Lightning (60 charges)'
        ], itemTypeShort: "Scepters",
        bases: [
            { item: 'War Scepter', foundIn: '' },
            { item: 'Divine Scepter', foundIn: '' },
        ],
    },
    {
        name: "Zephyr", word: "Ort Eth", itemType: "Bows/Crossbows", level: 21, stats: [
            '7% Chance to Cast Level 1 Twister When Struck',
            '+25% Faster Run/Walk',
            '+25% Increased Attack Speed',
            '+33% Enhanced Damage',
            '-25% Target Defense',
            '+66 to Attack Rating',
            'Adds 1-50 Lightning Damage',
            '+25 Defense'
        ], itemTypeShort: "Missile Weapons"
    },
    {
        name: "Pattern", word: "Tal Ort Thul", itemType: "Claws", level: 23, stats: [
            "+30% Faster Block Rate",
            "+40-80% Enhanced Damage (varies)",
            "10% Bonus to Attack Rating",
            "Adds 17-62 Fire Damage",
            "Adds 1-50 Lightning Damage",
            "Adds 3-14 Cold Damage",
            "+75 Poison Damage Over 5 Seconds",
            "+6 to Strength",
            "+6 to Dexterity",
            "All Resistances +15",
        ], itemTypeShort: "Claws",
    },
    {
        name: "King's Grace", word: "Amn Ral Thul", itemType: "Swords/Scepters", level: 25, stats: [
            '+100% Enhanced Damage',
            '+150 to Attack Rating',
            '+100% Damage to Demons',
            '+100 to Attack Rating against Demons',
            '+50% Damage to Undead',
            '+100 to Attack Rating against Undead',
            'Adds 5-30 Fire Damage',
            'Adds 3-14 Cold Damage for 3 seconds',
            '7% Life Stolen per hit'
        ], itemTypeShort: "Swords/Scepters"
    },
    {
        name: "Strength",
        word: "Amn Tir",
        itemType: "Axes/Fists/Maces/Polearms/Staves/Spears/Swords/Scepters/Clubs/Hammers",
        level: 25,
        stats: [
            "+35% Enhanced Damage",
            "7% Life stolen per hit",
            "25% Chance of Crushing Blow",
            "+20 to Strength",
            "+10 to Vitality",
            "+2 to Mana after each Kill",
        ],
        itemTypeShort: "Melee Weapons"
    },
    {
        name: "Edge", word: "Tir Tal Amn", itemType: "Bows/Crossbows", level: 25, stats: [
            "Level 15 Thorns Aura When Equipped",
            "+35% Increased Attack Speed",
            "+320-380% Damage to Demons (varies)",
            "+280% Damage to Undead",
            "+75 Poison Damage Over 5 Seconds",
            "7% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+5-10 to All Attributes (varies)",
            "+2 to Mana After Each Kill",
            "Reduces All Vendor Prices 15%",
        ], itemTypeShort: "Missile Weapons"
    },
    {
        name: "Myth", word: "Hel Amn Nef", itemType: "Body Armor", level: 25, stats: [
            '3% Chance to Cast Level 1 Howl When Struck',
            '10% Chance to Cast Level 1 Taunt On Striking',
            '+2 to Barbarian Skill Levels',
            '+30 Defense vs. Missile',
            'Replenish Life +10',
            'Attacker Takes Damage of 14',
            'Requirements -15%'
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Spirit", word: "Tal Thul Ort Amn", itemType: "Swords/Shields", level: 25, stats: [
            '+2 to All Skills',
            '+25-35% Faster Cast Rate (varies)',
            '+55% Faster Hit Recovery,',
            '+250 Defense vs. Missiles',
            '+22 to Vitality',
            '+89-112 to Mana (varies)',
            '+3-8 Magic Absorb (varies)',
            'Adds 1-50 Lightning Damage (Sword)',
            'Adds 3-14 Cold Damage 3 Second Duration (Normal) (Sword)',
            '+75 Poison Damage Over 5 Seconds (Sword)',
            '7% Life Stolen Per Hit (Sword)',
            'Cold Resist +35% (Shield)',
            'Lightning Resist +35% (Shield)',
            'Poison Resist +35% (Shield)',
            'Attacker Takes Damage of 14 (Shield)'
        ], itemTypeShort: "Swords/Shields"
    },
    {
        name: "Honor",
        word: "Amn El Ith Tir Sol",
        itemType: "Axes/Fists/Maces/Polearms/Staves/Spears/Swords/Scepters/Clubs/Hammers", level: 27,
        stats: [
            "+1 to All Skills",
            "+160% Enhanced Damage",
            "+9 to Minimum Damage",
            "+9 to Maximum Damage",
            "+250 Attack Rating",
            "7% Life Stolen per Hit",
            "25% Deadly Strike",
            "+10 to Strength",
            "Replenish life +10",
            "+2 to Mana after each Kill",
            "+1 to Light Radius",
        ],
        itemTypeShort: "Melee Weapons"
    },
    {
        name: "Lore", word: "Ort Sol", itemType: "Helms", level: 27, stats: [
            "+1 to All Skills",
            "+10 to Energy",
            "Lightning Resist +30%",
            "Damage Reduced by 7",
            "+2 to Mana after each Kill",
            "+2 to Light Radius",
        ], itemTypeShort: "Helms"
    },
    {
        name: "Radiance", word: "Nef Sol Ith", itemType: "Helms", level: 27, stats: [
            "+75% Enhanced Defense",
            "+30 Defense vs. Missiles",
            "+10 to Vitality",
            "+10 to Energy",
            "+33 to Mana",
            "Damage Reduced by 7",
            "Magic Damage Reduced by 3",
            "15% Damage Taken Goes to Mana",
            "+5 to Light Radius",
        ], itemTypeShort: "Helms"
    },
    {
        name: "Insight", word: "Ral Tir Tal Sol", itemType: "Polearms/Staves/Bows/Crossbows", level: 27, stats: [
            'Level 12-17 Meditation Aura When Equipped',
            '+35% Faster Cast Rate',
            '+200-260% Enhanced Damage (varies)',
            '+9 to Minimum Damage',
            '180-250% Bonus to Attack Rating',
            'Adds 5-30 Fire Damage',
            '+75 Poison Damage Over 5 Seconds',
            '+1-6 to Critical Strike',
            '+5 to All Attributes',
            '+2 to Mana After Each Kill',
            '23% Better Chance of Getting Magic Items'
        ], itemTypeShort: "Polearms/Staves/Bows/Crossbows"
    },
    {
        name: "Rhyme", word: "Shael Eth", itemType: "Shields", level: 29, stats: [
            "+40% Faster Block Rate",
            "20% Increased Chance of Blocking",
            "Regenerate Mana 15%",
            "All Resistances +25",
            "Cannot be Frozen",
            "50% Extra Gold from Monsters",
            "25% Better Chance of Getting Magic Items",
        ], itemTypeShort: "Shields"
    },
    {
        name: "Peace", word: "Shael Thul Amn", itemType: "Body Armor", level: 29, stats: [
            "4% Chance to Cast Level 5 Slow Missiles When Struck",
            "2% Chance to Cast level 15 Valkyrie On Striking",
            "+2 to Amazon Skill Levels",
            "+20% Faster Hit Recovery",
            "+2 to Critical Strike",
            "Cold Resist +30%",
            "Attacker Takes Damage of 14",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Black", word: "Thul Io Nef", itemType: "Clubs/Hammers/Maces", level: 35, stats: [
            "+15% Increased Attack Speed",
            "+120% Enhanced Damage",
            "+200 to Attack Rating",
            "Adds 3-14 Cold Damage (3 sec)",
            "40% Chance of Crushing Blow",
            "Knockback",
            "+10 to Vitality",
            "Magic Damage Reduced by 2",
            "Level 4 Corpse Explosion (12 Charges)",
        ], itemTypeShort: "Clubs/Hammers/Maces"
    },
    {
        name: "Bulwark", word: "Shael Io Sol", itemType: "Helms", level: 35, stats: [
            "+20% Faster Hit Recovery",
            "+4-6% Life stolen per hit",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Replenish Life +30",
            "Damage Reduced by 7",
            "Physical Damage Received Reduced by 10-15%",
        ], itemTypeShort: "Helms",
        ladderOnly: true,
    },
    {
        name: "Cure", word: "Shael Io Tal", itemType: "Helms", level: 35, stats: [
            "Level 1 Cleansing Aura when Equipped",
            "+20% Faster Hit Recovery",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Poison Resist +40-60%",
            "Poison Length Reduced by 50%",
        ], itemTypeShort: "Helms",
        ladderOnly: true,
    },
    {
        name: "Ground", word: "Shael Io Ort", itemType: "Helms", level: 35, stats: [
            "+20% Faster Hit Recovery",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Lightning Resist +40-60%",
            "Lightning Absorb +10-15%",
        ], itemTypeShort: "Helms",
        ladderOnly: true,
    },
    {
        name: "Hearth", word: "Shael Io Thul", itemType: "Helms", level: 35, stats: [
            "+20% Faster Hit Recovery",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Cold Resist +40-60%",
            "Cold Absorb +10-15%",
            "Cannot be Frozen",
        ], itemTypeShort: "Helms",
        ladderOnly: true,
    },
    {
        name: "Temper", word: "Shael Io Ral", itemType: "Helms", level: 35, stats: [
            "+20% Faster Hit Recovery",
            "+75-100% Enhanced Defense",
            "+10 to Vitality",
            "Increase Maximum Life 5%",
            "Fire Resist +40-60%",
            "Fire Absorb +10-15%",
        ], itemTypeShort: "Helms",
        ladderOnly: true,
    },
    {
        name: "White", word: "Dol Io", itemType: "Wands", level: 35, stats: [
            "+3 to Poison and Bone Skills (Necromancer Only)",
            "+20% Faster Cast Rate",
            "+2 to Bone Spear (Necromancer Only)",
            "+4 to Skeleton Mastery (Necromancer Only)",
            "+3 to Bone Armor (Necromancer Only)",
            "Hit causes monster to flee 25%",
            "+10 to Vitality",
            "+13 to Mana",
            "Magic Damage Reduced by 4",
        ], itemTypeShort: "Wands"
    },
    {
        name: "Memory", word: "Lum Io Sol Eth", itemType: "Staves", level: 37, stats: [
            "+3 to Sorceress Skill Levels",
            "+33% Faster Cast Rate",
            "+9 to Minimum Damage",
            "-25% Target Defence",
            "+3 to Energy Shield (Sorceress Only)",
            "+2 to Static Field (Sorceress Only)",
            "+50% Enhanced Defense",
            "+10 Vitality",
            "+10 Energy",
            "Increase Maximum Mana 20%",
            "Magic Damage Reduced by 7",
        ], itemTypeShort: "Staves (Not Orbs)"
    },
    {
        name: "Smoke", word: "Nef Lum", itemType: "Body Armor", level: 37, stats: [
            "+20% Faster Hit Recovery",
            "+75% Enhanced Defense",
            "+280 Defense vs. Missiles",
            "+10 to Energy",
            "All Resistances +50",
            "-1 to Light Radius",
            "Level 6 Weaken (18 charges)",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Splendor", word: "Eth Lum", itemType: "Shields", level: 37, stats: [
            "+1 to All Skills",
            "+10% Faster Cast Rate",
            "+20% Faster Block Rate",
            "+60-100% Enhanced Defense (varies)",
            "+10 to Energy",
            "Regenerate Mana 15%",
            "50% Extra Gold From Monsters",
            "20% Better Chance of Getting Magic Items",
            "+3 to Light Radius",
        ], itemTypeShort: "Shields"
    },
    {
        name: "Melody", word: "Shael Ko Nef", itemType: "Bows/Crossbows", level: 39, stats: [
            "+3 to Bow and Crossbow Skills (Amazon Only)",
            "+20% Increased Attack Speed",
            "+50% Enhanced Damage",
            "+300% Damage to Undead",
            "+3 to Slow Missiles (Amazon Only)",
            "+3 to Dodge (Amazon Only)",
            "+3 to Critical Strike (Amazon Only)",
            "Knockback",
            "+10 to Dexterity",
        ], itemTypeShort: "Missile Weapons"
    },
    {
        name: "Harmony", word: "Tir Ith Sol Ko", itemType: "Bows/Crossbows", level: 39, stats: [
            "Level 10 Vigor Aura When Equipped",
            "+200-275% Enhanced Damage (varies)",
            "+9 to Minimum Damage",
            "+9 to Maximum Damage",
            "Adds 55-160 Fire Damage",
            "Adds 55-160 Lightning Damage",
            "Adds 55-160 Cold Damage",
            "+2-6 to Valkyrie (varies)",
            "+10 to Dexterity",
            "Regenerate Mana 20%",
            "+2 to Mana After Each Kill",
            "+2 to Light Radius",
            "Level 20 Revive (25 Charges)",
        ], itemTypeShort: "Missile Weapons"
    },
    {
        name: "Hustle",
        word: "Shael Ko Eld",
        itemType: "Swords/Axes/Maces/Scepters/Fists/Polearms/Staves/Spears/Bows/Crossbows/Clubs/Hammers/Wands/Claws",
        level: 39,
        stats: [
            "5% Chance to cast level 1 Burst of Speed on striking",
            "Level 1 Fanaticism Aura",
            "+30% Increased Attack Speed",
            "+180-200% Enhanced Damage",
            "+75% Damage to Undead",
            "+50 to Attack Rating against Undead",
            "+10 to Dexterity",
        ],
        itemTypeShort: "All Weapons",
        ladderOnly: true,
    },
    {
        name: "Hustle", word: "Shael Ko Eld", itemType: "Body Armor", level: 39, stats: [
            "+65% Faster Run/Walk",
            "+40% Increased Attack Speed",
            "+20% Faster Hit Recovery",
            "+6 to Evade",
            "+10 to Dexterity",
            "50% Slower Stamina Drain",
            "+All Resistances +10",
        ], itemTypeShort: "Body Armor",
        ladderOnly: true,
    },
    {
        name: "Lionheart", word: "Hel Lum Fal", itemType: "Body Armor", level: 41, stats: [
            "+20% Enhanced Damage",
            "+25 to Strength",
            "+15 to Dexterity",
            "+20 to Vitality",
            "+10 to Energy",
            "+50 to Life",
            "All Resistances +30",
            "Requirements -15%",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Obedience", word: "Hel Ko Thul Eth Fal", itemType: "Polearms/Spears/Amazon Spears", level: 41, stats: [
            '30% Chance to Cast Level 21 Enchant When You Kill An Enemy',
            '40% Faster Hit Recovery',
            '+370% Enhanced Damage',
            '-25% Target Defense',
            'Adds 3-14 Cold Damage 3 Second Duration (Normal)',
            '-25% to Enemy Fire Resist',
            '40% Chance of Crushing Blow',
            '+200-300 Defense (varies)',
            '+10 to Strength',
            '+10 to Dexterity',
            'All Resistances +20-30 (varies)',
            'Requirements -20%'
        ], itemTypeShort: "Polearms/Spears/Amazon Spears"
    },
    {
        name: "Unbending Will", word: "Fal Io Ith Eld El Hel", itemType: "Swords", level: 41, stats: [
            "18% Chance to cast Level 18 Taunt on striking",
            "+3 To Combat Skills (Barbarian Only)",
            "+20-30% Increased Attack Speed (varies)",
            "+300-350% Enhanced Damage (varies)",
            "+9 To Maximum Damage",
            "+50 To Attack Rating",
            "+75% Damage to Undead",
            "+50 Attack Rating Against Undead",
            "8-10% Life Stolen Per Hit (varies)",
            "Prevent Monster Heal",
            "+10 To Strength",
            "+10 To Vitality",
            "Damage Reduced By 8",
            "+1 Light Radius",
            "Requirements -20%",
        ], itemTypeShort: "Swords",
    },
    {
        name: "Wealth", word: "Lem Ko Tir", itemType: "Body Armor", level: 43, stats: [
            "+10 to Dexterity",
            "+2 to Mana After Each Kill",
            "300% Extra Gold From Monsters",
            "100% Better Chance of Getting Magic Items",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Passion",
        word: "Dol Ort Eld Lem",
        itemType: "Swords/Axes/Maces/Scepters/Fists/Polearms/Staves/Spears/Bows/Crossbows/Clubs/Hammers/Wands/Claws",
        level: 43,
        stats: [
            "+25% Increased Attack Speed",
            "+160-210% Enhanced Damage (varies)",
            "50-80% Bonus to Attack Rating (varies)",
            "+75% Damage to Undead",
            "+50 to Attack Rating Against Undead",
            "Adds 1-50 Lightning Damage",
            "+1 to Berserk",
            "+1 to Zeal",
            "Hit Blinds Target +10",
            "Hit Causes Monster to Flee 25%",
            "75% Extra Gold From Monsters",
            "Level 3 Heart of Wolverine (12 Charges)",
        ],
        itemTypeShort: "All Weapons"
    },
    {
        name: "Lawbringer", word: "Amn Lem Ko", itemType: "Swords/Hammers/Scepters", level: 43, stats: [
            "20% Chance to Cast Level 15 Decrepify On Striking",
            "Level 16-18 Sanctuary Aura When Equipped (varies)",
            "-50% Target Defense",
            "Adds 150-210 Fire Damage",
            "Adds 130-180 Cold Damage",
            "7% Life Stolen Per Hit",
            "Slain Monsters Rest In Peace",
            "+200-250 Defense Vs. Missile (varies)",
            "+10 to Dexterity",
            "75% Extra Gold From Monsters",
        ], itemTypeShort: "Swords/Hammers/Scepters"
    },
    {
        name: "Voice of Reason", word: "Lem Ko El Eld", itemType: "Swords/Maces", level: 43, stats: [
            "15% Chance to Cast Level 13 Frozen Orb On Striking",
            "18% Chance to Cast Level 20 Ice Blast On Striking",
            "+50 to Attack Rating",
            "+220-350% Damage to Demons (varies)",
            "+355-375% Damage to Undead (varies)",
            "+50 to Attack Rating Against Undead",
            "Adds 100-220 Cold Damage",
            "-24% to Enemy Cold Resistance",
            "+10 to Dexterity",
            "Cannot Be Frozen",
            "75% Extra Gold From Monsters",
            "+1 to Light Radius",
        ], itemTypeShort: "Swords/Maces"
    },
    {
        name: "Treachery", word: "Shael Thul Lem", itemType: "Body Armor", level: 43, stats: [
            "5% Chance to Cast Level 15 Fade When Struck",
            "25% Chance to Cast level 15 Venom On Striking",
            "+2 to Assassin Skills",
            "+45% Increased Attack Speed",
            "+20% Faster Hit Recovery",
            "Cold Resist +30%",
            "50% Extra Gold From Monsters",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Enlightenment", word: "Pul Ral Sol", itemType: "Body Armor", level: 45, stats: [
            "5% Chance to Cast Level 15 Blaze When Struck",
            "5% Chance to Cast level 15 Fire Ball On Striking",
            "+2 to Sorceress Skill Levels",
            "+1 to Warmth",
            "+30% Enhanced Defense",
            "Fire Resist +30%",
            "Damage Reduced by 7",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Wisdom", word: "Pul Ith Eld", itemType: "Helms", level: 45, stats: [
            "+33% Piercing Attack",
            "+15-25% Bonus to Attack Rating (varies)",
            "4-8% Mana Stolen Per Hit (varies)",
            "+30% Enhanced Defense",
            "+10 Energy",
            "15% Slower Stamina Drain",
            "Cannot Be Frozen",
            "+5 Mana After Each Kill",
            "15% Damage Taken Goes to Mana",
        ], itemTypeShort: "Helms",
    },
    {
        name: "Crescent Moon", word: "Shael Um Tir", itemType: "Axes/Swords/Polearms", level: 47, stats: [
            "10% Chance to Cast Level 17 Chain Lightning On Striking",
            "7% Chance to Cast Level 13 Static Field On Striking",
            "+20% Increased Attack Speed",
            "+180-220% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "-35% to Enemy Lightning Resistance",
            "25% Chance of Open Wounds",
            "+9-11 Magic Absorb (varies)",
            "+2 to Mana After Each Kill",
            "Level 18 Summon Spirit Wolf (30 Charges)",
        ], itemTypeShort: "Axes/Swords/Polearms"
    },
    {
        name: "Duress", word: "Shael Um Thul", itemType: "Body Armor", level: 47, stats: [
            "40% Faster hit Recovery",
            "+10-20% Enhanced Damage (varies)",
            "Adds 37-133 Cold Damage",
            "15% Crushing Blow",
            "33% Open Wounds",
            "+150-200% Enhanced Defense (varies)",
            "-20% Slower Stamina Drain",
            "Cold Resist +45%",
            "Lightning Resist +15%",
            "Fire Resist +15%",
            "Poison Resist +15%",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Gloom", word: "Fal Um Pul", itemType: "Body Armor", level: 47, stats: [
            "15% Chance to Cast Level 3 Dim Vision When Struck",
            "+10% Faster Hit Recovery",
            "+200-260% Enhanced Defense (varies)",
            "+10 to Strength",
            "All Resistances +45",
            "Half Freeze Duration",
            "5% Damage Taken Goes to Mana",
            "-3 to Light Radius",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Stone", word: "Shael Um Pul Lum", itemType: "Body Armor", level: 47, stats: [
            "+60% Faster Hit Recovery",
            "+250-290% Enhanced Defense (varies)",
            "+300 Defense Vs. Missile",
            "+16 to Strength",
            "+16 to Vitality",
            "+10 to Energy",
            "All Resistances +15",
            "Level 16 Molten Boulder (80 Charges)",
            "Level 16 Clay Golem (16 Charges)",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Bone", word: "Sol Um Um", itemType: "Body Armor", level: 47, stats: [
            "15% Chance to Cast level 10 Bone Armor When Struck",
            "15% Chance to Cast level 10 Bone Spear On Striking",
            "+2 to Necromancer Skill Levels",
            "+100-150 to Mana (varies)",
            "All Resistances +30",
            "Damage Reduced by 7",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Venom",
        word: "Tal Dol Mal",
        itemType: "Swords/Axes/Maces/Scepters/Fists/Polearms/Staves/Spears/Bows/Crossbows/Clubs/Hammers/Wands/Claws",
        level: 49,
        stats: [
            "Ignore Target's Defense",
            "+273 Poison Damage Over 6 Seconds",
            "7% Mana Stolen Per Hit",
            "Prevent Monster Heal",
            "Hit Causes Monster to Flee 25%",
            "Level 13 Poison Nova (11 Charges)",
            "Level 15 Poison Explosion (27 Charges)",
        ],
        itemTypeShort: "All Weapons"
    },
    {
        name: "Prudence", word: "Mal Tir", itemType: "Body Armor", level: 49, stats: [
            "+25% Faster Hit Recovery",
            "+140-170% Enhanced Defense (varies)",
            "All Resistances +25-35 (varies)",
            "Damage Reduced by 3",
            "Magic Damage Reduced by 17",
            "+2 to Mana After Each Kill",
            "+1 to Light Radius",
            "Repairs Durability 1 In 4 Seconds",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Sanctuary", word: "Ko Ko Mal", itemType: "Shields", level: 49, stats: [
            '+20% Faster Hit Recovery',
            '+20% Faster Block Rate',
            '20% Increased Chance of Blocking',
            '+130-160% Enhanced Defense',
            '+250 Defense vs. Missile',
            '+20 to Dexterity',
            'All Resistances +50-70',
            'Magic Damage Reduced by 7',
            'Level 12 Slow Missiles (60 Charges)'
        ], itemTypeShort: "Shields"
    },
    {
        name: "Oath", word: "Shael Pul Mal Lum", itemType: "Swords/Axes/Maces", level: 49, stats: [
            "Indestructible",
            "30% Chance to Cast Level 20 Bone Spirit On Striking",
            "+50% Increased Attack Speed",
            "+210-340% Enhanced Damage (varies)",
            "+75% Damage to Demons",
            "+100 to Attack Rating Against Demons",
            "Prevent Monster Heal",
            "+10 to Energy",
            "+10-15 Magic Absorb (varies)",
            "Level 16 Heart of Wolverine (20 Charges)",
            "Level 17 Iron Golem (14 Charges)",
        ], itemTypeShort: "Swords/Axes/Maces"
    },
    {
        name: "Rain", word: "Ort Mal Ith", itemType: "Body Armor", level: 49, stats: [
            "5% Chance to Cast Level 15 Cyclone Armor When Struck",
            "5% Chance to Cast Level 15 Twister On Striking",
            "+2 to Druid Skills",
            "+100-150 to Mana (varies)",
            "Lightning Resist +30%",
            "Magic Damage Reduced By 7",
            "15% Damage Taken Goes to Mana",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Call to Arms",
        word: "Amn Ral Mal Ist Ohm",
        itemType: "Swords/Axes/Maces/Scepters/Fists/Polearms/Staves/Spears/Bows/Crossbows/Clubs/Hammers/Wands/Claws",
        level: 51,
        stats: [
            "+1 to All Skills",
            "+40% Increased Attack Speed",
            "+240-290% Enhanced Damage (varies)",
            "Adds 5-30 Fire Damage",
            "7% Life Stolen Per Hit",
            "+2-6 to Battle Command (varies)",
            "+1-6 to Battle Orders (varies)",
            "+1-4 to Battle Cry (varies)",
            "Prevent Monster Heal",
            "Replenish Life +12",
            "30% Better Chance of Getting Magic Items",
        ],
        itemTypeShort: "All Weapons"
    },
    {
        name: "Delirium", word: "Lem Ist Io", itemType: "Helms", level: 51, stats: [
            "1% Chance to Cast lvl 50 Delirium When Struck",
            "6% Chance to Cast lvl 14 Mind Blast When Struck",
            "14% Chance to Cast lvl 13 Terror When Struck",
            "11% Chance to Cast lvl 18 Confuse On Striking",
            "+2 to All Skills",
            "+261 Defense",
            "+10 to Vitality",
            "50% Extra Gold From Monsters",
            "25% Better Chance of Getting Magic Items",
            "Level 17 Attract (60 Charges)",
        ], itemTypeShort: "Helms"
    },
    {
        name: "Kingslayer", word: "Mal Um Gul Fal", itemType: "Swords/Axes", level: 53, stats: [
            "+30% Increased Attack Speed",
            "+230-270% Enhanced Damage (varies)",
            "-25% Target Defense",
            "20% Bonus to Attack Rating",
            "33% Chance of Crushing Blow",
            "50% Chance of Open Wounds",
            "+1 to Vengeance",
            "Prevent Monster Heal",
            "+10 to Strength",
            "40% Extra Gold From Monsters",
        ], itemTypeShort: "Swords/Axes"
    },
    {
        name: "Rift", word: "Hel Ko Lem Gul", itemType: "Polearms/Scepters", level: 53, stats: [
            "20% Chance to Cast Level 16 Tornado On Striking",
            "16% Chance to Cast Level 21 Frozen Orb On Attack",
            "20% Bonus to Attack Rating",
            "Adds 160-250 Magic Damage",
            "Adds 60-180 Fire Damage",
            "+5-10 to All Attributes (varies)",
            "+10 to Dexterity",
            "38% Damage Taken Goes to Mana",
            "75% Extra Gold From Monsters",
            "Level 15 Iron Maiden (40 Charges)",
            "Requirements -20%",
        ], itemTypeShort: "Polearms/Scepters"
    },
    {
        name: "Principle", word: "Ral Gul Eld", itemType: "Body Armor", level: 53, stats: [
            "100% Chance to Cast Level 5 Holy Bolt On Striking",
            "+2 to Paladin Skill Levels",
            "+50% Damage to Undead",
            "+100-150 to Life (varies)",
            "15% Slower Stamina Drain",
            "+5% to Maximum Poison Resist",
            "Fire Resist +30%",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Mosaic", word: "Mal Gul Amn", itemType: "Claws", level: 53, stats: [
            "+50% chance for finishing moves to not consume charges",
            "When a finisher is executed this way, it now refreshes the expiration timer of the stack",
            "+2 to Martial Arts (Assassin only)",
            "+20% Increased Attack Speed",
            "+200-250% Enhanced Damage",
            "+20% Bonus to Attack Rating",
            "7% Life Steal",
            "+8-15% to Cold Skill Damage",
            "+8-15% to Lightning Skill Damage",
            "+8-15% to Fire Skill Damage",
            "Prevent Monster Heal",
        ], itemTypeShort: "Claws",
        ladderOnly: true,
    },
    {
        name: "Silence",
        word: "Dol Eld Hel Ist Tir Vex",
        itemType: "Swords/Axes/Maces/Scepters/Fists/Polearms/Staves/Spears/Bows/Crossbows/Clubs/Hammers/Wands/Claws",
        level: 55,
        stats: [
            "+2 to All Skills",
            "+20% Increased Attack Speed",
            "+20% Faster Hit Recovery",
            "+200% Enhanced Damage",
            "+75% Damage to Undead",
            "+50 to Attack Rating Against Undead",
            "11% Mana Stolen Per Hit",
            "Hit Blinds Target +33",
            "Hit Causes Monster to Flee 25%",
            "All Resistances +75",
            "+2 to Mana After Each Kill",
            "30% Better Chance of Getting Magic Items",
            "Requirements -20%",
        ],
        itemTypeShort: "All Weapons"
    },
    {
        name: "Heart of the Oak", word: "Ko Vex Pul Thul", itemType: "Staves/Maces", level: 55, stats: [
            "+3 to All Skills",
            "+40% Faster Cast Rate",
            "+75% Damage to Demons",
            "+100 to Attack Rating Against Demons",
            "Adds 3-14 Cold Damage",
            "7% Mana Stolen Per Hit",
            "+10 to Dexterity",
            "Replenish Life +20",
            "Increase Maximum Mana 15%",
            "All Resistances +30-40 (varies)",
            "Level 4 Oak Sage (25 Charges)",
            "Level 14 Raven (60 Charges)",
        ], itemTypeShort: "Staves/Maces"
    },
    {
        name: "Death", word: "Hel El Vex Ort Gul", itemType: "Swords/Axes", level: 55, stats: [
            "Indestructible",
            "100% Chance to Cast Level 44 Chain Lightning When You Die",
            "25% Chance to Cast Level 18 Glacial Spike On Attack",
            "+300-385% Enhanced Damage (varies)",
            "20% Bonus to Attack Rating",
            "+50 to Attack Rating",
            "Adds 1-50 Lightning Damage",
            "7% Mana Stolen Per Hit",
            "50% Chance of Crushing Blow",
            "(0.5*Clvl)% Deadly Strike (Based on Character Level)",
            "+1 to Light Radius",
            "Level 22 Blood Golem (15 Charges)",
            "Requirements -20%",
        ], itemTypeShort: "Swords/Axes"
    },
    {
        name: "Flickering Flame", word: "Nef Pul Vex", itemType: "Helms", level: 55, stats: [
            "Level 4-8 Resist Fire Aura When Equipped (varies)",
            "+3 To Fire Skills",
            "-10-15% to Enemy Fire Resistance (varies)",
            "+30% Enhanced Defense",
            "+30 Defense Vs. Missile",
            "+50-75 To Mana (varies)",
            "Half Freeze Duration",
            "+5% To Maximum Fire Resist",
            "Poison Length Reduced by 50%",
        ], itemTypeShort: "Helms",
    },
    {
        name: "Chaos", word: "Fal Ohm Um", itemType: "Claws", level: 57, stats: [
            "9% Chance to Cast Level 11 Frozen Orb On Striking",
            "11% Chance to Cast Level 9 Charged Bolt On Striking",
            "+35% Increased Attacked Speed",
            "+240-290% Enhanced Damage (varies)",
            "Adds 216-471 Magic Damage",
            "25% Chance of Open Wounds",
            "+1 to Whirlwind",
            "+10 to Strength",
            "+15 Life After Each Demon Kill",
        ], itemTypeShort: "Claws"
    },
    {
        name: "Exile", word: "Vex Ohm Ist Dol", itemType: "Paladin Shields", level: 57, stats: [
            "15% Chance to Cast Level 5 Life Tap On Striking",
            "Level 13-16 Defiance Aura When Equipped (varies)",
            "+2 to Offensive Auras (Paladin Only)",
            "+30% Faster Block Rate",
            "Freezes Target",
            "+220-260% Enhanced Defense (varies)",
            "Replenish Life +7",
            "+5% to Maximum Cold Resist",
            "+5% to Maximum Fire Resist",
            "25% Better Chance Of Getting Magic Items",
            "Repairs 1 Durability every 4 seconds",
        ], itemTypeShort: "Paladin Shields"
    },
    {
        name: "Fortitude",
        word: "El Sol Dol Lo",
        itemType: "Swords/Axes/Maces/Scepters/Fists/Polearms/Staves/Spears/Bows/Crossbows/Clubs/Hammers/Wands/Claws/Body Armor",
        level: 59,
        stats: [
            "20% Chance to Cast Level 15 Chilling Armor when Struck",
            "+25% Faster Cast Rate",
            "+300% Enhanced Damage",
            "+200% Enhanced Defense",
            "+((8-12)*0.125*Clvl) to Life (Based on Character Level) (varies)",
            "All Resistances +25-30 (varies)",
            "12% Damage Taken Goes to Mana",
            "+1 to Light Radius",
            "+9 to Minimum Damage (Weapons)",
            "+50 to Attack Rating (Weapons)",
            "20% Deadly Strike (Weapons)",
            "Hit Causes Monster to Flee 25% (Weapons)",
            "+15 Defense (Armor)",
            "Replenish Life +7 (Armor)",
            "+5% to Maximum Lightning Resist (Armor)",
            "Damage Reduced By 7 (Armor)",
        ],
        itemTypeShort: "All Weapons/Body Armor"
    },
    {
        name: "Grief", word: "Eth Tir Lo Mal Ral", itemType: "Swords/Axes", level: 59, stats: [
            "35% Chance to Cast Level 15 Venom On Striking",
            "+30-40% Increased Attack Speed (varies)",
            "Damage +340-400 (varies)",
            "Ignore Target's Defense",
            "-25% Target Defense",
            "+(1.875*Clvl)% Damage to Demons (Based on Character Level)",
            "Adds 5-30 Fire Damage",
            "-20-25% to Enemy Poison Resistance (varies)",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "+2 to Mana After Each Kill",
            "+10-15 Life After Each Kill (varies)",
        ], itemTypeShort: "Swords/Axes",
        bases: [
            { item: 'Berserker Axe', foundIn: '' },
            { item: 'Phase Blade', foundIn: '' }
        ],
    },
    {
        name: "Bramble", word: "Ral Ohm Sur Eth", itemType: "Body Armor", level: 61, stats: [
            "Level 15-21 Thorns Aura When Equipped (varies)",
            "+50% Faster Hit Recovery",
            "+25-50% to Poison Skill Damage (varies)",
            "+300 Defense",
            "Increase Maximum Mana 5%",
            "Regenerate Mana 15%",
            "+5% to Maximum Cold Resist",
            "Fire Resist +30%",
            "Poison Resist +100%",
            "+13 Life After Each Kill",
            "Level 13 Spirit of Barbs (33 Charges)",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Wind",
        word: "Sur El",
        itemType: "Axes/Fists/Maces/Polearms/Staves/Spears/Swords/Scepters/Clubs/Hammers",
        level: 61,
        stats: [
            "10% Chance to Cast Level 9 Tornado On Striking",
            "+20% Faster Run/Walk",
            "+40% Increased Attack Speed",
            "+15% Faster Hit Recovery",
            "+120-160% Enhanced Damage (varies)",
            "-50% Target Defense",
            "+50 to Attack Rating",
            "Hit Blinds Target",
            "+1 to Light Radius",
            "Level 13 Twister (127 Charges)",
        ],
        itemTypeShort: "Melee Weapons"
    },
    {
        name: "Dragon", word: "Sur Lo Sol", itemType: "Body Armor/Shields", level: 61, stats: [
            "20% Chance to Cast Level 18 Venom When Struck",
            "12% Chance to Cast Level 15 Hydra On Striking",
            "Level 14 Holy Fire Aura When Equipped",
            "+360 Defense",
            "+230 Defense Vs. Missile",
            "+3-5 to All Attributes (varies)",
            "+(0.375*Clvl) to Strength (Based on Character Level)",
            "+5% to Maximum Lightning Resist",
            "Damage Reduced by 7",
            "Increase Maximum Mana 5% (Armor)",
            "+50 to Mana (Shields)",
        ], itemTypeShort: "Body Armor/Shields"
    },
    {
        name: "Beast", word: "Ber Tir Um Mal Lum", itemType: "Axes/Scepters/Hammers", level: 63, stats: [
            "Level 9 Fanaticism Aura When Equipped",
            "+40% Increased Attack Speed",
            "+240-270% Enhanced Damage (varies)",
            "20% Chance of Crushing Blow",
            "25% Chance of Open Wounds",
            "+3 to Werebear",
            "+3 to Lycanthropy",
            "Prevent Monster Heal",
            "+25-40 to Strength (varies)",
            "+10 to Energy",
            "+2 to Mana After Each Kill",
            "Level 13 Summon Grizzly (5 Charges)",
        ], itemTypeShort: "Axes/Scepters/Hammers",
        bases: [
            { item: 'Berserker Axe', foundIn: '' }
        ],
    },
    {
        name: "Chains of Honor", word: "Dol Um Ber Ist", itemType: "Body Armor", level: 63, stats: [
            "+2 to All Skills",
            "+200% Damage to Demons",
            "+100% Damage to Undead",
            "8% Life Stolen Per Hit",
            "+70% Enhanced Defense",
            "+20 to Strength",
            "Replenish Life +7",
            "All Resistances +65",
            "Damage Reduced By 8%",
            "25% Better Chance of Getting Magic Items",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Eternity",
        word: "Amn Ber Ist Sol Sur",
        itemType: "Axes/Fists/Maces/Polearms/Staves/Spears/Swords/Scepters/Clubs/Hammers",
        level: 63,
        stats: [
            "Indestructible",
            "+260-310% Enhanced Damage (varies)",
            "+9 to Minimum Damage",
            "7% Life Stolen Per Hit",
            "20% Chance of Crushing Blow",
            "Hit Blinds Target",
            "Slows Target By 33%",
            "Replenish Mana 16%",
            "Cannot Be Frozen",
            "30% Better Chance Of Getting Magic Items",
            "Level 8 Revive (88 Charges)",
        ],
        itemTypeShort: "Melee Weapons"
    },
    {
        name: "Infinity", word: "Ber Mal Ber Ist", itemType: "Polearms/Spears/Amazon Spears", level: 63, stats: [
            "50% Chance to Cast Level 20 Chain Lightning When You Kill An Enemy",
            "Level 12 Conviction Aura When Equipped",
            "+35% Faster Run/Walk",
            "+255-325% Enhanced Damage (varies)",
            "-(45-55)% to Enemy Lightning Resistance (varies)",
            "40% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "+(0.5*Clvl) to Vitality (Based on Character Level)",
            "30% Better Chance of Getting Magic Items",
            "Level 21 Cyclone Armor (30 Charges)",
        ], itemTypeShort: "Polearms/Spears/Amazon Spears"
    },
    {
        name: "Wrath", word: "Pul Lum Ber Mal", itemType: "Bows/Crossbows", level: 63, stats: [
            "30% Chance to Cast Level 1 Decrepify On Striking",
            "5% Chance to Cast Level 10 Life Tap On Striking",
            "+375% Damage to Demons",
            "+100 to Attack Rating Against Demons",
            "+250-300% Damage to Undead (varies)",
            "Adds 85-120 Magic Damage",
            "Adds 41-240 Lightning Damage",
            "20% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "+10 to Energy",
            "Cannot Be Frozen",
        ], itemTypeShort: "Missile Weapons"
    },
    {
        name: "Fury",
        word: "Jah Gul Eth",
        itemType: "Axes/Fists/Maces/Polearms/Staves/Spears/Swords/Scepters/Clubs/Hammers",
        level: 65,
        stats: [
            "40% Increased Attack Speed",
            "+209% Enhanced Damage",
            "Ignores Target Defense",
            "-25% Target Defense",
            "20% Bonus to Attack Rating",
            "6% Life Stolen Per Hit",
            "33% Chance Of Deadly Strike",
            "66% Chance Of Open Wounds",
            "+5 to Frenzy (Barbarian Only)",
            "Prevent Monster Heal",
        ],
        itemTypeShort: "Melee Weapons"
    },
    {
        name: "Enigma", word: "Jah Ith Ber", itemType: "Body Armor", level: 65, stats: [
            "+2 to All Skills",
            "+45% Faster Run/Walk",
            "+1 to Teleport",
            "+750-775 Defense (Varies)",
            "+(0.75*Clvl) to Strength (Based On Character Level)",
            "Increase Maximum Life 5%",
            "Damage Reduced By 8%",
            "+14 Life After Each Kill",
            "15% Damage Taken Goes to Mana",
            "(1*Clvl)% Better Chance of Getting Magic Items (Based On Character Level)",
        ], itemTypeShort: "Body Armor"
    },
    {
        name: "Famine", word: "Fal Ohm Ort Jah", itemType: "Axes/Hammers", level: 65, stats: [
            "+30% Increased Attack Speed",
            "+320-370% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "Adds 180-200 Magic Damage",
            "Adds 50-200 Fire Damage",
            "Adds 51-250 Lightning Damage",
            "Adds 50-200 Cold Damage",
            "12% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+10 to Strength",
        ], itemTypeShort: "Axes/Hammers"
    },
    {
        name: "Brand", word: "Jah Lo Mal Gul", itemType: "Bows/Crossbows", level: 65, stats: [
            "35% Chance to Cast Level 14 Amplify Damage When Struck",
            "100% Chance to Cast Level 18 Bone Spear On Striking",
            "Fires Explosive Arrows or Bolts (15)",
            "+260-340% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "20% Bonus to Attack Rating",
            "+280-330% Damage to Demons (varies)",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "Knockback",
        ], itemTypeShort: "Missile Weapons"
    },
    {
        name: "Destruction", word: "Vex Lo Ber Jah Ko", itemType: "Polearms/Swords", level: 65, stats: [
            "23% Chance to Cast Level 12 Volcano On Striking",
            "5% Chance to Cast Level 23 Molten Boulder On Striking",
            "100% Chance to Cast level 45 Meteor When You Die",
            "15% Chance to Cast Level 22 Nova On Attack",
            "+350% Enhanced Damage",
            "Ignore Target's Defense",
            "Adds 100-180 Magic Damage",
            "7% Mana Stolen Per Hit",
            "20% Chance Of Crushing Blow",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "+10 to Dexterity",
        ], itemTypeShort: "Polearms/Swords"
    },
    {
        name: "Dream", word: "Io Jah Pul", itemType: "Helms/Shields", level: 65, stats: [
            "10% Chance to Cast Level 15 Confuse When Struck",
            "Level 15 Holy Shock Aura When Equipped",
            "+20-30% Faster Hit Recovery (varies)",
            "+30% Enhanced Defense",
            "+150-220 Defense (varies)",
            "+10 to Vitality",
            "+(0.625*Clvl) to Mana (Based On Character Level)",
            "All Resistances +5-20 (varies)",
            "12-25% Better Chance of Getting Magic Items (varies)",
            "Increase Maximum Life 5% (Helms)",
            "+50 to Life (Shields)",
        ], itemTypeShort: "Helms/Shields"
    },
    {
        name: "Faith", word: "Ohm Jah Lem Eld", itemType: "Bows/Crossbows", level: 65, stats: [
            "Level 12-15 Fanaticism Aura When Equipped (varies)",
            "+1-2 to All Skills (varies)",
            "+330% Enhanced Damage",
            "Ignore Target's Defense",
            "300% Bonus to Attack Rating",
            "+75% Damage to Undead",
            "+50 to Attack Rating Against Undead",
            "+120 Fire Damage",
            "All Resistances +15",
            "10% Reanimate As: Returned",
            "75% Extra Gold From Monsters",
        ], itemTypeShort: "Missile Weapons"
    },
    {
        name: "Ice", word: "Amn Shael Jah Lo", itemType: "Bows/Crossbows", level: 65, stats: [
            "100% Chance to Cast Level 40 Blizzard When You Level-up",
            "25% Chance to Cast Level 22 Frost Nova On Striking",
            "Level 18 Holy Freeze Aura When Equipped",
            "+20% Increased Attack Speed",
            "+140-210% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "+25-30% to Cold Skill Damage (varies)",
            "7% Life Stolen Per Hit",
            "-20% to Enemy Cold Resistance",
            "20% Deadly Strike",
            "(3.125*Clvl)% Extra Gold From Monsters (Based on Character Level)",
        ], itemTypeShort: "Missile Weapons"
    },
    {
        name: "Last Wish", word: "Jah Mal Jah Sur Jah Ber", itemType: "Swords/Hammers", level: 65, stats: [
            "6% Chance to Cast Level 11 Fade When Struck",
            "10% Chance to Cast Level 18 Life Tap On Striking",
            "20% Chance to Cast Level 20 Charged Bolt On Attack",
            "Level 17 Might Aura When Equipped",
            "+330-375% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "60-70% Chance of Crushing Blow (varies)",
            "Prevent Monster Heal",
            "Hit Blinds Target",
            "(0.5*Clvl)% Chance of Getting Magic Items (Based on Character Level)",
        ], itemTypeShort: "Swords/Hammers"
    },
    {
        name: "Phoenix",
        word: "Vex Vex Lo Jah",
        itemType: "Swords/Axes/Maces/Scepters/Fists/Polearms/Staves/Spears/Bows/Crossbows/Clubs/Hammers/Wands/Claws/Shields",
        level: 65,
        stats: [
            '100% Chance to Cast level 40 Blaze When You Level-up',
            '40% Chance to Cast Level 22 Firestorm On Striking',
            'Level 10-15 Redemption Aura When Equipped',
            '+350-400% Enhanced Damage',
            '-28% to Enemy Fire Resist',
            '+350-400 Defense vs. Missile',
            '+15-21 Fire Absorb',
            `Ignores Target's Defense (Weapon)`,
            '14% Mana Stolen Per Hit (Weapon)',
            '20% Deadly Strike (Weapon)',
            '+50 to Life (Shield)',
            '+5% to Maximum Lightning Resist (Shield)',
            '+10% to Maximum Fire Resist (Shield)'
        ],
        itemTypeShort: "Weapons/Shields"
    },
    {
        name: "Doom", word: "Hel Ohm Um Lo Cham", itemType: "Axes/Polearms/Hammers", level: 67, stats: [
            "5% Chance to Cast Level 18 Volcano On Striking",
            "Level 12 Holy Freeze Aura When Equipped",
            "+2 to All Skills",
            "+45% Increased Attack Speed",
            "+330-370% Enhanced Damage (varies)",
            "-40-60% to Enemy Cold Resistance (varies)",
            "20% Deadly Strike",
            "25% Chance of Open Wounds",
            "Prevent Monster Heal",
            "Freezes Target +3",
            "Requirements -20%",
        ], itemTypeShort: "Axes/Polearms/Hammers"
    },
    {
        name: "Hand of Justice",
        word: "Sur Cham Amn Lo",
        itemType: "Swords/Axes/Maces/Scepters/Fists/Polearms/Staves/Spears/Bows/Crossbows/Clubs/Hammers/Wands/Claws",
        level: 67,
        stats: [
            "100% Chance to Cast Level 36 Blaze When You Level-Up",
            "100% Chance to Cast Level 48 Meteor When You Die",
            "Level 16 Holy Fire Aura When Equipped",
            "+33% Increased Attack Speed",
            "+280-330% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "-20% to Enemy Fire Resistance",
            "7% Life Stolen Per Hit",
            "20% Deadly Strike",
            "Hit Blinds Target",
            "Freezes Target +3",
        ],
        itemTypeShort: "Weapons"
    },
    {
        name: "Pride", word: "Cham Sur Io Lo", itemType: "Polearms/Spears/Amazon Spears", level: 67, stats: [
            "25% Chance to Cast Level 17 Fire Wall When Struck",
            "Level 16-20 Concentration Aura When Equipped (varies)",
            "260-300% Bonus to Attack Rating (varies)",
            "+(1*Clvl)% Damage to Demons (Based on Character Level)",
            "Adds 50-280 Lightning Damage",
            "20% Deadly Strike",
            "Hit Blinds Target",
            "Freezes Target +3",
            "+10 to Vitality",
            "Replenish Life +8",
            "(1.875*Clvl)% Extra Gold From Monsters (Based on Character Level)",
        ], itemTypeShort: "Polearms/Spears/Amazon Spears"
    },
    {
        name: "Plague", word: "Cham Shael Um", itemType: "Swords/Claws/Daggers", level: 67, stats: [
            "20% Chance to cast level 12 Lower Resist when struck",
            "25% Chance to cast level 15 Poison Nova on striking",
            "Level 13-17 Cleansing Aura When Equipped (varies)",
            "+1-2 All Skills",
            "+20% Increased Attack Speed",
            "+220-320% Enhanced Damage (varies)",
            "-23% To Enemy Poison Resistance",
            "0.3% (0-29.7) Deadly Strike (Based on Character Level)",
            "+25% Chance of Open Wounds",
            "Freezes Target +3",
        ],
        itemTypeShort: "Swords/Daggers/Claws"
    },
    {
        name: "Metamorphosis", word: "Io Cham Fal", itemType: "Helms", level: 67, stats: [
            "Werewolf strikes grant Mark for 180 seconds",
            "Mark of the Wolf:",
            "+30% Bonus to Attack Rating",
            "Increase Maximum Life 40%",
            "Werebear strikes grant Mark for 180 seconds",
            "Mark of the Bear:",
            "+25% Attack Speed",
            "+25% Chance of Crushing Blow",
            "Physical Damage Received Reduced by 20%",
            "+5 to Shape Shifting Skills (Druid only)",
        ],
        itemTypeShort: "Helms",
        ladderOnly: true
    },
    {
        name: "Obsession",
        word: "Zod Ist Lem Lum Io Nef",
        itemType: "Staves",
        level: 69,
        stats: [
            "Indestructible",
            "24% Chance to cast level 10 Weaken when struck",
            "+4 To All Skills",
            "+65% Faster Cast Rate",
            "+60% Faster Hit Recovery",
            "Knockback",
            "+10 To Vitality",
            "+10 To Energy",
            "Increase Maximum Life 15-25% (varies)",
            "Regenerate Mana 15-30% (varies)",
            "All Resistances +60-70 (varies)",
            "75% Extra Gold from Monsters",
            "30% Better Chance of Getting Magic Items",
        ],
        itemTypeShort: "Staves"
    },
    {
        name: "Mist", word: "Cham Shael Gul Thul Ith", itemType: "Bows/Crossbows", level: 67, stats: [
            "Level 8-12 Concentration Aura When Equipped (varies)",
            "+3 To All Skills",
            "20% Increased Attack Speed",
            "+100% Piercing Attack",
            "+325-375% Enhanced Damage (varies)",
            "+9 To Maximum Damage",
            "20% Bonus to Attack Rating",
            "Adds 3-14 Cold Damage",
            "Freeze Target +3",
            "+24 Vitality",
            "All Resistances +40",
        ], itemTypeShort: "Missile Weapons",
    },
    {
        name: "Breath of the Dying",
        word: "Vex Hel El Eld Zod Eth",
        itemType: "Swords/Axes/Maces/Scepters/Fists/Polearms/Staves/Spears/Bows/Crossbows/Clubs/Hammers/Wands/Claws",
        level: 69,
        stats: [
            "50% Chance to Cast Level 20 Poison Nova When You Kill An Enemy",
            "Indestructible",
            "+60% Increased Attack Speed",
            "+350-400% Enhanced Damage (varies)",
            "-25% Target Defense",
            "+50 to Attack Rating",
            "+200% Damage to Undead",
            "+50 to Attack Rating Against Undead",
            "7% Mana Stolen Per Hit",
            "12-15% Life Stolen Per Hit (varies)",
            "Prevent Monster Heal",
            "+30 to All Attributes",
            "+1 to Light Radius",
            "Requirements -20%",
        ],
        itemTypeShort: "Weapons"
    }
];
//# sourceMappingURL=Runewords.js.map