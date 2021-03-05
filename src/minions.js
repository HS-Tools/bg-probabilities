const minions = [
   {
       "Name": "Acolyte of C'Thun",
       "Tier": "1",
       "Attack": "2",
       "Health": "2",
       "Keywords": "Taunt, Reborn",
       "Combined": "Taunt, Reborn"
   },
   {
       "Name": "Alleycat",
       "Tier": "1",
       "Attack": "1",
       "Health": "1",
       "Cost": "1",
       "Type": "Beast",
       "Keywords": "Battlecry",
       "Combined": "Beast, Battlecry"
   },
   {
       "Name": "Deck Swabbie",
       "Tier": "1",
       "Attack": "2",
       "Health": "2",
       "Type": "Pirate",
       "Keywords": "Battlecry",
       "Combined": "Pirate, Battlecry"
   },
   {
       "Name": "Dragonspawn Lieutenant",
       "Tier": "1",
       "Attack": "2",
       "Health": "3",
       "Cost": "2",
       "Type": "Dragon",
       "Keywords": "Taunt",
       "Combined": "Dragon, Taunt"
   },
   {
       "Name": "Fiendish Servant",
       "Tier": "1",
       "Attack": "2",
       "Health": "1",
       "Cost": "1",
       "Type": "Demon",
       "Keywords": "Deathrattle",
       "Combined": "Demon, Deathrattle"
   },
   {
       "Name": "Micro Machine",
       "Tier": "1",
       "Attack": "1",
       "Health": "2",
       "Cost": "2",
       "Type": "Mech",
       "Combined": "Mech"
   },
   {
       "Name": "Micro Mummy",
       "Tier": "1",
       "Attack": "1",
       "Health": "2",
       "Type": "Mech",
       "Keywords": "Reborn",
       "Combined": "Mech, Reborn"
   },
   {
       "Name": "Murloc Tidecaller",
       "Tier": "1",
       "Attack": "1",
       "Health": "2",
       "Cost": "1",
       "Type": "Murloc",
       "Combined": "Murloc"
   },
   {
       "Name": "Murloc Tidehunter",
       "Tier": "1",
       "Attack": "2",
       "Health": "1",
       "Cost": "2",
       "Type": "Murloc",
       "Keywords": "Battlecry",
       "Combined": "Murloc, Battlecry"
   },
   {
       "Name": "Red Whelp",
       "Tier": "1",
       "Attack": "1",
       "Health": "2",
       "Type": "Dragon",
       "Combined": "Dragon"
   },
   {
       "Name": "Refreshing Anomaly",
       "Tier": "1",
       "Attack": "1",
       "Health": "3",
       "Type": "Elemental",
       "Keywords": "Battlecry",
       "Combined": "Elemental, Battlecry"
   },
   {
       "Name": "Rockpool Hunter",
       "Tier": "1",
       "Attack": "2",
       "Health": "3",
       "Cost": "2",
       "Type": "Murloc",
       "Keywords": "Battlecry",
       "Combined": "Murloc, Battlecry"
   },
   {
       "Name": "Scallywag",
       "Tier": "1",
       "Attack": "2",
       "Health": "1",
       "Type": "Pirate",
       "Keywords": "Deathrattle",
       "Combined": "Pirate, Deathrattle"
   },
   {
       "Name": "Scavenging Hyena",
       "Tier": "1",
       "Attack": "2",
       "Health": "2",
       "Cost": "2",
       "Type": "Beast",
       "Combined": "Beast"
   },
   {
       "Name": "Sellemental",
       "Tier": "1",
       "Attack": "2",
       "Health": "2",
       "Type": "Elemental",
       "Combined": "Elemental"
   },
   {
       "Name": "Vulgar Homunculus",
       "Tier": "1",
       "Attack": "2",
       "Health": "4",
       "Cost": "2",
       "Type": "Demon",
       "Keywords": "Battlecry, Taunt",
       "Combined": "Demon, Battlecry, Taunt"
   },
   {
       "Name": "Wrath Weaver",
       "Tier": "1",
       "Attack": "1",
       "Health": "3",
       "Cost": "1",
       "Synergy": "Demon",
       "Combined": "Demon"
   },
   {
       "Name": "Freedealing Gambler",
       "Tier": "2",
       "Attack": "3",
       "Health": "3",
       "Type": "Pirate",
       "Combined": "Pirate"
   },
   {
       "Name": "Glyph Guardian",
       "Tier": "2",
       "Attack": "2",
       "Health": "4",
       "Type": "Dragon",
       "Combined": "Dragon"
   },
   {
       "Name": "Harvest Golem",
       "Tier": "2",
       "Attack": "2",
       "Health": "3",
       "Cost": "3",
       "Type": "Mech",
       "Keywords": "Deathrattle",
       "Combined": "Mech, Deathrattle"
   },
   {
       "Name": "Imprisoner",
       "Tier": "2",
       "Attack": "3",
       "Health": "3",
       "Cost": "3",
       "Type": "Demon",
       "Keywords": "Deathrattle, Taunt",
       "Combined": "Demon, Deathrattle, Taunt"
   },
   {
       "Name": "Kaboom Bot",
       "Tier": "2",
       "Attack": "2",
       "Health": "2",
       "Cost": "3",
       "Type": "Mech",
       "Keywords": "Deathrattle",
       "Combined": "Mech, Deathrattle"
   },
   {
       "Name": "Kindly Grandmother",
       "Tier": "2",
       "Attack": "1",
       "Health": "1",
       "Cost": "2",
       "Type": "Beast",
       "Keywords": "Deathrattle",
       "Combined": "Beast, Deathrattle"
   },
   {
       "Name": "Menagerie Mug",
       "Tier": "2",
       "Attack": "2",
       "Health": "2",
       "Cost": "3",
       "Keywords": "Battlecry",
       "Combined": "Battlecry"
   },
   {
       "Name": "Metaltooth Leaper",
       "Tier": "2",
       "Attack": "3",
       "Health": "3",
       "Cost": "3",
       "Type": "Mech",
       "Keywords": "Battlecry",
       "Combined": "Mech, Battlecry"
   },
   {
       "Name": "Molten Rock",
       "Tier": "2",
       "Attack": "2",
       "Health": "4",
       "Type": "Elemental",
       "Keywords": "Taunt",
       "Combined": "Elemental, Taunt"
   },
   {
       "Name": "Murloc Warleader",
       "Tier": "2",
       "Attack": "3",
       "Health": "3",
       "Cost": "3",
       "Type": "Murloc",
       "Combined": "Murloc"
   },
   {
       "Name": "Nathrezim Overseer",
       "Tier": "2",
       "Attack": "2",
       "Health": "3",
       "Cost": "3",
       "Type": "Demon",
       "Keywords": "Battlecry",
       "Combined": "Demon, Battlecry"
   },
   {
       "Name": "Old Murk-Eye",
       "Tier": "2",
       "Attack": "2",
       "Health": "4",
       "Cost": "4",
       "Legendary": "Y",
       "Type": "Murloc",
       "Keywords": "Charge",
       "Combined": "Murloc, Charge"
   },
   {
       "Name": "Pack Leader",
       "Tier": "2",
       "Attack": "2",
       "Health": "3",
       "Cost": "3",
       "Synergy": "Beast",
       "Combined": "Beast"
   },
   {
       "Name": "Party Elemental",
       "Tier": "2",
       "Attack": "3",
       "Health": "2",
       "Type": "Elemental",
       "Combined": "Elemental"
   },
   {
       "Name": "Rabid Saurolisk",
       "Tier": "2",
       "Attack": "3",
       "Health": "2",
       "Cost": "3",
       "Type": "Beast",
       "Keywords": "Deathrattle",
       "Combined": "Beast, Deathrattle"
   },
   {
       "Name": "Selfless Hero",
       "Tier": "2",
       "Attack": "2",
       "Health": "1",
       "Cost": "1",
       "Keywords": "Deathrattle, Divine Shield",
       "Combined": "Deathrattle, Divine Shield"
   },
   {
       "Name": "Southsea Captain",
       "Tier": "2",
       "Attack": "3",
       "Health": "3",
       "Type": "Pirate",
       "Combined": "Pirate"
   },
   {
       "Name": "Spawn of N'Zoth",
       "Tier": "2",
       "Attack": "2",
       "Health": "2",
       "Cost": "3",
       "Keywords": "Deathrattle",
       "Combined": "Deathrattle"
   },
   {
       "Name": "Steward of Time",
       "Tier": "2",
       "Attack": "3",
       "Health": "4",
       "Type": "Dragon",
       "Combined": "Dragon"
   },
   {
       "Name": "Tormented Ritualist",
       "Tier": "2",
       "Attack": "2",
       "Health": "3",
       "Keywords": "Taunt",
       "Combined": "Taunt"
   },
   {
       "Name": "Unstable Ghoul",
       "Tier": "2",
       "Attack": "1",
       "Health": "3",
       "Cost": "2",
       "Keywords": "Deathrattle, Taunt",
       "Combined": "Deathrattle, Taunt"
   },
   {
       "Name": "Waxrider Togwaggle",
       "Tier": "2",
       "Attack": "1",
       "Health": "3",
       "Legendary": "Y",
       "Synergy": "Dragon",
       "Combined": "Dragon"
   },
   {
       "Name": "Yo-Ho-Ogre",
       "Tier": "2",
       "Attack": "2",
       "Health": "6",
       "Type": "Pirate",
       "Keywords": "Taunt",
       "Combined": "Pirate, Taunt"
   },
   {
       "Name": "Arcane Assistant",
       "Tier": "3",
       "Attack": "3",
       "Health": "3",
       "Type": "Elemental",
       "Keywords": "Battlecry",
       "Combined": "Elemental, Battlecry"
   },
   {
       "Name": "Arm of the Empire",
       "Tier": "3",
       "Attack": "4",
       "Health": "5",
       "Synergy": "Taunt",
       "Combined": "Taunt"
   },
   {
       "Name": "Bloodsail Cannoneer",
       "Tier": "3",
       "Attack": "4",
       "Health": "3",
       "Type": "Pirate",
       "Keywords": "Battlecry",
       "Combined": "Pirate, Battlecry"
   },
   {
       "Name": "Bronze Warden",
       "Tier": "3",
       "Attack": "2",
       "Health": "1",
       "Type": "Dragon",
       "Keywords": "Divine Shield, Reborn",
       "Combined": "Dragon, Divine Shield, Reborn"
   },
   {
       "Name": "Coldlight Seer",
       "Tier": "3",
       "Attack": "2",
       "Health": "3",
       "Cost": "3",
       "Type": "Murloc",
       "Keywords": "Battlecry",
       "Combined": "Murloc, Battlecry"
   },
   {
       "Name": "Crackling Cyclone",
       "Tier": "3",
       "Attack": "4",
       "Health": "1",
       "Type": "Elemental",
       "Keywords": "Divine Shield, Windfury",
       "Combined": "Elemental, Divine Shield, Windfury"
   },
   {
       "Name": "Crystalweaver",
       "Tier": "3",
       "Attack": "5",
       "Health": "4",
       "Cost": "4",
       "Keywords": "Battlecry",
       "Synergy": "Demon",
       "Combined": "Battlecry, Demon"
   },
   {
       "Name": "Deflect-o-bot",
       "Tier": "3",
       "Attack": "3",
       "Health": "2",
       "Cost": "5",
       "Type": "Mech",
       "Keywords": "Divine Shield",
       "Combined": "Mech, Divine Shield"
   },
   {
       "Name": "Felfin Navigator",
       "Tier": "3",
       "Attack": "4",
       "Health": "4",
       "Type": "Murloc",
       "Keywords": "Battlecry",
       "Combined": "Murloc, Battlecry"
   },
   {
       "Name": "Hangry Dragon",
       "Tier": "3",
       "Attack": "4",
       "Health": "4",
       "Type": "Dragon",
       "Combined": "Dragon"
   },
   {
       "Name": "Houndmaster",
       "Tier": "3",
       "Attack": "4",
       "Health": "3",
       "Cost": "4",
       "Keywords": "Battlecry, Taunt",
       "Synergy": "Beast",
       "Combined": "Battlecry, Taunt, Beast"
   },
   {
       "Name": "Imp Gang Boss",
       "Tier": "3",
       "Attack": "2",
       "Health": "4",
       "Cost": "3",
       "Type": "Demon",
       "Combined": "Demon"
   },
   {
       "Name": "Infested Wolf",
       "Tier": "3",
       "Attack": "3",
       "Health": "3",
       "Cost": "4",
       "Type": "Beast",
       "Keywords": "Deathrattle",
       "Combined": "Beast, Deathrattle"
   },
   {
       "Name": "Iron Sensei",
       "Tier": "3",
       "Attack": "2",
       "Health": "2",
       "Cost": "3",
       "Type": "Mech",
       "Combined": "Mech"
   },
   {
       "Name": "Khadgar",
       "Tier": "3",
       "Attack": "2",
       "Health": "2",
       "Cost": "2",
       "Legendary": "Y",
       "Combined": ""
   },
   {
       "Name": "Monstrous Macaw",
       "Tier": "3",
       "Attack": "4",
       "Health": "3",
       "Type": "Beast",
       "Keywords": "Deathrattle",
       "Combined": "Beast, Deathrattle"
   },
   {
       "Name": "Piloted Shredder",
       "Tier": "3",
       "Attack": "4",
       "Health": "3",
       "Cost": "4",
       "Type": "Mech",
       "Keywords": "Deathrattle",
       "Combined": "Mech, Deathrattle"
   },
   {
       "Name": "Rat Pack",
       "Tier": "3",
       "Attack": "2",
       "Health": "2",
       "Cost": "3",
       "Type": "Beast",
       "Keywords": "Deathrattle",
       "Combined": "Beast, Deathrattle"
   },
   {
       "Name": "Replicating Menace",
       "Tier": "3",
       "Attack": "3",
       "Health": "1",
       "Cost": "4",
       "Type": "Mech",
       "Keywords": "Deathrattle, Magnetic",
       "Combined": "Mech, Deathrattle, Magnetic"
   },
   {
       "Name": "Salty Looter",
       "Tier": "3",
       "Attack": "4",
       "Health": "4",
       "Type": "Pirate",
       "Combined": "Pirate"
   },
   {
       "Name": "Screwjank Clunker",
       "Tier": "3",
       "Attack": "2",
       "Health": "5",
       "Cost": "4",
       "Type": "Mech",
       "Keywords": "Battlecry",
       "Combined": "Mech, Battlecry"
   },
   {
       "Name": "Soul Juggler",
       "Tier": "3",
       "Attack": "3",
       "Health": "3",
       "Cost": "3",
       "Synergy": "Demon",
       "Combined": "Demon"
   },
   {
       "Name": "Southsea Strongarm",
       "Tier": "3",
       "Attack": "4",
       "Health": "3",
       "Type": "Pirate",
       "Keywords": "Battlecry",
       "Combined": "Pirate, Battlecry"
   },
   {
       "Name": "Stasis Elemental",
       "Tier": "3",
       "Attack": "4",
       "Health": "4",
       "Type": "Elemental",
       "Keywords": "Battlecry, Freeze",
       "Combined": "Elemental, Battlecry, Freeze"
   },
   {
       "Name": "Twilight Emissary",
       "Tier": "3",
       "Attack": "4",
       "Health": "4",
       "Type": "Dragon",
       "Keywords": "Battlecry, Taunt",
       "Combined": "Dragon, Battlecry, Taunt"
   },
   {
       "Name": "Warden of Old",
       "Tier": "3",
       "Attack": "3",
       "Health": "3",
       "Keywords": "Deathrattle",
       "Combined": "Deathrattle"
   },
   {
       "Name": "Annoy-o-Module",
       "Tier": "4",
       "Attack": "2",
       "Health": "4",
       "Cost": "4",
       "Type": "Mech",
       "Keywords": "Divine Shield, Magnetic, Taunt",
       "Combined": "Mech, Divine Shield, Magnetic, Taunt"
   },
   {
       "Name": "Bigfernal",
       "Tier": "4",
       "Attack": "4",
       "Health": "4",
       "Keywords": "Demon",
       "Combined": "Demon"
   },
   {
       "Name": "Bolvar,  Fireblood",
       "Tier": "4",
       "Attack": "1",
       "Health": "7",
       "Cost": "5",
       "Legendary": "Y",
       "Keywords": "Divine Shield",
       "Combined": "Divine Shield"
   },
   {
       "Name": "Cave Hydra",
       "Tier": "4",
       "Attack": "2",
       "Health": "4",
       "Cost": "3",
       "Type": "Beast",
       "Combined": "Beast"
   },
   {
       "Name": "Champion of Y'Shaarj",
       "Tier": "4",
       "Attack": "4",
       "Health": "4",
       "Synergy": "Taunt",
       "Combined": "Taunt"
   },
   {
       "Name": "Cobalt Scalebane",
       "Tier": "4",
       "Attack": "5",
       "Health": "5",
       "Cost": "5",
       "Type": "Dragon",
       "Combined": "Dragon"
   },
   {
       "Name": "Defender of Argus",
       "Tier": "4",
       "Attack": "2",
       "Health": "3",
       "Cost": "4",
       "Keywords": "Battlecry, Taunt",
       "Combined": "Battlecry, Taunt"
   },
   {
       "Name": "Drakonid Enforcer",
       "Tier": "4",
       "Attack": "3",
       "Health": "6",
       "Type": "Dragon",
       "Keywords": "Divine Shield",
       "Combined": "Dragon, Divine Shield"
   },
   {
       "Name": "Floating Watcher",
       "Tier": "4",
       "Attack": "4",
       "Health": "4",
       "Cost": "5",
       "Type": "Demon",
       "Combined": "Demon"
   },
   {
       "Name": "Goldgrubber",
       "Tier": "4",
       "Attack": "2",
       "Health": "2",
       "Type": "Pirate",
       "Combined": "Pirate"
   },
   {
       "Name": "Herald of Flame",
       "Tier": "4",
       "Attack": "5",
       "Health": "6",
       "Type": "Dragon",
       "Keywords": "Overkill",
       "Combined": "Dragon, Overkill"
   },
   {
       "Name": "Junkbot",
       "Tier": "4",
       "Attack": "1",
       "Health": "5",
       "Cost": "5",
       "Type": "Mech",
       "Combined": "Mech"
   },
   {
       "Name": "Majordomo Executus",
       "Tier": "4",
       "Attack": "6",
       "Health": "3",
       "Legendary": "Y",
       "Synergy": "Elemental",
       "Combined": "Elemental"
   },
   {
       "Name": "Mechano-Egg",
       "Tier": "4",
       "Attack": "0",
       "Health": "5",
       "Cost": "5",
       "Type": "Mech",
       "Keywords": "Deathrattle",
       "Combined": "Mech, Deathrattle"
   },
   {
       "Name": "Menagerie Jug",
       "Tier": "4",
       "Attack": "3",
       "Health": "3",
       "Cost": "5",
       "Keywords": "Battlecry",
       "Combined": "Battlecry"
   },
   {
       "Name": "Primalfin Lookout",
       "Tier": "4",
       "Attack": "3",
       "Health": "2",
       "Cost": "3",
       "Type": "Murloc",
       "Keywords": "Battlecry, Discover",
       "Combined": "Murloc, Battlecry, Discover"
   },
   {
       "Name": "Qiraji Harbinger",
       "Tier": "4",
       "Attack": "5",
       "Health": "5",
       "Synergy": "Taunt",
       "Combined": "Taunt"
   },
   {
       "Name": "Ripsnarl Captain",
       "Tier": "4",
       "Attack": "4",
       "Health": "5",
       "Type": "Pirate",
       "Combined": "Pirate"
   },
   {
       "Name": "Savannah Highmane",
       "Tier": "4",
       "Attack": "6",
       "Health": "5",
       "Cost": "6",
       "Type": "Beast",
       "Keywords": "Deathrattle",
       "Combined": "Beast, Deathrattle"
   },
   {
       "Name": "Security Rover",
       "Tier": "4",
       "Attack": "2",
       "Health": "6",
       "Cost": "6",
       "Type": "Mech",
       "Keywords": "Taunt",
       "Combined": "Mech, Taunt"
   },
   {
       "Name": "Siegebreaker",
       "Tier": "4",
       "Attack": "5",
       "Health": "8",
       "Cost": "7",
       "Type": "Demon",
       "Keywords": "Taunt",
       "Combined": "Demon, Taunt"
   },
   {
       "Name": "Toxfin",
       "Tier": "4",
       "Attack": "1",
       "Health": "2",
       "Cost": "1",
       "Type": "Murloc",
       "Keywords": "Battlecry,  Poisonous",
       "Combined": "Murloc, Battlecry,  Poisonous"
   },
   {
       "Name": "Virmen Sensei",
       "Tier": "4",
       "Attack": "4",
       "Health": "5",
       "Cost": "5",
       "Keywords": "Battlecry",
       "Synergy": "Beast",
       "Combined": "Battlecry, Beast"
   },
   {
       "Name": "Wildfire Elemental",
       "Tier": "4",
       "Attack": "7",
       "Health": "3",
       "Type": "Elemental",
       "Combined": "Elemental"
   },
   {
       "Name": "Annihilan Battlemaster",
       "Tier": "5",
       "Attack": "3",
       "Health": "1",
       "Cost": "8",
       "Type": "Demon",
       "Keywords": "Battlecry",
       "Combined": "Demon, Battlecry"
   },
   {
       "Name": "Baron Rivendare",
       "Tier": "5",
       "Attack": "1",
       "Health": "7",
       "Cost": "4",
       "Legendary": "Y",
       "Keywords": "Deathrattle",
       "Combined": "Deathrattle"
   },
   {
       "Name": "Brann Bronzebeard",
       "Tier": "5",
       "Attack": "2",
       "Health": "4",
       "Cost": "3",
       "Legendary": "Y",
       "Keywords": "Battlecry",
       "Combined": "Battlecry"
   },
   {
       "Name": "Cap'n Hoggarr",
       "Tier": "5",
       "Attack": "6",
       "Health": "6",
       "Legendary": "Y",
       "Type": "Pirate",
       "Combined": "Pirate"
   },
   {
       "Name": "Deadly Spore",
       "Tier": "5",
       "Attack": "1",
       "Health": "1",
       "Keywords": "Poisonous",
       "Combined": "Poisonous"
   },
   {
       "Name": "Faceless Taverngoer",
       "Tier": "5",
       "Attack": "4",
       "Health": "4",
       "Keywords": "Battlecry",
       "Combined": "Battlecry"
   },
   {
       "Name": "Ironhide Direhorn",
       "Tier": "5",
       "Attack": "7",
       "Health": "7",
       "Cost": "7",
       "Type": "Beast",
       "Keywords": "Overkill",
       "Combined": "Beast, Overkill"
   },
   {
       "Name": "King Bagurgle",
       "Tier": "5",
       "Attack": "6",
       "Health": "3",
       "Cost": "8",
       "Legendary": "Y",
       "Type": "Murloc",
       "Keywords": "Battlecry, Deathrattle",
       "Combined": "Murloc, Battlecry, Deathrattle"
   },
   {
       "Name": "Lightfang Enforcer",
       "Tier": "5",
       "Attack": "2",
       "Health": "2",
       "Cost": "6",
       "Synergy": "Mech,  Murloc,  Demon,  Beast, Dragon, Pirate",
       "Combined": "Mech,  Murloc,  Demon,  Beast, Dragon, Pirate"
   },
   {
       "Name": "Mal'Ganis",
       "Tier": "5",
       "Attack": "9",
       "Health": "7",
       "Cost": "9",
       "Legendary": "Y",
       "Type": "Demon",
       "Keywords": "Immune",
       "Combined": "Demon, Immune"
   },
   {
       "Name": "Mama Bear",
       "Tier": "5",
       "Attack": "4",
       "Health": "4",
       "Cost": "8",
       "Type": "Beast",
       "Combined": "Beast"
   },
   {
       "Name": "Murozond",
       "Tier": "5",
       "Attack": "5",
       "Health": "5",
       "Legendary": "Y",
       "Type": "Dragon",
       "Keywords": "Battlecry",
       "Combined": "Dragon, Battlecry"
   },
   {
       "Name": "Mythrax, the Unraveler",
       "Tier": "5",
       "Attack": "4",
       "Health": "4",
       "Legendary": "Y",
       "Combined": ""
   },
   {
       "Name": "Nat Pagle, Extreme Angler",
       "Tier": "5",
       "Attack": "8",
       "Health": "5",
       "Legendary": "Y",
       "Type": "Pirate",
       "Combined": "Pirate"
   },
   {
       "Name": "Nomi, Kitchen Nightmare",
       "Tier": "5",
       "Attack": "4",
       "Health": "4",
       "Legendary": "Y",
       "Synergy": "Elemental",
       "Combined": "Elemental"
   },
   {
       "Name": "Razorgore, the Untamed",
       "Tier": "5",
       "Attack": "2",
       "Health": "4",
       "Legendary": "Y",
       "Type": "Dragon",
       "Combined": "Dragon"
   },
   {
       "Name": "Seabreaker Goliath",
       "Tier": "5",
       "Attack": "6",
       "Health": "7",
       "Type": "Pirate",
       "Keywords": "Overkill, Windfury",
       "Combined": "Pirate, Overkill, Windfury"
   },
   {
       "Name": "Sneed's Old Shredder",
       "Tier": "5",
       "Attack": "5",
       "Health": "7",
       "Cost": "8",
       "Type": "Mech",
       "Keywords": "Deathrattle",
       "Combined": "Mech, Deathrattle"
   },
   {
       "Name": "Strongshell Scavenger",
       "Tier": "5",
       "Attack": "2",
       "Health": "3",
       "Cost": "4",
       "Keywords": "Battlecry, Taunt",
       "Combined": "Battlecry, Taunt"
   },
   {
       "Name": "Tavern Tempest",
       "Tier": "5",
       "Attack": "4",
       "Health": "4",
       "Type": "Elemental",
       "Keywords": "Battlecry",
       "Combined": "Elemental, Battlecry"
   },
   {
       "Name": "Voidlord",
       "Tier": "5",
       "Attack": "3",
       "Health": "9",
       "Cost": "9",
       "Type": "Demon",
       "Keywords": "Deathrattle, Taunt",
       "Combined": "Demon, Deathrattle, Taunt"
   },
   {
       "Name": "Amalgadon",
       "Tier": "6",
       "Attack": "12",
       "Health": "12",
       "Type": "Mech,  Murloc,  Demon,  Beast, Dragon, Pirate, Elemental",
       "Keywords": "Battlecry",
       "Combined": "Mech,  Murloc,  Demon,  Beast, Dragon, Pirate, Elemental, Battlecry"
   },
   {
       "Name": "Dread Admiral Eliza",
       "Tier": "6",
       "Attack": "6",
       "Health": "7",
       "Legendary": "Y",
       "Type": "Pirate",
       "Combined": "Pirate"
   },
   {
       "Name": "Foe Reaper 4000",
       "Tier": "6",
       "Attack": "6",
       "Health": "9",
       "Cost": "8",
       "Legendary": "Y",
       "Type": "Mech",
       "Combined": "Mech"
   },
   {
       "Name": "Gentle Djinni",
       "Tier": "6",
       "Attack": "4",
       "Health": "5",
       "Type": "Elemental",
       "Keywords": "Deathrattle, Taunt",
       "Combined": "Elemental, Deathrattle, Taunt"
   },
   {
       "Name": "Ghastcoiler",
       "Tier": "6",
       "Attack": "7",
       "Health": "7",
       "Cost": "6",
       "Type": "Beast",
       "Keywords": "Deathrattle",
       "Combined": "Beast, Deathrattle"
   },
   {
       "Name": "Goldrinn,  the Great Wolf",
       "Tier": "6",
       "Attack": "4",
       "Health": "4",
       "Cost": "8",
       "Legendary": "Y",
       "Type": "Beast",
       "Keywords": "Deathrattle",
       "Combined": "Beast, Deathrattle"
   },
   {
       "Name": "Imp Mama",
       "Tier": "6",
       "Attack": "6",
       "Health": "10",
       "Type": "Demon",
       "Keywords": "Taunt",
       "Combined": "Demon, Taunt"
   },
   {
       "Name": "Kalecgos, Arcane Aspect",
       "Tier": "6",
       "Attack": "4",
       "Health": "12",
       "Legendary": "Y",
       "Type": "Dragon",
       "Keywords": "Battlecry, Taunt",
       "Combined": "Dragon, Battlecry, Taunt"
   },
   {
       "Name": "Kangor's Apprentice",
       "Tier": "6",
       "Attack": "4",
       "Health": "8",
       "Cost": "10",
       "Keywords": "Deathrattle",
       "Synergy": "Mech",
       "Combined": "Deathrattle, Mech"
   },
   {
       "Name": "Lieutenant Garr",
       "Tier": "6",
       "Attack": "5",
       "Health": "1",
       "Type": "Elemental",
       "Keywords": "Taunt",
       "Combined": "Elemental, Taunt"
   },
   {
       "Name": "Lil' Rag",
       "Tier": "6",
       "Attack": "4",
       "Health": "4",
       "Legendary": "Y",
       "Type": "Elemental",
       "Combined": "Elemental"
   },
   {
       "Name": "Maexxna",
       "Tier": "6",
       "Attack": "2",
       "Health": "8",
       "Cost": "6",
       "Legendary": "Y",
       "Type": "Beast",
       "Keywords": "Poisonous",
       "Combined": "Beast, Poisonous"
   },
   {
       "Name": "Nadina the Red",
       "Tier": "6",
       "Attack": "7",
       "Health": "4",
       "Legendary": "Y",
       "Keywords": "Deathrattle, Divine Shield",
       "Synergy": "Dragon",
       "Combined": "Deathrattle, Divine Shield, Dragon"
   },
   {
       "Name": "The Tide Razor",
       "Tier": "6",
       "Attack": "6",
       "Health": "4",
       "Keywords": "Deathrattle",
       "Synergy": "Pirate",
       "Combined": "Deathrattle, Pirate"
   },
   {
       "Name": "Zapp Slywick",
       "Tier": "6",
       "Attack": "7",
       "Health": "10",
       "Cost": "6",
       "Legendary": "Y",
       "Keywords": "Windfury",
       "Combined": "Windfury"
   }
]

export default minions;