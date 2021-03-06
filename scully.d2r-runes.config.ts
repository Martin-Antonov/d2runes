import {ScullyConfig} from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "d2r-runes",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {},
  extraRoutes: [
    "/runewords/nadir",
    "/runewords/steel",
    "/runewords/malice",
    "/runewords/stealth",
    "/runewords/leaf",
    "/runewords/ancient'spledge",
    "/runewords/holythunder",
    "/runewords/zephyr",
    "/runewords/pattern",
    "/runewords/king'sgrace",
    "/runewords/strength",
    "/runewords/edge",
    "/runewords/myth",
    "/runewords/spirit",
    "/runewords/honor",
    "/runewords/lore",
    "/runewords/radiance",
    "/runewords/insight",
    "/runewords/rhyme",
    "/runewords/peace",
    "/runewords/black",
    "/runewords/white",
    "/runewords/memory",
    "/runewords/smoke",
    "/runewords/splendor",
    "/runewords/melody",
    "/runewords/harmony",
    "/runewords/lionheart",
    "/runewords/obedience",
    "/runewords/unbendingwill",
    "/runewords/wealth",
    "/runewords/passion",
    "/runewords/lawbringer",
    "/runewords/voiceofreason",
    "/runewords/treachery",
    "/runewords/enlightenment",
    "/runewords/wisdom",
    "/runewords/crescentmoon",
    "/runewords/duress",
    "/runewords/gloom",
    "/runewords/stone",
    "/runewords/bone",
    "/runewords/venom",
    "/runewords/prudence",
    "/runewords/sanctuary",
    "/runewords/oath",
    "/runewords/rain",
    "/runewords/calltoarms",
    "/runewords/delirium",
    "/runewords/kingslayer",
    "/runewords/rift",
    "/runewords/principle",
    "/runewords/silence",
    "/runewords/heartoftheoak",
    "/runewords/death",
    "/runewords/flickeringflame",
    "/runewords/chaos",
    "/runewords/exile",
    "/runewords/fortitude",
    "/runewords/grief",
    "/runewords/bramble",
    "/runewords/wind",
    "/runewords/dragon",
    "/runewords/beast",
    "/runewords/chainsofhonor",
    "/runewords/eternity",
    "/runewords/infinity",
    "/runewords/wrath",
    "/runewords/fury",
    "/runewords/enigma",
    "/runewords/famine",
    "/runewords/brand",
    "/runewords/destruction",
    "/runewords/dream",
    "/runewords/faith",
    "/runewords/ice",
    "/runewords/lastwish",
    "/runewords/phoenix",
    "/runewords/doom",
    "/runewords/handofjustice",
    "/runewords/pride",
    "/runewords/plague",
    "/runewords/obsession",
    "/runewords/mist",
    "/runewords/breathofthedying",
    "/runes/El",
    "/runes/Eld",
    "/runes/Tir",
    "/runes/Nef",
    "/runes/Eth",
    "/runes/Ith",
    "/runes/Tal",
    "/runes/Ral",
    "/runes/Ort",
    "/runes/Thul",
    "/runes/Amn",
    "/runes/Sol",
    "/runes/Shael",
    "/runes/Dol",
    "/runes/Hel",
    "/runes/Io",
    "/runes/Lum",
    "/runes/Ko",
    "/runes/Fal",
    "/runes/Lem",
    "/runes/Pul",
    "/runes/Um",
    "/runes/Mal",
    "/runes/Ist",
    "/runes/Gul",
    "/runes/Vex",
    "/runes/Ohm",
    "/runes/Lo",
    "/runes/Sur",
    "/runes/Ber",
    "/runes/Jah",
    "/runes/Cham",
    "/runes/Zod",
    "/uniques/annihilus",
    "/uniques/hellfire-torch",
    "/uniques/gheeds-fortune",
    "/uniques/rainbow-facet",
    "/uniques/rainbow-facet",
    "/uniques/rainbow-facet",
    "/uniques/rainbow-facet",
    "/uniques/rainbow-facet",
    "/uniques/rainbow-facet",
    "/uniques/rainbow-facet",
    "/uniques/rainbow-facet",
    "/uniques/nokozan-relic",
    "/uniques/the-eye-of-etlich",
    "/uniques/the-mahim-oak-curio",
    "/uniques/saracens-chance",
    "/uniques/the-cats-eye",
    "/uniques/crescent-moon",
    "/uniques/atmas-scarab",
    "/uniques/the-rising-sun",
    "/uniques/highlords-wrath",
    "/uniques/maras-kaleidoscope",
    "/uniques/seraphs-hymn",
    "/uniques/metalgrid",
    "/uniques/nagelring",
    "/uniques/manald-heal",
    "/uniques/stone-of-jordan",
    "/uniques/dwarf-star",
    "/uniques/raven-frost",
    "/uniques/bul-kathos-wedding-band",
    "/uniques/carrion-wind",
    "/uniques/natures-peace",
    "/uniques/wisp-projector",
    "/uniques/lenymo",
    "/uniques/snakecord",
    "/uniques/nightsmoke",
    "/uniques/goldwrap",
    "/uniques/bladebuckle",
    "/uniques/string-of-ears",
    "/uniques/razortail",
    "/uniques/glooms-trap",
    "/uniques/snowclash",
    "/uniques/thundergods-vigor",
    "/uniques/arachnid-mesh",
    "/uniques/nosferatus-coil",
    "/uniques/verdungos-hearty-cord",
    "/uniques/hotspur",
    "/uniques/gorefoot",
    "/uniques/treads-of-cthon",
    "/uniques/goblin-toe",
    "/uniques/tearhaunch",
    "/uniques/infernostride",
    "/uniques/waterwalk",
    "/uniques/silkweave",
    "/uniques/war-traveler",
    "/uniques/gore-rider",
    "/uniques/sandstorm-trek",
    "/uniques/marrowwalk",
    "/uniques/shadow-dancer",
    "/uniques/the-hand-of-broc",
    "/uniques/bloodfist",
    "/uniques/chance-guards",
    "/uniques/magefist",
    "/uniques/frostburn",
    "/uniques/venom-grip",
    "/uniques/gravepalm",
    "/uniques/ghoulhide",
    "/uniques/lava-gout",
    "/uniques/hellmouth",
    "/uniques/draculs-grasp",
    "/uniques/soul-drainer",
    "/uniques/steelrend",
    "/uniques/biggins-bonnet",
    "/uniques/tarnhelm",
    "/uniques/coif-of-glory",
    "/uniques/duskdeep",
    "/uniques/howltusk",
    "/uniques/the-face-of-horror",
    "/uniques/undead-crown",
    "/uniques/wormskull",
    "/uniques/peasant-crown",
    "/uniques/rockstopper",
    "/uniques/stealskull",
    "/uniques/darksight-helm",
    "/uniques/valkyrie-wing",
    "/uniques/blackhorns-face",
    "/uniques/crown-of-thieves",
    "/uniques/vampire-gaze",
    "/uniques/arreats-face",
    "/uniques/jalals-mane",
    "/uniques/harlequin-crest",
    "/uniques/steel-shade",
    "/uniques/veil-of-steel",
    "/uniques/nightwings-veil",
    "/uniques/andariels-visage",
    "/uniques/crown-of-ages",
    "/uniques/giant-skull",
    "/uniques/kiras-guardian",
    "/uniques/griffons-eye",
    "/uniques/wolfhowl",
    "/uniques/demonhorns-edge",
    "/uniques/halaberds-reign",
    "/uniques/cerebus-bite",
    "/uniques/ravenlore",
    "/uniques/spirit-keeper",
    "/uniques/greyform",
    "/uniques/blinkbats-form",
    "/uniques/the-centurion",
    "/uniques/twitchthroe",
    "/uniques/darkglow",
    "/uniques/hawkmail",
    "/uniques/venom-ward",
    "/uniques/sparking-mail",
    "/uniques/iceblink",
    "/uniques/heavenly-garb",
    "/uniques/boneflesh",
    "/uniques/rockfleece",
    "/uniques/rattlecage",
    "/uniques/goldskin",
    "/uniques/silks-of-the-victor",
    "/uniques/the-spirit-shroud",
    "/uniques/skin-of-the-vipermagi",
    "/uniques/skin-of-the-flayed-one",
    "/uniques/iron-pelt",
    "/uniques/crow-caw",
    "/uniques/spirit-forge",
    "/uniques/duriels-shell",
    "/uniques/shaftstop",
    "/uniques/skullders-ire",
    "/uniques/que-hegans-wisdom",
    "/uniques/guardian-angel",
    "/uniques/toothrow",
    "/uniques/atmas-wail",
    "/uniques/black-hades",
    "/uniques/corpsemourn",
    "/uniques/ormus-robes",
    "/uniques/the-gladiators-bane",
    "/uniques/arkaines-valor",
    "/uniques/leviathan",
    "/uniques/steel-carapace",
    "/uniques/templars-might",
    "/uniques/tyraels-might",
    "/uniques/pelta-lunata",
    "/uniques/umbral-disk",
    "/uniques/stormguild",
    "/uniques/steelclash",
    "/uniques/swordback-hold",
    "/uniques/bverrit-keep",
    "/uniques/wall-of-the-eyeless",
    "/uniques/the-ward",
    "/uniques/visceratuant",
    "/uniques/mosers-blessed-circle",
    "/uniques/stormchaser",
    "/uniques/tiamats-rebuke",
    "/uniques/lance-guard",
    "/uniques/gerkes-sanctuary",
    "/uniques/lidless-wall",
    "/uniques/radaments-sphere",
    "/uniques/herald-of-zakarum",
    "/uniques/homunculus",
    "/uniques/blackoak-shield",
    "/uniques/stormshield",
    "/uniques/spike-thorn",
    "/uniques/medusas-gaze",
    "/uniques/head-hunters-glory",
    "/uniques/spirit-ward",
    "/uniques/alma-negra",
    "/uniques/dragonscale",
    "/uniques/darkforce-spawn",
    "/uniques/boneflame",
    "/uniques/the-gnasher",
    "/uniques/deathspade",
    "/uniques/bladebone",
    "/uniques/skull-splitter",
    "/uniques/rakescar",
    "/uniques/axe-of-fechmar",
    "/uniques/goreshovel",
    "/uniques/the-chieftain",
    "/uniques/brainhew",
    "/uniques/humongous",
    "/uniques/coldkill",
    "/uniques/butchers-pupil",
    "/uniques/islestrike",
    "/uniques/pompeiis-wrath",
    "/uniques/guardian-naga",
    "/uniques/warlords-trust",
    "/uniques/spellsteel",
    "/uniques/stormrider",
    "/uniques/boneslayer-blade",
    "/uniques/the-minotaur",
    "/uniques/razors-edge",
    "/uniques/rune-master",
    "/uniques/cranebeak",
    "/uniques/death-cleaver",
    "/uniques/ethereal-edge",
    "/uniques/hellslayer",
    "/uniques/messerschmidts-reaver",
    "/uniques/executioners-justice",
    "/uniques/pluckeye",
    "/uniques/witherstring",
    "/uniques/raven-claw",
    "/uniques/rogues-bow",
    "/uniques/stormstrike",
    "/uniques/wizendraw",
    "/uniques/hellclap",
    "/uniques/blastbark",
    "/uniques/skystrike",
    "/uniques/riphook",
    "/uniques/kuko-shakaku",
    "/uniques/endlesshail",
    "/uniques/witchwild-string",
    "/uniques/cliffkiller",
    "/uniques/magewrath",
    "/uniques/goldstrike-arch",
    "/uniques/eaglehorn",
    "/uniques/widowmaker",
    "/uniques/windforce",
    "/uniques/lycanders-aim",
    "/uniques/blood-ravens-charge",
    "/uniques/leadcrow",
    "/uniques/ichorsting",
    "/uniques/hellcast",
    "/uniques/doomslinger",
    "/uniques/langer-briser",
    "/uniques/pus-spitter",
    "/uniques/buriza-do-kyanon",
    "/uniques/demon-machine",
    "/uniques/hellrack",
    "/uniques/gut-siphon",
    "/uniques/gull",
    "/uniques/the-diggler",
    "/uniques/the-jade-tan-do",
    "/uniques/spectral-shard",
    "/uniques/spineripper",
    "/uniques/heart-carver",
    "/uniques/blackbogs-sharp",
    "/uniques/stormspike",
    "/uniques/wizardspike",
    "/uniques/fleshripper",
    "/uniques/ghostflame",
    "/uniques/felloak",
    "/uniques/stoutnail",
    "/uniques/crushflange",
    "/uniques/bloodrise",
    "/uniques/the-generals-tan-do-li-ga",
    "/uniques/ironstone",
    "/uniques/bonesnap",
    "/uniques/steeldriver",
    "/uniques/dark-clan-crusher",
    "/uniques/fleshrender",
    "/uniques/sureshrill-frost",
    "/uniques/moonfall",
    "/uniques/baezils-vortex",
    "/uniques/earthshaker",
    "/uniques/bloodtree-stump",
    "/uniques/the-gavel-of-pain",
    "/uniques/nords-tenderizer",
    "/uniques/demon-limb",
    "/uniques/baranars-star",
    "/uniques/horizons-tornado",
    "/uniques/stormlash",
    "/uniques/stone-crusher",
    "/uniques/schaefers-hammer",
    "/uniques/windhammer",
    "/uniques/earth-shifter",
    "/uniques/the-cranium-basher",
    "/uniques/dimoaks-hew",
    "/uniques/steelgoad",
    "/uniques/soul-harvest",
    "/uniques/the-battlebranch",
    "/uniques/woestave",
    "/uniques/the-grim-reaper",
    "/uniques/the-meat-scraper",
    "/uniques/blackleach-blade",
    "/uniques/athenas-wrath",
    "/uniques/pierre-tombale-couant",
    "/uniques/husoldal-evo",
    "/uniques/grims-burning-dead",
    "/uniques/bonehew",
    "/uniques/the-reapers-toll",
    "/uniques/tomb-reaver",
    "/uniques/stormspire",
    "/uniques/knell-striker",
    "/uniques/rusthandle",
    "/uniques/stormeye",
    "/uniques/zakarums-hand",
    "/uniques/the-fetid-sprinkler",
    "/uniques/hand-of-blessed-light",
    "/uniques/heavens-light",
    "/uniques/the-redeemer",
    "/uniques/astreons-iron-ward",
    "/uniques/the-dragon-chang",
    "/uniques/razortine",
    "/uniques/bloodthief",
    "/uniques/lance-of-yaggai",
    "/uniques/the-tannr-gorerod",
    "/uniques/the-impaler",
    "/uniques/kelpie-snare",
    "/uniques/soulfeast-tine",
    "/uniques/hone-sundan",
    "/uniques/spire-of-honor",
    "/uniques/ariocs-needle",
    "/uniques/viperfork",
    "/uniques/steel-pillar",
    "/uniques/lycanders-flank",
    "/uniques/stoneraven",
    "/uniques/bane-ash",
    "/uniques/serpent-lord",
    "/uniques/spire-of-lazarus",
    "/uniques/the-salamander",
    "/uniques/the-iron-jang-bong",
    "/uniques/razorswitch",
    "/uniques/ribcracker",
    "/uniques/chromatic-ire",
    "/uniques/warpspear",
    "/uniques/skull-collector",
    "/uniques/ondals-wisdom",
    "/uniques/mang-songs-lesson",
    "/uniques/eschutas-temper",
    "/uniques/the-oculus",
    "/uniques/deaths-fathom",
    "/uniques/rixots-keen",
    "/uniques/blood-crescent",
    "/uniques/skewer-of-krintiz",
    "/uniques/gleamscythe",
    "/uniques/griswolds-edge",
    "/uniques/hellplague",
    "/uniques/culwens-point",
    "/uniques/shadowfang",
    "/uniques/soulflay",
    "/uniques/kinemils-awl",
    "/uniques/blacktongue",
    "/uniques/ripsaw",
    "/uniques/the-patriarch",
    "/uniques/bloodletter",
    "/uniques/coldsteel-eye",
    "/uniques/hexfire",
    "/uniques/blade-of-ali-baba",
    "/uniques/ginthers-rift",
    "/uniques/headstriker",
    "/uniques/plague-bearer",
    "/uniques/the-atlantean",
    "/uniques/crainte-vomir",
    "/uniques/bing-sz-wang",
    "/uniques/the-vile-husk",
    "/uniques/cloudcrack",
    "/uniques/todesfaelle-flamme",
    "/uniques/swordguard",
    "/uniques/djinn-slayer",
    "/uniques/bloodmoon",
    "/uniques/lightsabre",
    "/uniques/azurewrath",
    "/uniques/frostwind",
    "/uniques/flamebellow",
    "/uniques/doombringer",
    "/uniques/the-grandfather",
    "/uniques/deathbit",
    "/uniques/the-scalper",
    "/uniques/warshrike",
    "/uniques/gimmershred",
    "/uniques/lacerator",
    "/uniques/titans-revenge",
    "/uniques/demons-arch",
    "/uniques/wraith-flight",
    "/uniques/gargoyles-bite",
    "/uniques/thunderstroke",
    "/uniques/bartucs-cut-throat",
    "/uniques/jade-talon",
    "/uniques/shadow-killer",
    "/uniques/firelizards-talons",
    "/uniques/torch-of-iro",
    "/uniques/maelstrom",
    "/uniques/gravenspine",
    "/uniques/umes-lament",
    "/uniques/suicide-branch",
    "/uniques/carin-shard",
    "/uniques/arm-of-king-leoric",
    "/uniques/blackhand-key",
    "/uniques/boneshade",
    "/uniques/deaths-web",
    "/cheatsheet/socketing",
    "/cheatsheet/useful-recipes",
    "/cheatsheet/lk-framing",
    "/cheatsheet/charts"
  ]
};
