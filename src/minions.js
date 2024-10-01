const minions = [
    {
        "Name": "Annoy-o-Tron",
        "Tier": "1",
        "Combined": "Mech, Divine Shield, Taunt",
        "ID": "BG_GVG_085"
    },
    {
        "Name": "Backstage Security",
        "Tier": "1",
        "Combined": "Demon, Battlecry",
        "ID": "BG26_528"
    },
    {
        "Name": "Cord Puller",
        "Tier": "1",
        "Combined": "Mech, Deathrattle, Divine Shield",
        "ID": "BG29_611"
    },
    {
        "Name": "Deep-Sea Angler",
        "Tier": "1",
        "Combined": "Naga, Taunt",
        "ID": "BG23_004"
    },
    {
        "Name": "Glim Guardian",
        "Tier": "1",
        "Combined": "Dragon",
        "ID": "BG29_888"
    },
    {
        "Name": "Harmless Bonehead",
        "Tier": "1",
        "Combined": "Undead, Deathrattle",
        "ID": "BG28_300"
    },
    {
        "Name": "Kindly Grandmother",
        "Tier": "1",
        "Combined": "Beast, Deathrattle",
        "ID": "BG_KAR_005"
    },
    {
        "Name": "Misfit Dragonling",
        "Tier": "1",
        "Combined": "Dragon",
        "ID": "BG29_814"
    },
    {
        "Name": "Molten Rock",
        "Tier": "1",
        "Combined": "Elemental",
        "ID": "BGS_127"
    },
    {
        "Name": "Passenger",
        "Tier": "1",
        "Combined": "",
        "ID": "BGDUO_114"
    },
    {
        "Name": "Picky Eater",
        "Tier": "1",
        "Combined": "Demon, Battlecry",
        "ID": "BG24_009"
    },
    {
        "Name": "Razorfen Geomancer",
        "Tier": "1",
        "Combined": "Quilboar, Battlecry",
        "ID": "BG20_100"
    },
    {
        "Name": "Refreshing Anomaly",
        "Tier": "1",
        "Combined": "Elemental, Battlecry",
        "ID": "BGS_116"
    },
    {
        "Name": "Risen Rider",
        "Tier": "1",
        "Combined": "Undead, Reborn, Taunt",
        "ID": "BG25_001"
    },
    {
        "Name": "Saltscale Honcho",
        "Tier": "1",
        "Combined": "Murloc",
        "ID": "BG21_008"
    },
    {
        "Name": "Scallywag",
        "Tier": "1",
        "Combined": "Pirate, Deathrattle",
        "ID": "BGS_061"
    },
    {
        "Name": "Snail Cavalry",
        "Tier": "1",
        "Combined": "Naga",
        "ID": "BG23_001"
    },
    {
        "Name": "Southsea Busker",
        "Tier": "1",
        "Combined": "Pirate, Battlecry",
        "ID": "BG26_135"
    },
    {
        "Name": "Sun-Bacon Relaxer",
        "Tier": "1",
        "Combined": "Quilboar",
        "ID": "BG20_301"
    },
    {
        "Name": "Swampstriker",
        "Tier": "1",
        "Combined": "Murloc",
        "ID": "BG22_401"
    },
    {
        "Name": "Thorncaptain",
        "Tier": "1",
        "Combined": "Quilboar, Pirate",
        "ID": "BG25_045"
    },
    {
        "Name": "Trusty Pup",
        "Tier": "1",
        "Combined": "Beast",
        "ID": "BG29_800"
    },
    {
        "Name": "Upbeat Frontdrake",
        "Tier": "1",
        "Combined": "Dragon",
        "ID": "BG26_529"
    },
    {
        "Name": "Wrath Weaver",
        "Tier": "1",
        "Combined": "Demon",
        "ID": "BGS_004"
    },
    {
        "Name": "Ancestral Automaton",
        "Tier": "2",
        "Combined": "Mech, Aura",
        "ID": "BG_TTN_401"
    },
    {
        "Name": "Blazing Skyfin",
        "Tier": "2",
        "Combined": "Dragon, Battlecry, Murloc",
        "ID": "BG25_040"
    },
    {
        "Name": "Bountiful Bedrock",
        "Tier": "2",
        "Combined": "Elemental",
        "ID": "BG30_160"
    },
    {
        "Name": "Coldlight Seer",
        "Tier": "2",
        "Combined": "Murloc, Battlecry",
        "ID": "BG_EX1_103"
    },
    {
        "Name": "Crackling Cyclone",
        "Tier": "2",
        "Combined": "Elemental, Divine Shield, Windfury",
        "ID": "BGS_119"
    },
    {
        "Name": "Defiant Shipwright",
        "Tier": "2",
        "Combined": "Pirate",
        "ID": "BG21_018"
    },
    {
        "Name": "Eternal Knight",
        "Tier": "2",
        "Combined": "Undead, Aura",
        "ID": "BG25_008"
    },
    {
        "Name": "Free Travel Winner",
        "Tier": "2",
        "Combined": "",
        "ID": "BG30_103"
    },
    {
        "Name": "Friendly Saloonkeeper",
        "Tier": "2",
        "Combined": "Battlecry",
        "ID": "BGDUO_104"
    },
    {
        "Name": "Generous Geomancer",
        "Tier": "2",
        "Combined": "Quilboar, Deathrattle",
        "ID": "BGDUO_111"
    },
    {
        "Name": "Gift Pilferer",
        "Tier": "2",
        "Combined": "Pirate, Aura",
        "ID": "BG30_118"
    },
    {
        "Name": "Humming Bird",
        "Tier": "2",
        "Combined": "Beast, Aura",
        "ID": "BG26_805"
    },
    {
        "Name": "Impulsive Trickster",
        "Tier": "2",
        "Combined": "Demon, Deathrattle",
        "ID": "BG21_006"
    },
    {
        "Name": "Irate Rooster",
        "Tier": "2",
        "Combined": "Beast",
        "ID": "BG29_990"
    },
    {
        "Name": "Kaboom Bot",
        "Tier": "2",
        "Combined": "Mech, Deathrattle",
        "ID": "BG_BOT_606"
    },
    {
        "Name": "Lava Lurker",
        "Tier": "2",
        "Combined": "Naga",
        "ID": "BG23_009"
    },
    {
        "Name": "Leapfrogger",
        "Tier": "2",
        "Combined": "Beast, Deathrattle",
        "ID": "BG21_000"
    },
    {
        "Name": "Lullabot",
        "Tier": "2",
        "Combined": "Mech",
        "ID": "BG26_146"
    },
    {
        "Name": "Mind Muck",
        "Tier": "2",
        "Combined": "Demon, Battlecry",
        "ID": "BG23_357"
    },
    {
        "Name": "Moon-Bacon Jazzer",
        "Tier": "2",
        "Combined": "Quilboar, Battlecry",
        "ID": "BG26_159"
    },
    {
        "Name": "Murcules",
        "Tier": "2",
        "Combined": "Murloc",
        "ID": "BG27_023"
    },
    {
        "Name": "Museum Mummy",
        "Tier": "2",
        "Combined": "Undead, Battlecry",
        "ID": "BG30_850"
    },
    {
        "Name": "Nerubian Deathswarmer",
        "Tier": "2",
        "Combined": "Undead, Battlecry",
        "ID": "BG25_011"
    },
    {
        "Name": "Oozeling Gladiator",
        "Tier": "2",
        "Combined": "Taunt, Battlecry",
        "ID": "BG27_002"
    },
    {
        "Name": "Party Elemental",
        "Tier": "2",
        "Combined": "Elemental",
        "ID": "BGS_120"
    },
    {
        "Name": "Patient Scout",
        "Tier": "2",
        "Combined": "Discover",
        "ID": "BG24_715"
    },
    {
        "Name": "Prophet of the Boar",
        "Tier": "2",
        "Combined": "Quilboar, Taunt",
        "ID": "BG20_203"
    },
    {
        "Name": "Reef Riffer",
        "Tier": "2",
        "Combined": "Naga",
        "ID": "BG26_501"
    },
    {
        "Name": "Ripsnarl Captain",
        "Tier": "2",
        "Combined": "Pirate",
        "ID": "BGS_056"
    },
    {
        "Name": "Scarlet Skull",
        "Tier": "2",
        "Combined": "Undead, Deathrattle, Reborn",
        "ID": "BG25_022"
    },
    {
        "Name": "Sellemental",
        "Tier": "2",
        "Combined": "Elemental",
        "ID": "BGS_115"
    },
    {
        "Name": "Shell Collector",
        "Tier": "2",
        "Combined": "Naga, Battlecry",
        "ID": "BG23_002"
    },
    {
        "Name": "Silver Goose",
        "Tier": "2",
        "Combined": "Beast, Taunt",
        "ID": "BG29_801"
    },
    {
        "Name": "Soul Rewinder",
        "Tier": "2",
        "Combined": "Demon",
        "ID": "BG26_174"
    },
    {
        "Name": "Tad",
        "Tier": "2",
        "Combined": "Murloc",
        "ID": "BG22_202"
    },
    {
        "Name": "Tough Tusk",
        "Tier": "2",
        "Combined": "Quilboar, Divine Shield",
        "ID": "BG20_102"
    },
    {
        "Name": "Twilight Emissary",
        "Tier": "2",
        "Combined": "Dragon, Battlecry, Taunt",
        "ID": "BGS_038"
    },
    {
        "Name": "Wanderer Cho",
        "Tier": "2",
        "Combined": "",
        "ID": "BGDUO_100"
    },
    {
        "Name": "Whelp Smuggler",
        "Tier": "2",
        "Combined": "Dragon",
        "ID": "BG21_013"
    },
    {
        "Name": "Accord-o-Tron",
        "Tier": "3",
        "Combined": "Mech",
        "ID": "BG26_147"
    },
    {
        "Name": "Annoy-o-Module",
        "Tier": "3",
        "Combined": "Mech, Divine Shield, Taunt",
        "ID": "BG_BOT_911"
    },
    {
        "Name": "Barrens Brawler",
        "Tier": "3",
        "Combined": "Battlecry, Deathrattle",
        "ID": "BG29_861"
    },
    {
        "Name": "Bristling Buffoon",
        "Tier": "3",
        "Combined": "Quilboar",
        "ID": "BG29_160"
    },
    {
        "Name": "Crow's Nest Sentry",
        "Tier": "3",
        "Combined": "Pirate, Battlecry",
        "ID": "BG29_502"
    },
    {
        "Name": "Deadly Spore",
        "Tier": "3",
        "Combined": "Venomous",
        "ID": "BGS_131"
    },
    {
        "Name": "Deep Blue Crooner",
        "Tier": "3",
        "Combined": "Naga",
        "ID": "BG26_502"
    },
    {
        "Name": "Deflect-o-Bot",
        "Tier": "3",
        "Combined": "Mech, Divine Shield",
        "ID": "BGS_071"
    },
    {
        "Name": "Diremuck Forager",
        "Tier": "3",
        "Combined": "Murloc",
        "ID": "BG27_556"
    },
    {
        "Name": "Disguised Graverobber",
        "Tier": "3",
        "Combined": "Undead, Battlecry",
        "ID": "BG28_303"
    },
    {
        "Name": "Doting Dracthyr",
        "Tier": "3",
        "Combined": "Dragon",
        "ID": "BGDUO_107"
    },
    {
        "Name": "Electric Synthesizer",
        "Tier": "3",
        "Combined": "Dragon, Battlecry",
        "ID": "BG26_963"
    },
    {
        "Name": "False Implicator",
        "Tier": "3",
        "Combined": "Demon",
        "ID": "BG29_140"
    },
    {
        "Name": "Fiery Felblood",
        "Tier": "3",
        "Combined": "Elemental, Deathrattle, Demon",
        "ID": "BG29_877"
    },
    {
        "Name": "Gunpowder Courier",
        "Tier": "3",
        "Combined": "Pirate",
        "ID": "BG26_810"
    },
    {
        "Name": "Handless Forsaken",
        "Tier": "3",
        "Combined": "Undead, Deathrattle",
        "ID": "BG25_010"
    },
    {
        "Name": "Jumping Jack",
        "Tier": "3",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Naga, Pirate, Quilboar, Undead",
        "ID": "BGDUO_115"
    },
    {
        "Name": "Keyboard Igniter",
        "Tier": "3",
        "Combined": "Demon, Battlecry",
        "ID": "BG26_522"
    },
    {
        "Name": "Land Lubber",
        "Tier": "3",
        "Combined": "Elemental, Pirate",
        "ID": "BG28_556"
    },
    {
        "Name": "Mangled Bandit",
        "Tier": "3",
        "Combined": "Quilboar",
        "ID": "BG28_582"
    },
    {
        "Name": "Monstrous Macaw",
        "Tier": "3",
        "Combined": "Beast, Deathrattle",
        "ID": "BGS_078"
    },
    {
        "Name": "Orc-estra Conductor",
        "Tier": "3",
        "Combined": "Battlecry",
        "ID": "BGDUO_119"
    },
    {
        "Name": "Phaerix, Wrath of the Sun",
        "Tier": "3",
        "Combined": "Avenge, Divine Shield",
        "ID": "BG28_403"
    },
    {
        "Name": "Plunder Pal",
        "Tier": "3",
        "Combined": "Pirate",
        "ID": "BGDUO_118"
    },
    {
        "Name": "Prickly Piper",
        "Tier": "3",
        "Combined": "Quilboar, Deathrattle",
        "ID": "BG26_160"
    },
    {
        "Name": "Puddle Prancer",
        "Tier": "3",
        "Combined": "Murloc",
        "ID": "BGDUO_117"
    },
    {
        "Name": "Rampager",
        "Tier": "3",
        "Combined": "Beast",
        "ID": "BG29_809"
    },
    {
        "Name": "Roaring Rallier",
        "Tier": "3",
        "Combined": "Dragon",
        "ID": "BG29_816"
    },
    {
        "Name": "Scourfin",
        "Tier": "3",
        "Combined": "Murloc, Deathrattle",
        "ID": "BG26_360"
    },
    {
        "Name": "Shell Whistler",
        "Tier": "3",
        "Combined": "Naga, Battlecry",
        "ID": "BG26_045"
    },
    {
        "Name": "Silithid Burrower",
        "Tier": "3",
        "Combined": "Beast, Deathrattle, Taunt",
        "ID": "BG29_871"
    },
    {
        "Name": "Sleeping Sea Glass",
        "Tier": "3",
        "Combined": "Elemental",
        "ID": "BG30_128"
    },
    {
        "Name": "Slimy Felblood",
        "Tier": "3",
        "Combined": "Elemental, Battlecry, Demon",
        "ID": "BG29_873"
    },
    {
        "Name": "Sprightly Scarab",
        "Tier": "3",
        "Combined": "Beast, Taunt",
        "ID": "BG27_084"
    },
    {
        "Name": "Tarecgosa",
        "Tier": "3",
        "Combined": "Dragon",
        "ID": "BG21_015"
    },
    {
        "Name": "The Glad-iator",
        "Tier": "3",
        "Combined": "Naga, Divine Shield",
        "ID": "BG27_025"
    },
    {
        "Name": "Volcanic Visitor",
        "Tier": "3",
        "Combined": "Naga",
        "ID": "BG30_117"
    },
    {
        "Name": "Warden of Old",
        "Tier": "3",
        "Combined": "Naga",
        "ID": "BGS_200"
    },
    {
        "Name": "Xylo-bones",
        "Tier": "3",
        "Combined": "Undead",
        "ID": "BG26_172"
    },
    {
        "Name": "'Loc Prince",
        "Tier": "4",
        "Combined": "Murloc",
        "ID": "BG29_889"
    },
    {
        "Name": "Amber Guardian",
        "Tier": "4",
        "Combined": "Dragon, Divine Shield",
        "ID": "BG24_500"
    },
    {
        "Name": "Anub'arak, Nerubian King",
        "Tier": "4",
        "Combined": "Undead, Deathrattle",
        "ID": "BG25_007"
    },
    {
        "Name": "Assistant Guard",
        "Tier": "4",
        "Combined": "Taunt, Battlecry",
        "ID": "BG29_845"
    },
    {
        "Name": "Bannerboar",
        "Tier": "4",
        "Combined": "Quilboar",
        "ID": "BG20_201"
    },
    {
        "Name": "Bassgill",
        "Tier": "4",
        "Combined": "Murloc, Deathrattle",
        "ID": "BG26_350"
    },
    {
        "Name": "Blade Collector",
        "Tier": "4",
        "Combined": "Pirate",
        "ID": "BG26_817"
    },
    {
        "Name": "Bream Counter",
        "Tier": "4",
        "Combined": "Murloc",
        "ID": "BG26_137"
    },
    {
        "Name": "Cadaver Caretaker",
        "Tier": "4",
        "Combined": "Undead, Deathrattle",
        "ID": "BG30_125"
    },
    {
        "Name": "Critter Wrangler",
        "Tier": "4",
        "Combined": "Naga",
        "ID": "BG23_003"
    },
    {
        "Name": "Fairy Gillmother",
        "Tier": "4",
        "Combined": "Murloc",
        "ID": "BG29_029"
    },
    {
        "Name": "Fearless Foodie",
        "Tier": "4",
        "Combined": "Quilboar",
        "ID": "BG30_123"
    },
    {
        "Name": "Feisty Freshwater",
        "Tier": "4",
        "Combined": "Elemental, Deathrattle",
        "ID": "BGDUO_110"
    },
    {
        "Name": "Gem Smuggler",
        "Tier": "4",
        "Combined": "Quilboar, Battlecry",
        "ID": "BG25_155"
    },
    {
        "Name": "Grave Narrator",
        "Tier": "4",
        "Combined": "Undead, Avenge",
        "ID": "BGDUO_112"
    },
    {
        "Name": "Grease Bot",
        "Tier": "4",
        "Combined": "Mech, Divine Shield",
        "ID": "BG21_024"
    },
    {
        "Name": "Ice Fisher",
        "Tier": "4",
        "Combined": "Pirate",
        "ID": "BG30_120"
    },
    {
        "Name": "Imposing Percussionist",
        "Tier": "4",
        "Combined": "Demon, Battlecry, Discover",
        "ID": "BG26_525"
    },
    {
        "Name": "Inspiring Underdog",
        "Tier": "4",
        "Combined": "Battlecry",
        "ID": "BG30_127"
    },
    {
        "Name": "Lil' Rag",
        "Tier": "4",
        "Combined": "Elemental",
        "ID": "BGS_100"
    },
    {
        "Name": "Living Azerite",
        "Tier": "4",
        "Combined": "Elemental",
        "ID": "BG28_707"
    },
    {
        "Name": "Lovesick Balladist",
        "Tier": "4",
        "Combined": "Pirate, Battlecry",
        "ID": "BG26_814"
    },
    {
        "Name": "Magnanimoose",
        "Tier": "4",
        "Combined": "Beast, Deathrattle",
        "ID": "BGDUO_105"
    },
    {
        "Name": "Malchezaar, Prince of Dance",
        "Tier": "4",
        "Combined": "Demon",
        "ID": "BG26_524"
    },
    {
        "Name": "Mirror Monster",
        "Tier": "4",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Naga, Pirate, Quilboar, Undead, Discover",
        "ID": "BGDUO_108"
    },
    {
        "Name": "Motley Phalanx",
        "Tier": "4",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Naga, Pirate, Quilboar, Undead, Deathrattle, Taunt",
        "ID": "BG27_080"
    },
    {
        "Name": "Mummifier",
        "Tier": "4",
        "Combined": "Undead, Deathrattle",
        "ID": "BG28_309"
    },
    {
        "Name": "Peggy Sturdybone",
        "Tier": "4",
        "Combined": "Pirate",
        "ID": "BG25_032"
    },
    {
        "Name": "Persistent Poet",
        "Tier": "4",
        "Combined": "Dragon, Divine Shield",
        "ID": "BG29_813"
    },
    {
        "Name": "Prized Promo-Drake",
        "Tier": "4",
        "Combined": "Dragon",
        "ID": "BG21_014"
    },
    {
        "Name": "Prosthetic Hand",
        "Tier": "4",
        "Combined": "Mech, Reborn, Undead",
        "ID": "BG_DEEP_015"
    },
    {
        "Name": "Recycling Wraith",
        "Tier": "4",
        "Combined": "Elemental",
        "ID": "BG21_040"
    },
    {
        "Name": "Rylak Metalhead",
        "Tier": "4",
        "Combined": "Beast, Deathrattle, Taunt, Battlecry",
        "ID": "BG26_801"
    },
    {
        "Name": "Sin'dorei Straight Shot",
        "Tier": "4",
        "Combined": "Taunt, Divine Shield, Windfury",
        "ID": "BG25_016"
    },
    {
        "Name": "Sky Pirate Flagbearer",
        "Tier": "4",
        "Combined": "Pirate",
        "ID": "BG30_119"
    },
    {
        "Name": "Sly Raptor",
        "Tier": "4",
        "Combined": "Beast, Deathrattle",
        "ID": "BG25_806"
    },
    {
        "Name": "Snarling Conductor",
        "Tier": "4",
        "Combined": "Quilboar",
        "ID": "BG28_585"
    },
    {
        "Name": "Soft-hearted Siren",
        "Tier": "4",
        "Combined": "Naga",
        "ID": "BG26_590"
    },
    {
        "Name": "Storm Splitter",
        "Tier": "4",
        "Combined": "Naga",
        "ID": "BGDUO_122"
    },
    {
        "Name": "Tavern Tempest",
        "Tier": "4",
        "Combined": "Elemental, Battlecry",
        "ID": "BGS_123"
    },
    {
        "Name": "Thundering Abomination",
        "Tier": "4",
        "Combined": "Undead",
        "ID": "BG30_124"
    },
    {
        "Name": "Treasure-Seeker Elise",
        "Tier": "4",
        "Combined": "",
        "ID": "BG23_353"
    },
    {
        "Name": "Trigore the Lasher",
        "Tier": "4",
        "Combined": "Beast",
        "ID": "BG29_807"
    },
    {
        "Name": "Tunnel Blaster",
        "Tier": "4",
        "Combined": "Deathrattle, Taunt",
        "ID": "BG_DAL_775"
    },
    {
        "Name": "Utility Drone",
        "Tier": "4",
        "Combined": "Mech",
        "ID": "BG26_152"
    },
    {
        "Name": "Wannabe Gargoyle",
        "Tier": "4",
        "Combined": "Dragon, Reborn",
        "ID": "BG30_109"
    },
    {
        "Name": "Wildfire Elemental",
        "Tier": "4",
        "Combined": "Elemental",
        "ID": "BGS_126"
    },
    {
        "Name": "Zesty Shaker",
        "Tier": "4",
        "Combined": "Naga",
        "ID": "BG26_505"
    },
    {
        "Name": "Barrens Conjurer",
        "Tier": "5",
        "Combined": "Deathrattle, Battlecry",
        "ID": "BG29_862"
    },
    {
        "Name": "Bongo Bopper",
        "Tier": "5",
        "Combined": "Quilboar",
        "ID": "BG26_531"
    },
    {
        "Name": "Brann Bronzebeard",
        "Tier": "5",
        "Combined": "Aura, Battlecry",
        "ID": "BG_LOE_077"
    },
    {
        "Name": "Catacomb Crasher",
        "Tier": "5",
        "Combined": "Undead",
        "ID": "BG30_129"
    },
    {
        "Name": "Champion of the Primus",
        "Tier": "5",
        "Combined": "Undead, Avenge",
        "ID": "BG27_029"
    },
    {
        "Name": "Charging Czarina",
        "Tier": "5",
        "Combined": "Mech, Divine Shield",
        "ID": "BG28_741"
    },
    {
        "Name": "Clunker Junker",
        "Tier": "5",
        "Combined": "Mech, Battlecry, Discover",
        "ID": "BG29_503"
    },
    {
        "Name": "Corrupted Myrmidon",
        "Tier": "5",
        "Combined": "Naga",
        "ID": "BG23_012"
    },
    {
        "Name": "Cruise Controller",
        "Tier": "5",
        "Combined": "Pirate, Deathrattle",
        "ID": "BG31_821"
    },
    {
        "Name": "Daggerspine Thrasher",
        "Tier": "5",
        "Combined": "Naga, Divine Shield, Venomous, Windfury",
        "ID": "BG27_024"
    },
    {
        "Name": "Depraved Felfin",
        "Tier": "5",
        "Combined": "Demon, Discover, Murloc",
        "ID": "BG30_115"
    },
    {
        "Name": "Drakkari Enchanter",
        "Tier": "5",
        "Combined": "Aura",
        "ID": "BG26_ICC_901"
    },
    {
        "Name": "Ensorcelled Fungus",
        "Tier": "5",
        "Combined": "Aura",
        "ID": "BG28_555"
    },
    {
        "Name": "Flourishing Frostling",
        "Tier": "5",
        "Combined": "Elemental, Aura",
        "ID": "BG26_537"
    },
    {
        "Name": "General Drakkisath",
        "Tier": "5",
        "Combined": "Dragon, Battlecry",
        "ID": "BG25_309"
    },
    {
        "Name": "Glowscale",
        "Tier": "5",
        "Combined": "Naga, Taunt, Divine Shield",
        "ID": "BG23_008"
    },
    {
        "Name": "Hot-Air Surveyor",
        "Tier": "5",
        "Combined": "Quilboar, Aura",
        "ID": "BG30_121"
    },
    {
        "Name": "Hunter of Gatherers",
        "Tier": "5",
        "Combined": "Dragon",
        "ID": "BG25_027"
    },
    {
        "Name": "Insatiable Ur'zul",
        "Tier": "5",
        "Combined": "Demon, Taunt",
        "ID": "BG21_004"
    },
    {
        "Name": "Interrogator Whitemane",
        "Tier": "5",
        "Combined": "Taunt",
        "ID": "BG24_704"
    },
    {
        "Name": "Iridescent Skyblazer",
        "Tier": "5",
        "Combined": "Beast",
        "ID": "BG29_806"
    },
    {
        "Name": "Kangor's Apprentice",
        "Tier": "5",
        "Combined": "Mech, Deathrattle",
        "ID": "BGS_012"
    },
    {
        "Name": "King Bagurgle",
        "Tier": "5",
        "Combined": "Murloc, Battlecry",
        "ID": "BGS_030"
    },
    {
        "Name": "Leeroy the Reckless",
        "Tier": "5",
        "Combined": "Deathrattle",
        "ID": "BG23_318"
    },
    {
        "Name": "Lightfang Enforcer",
        "Tier": "5",
        "Combined": "",
        "ID": "BGS_009"
    },
    {
        "Name": "Lucky Egg",
        "Tier": "5",
        "Combined": "Battlecry, Discover",
        "ID": "BG30_104"
    },
    {
        "Name": "Man'ari Messenger",
        "Tier": "5",
        "Combined": "Demon, Battlecry",
        "ID": "BGDUO_121"
    },
    {
        "Name": "Mirage Conjurer",
        "Tier": "5",
        "Combined": "Demon",
        "ID": "BG30_110"
    },
    {
        "Name": "Moroes, Steward of Death",
        "Tier": "5",
        "Combined": "Undead, Deathrattle, Reborn",
        "ID": "BG28_304"
    },
    {
        "Name": "Moss of the Schloss",
        "Tier": "5",
        "Combined": "Elemental",
        "ID": "BG30_111"
    },
    {
        "Name": "Octosari, Wrap God",
        "Tier": "5",
        "Combined": "Beast, Deathrattle",
        "ID": "BG26_804"
    },
    {
        "Name": "Operatic Belcher",
        "Tier": "5",
        "Combined": "Murloc, Deathrattle, Venomous",
        "ID": "BG26_888"
    },
    {
        "Name": "Pilgrimp",
        "Tier": "5",
        "Combined": "Demon",
        "ID": "BG30_106"
    },
    {
        "Name": "Primalfin Lookout",
        "Tier": "5",
        "Combined": "Murloc, Battlecry, Discover",
        "ID": "BGS_020"
    },
    {
        "Name": "Prime Mate",
        "Tier": "5",
        "Combined": "Beast, Deathrattle, Pirate",
        "ID": "BG29_865"
    },
    {
        "Name": "Rapscallion Recruiter",
        "Tier": "5",
        "Combined": "Pirate, Deathrattle",
        "ID": "BG26_018"
    },
    {
        "Name": "Record Smuggler",
        "Tier": "5",
        "Combined": "Pirate",
        "ID": "BG26_812"
    },
    {
        "Name": "Rodeo Performer",
        "Tier": "5",
        "Combined": "Battlecry, Discover",
        "ID": "BG28_550"
    },
    {
        "Name": "Scrap Scraper",
        "Tier": "5",
        "Combined": "Mech, Deathrattle",
        "ID": "BG26_148"
    },
    {
        "Name": "Spellbound Seafarer",
        "Tier": "5",
        "Combined": "Pirate",
        "ID": "BG28_903"
    },
    {
        "Name": "Spiked Savior",
        "Tier": "5",
        "Combined": "Beast, Deathrattle, Reborn, Taunt",
        "ID": "BG29_808"
    },
    {
        "Name": "Support System",
        "Tier": "5",
        "Combined": "Mech, Divine Shield",
        "ID": "BGDUO_109"
    },
    {
        "Name": "Three Lil' Quilboar",
        "Tier": "5",
        "Combined": "Quilboar, Deathrattle",
        "ID": "BG26_867"
    },
    {
        "Name": "Tichondrius",
        "Tier": "5",
        "Combined": "Demon",
        "ID": "BG26_523"
    },
    {
        "Name": "Tidemistress Athissa",
        "Tier": "5",
        "Combined": "Naga",
        "ID": "BG23_013"
    },
    {
        "Name": "Titus Rivendare",
        "Tier": "5",
        "Combined": "Aura, Deathrattle",
        "ID": "BG25_354"
    },
    {
        "Name": "Tortollan Blue Shell",
        "Tier": "5",
        "Combined": "",
        "ID": "BG24_018"
    },
    {
        "Name": "Transmuted Bramblewitch",
        "Tier": "5",
        "Combined": "Elemental, Quilboar",
        "ID": "BG27_013"
    },
    {
        "Name": "Well Wisher",
        "Tier": "5",
        "Combined": "",
        "ID": "BGDUO_120"
    },
    {
        "Name": "Yu'lon, Fortune Granter",
        "Tier": "5",
        "Combined": "Dragon",
        "ID": "BG29_811"
    },
    {
        "Name": "Admiral Eliza Goreblade",
        "Tier": "6",
        "Combined": "Pirate",
        "ID": "BG27_555"
    },
    {
        "Name": "Archlich Kel'Thuzad",
        "Tier": "6",
        "Combined": "Undead",
        "ID": "BG28_308"
    },
    {
        "Name": "Arid Atrocity",
        "Tier": "6",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Naga, Pirate, Quilboar, Undead, Deathrattle",
        "ID": "BG29_864"
    },
    {
        "Name": "Bristlebach",
        "Tier": "6",
        "Combined": "Quilboar, Avenge",
        "ID": "BG26_157"
    },
    {
        "Name": "Charlga",
        "Tier": "6",
        "Combined": "Quilboar",
        "ID": "BG20_303"
    },
    {
        "Name": "Choral Mrrrglr",
        "Tier": "6",
        "Combined": "Murloc",
        "ID": "BG26_354"
    },
    {
        "Name": "Cultist S'Thara",
        "Tier": "6",
        "Combined": "Demon, Deathrattle",
        "ID": "BG27_081"
    },
    {
        "Name": "Elemental of Surprise",
        "Tier": "6",
        "Combined": "Elemental, Divine Shield",
        "ID": "BG26_175"
    },
    {
        "Name": "Eternal Summoner",
        "Tier": "6",
        "Combined": "Undead, Deathrattle, Reborn",
        "ID": "BG25_009"
    },
    {
        "Name": "Famished Felbat",
        "Tier": "6",
        "Combined": "Demon",
        "ID": "BG21_005"
    },
    {
        "Name": "Fleet Admiral Tethys",
        "Tier": "6",
        "Combined": "Pirate",
        "ID": "BG26_766"
    },
    {
        "Name": "Foe Reaper 4000",
        "Tier": "6",
        "Combined": "Mech",
        "ID": "BG_GVG_113"
    },
    {
        "Name": "Ghoul-acabra",
        "Tier": "6",
        "Combined": "Undead, Deathrattle, Beast",
        "ID": "BG29_863"
    },
    {
        "Name": "Goldrinn, the Great Wolf",
        "Tier": "6",
        "Combined": "Beast, Deathrattle",
        "ID": "BGS_018"
    },
    {
        "Name": "Hoarding Hatespawn",
        "Tier": "6",
        "Combined": "Dragon",
        "ID": "BG29_872"
    },
    {
        "Name": "Indomitable Mount",
        "Tier": "6",
        "Combined": "Beast, Deathrattle",
        "ID": "BG30_105"
    },
    {
        "Name": "Kalecgos, Arcane Aspect",
        "Tier": "6",
        "Combined": "Dragon, Battlecry",
        "ID": "BGS_041"
    },
    {
        "Name": "Mecha-Jaraxxus",
        "Tier": "6",
        "Combined": "Demon, Battlecry, Mech",
        "ID": "BG25_807"
    },
    {
        "Name": "Mrglin' Burglar",
        "Tier": "6",
        "Combined": "Murloc",
        "ID": "BG30_122"
    },
    {
        "Name": "Murky",
        "Tier": "6",
        "Combined": "Murloc, Battlecry",
        "ID": "BG24_012"
    },
    {
        "Name": "Nalaa the Redeemer",
        "Tier": "6",
        "Combined": "",
        "ID": "BG28_551"
    },
    {
        "Name": "One-Amalgam Tour Group",
        "Tier": "6",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Naga, Pirate, Quilboar, Undead",
        "ID": "BG30_102"
    },
    {
        "Name": "Orgozoa, the Tender",
        "Tier": "6",
        "Combined": "Naga, Discover",
        "ID": "BG23_015"
    },
    {
        "Name": "Pokey Thornmantle",
        "Tier": "6",
        "Combined": "Quilboar",
        "ID": "BG29_708"
    },
    {
        "Name": "Polarizing Beatboxer",
        "Tier": "6",
        "Combined": "Mech",
        "ID": "BG26_149"
    },
    {
        "Name": "Rock Rock",
        "Tier": "6",
        "Combined": "Elemental",
        "ID": "BG26_535"
    },
    {
        "Name": "Slitherspear, Lord of Gains",
        "Tier": "6",
        "Combined": "Naga",
        "ID": "BG27_083"
    },
    {
        "Name": "Sun Screener",
        "Tier": "6",
        "Combined": "Divine Shield",
        "ID": "BG30_101"
    },
    {
        "Name": "Warpwing",
        "Tier": "6",
        "Combined": "Dragon, Immune",
        "ID": "BG24_004"
    },
    {
        "Name": "Whirling Lass-o-Matic",
        "Tier": "6",
        "Combined": "Mech, Divine Shield, Windfury",
        "ID": "BG28_635"
    },
    {
        "Name": "Young Murk-Eye",
        "Tier": "6",
        "Combined": "Murloc, Battlecry",
        "ID": "BG22_403"
    },
    {
        "Name": "Captain Sanders",
        "Tier": "7",
        "Combined": "Pirate, Battlecry",
        "ID": "BG25_034"
    },
    {
        "Name": "Champion of Sargeras",
        "Tier": "7",
        "Combined": "Demon",
        "ID": "BG27_016"
    },
    {
        "Name": "Granite Guardian",
        "Tier": "7",
        "Combined": "Elemental, Taunt",
        "ID": "BG24_001"
    },
    {
        "Name": "King Varian",
        "Tier": "7",
        "Combined": "Discover",
        "ID": "BG27_508"
    },
    {
        "Name": "Moira Bronzebeard",
        "Tier": "7",
        "Combined": "Aura, Battlecry, Deathrattle",
        "ID": "BG27_518"
    },
    {
        "Name": "Obsidian Ravager",
        "Tier": "7",
        "Combined": "Dragon",
        "ID": "BG27_017"
    },
    {
        "Name": "Papa Bear",
        "Tier": "7",
        "Combined": "Beast, Deathrattle",
        "ID": "BG27_509"
    },
    {
        "Name": "Recurring Nightmare",
        "Tier": "7",
        "Combined": "Undead, Deathrattle",
        "ID": "BG26_055"
    },
    {
        "Name": "Sandy",
        "Tier": "7",
        "Combined": "",
        "ID": "BGDUO_125"
    },
    {
        "Name": "Sanguine Champion",
        "Tier": "7",
        "Combined": "Quilboar, Battlecry, Deathrattle",
        "ID": "BG23_017"
    },
    {
        "Name": "Sea Witch Zar'jira",
        "Tier": "7",
        "Combined": "Naga",
        "ID": "BG27_514"
    },
    {
        "Name": "The Boommobile",
        "Tier": "7",
        "Combined": "Mech, Divine Shield, Reborn, Taunt, Windfury",
        "ID": "BG27_021"
    },
    {
        "Name": "Tide Oracle Morgl",
        "Tier": "7",
        "Combined": "Murloc, Poisonous",
        "ID": "BG27_513"
    }
]

export default minions;