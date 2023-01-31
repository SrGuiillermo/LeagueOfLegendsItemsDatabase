// This database contains all League of Legends items's stats, passives, actives and everything in a .js file. The items are written the following way:
// Object name : {                               --> In-game name of the object
//      type of object : true,                   --> Such as mythic, legendary, basic, etc. ornn for ornn's upgraded mythics
//      name : 'name',                           --> The name of the object to display, capìtalized in string format
//      id : id,                                 --> The item's ID, usefull to get the item's icon for example
//      price : price,                           --> The item's total cost (not combined cost) in int format
//      stats : {                                --> The item's stats in object format with the following stats' names
//          ad : int,                            --> Attack Damage
//          '%crit' : float,                     --> Critical strike chance in divided by 100
//          '%as' : float,                       --> Attack Speed
//          '%armor_pen' : float,                --> Percentage armor penetration divided by 100
//          'lethality' : int,                   --> Lethality
//          '%hspower' : float,                  --> Percentage of heal and shield power divided by 100
//          ap : int,                            --> Ability Power
//          mana : int,                          --> Mana
//          magic_pen : int,                     --> Flat magic penetration
//          '%magic_pen' : float,                --> Percentage magic penetration divided by 100
//          hp : int,                            --> Health
//          '%hp' : float,                       --> Percentage bonus total health divided by 100
//          '%hp_regen' : float,                 --> Percentage base health regeneration divided by 100
//          hp_regen : int,                      --> Base flat health regenaration per second such as doran's shield regen
//          armor : int,                         --> Armor
//          mr : int,                            --> Magic Resist
//          haste : int,                         --> Ability Haste
//          summoner_spell_haste : int,          --> Total summoner spell haste such as the ionian boots
//          '%mana_regen' : float,               --> Percentage mana regeneration divided by 100
//          '%ms' : float,                       --> Percentage move speed divided by 100
//          ms : int,                            --> Base move speed such as the boots
//          '%omnivamp' : float,                 --> Percentage omnivamp divided by 100
//          '%life_steal' : float,               --> Percentage life steam divided by 100
//          gold : float,                        --> Gold per second such as the support starter items
//          '%tenacity' : float,                 --> Percentage tenacity divided by 100 such as mercury's treads
//          '%slow_resist' : float,              --> Percentage slow resistance divided by 100 such as Boots of swiftness
//          '%size' : float,                     --> Percentage bonus size divided by 100 such as heartsteel
//          custom : str,                        --> Custom specific stats such as locket mythic bonus or moonstone mythic bonus
//      },
//      bundle_type : true,                      --> Bundle type of the item such as bruiser, marksman, assasin, mage, tank and support
//      builds_into : array,                     --> The items that the item builds into as an array
//      builds_from : array,                     --> The items that the item builds from as an array
//      item_inherent : str,                     --> Inherent item's passive that has no name, such as Rod of ages stats gains or mobility boots move speed
//      active_name : str,                       --> The name of the item's active
//      active_description : str,                --> The description of the item's active
//      active_cooldown : int,                   --> The item's active cooldown
//      passive_name : str,                      --> The item's first passive name
//      passive_description : str,               --> The item's first passive description
//      passive_cooldown : int,                  --> The item's first passive cooldown
//      passive2_name : str,                     --> The item's second passive name
//      passive2_description : int,              --> The item's second passive description
//      ...
//      mythic_stats : {},                       --> Mythics stats bonuses for each legendary item, with the same format as de stats above
// }
//
// PATCH 12.23

export const league_of_legends_items = {
    shurelyas_requiem : {
        ornn : true,
        name : "Shurelya's Requiem",
        id : 7020,
        price : 2500,
        stats : {
            ap : 70,
            hp : 300,
            haste : 25,
            '%mana_regen' : 2,
        },
        tank : true,
        support : true,
        builds_from : ['kindlegem', 'bandleglass_mirror'],
        active_name : 'Inspire',
        active_description : 'Grants nearby allies 30% Move Speed for 4 seconds.',
        active_cooldown : 75,
        passive_name : 'Motivate',
        passive_description : 'Healing, shielding or buffing allied champions (excluding yourself) grants you and them 25% Move Speed for 1.5 seconds.',
        mythic_stats : {
            haste : 5,
        },
    },
    
    equinox : {
        ornn : true,
        name : 'Equinox',
        id : 7023,
        price : 2500,
        stats : {
            hp : 400,
            haste : 25,
            armor : 40,
            mr : 40,
        },
        support : true,
        builds_from : ['kindlegem', 'aegis_of_the_legion'],
        passive_name : 'Coruscation',
        passive_description : 'After Immobilizing champions or being Immobilized, cause that target and all enemy Champions within 600 radius to take 10% increased damage for 5 seconds.',
        mythic_stats : {
            armor : 5,
            mr : 5,
        },
    },
    
    reliquary_of_the_golden_dawn : {
        ornn : true,
        name : 'Reliquary of the Golden Dawn',
        id : 7019,
        price : 2500,
        stats : {
            hp : 400,
            haste : 25,
            armor : 40,
            mr : 40,
        },
        tank : true,
        support : true,
        builds_from : ['kindlegem', 'aegis_of_the_legion'],
        active_name : 'Devotion',
        active_description : `Grant nearby allies within 850 radius a 180 - 330 (based on target's level) Shield, decaying over 2.5 seconds.`,
        active_cooldown : 90,
        passive_name : 'Consecrate',
        passive_description : 'Grant allied champions within 850 radius 3 bonus armor and 3 bonus magic resist.',
        mythic_stats : {
            custom : '2 Armor and Magic Resist increase to Consecrate.',
        },
    },
    
    seat_of_command : {
        ornn : true,
        name : 'Seat of Command',
        id : 7022,
        price : 2500,
        stats : {
            ap : 70,
            hp : 400,
            haste : 25,
            '%mana_regen' : 2,
        },
        support : true,
        builds_from : ['kindlegem', 'bandleglass_mirror'],
        passive_name : 'Coordinated Fire',
        passive_description : `Abilities that Slow or Immobilize a champion deal 45 - 75 (based on level) bonus magic damage and marks them
                               for 4 seconds. Ally champion damage detonates the mark, dealing an additional 90 - 150 
                               (based on ally level) magic damage and granting you both 20% Move Speed for 2 seconds.`,
        passive_cooldown : 6,
        mythic_stats : {
            ap : 15,
        },
    },
    
    starcaster : {
        ornn : true,
        name : 'Starcaster',
        id : 7021,
        price : 2500,
        stats : {
            ap : 70,
            hp : 300,
            haste : 25,
            '%mana_regen' : 2,
        },
        support : true,
        builds_from : ['kindlegem', 'bandleglass_mirror'],
        passive_name : 'Starlit Grace',
        passive_description : `When affecting champions with attacks or abilities in combat, heal 60 health to the most wounded nearby ally.
                               Each second spent in combat with champions increases your Heal and Shield Power by 5% (stacking up to 4 times for 20%).`,
        passive_cooldown : 2,
        mythic_stats : {
            custom : "8 increased health on Starlit Grace's heal.",
        },
    },
    
    caesura : {
        ornn : true,
        name : 'Caesura',
        id : 7024,
        price : 2800,
        stats :  {
            ap : 90,
            hp : 350,
            mana : 800,
            haste : 25,
        },
        mage : true,
        builds_from : ['kindlegem', 'lost_chapter', 'amplifying_tome'],
        passive_name : 'Divine Safeguard',
        passive_description : `You are Safeguarded, reducing incoming champion damage by 75%. Safeguard persists for 1.5 seconds after taking champion damage.
                               Cooldown restarts upon taking damage from enemy champions.`,
        passive_cooldown : 40,
        passive2_name : 'Holy Gift',
        passive2_description : `While Safeguarded and for 3 seconds after it is broken, gain 10-40 (based on level) Ability Power.`,
        mythic_stats : {
            '%ms' : 0.01,
            ap : 8,
        },
    },
    
    eternal_winter : {
        ornn : true,
        name : 'Eternal Winter',
        id : 7014,
        price : 2800,
        stats : {
            ap : 90,
            hp : 350,
            mana : 800,
            haste : 25,
        },
        mage : true,
        builds_from : ['kindlegem', 'lost_chapter', 'amplifying_tome'],
        active_name : 'Glaciate',
        active_description : `Deal (100 + 30% Ability Power) magic damage in a cone, Slowing enemies by 65% for 1 seconds. Enemies at the center of the cone are Rooted instead.`,
        active_cooldown : 30,
        mythic_stats : {
            ap : 10,
        },
    },
    
    frozen_fist : {
        ornn : true,
        name : 'Frozen Fist',
        id : 7005,
        price : 3000,
        stats : {
            hp : 550,
            armor : 70,
            haste : 25,
        },
        tank : true,
        builds_from : ['sheen, kindlegem, chain_vest'],
        passive_name : 'Spellblade',
        passive_description : `After using an ability, your next basic attack within 10 seconds deals (+100% base AD) bonus physical damage on-hit
                               and creates a 300 radius frost field for 2.5 seconds that slows enemies by 15% + 0.4% per 100 maximum health [Melee champion] / 
                               7.5% + 0.2% per 100 maximum health [Ranged champion]. Your primary target is slowed for double the amount and has their damage
                               against you reduced by 10% for 2.5 seconds.`,
        passive_cooldown : 1.5,
        mythic_stats : {
            hp : 50,
            '%tenacity' : 0.05,
            '%slow_resist' : 0.05,
        },
    },

    primordial_dawn : {
        ornn : true,
        name : 'Primordial Dawn',
        id : 7027,
        price : 3000,
        stats : {
            hp : 550,
            armor : 40,
            mr : 40,
            haste : 25,
        },
        tank : true,
        support : true,
        builds_from : ['aegis_of_the_legion', 'kindlegem', 'ruby_crystal'],
        passive_name : 'Guiding light',
        passive_description : `Upon casting your ultimate, you transcend for 9 seconds. While transcended, increase your maximum health by 10% and cause you
                               and all allies within 1200 units to gain 20 basic ability haste and heal for 2% of your maximum health upen you becoming transcended
                               and 3 seconds thereafter. Ally healing is increased by 0% - 100% (based on target's missing health).`,
        passive_cooldown : 60,
        mythic_stats : {
            hp : 100,
        },
    },

    the_unspoken_parasite : {
        ornn : true,
        name : "The Unspoken Parasite",
        id : 7026,
        price : 3000,
        stats : {
            hp : 550,
            armor : 40,
            mr : 40,
            haste : 25,
        },
        tank : true,
        passive_name : 'Voidborn resilence',
        passive_description : `For each second in combat with champions, gain 3 bonus armor and bonus magic resistance for 6 seconds, stacking up to 8 times
                               for 24 bonus resistances. At maximum stacks instantly deal 3% maximum health magic damage to enemies within 700 units (2.1% against non-champions)
                               heal for the same amount for each enemy damaged, and increase your total resistances by 15% until the end of combat.`,
        mythic_stats : {
            armor : 5,
            mr : 5,
        },
    },

    leviathan : {
        ornn : true,
        name : 'Leviathan',
        id : 7025,
        price : 3200,
        stats : {
            hp : 1050,
            haste : 25,
            '%hp_regen' : 3,
        },
        tank : true,
        bruiser : true,
        passive_name : 'Colossal consumption',
        passive_description : `While within 700 units of an enemy champion, generate a stack on them each second up to 3 stacks. At 3 stacks your next basic attack
                               deal 125 (+6% maximum health) bonus physical damage on-hit and grant you permanent bonus health equal to 10% of the pre-mitigation damage.
                               This item's cooldown is per target.`,
        passive_cooldown : 30,
        mythic_stats : {
            '%hp' : 0.01,
            '%size' : 0.06,
        },
    },
    
    draktharrs_shadowcarver : {
        ornn : true,
        name : "Draktharr's shadowcarver",
        id : 7002,
        price : 3100,
        stats : {
            ad : 75,
            lethality : 26,
            haste : 25,
        },
        assasin : true,
        builds_from : ['serrated_dirk', 'cauldfields_warhammer'],
        passive_name : 'Nightstalker',
        passive_description : `Attacking a champion deals an additional (75 + 30% bonus AD [Melee champion] / 
                               55 + 25% bonus AD [Ranged champion]) physical damage. If dealt by a Melee champion, 
                               this Attack also Slows the target by 99% for 0.25 seconds. When a champion that you have damaged within 
                               the last 3 seconds dies, this cooldown is refreshed and you become Invisible for 1.5 seconds.`,
        passive_cooldown : 15,
        mythic_stats : {
            ms : 5,
            haste : 5,
        },
    },
    
    syzygy : {
        ornn : true,
        name : 'Syzygy',
        id : 7001,
        price : 3100,
        stats : {
            ad : 80,
            lethality : 20,
            haste : 20,
        },
        assasin : true,
        bruiser : true,
        builds_from : ['serrated_dirk', 'long_sword', 'vampiric_scepter'],
        passive_name : 'Ever Rising Moon',
        passive_description : `Hitting a champion with 2 separate Attacks or Abilities within 1.5 seconds deals an additional 
                               6% max Health physical damage [Melee champion] / 3% max Health physical damage [Ranged champion], 
                               grants you 15% Move Speed and a (180 + 40% bonus Attack Damage) shield (50% shield for ranged champions) for 2 seconds.
                               Ever Rising Moon's cooldown is halved for melee champions.`,
        passive_cooldown : 12,
        mythic_stats : {
            ms : 5,
            '%armor_pen' : 0.04,
        },

    },
    
    sandshrikes_claw : {
        ornn : true,
        name : "Sandshrike's Claw",
        id : 7000,
        price : 3100,
        stats : {
            ad : 75,
            lethality : 26,
            haste : 25,
        },
        assasin : true,
        builds_from : ['serrated_dirk', 'cauldfields_warhammer'],
        active_name : 'Sandswipe',
        active_description : `Dash through a targeted enemy champion (500 range). Upon completing the dash, deal 75 (+30% bonus AD) physical damage to the target
                              and increase your damage dealt to them by 15% for the next 3 seconds.`,
        active_cooldown : 90,
        mythic_stats : {
            ms : 5,
            lethality : 5,
        },
             
    },
    
    infinite_convergence : {
        ornn : true,
        name : 'Infinite Convergence',
        id : 7028,
        price : 2800,
        stats : {
            ap : 80,
            hp : 450,
            mana : 550,
        },
        mage : true,
        builds_from : ['catalyst_of_aenons', 'blasting_wand', 'amplifying_tome'],
        item_inherent : `This item gains 20 bonus health, 20 bonus mana and 4 ability power every minute up to 10 times, for a maximum
                               of 200 bonus health, 200 bonus mana, and 40 ability power. Upon reaching maximum stacks, gain a level that
                               preserves your current experience (cap remains at level 18) and increase all effects of Eternity by 50%.`,
        passive2_name : 'Eternity',
        passive2_description : `Restore mana equal to 8% of pre-mitigation damage taken from champions, and heal for an amount equal to 20%
                                of mana spent, up to 15 per cast. Toggled abilities can only heal for up to 15 per second. For every 250 healing
                                or mana restored this way, gain 25% bonus movement speed that decays over 2 seconds. Limited to 1 Eternity item.`,
        mythic_stats : {
            haste : 5,
        },
    },

    upgraded_aeropack : {
        ornn : true,
        name : 'Upgraded Aeropack',
        id : 7011,
        price : 3200,
        stats : {
            ap : 120,
            magic_pen : 10,
            hp : 350,
            haste : 20,
        },
        mage : true,
        builds_from : ['blasting_wand', 'hextech_alternator', 'amplifying_tome'],
        active_name : 'Supersonic',
        active_description : `Dash 275 units, unleashing an arc of 7 rockets that deals 125 (+15% AP) magic damage to enemies hit. Afterwards,
                              30% bonus move speed towards enemy champions for 1.5 seconds. Supersonic resets the user's basic attack timer.`,
        active_cooldown : 40,
        mythic_stats : {
            magic_pen : 5,
        },
    },
    
    icathias_curse : {
        ornn : true,
        name : "Icathia's Curse",
        id : 7009,
        price : 3200,
        stats : {
            ap : 90,
            hp : 450,
            haste : 20,
            '%omnivamp' : 0.08,
        },
        mage : true,
        builds_from : ['leeching_leer', 'blasting_wand'],
        passive_name : 'Void Corruption',
        passive_description : `For each second in combat with champions, deals 3% bonus damage, stacking up to 3 times for 9% bonus damage.
                               While this effect is fully stacked, convert 100% of the bonus damage into true damage.`,
        mythic_stats : {
            '%omnivamp' : 0.02,
            ap : 8,
        },
    },
    
    vespertide : {
        ornn : true,
        name : 'Vespertide',
        id : 7010,
        price : 3200,
        stats : {
            ap : 120,
            hp : 400,
            haste : 30,
        },
        mage : true,
        builds_from : ['blasting_wand', 'hextech_alternator', 'amplifying_tome'],
        passive_name : 'Soulrend',
        passive_description : `Damaging an enemy champion deals 125 (+15% AP) bonus magic damage and grants you 25% bonus movement speed for 1.5 seconds,
                               with the duration extending on subsequent triggers. This item's cooldowns is per champion.`,
        mythic_stats : {
            haste : 5,
        },
    },
    
    liandrys_anguish : {
        ornn : true,
        name : "Liandry's Lament",
        id : 7012,
        price : 3200,
        stats : {
            ap : 110,
            mana : 800,
            haste : 25,
        },
        mage : true,
        builds_from : ['lost_chapter', 'fiendish_codex'],
        passive_name : 'Torment',
        passive_description : `Dealing ability damage burns enemies, causing them to take 50 (+6% AP)(+4% target's maximum health) total magic damage over 4 seconds.`,
        passive2_name : 'Agony',
        passive2_description_default : `Deal 0% - 12% (based on target's bonus health) bonus magic damage against enemy champions.`,
        mythic_stats : {
            haste : 5,
        },
    },
    
    eye_of_luden : {
        ornn : true,
        name : "Eye of Luden",
        id : 7013,
        price : 3200,
        stats : {
            ap : 100,
            magic_pen : 10,
            mana : 800,
            haste : 25,
        },
        mage : true,
        builds_from : ['lost_chapter', 'blasting_wand'],
        passive_name : 'Echo',
        passive_description : `Dealing ability damage to an enemy deals 100 (+10% AP) additional magic damage to them and launches orbs at up to 3 other enemies
                               within 600 units around them, impacting after 0.528 seconds to deal the same damage to each and grants you 15% bonus movement speed
                               for 2 seconds. Dealing ability damage against champions reduces the cooldown of Echo by 0.5 seconds per champion up to a maximum of
                               3 seconds per cast.`,
        passive_cooldown : 10,
        mythic_stats : {
            magic_pen : 5,
        },
    },
    
    ceaseless_hunger : {
        ornn : true,
        name : 'Ceaseless Hunger',
        id : 7015,
        price : 3300,
        stats : {
            ad : 70,
            hp : 450,
            haste : 25,
            '%omnivamp' : 0.12,
        },
        bruiser : true,
        builds_from : ['ironspike_whip', 'cauldfields_warhammer', 'kindlegem'],
        active_name : 'Thirsting Slash',
        active_description : `Deal (175% base AD) physical damage to enemies hit in a 450 radious center around you. Heal for (20% total AD + 8% of your missing health)
                              for each enemy hit. Cooldown is reduced by ability haste.`,
        active_cooldown : 15,
        mythic_stats : {
            haste : 7,
        },
    },
    
    dreamshatter : {
        ornn : true,
        name : 'Dreamshatter',
        id : 7016,
        price : 3300,
        stats : {
            ad : 60,
           '%as': 0.3,
            hp : 400,
            haste : 25,
        },
        bruiser : true,
        builds_from : ['ironspike_whip', 'hearthbound_axe', 'kindlegem'],
        active_name : 'Halting Slash',
        active_description : `Deal 175% base AD physical damage and slow them by 40% for 3 seconds to enemies in a 450 radius. 
                              You are able to move while casting this item. This item's cooldown is reduced by hability haste.`,
        active_cooldown : 15,
        passive_name : 'Heroic Gait',
        passive_description : 'Dealing physical damage grants you 20 bonus movement speed for 2 seconds',
        mythic_stats : {
            '%ms' : 0.02,
        },
    },
    
    deicide : {
        ornn : true,
        name : 'Deicide',
        id : 7017,
        price : 3300,
        stats : {
            ad : 60,
            hp : 450,
            haste : 25,
        },
        bruiser : true,
        builds_from : ['cauldfields_warhammer', 'sheen', 'kindlegem'],
        passive_name : 'Spellblade',
        passive_description : `After using an ability your next attack within 10 seconds deals (125% base AD + (6% of target's maximum health [Melee champion]
                               3% of target's maximum health [Ranged champion])) as bonus physical damage on-hit and also heal for 55% of the premitigation damage.`,
        passive_cooldown : 1.5,
        mythic_stats : {
            '%armor_pen' : 0.03,
            '%magic_pen' : 0.03,
        },
    },
    
    infinity_force : {
        ornn : true,
        name : 'Infinity Force',
        id : 7018,
        price : 3333,
        stats : {
            ad : 45,
           '%as': 0.4,
            hp : 400,
            haste : 25,
        },
        bruiser : true,
        marksman : true,
        builds_from : ['sheen', 'hearthbound_axe', 'kindlegem'],
        passive_name : 'Threeforld Strike',
        passive_description : `Basic attacks grant 20 bonus move speed for 3 seconds. If the target is a champion or a structure,
                               increase base attack damage by 4% for 3 seconds, stacking up to 5 times for 20%. Stacks expire by one every 0.5 seconds
                               when the duration ends.`,
        passive2_name : 'Spellblade',
        passive2_description : `After using an ability, your next basic attack within 10 seconds deals (200% base AD) bonus physical damage on-hit.`,
        passive2_cooldown : 1.5,
        mythic_stats : {
            ad : 3,
            haste : 3,
            ms : 3,
        },
        
    },
    
    typhoon : {
        ornn : true,
        name : 'Typhoon',
        id : 7006,
        price : 3400,
        stats : {
            ad : 80,
           '%as': 0.35,
            '%crit' : 0.2,
        },
        marksman : true,
        builds_from : ['noonquiver', 'cloack_of_agility', 'pickaxe'],
        active_name : 'Cloudburst',
        active_description : `Dash 200-425 units to a targeted location and fire three homing missiles at the most wounded enemy within 750 units,
                              dealing a total of 180-315 (based on level)(+45% bonus AD), increased by 0% - 50% based on target's missing health.`,
        active_cooldown : 110,
        mythic_stats : {
            '%ms' : 0.02,
        },
    },
    
    wyrmfallen_sacrifice : {
        ornn : true,
        name : 'Wyrmfallen Sacrifice',
        id : 7007,
        price : 3400,
        stats : {
            ad : 85,
           '%as': 0.4,
            '%crit' : 0.2,
        },
        marksman : true,
        builds_from : ['noonquiver', 'cloack_of_agility', 'pickaxe'],
        passive_name : 'Bring it down',
        passive_description : `Every third attack deal 50 (+40% bonus AD) true damage on-hit.`,
        mythic_stats : {
            '%as' : 0.1,
        },
    },
    
    bloodward : {
        ornn : true,
        name : 'Bloodward',
        id : 7008,
        price : 3400,
        stats : {
            ad : 65,
           '%as': 0.3,
            '%crit' : 0.2,
            '%life_steal' : 0.08,
        },
        marksman : true,
        builds_from : ['noonquiver', 'cloack_of_agility', 'vampiric_scepter'],
        passive_name : 'Lifeline',
        passive_description : `If you would take damage that would reduce you below 30% of your maximum health, you first gain a shield that absorbs 250 - 630 (based on level)
                               damage for 3 seconds and 15 - 35 (based on level) bonus attack damage for 8 seconds. Limited to 1 Lifeline item.`,
        passive_cooldown : 90,
        mythic_stats : {
            ad : 5,
            hp : 70,
        },
    },

    shurelyas_battlesong : {
        mythic : true,
        name : "Shurelya's Battlesong",
        id : 2065,
        price : 2500,
        stats : {
            ap : 40,
            hp : 200,
            haste : 20,
            '%mana_regen' : 1,
        },
        tank : true,
        support : true,
        builds_from : ['kindlegem', 'bandleglass_mirror'],
        active_name : 'Inspire',
        active_description : 'Grants nearby allies 30% Move Speed for 4 seconds.',
        active_cooldown : 75,
        passive_name : 'Motivate',
        passive_description : 'Healing, shielding or buffing allied champions (excluding yourself) grants you and them 25% Move Speed for 1.5 seconds.',
        mythic_stats : {
            haste : 5,
        },
    },
    
    evenshroud : {
        mythic : true,
        name : 'Evenshroud',
        id : 3001,
        price : 2500,
        stats : {
            hp : 200,
            haste : 20,
            armor : 30,
            mr : 30,
        },
        support : true,
        builds_from : ['kindlegem', 'aegis_of_the_legion'],
        passive_name : 'Coruscation',
        passive_description : 'After Immobilizing champions or being Immobilized, cause that target and all enemy Champions within 600 radius to take 10% increased damage for 5 seconds.',
        mythic_stats : {
            armor : 5,
            mr : 5,
        },
    },
    
    locket_of_the_iron_solari : {
        mythic : true,
        name : 'Locket of the Iron Solari',
        id : 3190,
        price : 2500,
        stats : {
            hp : 200,
            haste : 20,
            armor : 30,
            mr : 30,
        },
        tank : true,
        support : true,
        builds_from : ['kindlegem', 'aegis_of_the_legion'],
        active_name : 'Devotion',
        active_description : `Grant nearby allies within 850 radius a 180 - 330 (based on target's level) Shield, decaying over 2.5 seconds.`,
        active_cooldown : 90,
        passive_name : 'Consecrate',
        passive_description : 'Grant allied champions within 850 radius 3 bonus armor and 3 bonus magic resist.',
        mythic_stats : {
            custom : '2 Armor and Magic Resist increase to Consecrate.',
        },
    },
    
    imperial_mandate : {
        mythic : true,
        name : 'Imperial Mandate',
        id : 4005,
        price : 2500,
        stats : {
            ap : 40,
            hp : 200,
            haste : 20,
            '%mana_regen' : 1,
        },
        support : true,
        builds_from : ['kindlegem', 'bandleglass_mirror'],
        passive_name : 'Coordinated Fire',
        passive_description : `Abilities that Slow or Immobilize a champion deal 45 - 75 (based on level) bonus magic damage and marks them
                               for 4 seconds. Ally champion damage detonates the mark, dealing an additional 90 - 150 
                               (based on ally level) magic damage and granting you both 20% Move Speed for 2 seconds.`,
        passive_cooldown : 6,
        mythic_stats : {
            ap : 15,
        },
    },
    
    moonstone_renewer : {
        mythic : true,
        name : 'Moonstone Renewer',
        id : 6617,
        price : 2500,
        stats : {
            ap : 40,
            hp : 200,
            haste : 20,
            '%mana_regen' : 1,
        },
        support : true,
        builds_from : ['kindlegem', 'bandleglass_mirror'],
        passive_name : 'Starlit Grace',
        passive_description : `When affecting champions with attacks or abilities in combat, heal 60 health to the most wounded nearby ally.
                               Each second spent in combat with champions increases your Heal and Shield Power by 5% (stacking up to 4 times for 20%).`,
        passive_cooldown : 2,
        mythic_stats : {
            custom : "8 increased health on Starlit Grace's heal.",
        },
    },
    
    crown_of_the_shattered_queen : {
        mythic : true,
        name : 'Crown of the Shattered Queen',
        id : 4644,
        price : 2800,
        stats :  {
            ap : 70,
            hp : 250,
            mana : 600,
            haste : 20,
        },
        mage : true,
        builds_from : ['kindlegem', 'lost_chapter', 'amplifying_tome'],
        passive_name : 'Divine Safeguard',
        passive_description : `You are Safeguarded, reducing incoming champion damage by 75%. Safeguard persists for 1.5 seconds after taking champion damage.
                               Cooldown restarts upon taking damage from enemy champions.`,
        passive_cooldown : 40,
        passive2_name : 'Holy Gift',
        passive2_description : `While Safeguarded and for 3 seconds after it is broken, gain 10-40 (based on level) Ability Power.`,
        mythic_stats : {
            '%ms' : 0.01,
            ap : 8,
        },
    },
    
    everfrost : {
        mythic : true,
        name : 'Everfrost',
        id : 6656,
        price : 2800,
        stats : {
            ap : 70,
            hp : 250,
            mana : 600,
            haste : 20,
        },
        mage : true,
        builds_from : ['kindlegem', 'lost_chapter', 'amplifying_tome'],
        active_name : 'Glaciate',
        active_description : `Deal (100 + 30% Ability Power) magic damage in a cone, Slowing enemies by 65% for 1 seconds. Enemies at the center of the cone are Rooted instead.`,
        active_cooldown : 30,
        mythic_stats : {
            ap : 10,
        },
    },
    
    iceborn_gaunlet : {
        mythic : true,
        name : 'Iceborn Gaunlet',
        id : 6662,
        price : 3000,
        stats : {
            hp : 400,
            armor : 50,
            haste : 20,
        },
        tank : true,
        builds_from : ['sheen, kindlegem, chain_vest'],
        passive_name : 'Spellblade',
        passive_description : `After using an ability, your next basic attack within 10 seconds deals (+100% base AD) bonus physical damage on-hit
                               and creates a 300 radius frost field for 2.5 seconds that slows enemies by 15% + 0.4% per 100 maximum health [Melee champion] / 
                               7.5% + 0.2% per 100 maximum health [Ranged champion]. Your primary target is slowed for double the amount and has their damage
                               against you reduced by 10% for 2.5 seconds.`,
        passive_cooldown : 1.5,
        mythic_stats : {
            hp : 50,
            '%tenacity' : 0.05,
            '%slow_resist' : 0.05,
        },
    },

    radiant_virtue : {
        mythic : true,
        name : 'Radiant Value',
        id : 6667,
        price : 3000,
        stats : {
            hp : 400,
            armor : 30,
            mr : 30,
            haste : 20,
        },
        tank : true,
        support : true,
        builds_from : ['aegis_of_the_legion', 'kindlegem', 'ruby_crystal'],
        passive_name : 'Guiding light',
        passive_description : `Upon casting your ultimate, you transcend for 9 seconds. While transcended, increase your maximum health by 10% and cause you
                               and all allies within 1200 units to gain 20 basic ability haste and heal for 2% of your maximum health upen you becoming transcended
                               and 3 seconds thereafter. Ally healing is increased by 0% - 100% (based on target's missing health).`,
        passive_cooldown : 60,
        mythic_stats : {
            hp : 100,
        },
    },

    jaksho : {
        mythic : true,
        name : "Jak'Sho, The Protean",
        id : 6665,
        price : 3200,
        stats : {
            hp : 400,
            armor : 30,
            mr : 30,
            haste : 20,
        },
        tank : true,
        passive_name : 'Voidborn resilence',
        passive_description : `For each second in combat with champions, gain 2 bonus armor and bonus magic resistance for 6 seconds, stacking up to 8 times
                               for 24 bonus resistances. At maximum stacks instantly deal 3% maximum health magic damage to enemies within 700 units (2.1% against non-champions)
                               heal for the same amount for each enemy damaged, and increase your bonus resistances by 20% until the end of combat.`,
        mythic_stats : {
            armor : 5,
            mr : 5,
        },
    },

    heartsteel : {
        mythic : true,
        name : 'Heartsteel',
        id : 3084,
        price : 3200,
        stats : {
            hp : 800,
            haste : 20,
            '%hp_regen' : 2,
        },
        tank : true,
        bruiser : true,
        passive_name : 'Colossal consumption',
        passive_description : `While within 700 units of an enemy champion, generate a stack on them each second up to 3 stacks. At 3 stacks your next basic attack
                               deal 125 (+6% maximum health) bonus physical damage on-hit and grant you permanent bonus health equal to 10% of the pre-mitigation damage.
                               This item's cooldown is per target.`,
        passive_cooldown : 30,
        mythic_stats : {
            '%hp' : 0.01,
            '%size' : 0.06,
        },
    },
    
    duskblade_of_draktharr : {
        mythic : true,
        name : 'Duskblade of Draktharr',
        id : 6691,
        price : 3100,
        stats : {
            ad : 60,
            lethality : 18,
            haste : 20,
        },
        assasin : true,
        builds_from : ['serrated_dirk', 'cauldfields_warhammer'],
        passive_name : 'Nightstalker',
        passive_description : `Attacking a champion deals an additional (75 + 30% bonus AD [Melee champion] / 
                               55 + 25% bonus AD [Ranged champion]) physical damage. If dealt by a Melee champion, 
                               this Attack also Slows the target by 99% for 0.25 seconds. When a champion that you have damaged within 
                               the last 3 seconds dies, this cooldown is refreshed and you become Invisible for 1.5 seconds.`,
        passive_cooldown : 15,
        mythic_stats : {
            ms : 5,
            haste : 5,
        },
    },
    
    eclipse : {
        mythic : true,
        name : 'Eclipse',
        id : 6692,
        price : 3100,
        stats : {
            ad : 60,
            lethality : 12,
            haste : 15,
        },
        assasin : true,
        bruiser : true,
        builds_from : ['serrated_dirk', 'cauldfields_warhammer'],
        passive_name : 'Ever Rising Moon',
        passive_description : `Hitting a champion with 2 separate Attacks or Abilities within 1.5 seconds deals an additional 
                               6% max Health physical damage [Melee champion] / 3% max Health physical damage [Ranged champion], 
                               grants you 15% Move Speed and a (180 + 40% bonus Attack Damage) shield (50% shield for ranged champions) for 2 seconds.
                               Ever Rising Moon's cooldown is halved for melee champions.`,
        passive_cooldown : 12,
        mythic_stats : {
            ms : 5,
            '%armor_pen' : 0.04,
        },

    },
    
    prowlers_claw : {
        mythic : true,
        name : "Prowler's Claw",
        id : 6693,
        price : 3100,
        stats : {
            ad : 60,
            lethality : 18,
            haste : 20,
        },
        assasin : true,
        builds_from : ['serrated_dirk', 'cauldfields_warhammer'],
        active_name : 'Sandswipe',
        active_description : `Dash through a targeted enemy champion (500 range). Upon completing the dash, deal 75 (+30% bonus AD) physical damage to the target
                              and increase your damage dealt to them by 15% for the next 3 seconds.`,
        active_cooldown : 90,
        mythic_stats : {
            ms : 5,
            lethality : 5,
        },
             
    },
    
    rod_of_ages : {
        mythic : true,
        name : 'Rod of Ages',
        id : 6657,
        price : 2800,
        stats : {
            ap : 60,
            hp : 400,
            mana : 400,
        },
        mage : true,
        builds_from : ['catalyst_of_aenons', 'blasting_wand', 'amplifying_tome'],
        item_inherent : `This item gains 20 bonus health, 20 bonus mana and 4 ability power every minute up to 10 times, for a maximum
                               of 200 bonus health, 200 bonus mana, and 40 ability power. Upon reaching maximum stacks, gain a level that
                               preserves your current experience (cap remains at level 18) and increase all effects of Eternity by 50%.`,
        passive2_name : 'Eternity',
        passive2_description : `Restore mana equal to 7% of pre-mitigation damage taken from champions, and heal for an amount equal to 25%
                                of mana spent, up to 20 per cast. Toggled abilities can only heal for up to 15 per second. For every 200 healing
                                or mana restored this way, gain 35% bonus movement speed that decays over 3 seconds. Limited to 1 Eternity item.`,
        mythic_stats : {
            haste : 5,
        },
    },

    hextech_rocketbelt : {
        mythic : true,
        name : 'Hextech Rocketbelt',
        id : 3152,
        price : 3200,
        stats : {
            ap : 90,
            magic_pen : 6,
            hp : 250,
            haste : 15,
        },
        mage : true,
        builds_from : ['blasting_wand', 'hextech_alternator', 'amplifying_tome'],
        active_name : 'Supersonic',
        active_description : `Dash 275 units, unleashing an arc of 7 rockets that deals 125 (+15% AP) magic damage to enemies hit. Afterwards,
                              30% bonus move speed towards enemy champions for 1.5 seconds. Supersonic resets the user's basic attack timer.`,
        active_cooldown : 40,
        mythic_stats : {
            magic_pen : 5,
        },
    },
    
    riftmaker : {
        mythic : true,
        name : 'Riftmaker',
        id : 4633,
        price : 3200,
        stats : {
            ap : 70,
            hp : 300,
            haste : 15,
            '%omnivamp' : 0.07,
        },
        mage : true,
        builds_from : ['leeching_leer', 'blasting_wand'],
        passive_name : 'Void Corruption',
        passive_description : `For each second in combat with champions, deals 3% bonus damage, stacking up to 3 times for 9% bonus damage.
                               While this effect is fully stacked, convert 100% of the bonus damage into true damage.`,
        mythic_stats : {
            '%omnivamp' : 0.02,
            ap : 8,
        },
    },
    
    night_harvester : {
        mythic : true,
        name : 'Night Harvester',
        id : 4636,
        price : 3200,
        stats : {
            ap : 90,
            hp : 300,
            haste : 25,
        },
        mage : true,
        builds_from : ['blasting_wand', 'hextech_alternator', 'amplifying_tome'],
        passive_name : 'Soulrend',
        passive_description : `Damaging an enemy champion deals 125 (+15% AP) bonus magic damage and grants you 25% bonus movement speed for 1.5 seconds,
                               with the duration extending on subsequent triggers. This item's cooldowns is per champion.`,
        mythic_stats : {
            haste : 5,
        },
    },
    
    liandrys_anguish : {
        mythic : true,
        name : "Liandry's Anguish",
        id : 6653,
        price : 3200,
        stats : {
            ap : 80,
            mana : 600,
            haste : 20,
        },
        mage : true,
        builds_from : ['lost_chapter', 'fiendish_codex'],
        passive_name : 'Torment',
        passive_description : `Dealing ability damage burns enemies, causing them to take 50 (+6% AP)(+4% target's maximum health) total magic damage over 4 seconds.`,
        passive2_name : 'Agony',
        passive2_description_default : `Deal 0% - 12% (based on target's bonus health) bonus magic damage against enemy champions.`,
        mythic_stats : {
            haste : 5,
        },
    },
    
    ludens_tempest : {
        mythic : true,
        name : "Luden's Tempest",
        id : 6655,
        price : 3200,
        stats : {
            ap : 80,
            magic_pen : 6,
            mana : 600,
            haste : 20,
        },
        mage : true,
        builds_from : ['lost_chapter', 'blasting_wand'],
        passive_name : 'Echo',
        passive_description : `Dealing ability damage to an enemy deals 100 (+10% AP) additional magic damage to them and launches orbs at up to 3 other enemies
                               within 600 units around them, impacting after 0.528 seconds to deal the same damage to each and grants you 15% bonus movement speed
                               for 2 seconds. Dealing ability damage against champions reduces the cooldown of Echo by 0.5 seconds per champion up to a maximum of
                               3 seconds per cast.`,
        passive_cooldown : 10,
        mythic_stats : {
            magic_pen : 5,
        },
    },
    
    goredrinker : {
        mythic : true,
        name : 'Goredrinker',
        id : 6630,
        price : 3300,
        stats : {
            ad : 55,
            hp : 300,
            haste : 20,
            '%omnivamp' : 0.08,
        },
        bruiser : true,
        builds_from : ['ironspike_whip', 'cauldfields_warhammer', 'kindlegem'],
        active_name : 'Thirsting Slash',
        active_description : `Deal (175% base AD) physical damage to enemies hit in a 450 radious center around you. Heal for (20% total AD + 8% of your missing health)
                              for each enemy hit. Cooldown is reduced by ability haste.`,
        active_cooldown : 15,
        mythic_stats : {
            haste : 3,
            hp : 50,
        },
    },
    
    stridebreaker : {
        mythic : true,
        name : 'Stridebreaker',
        id : 6631,
        price : 3300,
        stats : {
            ad : 50,
           '%as': 0.2,
            hp : 300,
            haste : 20,
        },
        bruiser : true,
        builds_from : ['ironspike_whip', 'hearthbound_axe', 'kindlegem'],
        active_name : 'Halting Slash',
        active_description : `Deal 175% base AD physical damage and slow them by 40% for 3 seconds to enemies in a 450 radius. 
                              You are able to move while casting this item. This item's cooldown is reduced by hability haste.`,
        active_cooldown : 15,
        passive_name : 'Heroic Gait',
        passive_description : 'Dealing physical damage grants you 20 bonus movement speed for 2 seconds',
        mythic_stats : {
            '%ms' : 0.02,
        },
    },
    
    divine_sunderer : {
        mythic : true,
        name : 'Divine Sunderer',
        id : 6632,
        price : 3300,
        stats : {
            ad : 40,
            hp : 300,
            haste : 20,
        },
        bruiser : true,
        builds_from : ['cauldfields_warhammer', 'sheen', 'kindlegem'],
        passive_name : 'Spellblade',
        passive_description : `After using an ability your next attack within 10 seconds deals (125% base AD + (6% of target's maximum health [Melee champion]
                               3% of target's maximum health [Ranged champion])) as bonus physical damage on-hit and also heal for 55% of the premitigation damage.`,
        passive_cooldown : 1.5,
        mythic_stats : {
            '%armor_pen' : 0.03,
            '%magic_pen' : 0.03,
        },
    },
    
    trinity_force : {
        mythic : true,
        name : 'Trinity Force',
        id : 3078,
        price : 3333,
        stats : {
            ad : 35,
           '%as': 0.3,
            hp : 300,
            haste : 20,
        },
        bruiser : true,
        marksman : true,
        builds_from : ['sheen', 'hearthbound_axe', 'kindlegem'],
        passive_name : 'Threeforld Strike',
        passive_description : `Basic attacks grant 20 bonus move speed for 3 seconds. If the target is a champion or a structure,
                               increase base attack damage by 4% for 3 seconds, stacking up to 5 times for 20%. Stacks expire by one every 0.5 seconds
                               when the duration ends.`,
        passive2_name : 'Spellblade',
        passive2_description : `After using an ability, your next basic attack within 10 seconds deals (200% base AD) bonus physical damage on-hit.`,
        passive2_cooldown : 1.5,
        mythic_stats : {
            ad : 3,
            haste : 3,
            ms : 3,
        },
        
    },
    
    galeforce : {
        mythic : true,
        name : 'Galeforce',
        id : 6671,
        price : 3400,
        stats : {
            ad : 60,
           '%as': 0.2,
            '%crit' : 0.2,
        },
        marksman : true,
        builds_from : ['noonquiver', 'cloack_of_agility', 'pickaxe'],
        active_name : 'Cloudburst',
        active_description : `Dash 200-425 units to a targeted location and fire three homing missiles at the most wounded enemy within 750 units,
                              dealing a total of 180-315 (based on level)(+45% bonus AD), increased by 0% - 50% based on target's missing health.`,
        active_cooldown : 110,
        mythic_stats : {
            '%ms' : 0.02,
        },
    },
    
    kraken_slayer : {
        mythic : true,
        name : 'Kraken Slayer',
        id : 6672,
        price : 3400,
        stats : {
            ad : 65,
           '%as': 0.25,
            '%crit' : 0.2,
        },
        marksman : true,
        builds_from : ['noonquiver', 'cloack_of_agility', 'pickaxe'],
        passive_name : 'Bring it down',
        passive_description : `Every third attack deal 50 (+40% bonus AD) true damage on-hit.`,
        mythic_stats : {
            '%as' : 0.1,
        },
    },
    
    immortal_shieldbow : {
        mythic : true,
        name : 'Immortal Shieldbow',
        id : 6673,
        price : 3400,
        stats : {
            ad : 50,
           '%as': 0.2,
            '%crit' : 0.2,
            '%life_steal' : 0.07,
        },
        marksman : true,
        builds_from : ['noonquiver', 'cloack_of_agility', 'vampiric_scepter'],
        passive_name : 'Lifeline',
        passive_description : `If you would take damage that would reduce you below 30% of your maximum health, you first gain a shield that absorbs 250 - 630 (based on level)
                               damage for 3 seconds and 15 - 35 (based on level) bonus attack damage for 8 seconds. Limited to 1 Lifeline item.`,
        passive_cooldown : 90,
        mythic_stats : {
            ad : 5,
            hp : 70,
        },
    },

    vigilant_wardstone : {
        legendary : true,
        name : 'Vigilant Wardstone',
        id : 4643,
        price : 1100,
        stats : {
            hp : 150,
            haste : 15,
        },
        support : true,
        builds_from : ['watchful_wardstone'],
        passive_name : 'Arcane cache',
        passive_description : `This item can store up to 3 purchased Control Wards.`,
        passive2_name : 'Behold',
        passive2_description : `You can put up to 4 stealth wards and 2 control wards.`,
        passive3_name : 'Blessing of Ixtal',
        passive3_description : `Increases bonus attack damage, bonus health, ability power and ability haste by 12%.`,
    },

    mejais_soulstealer : {
        legendary : true,
        name : "Mejai's Soulstealer",
        id : 3041,
        price : 1600,
        stats : {
            ap : 20,
            hp : 100,
        },
        mage : true,
        builds_from : ['dark_seal'],
        passive_name : 'Glory',
        passive_description : `Gain 4 stacks of Glory for each champion kill and 2 stacks for each assist, up to a maximum of 25 stacks. Lose 10 stacks on death.`,
        passive2_name : 'Dread',
        passive2_description : `Gain 5 ability power for each stack of Glory, up to a maximum of 125 AP. If you have at least 10 stacks, gain 10% bonus movement speed.`,
    },

    chemtech_putrifier : {
        legendary : true,
        name : 'Chemtech Putrifier',
        id : 3011,
        price : 2300,
        stats : {
            ap : 40,
            haste : 15,
            '%mana_regen' : 1,
            '%hspower' : 0.08,
        },
        mage : true,
        builds_from : ['oblivion_orb', 'forbidden_idol'],
        passive_name : 'Puffcap toxin',
        passive_description : `Dealing damage to enemy champions inflicts them with 40% Grievous Wounds for 3 seconds.`,
    },

    redemption : {
        legendary : true,
        name : 'Redemption',
        id : 3107,
        price : 2300,
        stats : {
            '%hspower' : 0.16,
            hp : 200,
            haste : 15,
            '%mana_regen' : 1,
        },
        support : true,
        builds_from : ['kindlegem', 'forbidden_idol'],
        active_name : 'Intervention',
        active_description : `Cast a beam of light to strike upon the target location after 2.5 seconds, granting true sight of the area for the duration.
                              Allies within the area are healed for 180 - 340 (based on target's level) while enemy champions take 10% of target's maximum health
                              as true damage. Can be used while dead. Intervention's heal is reduced by 50% if the target was affected by another Intervention in the last
                              12 seconds. Active has 5500 range.`,
        active_cooldown : 90,
    },

    knights_vow : {
        legendary : true,
        name : "Knight's Vow",
        id : 3109,
        price : 2300,
        stats : {
            hp : 400,
            haste : 20,
            '%hp_regen' : 2,
        },
        support : true,
        tank : true,
        builds_from : ['crystalline_bracer', 'kindlegem', 'rejuvenation_bead'],
        active_name : 'Pledge',
        active_description : `Designate the target allied champion as being Worthy, forming a tether between you and them. Champioons can only be designated
                              as Worthy by one Knight's Vow at a time. Active has 1250 range.`,
        active_cooldown : 60,
        passive_name : 'Sacrifice',
        passive_cooldown : `While at 1250 units of your Worthy ally and above 30% of your maximum health, redirect 10% of the post-mitigation physical and magic damage
                            they take to you as true damage and heal for 7% of the damage dealt by your Worthy ally to champions. If they are below 30% maximum health
                            redirect 20% damage instead.`,
    },

    umbral_glaive : {
        legendary : true,
        name : 'Umbral Glaive',
        id : 3179,
        price : 2300,
        stats : {
            ad : 50,
            lethality : 10,
            haste : 15,
        },
        assasin : true,
        builds_from : ['long_sword', 'serrated_dirk', 'long_sword'],
        passive_name : 'Blackout',
        passive_description : `When near an enemy stealthed ward or trap, disable them and reveal them for 8 seconds (400 range). 
                               Your basic attacks instantly kill traps and wards.`,
        passive_cooldown : 40,
    },

    mikaels_blessing : {
        legendary : true,
        name : "Mikael's Blassing",
        id : 3222,
        price : 2300,
        stats : {
            '%hspower' : 0.16,
            mr : 50,
            haste : 15,
            '%mana_regen' : 1,
        },
        support : true,
        builds_from : ['forbidden_idol', 'negatron_cloack'],
        active_name : 'Purify',
        active_description : `Remove all crowd control debuffs (except Airbone, Blind, Disarm, Ground, Nearsight and Suppression) from yourself or the target
                              allied champion and heal for 100 - 180 (based on target's level)(650 range).`,
        active_cooldown : 120,
    },

    ardent_censer : {
        legendary : true,
        name : 'Ardent Censer',
        id : 3504,
        price : 2300,
        stats : {
            ap : 60,
            '%hspower' : 0.08,
            '%mana_regen' : 1,
        },
        support : true,
        builds_from : ['amplifying_tome', 'forbidden_idol', 'amplifying_tome'],
        passive_name : 'Sanctify',
        passive_description : `Healing or shielding allied champions (excluding yourself) enchances you and them for 6 seconds, granting 10% - 30% (based on target's level)
                               bonus attack speed and 5 - 20 (based on target's level) bonus magic damage on-hit on basic attacks.`,
    },

    staff_of_the_flowing_water : {
        legendary : true,
        name : 'Staff of the Flowing Water',
        id : 6616,
        price : 2300,
        stats : {
            ap : 50,
            '%hspower' : 0.08,
            '%mana_regen' : 1,
        },
        support : true,
        builds_from : ['amplifying_tome', 'forbidden_idol', 'amplifying_tome'],
        passive_name : 'Rapids',
        passive_description : `Healing or shielding allied champions (excluding yourself) grants you and them 25 - 45 (based on target's level) ability power and 
                               20 ability haste for 4 seconds.`,
    },

    zekes_convergence : {
        legendary : true,
        name : "Zeke's Convergence",
        id : 3050,
        price : 2400,
        stats : {
            hp : 250,
            armor : 35,
            mana : 250,
            haste : 20,
        },
        support : true,
        tank : true,
        builds_from : ['kindlegem', 'glacial_buckler'],
        active_name : 'Conduit',
        active_description : `Designate the target allied champion as the Accomplice, forming a tether between you and them. Champioons can only be designated
                              as the Accomplice by one Zeke's Convergence at a time. Active has 1250 range.`,
        active_cooldown : 60,
        passive_name : 'Convergence',
        passive_description : `Immobilizing enemy champion marks them for 8 seconds. Your Accomplice's basic attacks on-hit and ability hits against marked enemies
                               deals 30 - 70 (based on level)(+7.5% AP)(+1.5% maximum health) bonus magic damage.`,
    },

    mortal_reminder : {
        legendary : true,
        name : 'Mortal Reminder',
        id : 3033,
        price : 3000,
        stats : {
            ad : 35,
            '%amor_pen' : 0.3,
            '%crit' : 0.2,
        },
        marksman : true,
        builds_from : ['executioners_calling', 'last_whisper', 'cloack_of_agility'],
        passive_name : 'Sepsis',
        passive_description : `Dealing physical damage to enemy champions inflicts them with 40% Grievous Wounds for 3 seconds.`,
    },

    rapid_firecannon : {
        legendary : true,
        name : 'Rapid Firecannon',
        id : 3094,
        price : 2500,
        stats : {
            '%as': 0.35,
            '%crit' : 0.2,
            '%ms' : 0.07,
        },
        marksman : true,
        builds_from : ['zeal', 'kircheis_shard'],
        passive_name : 'Energized',
        passive_description : `Moving and basic attacking generates Energize stacks, up to 100.`,
        passive2_name : 'Sharpshooter',
        passive2_description : `When fully Energized, your next basic attack deals 120 bonus magic damage on-hit. Energized attacks gain 35% bonus range, capped at 150.`,
    },

    frozen_heart : {
        legendary : true,
        name : 'Frozen Heart',
        id : 3110,
        price : 2500,
        stats : {
            armor : 90,
            mana : 400,
            haste : 20,
        },
        tank : true,
        builds_from : ['wardens_mail', 'glacial_buckler'],
        passive_name : 'Rock solid',
        passive_description : `Every first incoming instance of post-mitigation basic attack damage is reduced by 5(+3.5% per 1000 maximum health), capped at 40% total reduction.`,
        passive2_name : "Winter's caress",
        passive2_description : `Reduced the attack speed of enemies within 700 units by 20%.`,
    },

    morellonomicon : {
        legendary : true,
        name : 'Morellonomicon',
        id : 3165,
        price : 3000,
        stats : {
            ap : 90,
            hp : 200,
            magic_pen : 10,
        },
        mage : true,
        builds_from : ['oblivion_orb', 'hextech_alternator', 'amplifying_tome'],
        passive_name : 'Affliction',
        passive_description : `Dealing magic damage to enemy champions inflicts them with 40% Grievous Wounds for 3 seconds.`,
    },

    anathemas_chains : {
        legendary : true,
        name : "Anathema's Chain",
        id : 8001,
        price : 2500,
        stats : {
            hp : 650,
            haste : 20,
        },
        tank : true,
        support : true,
        builds_from : ['kindlegem', 'giants_belt'],
        active_name : 'Vow',
        active_description : `Curse the target enemy champion, designating them as your Nemesis and granting you 1 stack of Vendetta every 20 seconds up to 30 stacks.
                              These stacks are lost upon selecting a new Nemesis. Cannot be cast for 15 seconds while in combat with enemy champions. Global range.`,
        active_cooldown : 90,
        passive_name : 'Vendetta',
        passive_description : `Take 1% reduced damage per stack of Vendetta from your Nemesis up to 30%.`,
        passive2_name : 'Vengeance',
        passive2_description : `At maximum stacks your Nemesis has 20% reduced tenacity while they are within 700 units of you.`,
    },

    archangels_staff : {
        legendary : true,
        name : "Archangel's Staff",
        id : 3003,
        price : 3000,
        stats : {
            ap : 80,
            mana : 500,
            hp : 200,
            haste : 10,
        },
        mage : true,
        builds_into : ['seraphs_embrace'],
        builds_from : ['tear_of_the_goddess', 'kindlegem', 'blasting_wand'],
        passive_name : 'Awe',
        passive_description : `Grants ability power equal to 1% bonus mana`,
        passive2_name : 'Mana charge',
        passive2_description : `Grants a charge every 8 seconds up to 4 charges. Affecting an enemy or ally with an ability consumes a charge to gran 3 bonus mana,
                                increased to 6 if they are a champion, up to a maximum of 360 bonus mana. At 360 bonus mana this item transforms into Seraph's Embrace.`,
        
    },

    seraphs_embrace : {
        legendary : true,
        name : "Seraph's Embrace",
        id : 3040,
        price : 'N/A',
        stats : {
            ap : 80,
            mana : 860,
            hp : 250,
            haste : 10,
        },
        mage : true,
        builds_from : ['archangels_staff'],
        passive_name : 'Awe',
        passive_description : `Grants ability power equal to 2.5% bonus mana`,
        passive2_name : 'Lifeline',
        passive2_description : `Upon taking damage that would reduce your Health below 30%, gain a 250(+20% current Mana) shield.`,
        passive2_cooldown : 90,
    },

    phantom_dancer : {
        legendary : true,
        name : 'Phantom Dance',
        id : 3046,
        price : 2600,
        stats : {
            ad : 20,
            '%as': 0.25,
            '%crit' : 0.2,
            '%ms' : 0.07,
        },
        marksman : true,
        builds_from : ['long_sword', 'zeal', 'long_sword'],
        passive_name : 'Spectral Waltz',
        passive_description : `Basic attacks grant ghosting, 7% bonus movement speed and a stack of Spectral Waltz for 3 seconds, up to 4 stacks. While at 4 stacks
                               gain 30% bonus attack speed.`,
    },

    runaans_hurricane : {
        legendary : true,
        name : "Runaan's Hurricane",
        id : 3085,
        price : 2600,
        stats : {
            '%as': 0.45,
            '%crit' : 0.2,
            '%ms' : 0.07,
        },
        marksman : true,
        builds_from : ['dagger', 'zeal', 'dagger'],
        passive_name : "Wind's Fury",
        passive_description : `Basic attacks on-attack fire additional bolts at up to 2 enemies in front of you, each dealing 40% total AD physical damage. Bolts
                               apply on-hit effects at 100% effectiveness and are affected by critical strike modifiers. Can only be purchased on ranged champions.`,
    },

    banshees_veil : {
        legendary : true,
        name : "Banshee's Veil",
        id : 3102,
        price : 2600,
        stats : {
            ap : 80,
            mr : 45,
            haste : 10,
        },
        mage : true,
        builds_from : ['fiendish_codex', 'verdant_barrier'],
        passive_name : 'Annul',
        passive_description : `Grants a spell shield that blocks the next hostile ability. Cooldown restarts upon taking damage from enemy champions.`,
        passive_cooldown : 40,
    },

    rylais_crystal_scepter : {
        legendary : true,
        name : "Rylai's Crystal Scepter",
        id : 3116,
        price : 2600,
        stats : {
            ap : 75,
            hp : 400,
        },
        mage : true,
        builds_from : ['blasting_wand', 'giants_belt', 'amplifying_tome'],
        passive_name : 'Rimefrost',
        passive_description : `Dealing ability damage slows affected units by 30% for 1 second.`,
    },

    guinsoos_rageblade : {
        legendary : true,
        name : "Guinsoo's Rageblade",
        id : 3124,
        price : 2600,
        stats : {
            '%as': 0.45,
            '%crit' : 0.2,
        },
        marksman : true,
        bruiser : true,
        builds_from : ['rageknife', 'cloack_of_agility', 'dagger'],
        passive_name : 'Wrath',
        passive_description : `Convert every 1% critical strike chance into 2 bonus physical damage on-hit, capped at 100% critical strike chance,
                               for a maximum of 200 bonus physical damage on-hit. This damage is affected by critical strike modifiers. Unique with
                               Infinity Edge and Navori Quickblades.`,
        passive2_name : 'Seething strike',
        passive2_description : `Basic attacks on-attack grant a stack for 6 seconds, up to 2 stacks. At 2 stacks the next basic attack consumes all stacks and 
                                trigger on-hit effects to the target at 100% effectiveness after a 0.15 seconds delay`,
    },

    zhonyas_hourglass : {
        legendary : true,
        name : "Zhonya's Hourglass",
        id : 3157,
        price : 3000,
        stats : {
            ap : 80,
            armor : 45,
            haste : 15,
        },
        mage : true,
        builds_from : ['seekers_armguard', 'stopwatch', 'fiendish_codex'],
        active_name : 'Stasis',
        active_description : `Put yourself in stasis for 2.5 seconds, rendering you untargetable and invulnarable for the duration but also unable to move,
                              declare basic attacks, cast abilities, use summoner spells, or activate items.`,
        active_cooldown : 120,
    },

    chempunk_chainsword : {
        legendary : true,
        name : 'Chempunk Chainsword',
        id : 6609,
        price : 2800,
        stats : {
            ad : 55,
            hp : 250,
            haste : 25,
        },
        bruiser : true,
        assasin : true,
        builds_from : ['executioners_calling', 'ruby_crystal', 'cauldfields_warhammer'],
        passive_name : 'Hackshorn',
        passive_description : `Dealing physical damage to enemy champions inflicts them with 40% Grievous Wounds for 3 seconds.`,
    },

    serpents_fang : {
        legendary : true,
        name : "Serpent's Fang",
        id : 6695,
        price : 2600,
        stats : {
            ad : 55,
            lethality : 12,
        },
        assasin : true,
        builds_from : ['serrated_dirk', 'pickaxe'],
        passive_name : 'Shield reaver',
        passive_description : `Dealing damage to an enemy champion reduce any shields they gain within the duration by 50% [Melee champion] / 35% [Ranged champion].`,
    },

    thornmail : {
        legendary : true,
        name : 'Thornmail',
        id : 3075,
        price : 2700,
        stats : {
            hp : 350,
            armor : 60,
        },
        tank : true,
        builds_from : ['bramble_vest', 'giants_belt'],
        passive_name : 'Thorns',
        passive_description : `When struck by a basic attack, deal 10(+25% bonus armor) magic damage to the attacker and, if they are a champion, inflict them with
                               40% Grievous Wounds for 3 seconds.`,
    },

    stormrazor : {
        legendary : true,
        name : 'Stormrazor',
        id : 3095,
        price : 2700,
        stats : {
            ad : 45,
            '%as': 0.15,
            '%crit' : 0.2,
        },
        marksman : true,
        builds_from : ['b_f_sword', 'cloack_of_agility', 'kircheis_shard'],
        passive_name : 'Energized',
        passive_description : `Moving and basic attacking generates Energize stacks, up to 100.`,
        passive2_name : 'Paralyze',
        passive2_description : `When fully Energized, your next basic attack deals 120 bonus magic damage on-hit. Energized attacks slow by 75% for 0.5 seconds.`,
    },

    winters_approach : {
        legendary : true,
        name : "Winter's Approach",
        id : 3119,
        price : 2600,
        stats : {
            hp : 400,
            mana : 500,
            haste : 15,
        },
        tank : true,
        bruiser : true,
        builds_into : ['fimbulwinter'],
        builds_from : ['tear_of_the_goddess', 'kindlegem', 'ruby_crystal'],
        passive_name : 'Awe',
        passive_description : `Grants bonus health equal to 8% maximum mana.`,
        passive2_name : 'Mana charge',
        passive2_description : `Grants a charge every 8 seconds, up to 4 charges. Affecting an enemy or ally with an attack or ability consumes a charge to grant
                                3 bonus mana, increased to 6 for champion targets, up to a maximum of 360 mana. At 360 bonus mana this item transforms into Fimbulwinter.`,
    },

    fimbulwinter : {
        legendary : true,
        name : 'Fimbulwinter',
        id : 3121,
        price : 'N/A',
        stats : {
            hp : 400,
            mana : 860,
            haste : 15,
        },
        tank : true,
        bruiser : true,
        builds_from : ['winters_approach'],
        passive_name : 'Awe',
        passive_description : `Grants bonus health equal to 8% maximum mana.`,
        passive2_name : 'Everlasting',
        passive2_description : `Immobilizing, or slowing if you are melee, an enemy champion consumes 3% current mana to grant a 100 - 180(based on level)(+4.5% current mana)
                                shield for 3 seconds. If more than one enemy champion is within 1200 units the shield's strength is increased by 80%. Can only activate
                                if you have greater than 20% maximum mana.`,
        passive2_cooldown : 8,
    },

    randuins_omen : {
        legendary : true,
        name : "Randuin's Omen",
        id : 3143,
        price : 3000,
        stats : {
            hp : 400,
            armor : 60,
        },
        tank : true,
        builds_from : ['wardens_mail', 'giants_belt'],
        active_name : 'Humility',
        active_description : `Unleash a shockwave around you that slows nearby enemies by 55% for 2 seconds (500 range).`,
        active_cooldown : 60,
        passive_name : 'Rock solid',
        passive_description : `Every first incoming instance of post-mitigation basic attack damage is reduced by 5(+3.5% per 1000 maximum health), capped at 40% total reduction.`,
        passive2_name : 'Critical resilience',
        passive2_description : `Reduces incoming critical strike damage by 20%`,
    },

    abyssal_mask : {
        legendary : true,
        name : 'Abyssal Mask',
        id : 8020,
        price : 3000,
        stats : {
            hp : 500,
            mr : 40,
            haste : 10,
            mana : 300,
        },
        tank : true,
        builds_from : ['catalyst_of_aeons', 'spectres_cowl'],
        passive_name : 'Eternity',
        passive_description : `Restore mana equal to 8% of pre-mitigation damage taken from champions, and heal for an amount equal to 20% of mana spent up to 15 per cast.
                               Toggled abilities can only heal for up to 15 per second.`,
        passive2_name : 'Unmake',
        passive2_description : `Enemy champions within 550 units of you become cursed, reducing their magic resistance by 5(+1.2% bonus health), capped at 25.
                                Gain 9 bonus magir resistance per cursed enemy.`,
    },

    guardian_angel : {
        legendary : true,
        name : 'Guardian Angel',
        id : 3026,
        price : 3000,
        stats : {
            ad : 45,
            armor : 40,
        },
        marksman : true,
        bruiser : true,
        assasin : true,
        builds_from : ['b_f_sword', 'chain_vest', 'stopwatch'],
        passive_name : 'Rebirth',
        passive_description : `Upon taking lethal damage, enter resurrection for 4 seconds, during which you are invulnerable, untargetable and unable to act,
                               and afterwards heal for 50% base health and restore 30% of maximum mana.`,
        passive_cooldown : 300,
    },

    void_staff : {
        legendary : true,
        name : 'Void Staff',
        id : 3135,
        price : 2800,
        stats : {
            ap : 65,
            '%magic_pen' : 0.40,
        },
        mage : true,
        builds_from : ['blighting_jewel', 'blasting_wand'],
    },

    hullbreaker : {
        legendary : true,
        name : 'Hullbreaker',
        id : 3181,
        price : 2800,
        stats : {
            ad : 50,
            hp : 400,
            '%hp_regen' : 1.5,
        },
        tank : true,
        bruiser : true,
        builds_from : ['pickaxe', 'phage'],
        passive_name : 'Boarding part',
        passive_description : `While no allied champions are within 1400 units, gain 10 - 75 [Melee champion] / 5 - 37.5 [Ranged champion] (based on level)
                               bonus armor and magic resistance and 20% bonus basic damage against structures. Allied siege minions and super minions 
                               within 1050 units gain 30 - 225 [Melee champion] / 15 - 112.5 [Ranged champion] (based on level) bonus armor and 
                               magic resistance, 10% bonus size and deal 200% bonus damage against structures.`,
    },

    essence_reaver : {
        legendary : true,
        name : 'Essence Reaver',
        id : 3508,
        price : 2900,
        stats : {
            ad : 55,
            '%crit' : 0.2,
            haste : 20,
        },
        marksman : true,
        builds_from : ['sheen', 'guardians_hammer', 'cloack_of_agility'],
        passive_name : 'Spellblade',
        passive_description : `After using an ability your next basic attack within 10 seconds deals 100% base AD(+40% bonus AD) bonus physical damage
                               on-hit and restores mana equal to 40% base AD(+16% bonus AD).`,
        passive_cooldown : 1.5,
    },

    manamune : {
        legendary : true,
        name : 'Manamune',
        id : 3508,
        price : 2900,
        stats : {
            ad : 35,
            mana : 500,
            haste : 15,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        builds_into : ['muramana'],
        builds_from : ['tear_of_the_goddess', 'cauldfields_warhammer', 'long_sword'],
        passive_name : 'Awe',
        passive_description : `Grants bonus attack damage equal to 2.5% maximum mana.`,
        passive2_name : 'Mana charge',
        passive2_description : `Grants a charge every 8 seconds, up to 4 charges. Attacks and abilities consumes a charge to grant 3 bonus mana,
                                increased to 6 for champion targets, up to 360 bonus mana. At 360 bonus mana this item transforms into Muramana.`,
    },

    muramana : {
        legendary : true,
        name : 'Muranama',
        id : 3042,
        price : 'N/A',
        stats : {
            ad : 35,
            mana : 860,
            haste : 15,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        builds_from : ['manamune'],
        passive_name : 'Awe',
        passive_description : `Grants bonus attack damage equal to 2.5% maximum mana.`,
        passive2_name : 'Shock',
        passive2_description : `Basic attacks against champions deal 1.5% maximum mana bonus physical damage on-hit. Dealing ability damage to champions
                                deals 3.5% [Melee champion] / 2.7% [Ranged champion] maximum mana (+6% AD) bonus physical damage. Can only be triggered
                                on the same target once every 6.5 seconds from the same attack or cast.`,
    },

    spirit_visage : {
        legendary : true,
        name : 'Spirit Visage',
        id : 3042,
        price : 2900,
        stats : {
            hp : 450,
            mr : 50,
            haste : 10,
            '%hp_regen' : 1,
        },
        tank : true,
        bruiser : true,
        builds_from : ['spectres_cowl', 'kindlegem'],
        passive_name : 'Boundless vitality',
        passive_description : `Increases all healing and shielding received as well as health regeneration by 25%.`,
    },

    maw_of_malmortius : {
        legendary : true,
        name : 'Maw of Malmortius',
        id : 3156,
        price : 2900,
        stats : {
            ad : 55,
            mr : 50,
            haste : 20,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        builds_from : ['hexdrinker', 'cauldfields_warhammer'],
        passive_name : 'Lifeline',
        passive_description : `If you would take magic damage that would reduce you below 30% of your maximum health, you first gain a shield
                               that absorbs 200 (+225% bonus AD)[Melee champion] / 150 (+168.75% bonus AD)[Ranged champion] magic damage for 5 seconds
                               and grants 12% life steal for 5 seconds that refreshes when taking or dealing damage.
                               Limited to 1 Lifeline item.`,
        passive_cooldown : 75,
    },

    dead_mans_plate : {
        legendary : true,
        name : "Dead Man's Plate",
        id : 3742,
        price : 2900,
        stats : {
            hp : 300,
            armor : 45,
            '%ms' : 0.05,
        },
        tank : true,
        builds_from : ['winged_moonplate', 'ruby_crystal', 'chain_vest'],
        passive_name : 'Shipwrecker',
        passive_description : `While moving generates 7 stacks of Momentum every 0.25 seconds, granting up to 40 bonus movements speed at 100 stacks.
                               Momentum decays by 15 every 0.25 seconds while immobilized. Basic attacks consume all stacks to deal 0 - 40 (based on Momentum)
                               (+0% - 100% base AD(based on Momentum)) bonus physical damage on-hit. At maximum stacks melee champions also slow 
                               the target by 50% for 1 second.`,
    },

    edge_of_night : {
        legendary : true,
        name : 'Edge of Night',
        id : 3814,
        price : 2900,
        stats : {
            ad : 50,
            lethality : 10,
            hp : 325,
        },
        assasin : true,
        builds_from : ['long_sword', 'serrated_dirk', 'long_sword'],
        passive_name : 'Annul',
        passive_description : `Grants a spell shield that blocks the next hostile ability. Cooldown restarts upon taking damage from enemy champions.`,
        passive_cooldown : 40,
    },

    force_of_nature : {
        legendary : true,
        name : 'Force of Nature',
        id : 4401,
        price : 2900,
        stats : {
            hp : 350,
            mr : 70,
            '%ms' : 0.05,
        },
        tank: true,
        builds_from : ['negatron_cloack', 'ruby_crystal', 'winged_moonplate'],
        passive_name : 'Absorbs',
        passive_description : `Taking magic damage grants a stack of Steadfast for 7 seconds, stacking up to 6 times. Being immobilized grants 2 stacks.`,
        passive2_name : 'Dissipate',
        passive2_description : `While at 6 stacks of Steadfast, gain 10% bonus movements speed and reduce all incoming magic damage by 25%.`,
    },

    lord_dominiks_regards : {
        legendary : true,
        name : "Lord Dominik's Regards",
        id : 3036,
        price : 3000,
        stats : {
            ad : 35,
            '%crit' : 0.2,
            '%armor_pen' : 0.30,
        },
        marksman : true,
        assasin : true,
        builds_from : ['last_whisper', 'cloack_of_agility'],
        passive_name : 'Giant slayer',
        passive_description : `Deal 0% - 25% (based on maximum health difference)(maximum bonus at 2500 health difference) 
                               bonus physical damage against enemy champions with greater maximum health than you. Limited to 1 Last Whisper item.`,
    },

    warmogs_armor : {
        legendary : true,
        name : "Warmog's Armor",
        id : 3083,
        price : 3000,
        stats : {
            hp : 800,
            haste : 10,
            '%hp_regen' : 2,
        },
        tank : true,
        builds_from : ['giants_belt', 'kindlegem', 'crystalline_bracer'],
        passive_name : "Warmog's heart",
        passive_description : `If you have at least 1100 bonus health regenerate 2.5% maximum health every 0.5 seconds if damage has not been taken
                               in the last 6 seconds (3 seconds for damage from non-champions).`,
    },

    lich_bane : {
        legendary : true,
        name : 'Lich Bane',
        id : 3100,
        price : 3000,
        stats : {
            ap : 75,
            haste : 15,
            '%ms' : 0.08,
        },
        mage : true,
        builds_from : ['sheen', 'aether_wisp', 'fiendish_codex'],
        passive_name : 'Spellblade',
        passive_description : `After using an ability, your next basic attack within 10 seconds deals 75% base AD(+50% AP) bonus magic damage on-hit.`,
        passive_cooldown : 1.5,
    },

    nashors_tooth : {
        legendary : true,
        name : "Nashor's Tooth",
        id : 3115,
        price : 3000,
        stats : {
            ap : 100,
            '%as': 0.5,
        },
        mage : true,
        bruiser : true,
        builds_from : ['recurve_bow', 'blasting_wand', 'amplifying_tome'],
        passive_name : 'Icathian bite',
        passive_description : `Basic attacks deal 15(+20% AP) bonus magic damage on-hit.`,
    },

    mercurial_scimitar : {
        legendary : true,
        name : 'Mercurial Scimitar',
        id : 3139,
        price : 3000,
        stats : {
            ad : 40,
            '%crit' : 0.2,
            mr : 40,
        },
        bruiser : true,
        assasin : true,
        marksman : true,
        builds_from : ['quicksilver_sash', 'cloack_of_agility', 'pickaxe'],
        active_name : 'Quicksilver',
        active_description : `Removes all crowd control debuffs (except Airbone) from your champion and grants 50% bonus total movement speed
                              and ghosting for 1.5 seconds.`,
        active_cooldown : 90,
    },

    youmuus_ghostblade : {
        legendary : true,
        name : "Youmuu's Ghostblade",
        id : 3142,
        price : 3000,
        stats : {
            ad : 55,
            lethality : 18,
            haste : 15,
        },
        assasin : true,
        builds_from : ['serrated_dirk', 'cauldfields_warhammer'],
        active_name : 'Wraith step',
        active_description : `Gain 20% bonus movement speed and ghosting for 6 seconds.`,
        active_cooldown : 45,
        passive_name : 'Haunt',
        passive_description : `Gain 40 bonus movement speed while out of combat.`,
    },

    horizon_focus : {
        legendary : true,
        name : 'Horizon Focus',
        id : 4628,
        price : 3000,
        stats : {
            ap : 100,
            hp : 150,
            haste : 15,
        },
        mage : true,
        builds_from : ['hextech_alternator', 'fiendish_codex'],
        passive_name : 'Hypershot',
        passive_description : `Dealing ability damage to a champion with a non-targeted ability at more than 700 units away or slowing, 
                               immobilizing or polymorphing them reveals them and increases your damage dealth by 10% for 6 seconds.`,
    },

    cosmic_drive : {
        legendary : true,
        name : 'Cosmic Drive',
        id : 4629,
        price : 3000,
        stats : {
            ap : 65,
            hp : 200,
            haste : 30,
            '%ms' : 0.05,
        },
        mage : true,
        builds_from : ['fiendish_codex', 'aether_wisp', 'ruby_crystal'],
        passive_name : 'Spelldance',
        passive_description : `After dealing 3 instances of damage to champions within 3 seconds, gain 15% bonus movement speed, decaying to 5% over 2 seconds,
                               and 40 ability power for 5 seconds, refreshing on damage dealt to champions.`,
    },

    demonic_embrace : {
        legendary : true,
        name : 'Demonic Embrace',
        id : 4637,
        price : 3000,
        stats : {
            ap : 75,
            hp : 350,
        },
        mage : true,
        bruiser : true,
        builds_from : ['blasting_wand', 'giants_belt', 'amplifying_tome'],
        passive_name : 'Dark pact',
        passive_description : `Gain ability power equal to 2% bonus health.`,
        passive2_name : 'Azakana Gaze',
        passive2_description : `Dealing ability damage curses enemies, causing them to take 1.6% [Melee champion] / 1% [Ranged champion] of their
                                maximum health as magic damage per second for 4 seconds.`,
    },

    shadowflame : {
        legendary : true,
        name : 'Shadowflame',
        id : 4645,
        price : 3000,
        stats : {
            ap : 100,
            hp : 200,
        },
        mage : true,
        builds_from : ['hextech_alternator', 'needlessly_large_rod'],
        passive_name : 'Cinderbloom',
        passive_description : `Dealing magic damage to champion ignores 10 - 20(based on target's current health) of their magic resistance,
                               increased to maximum value if they were affected by a shield within the last 5 seconds.`,
    },

    silvermere_dawn : {
        legendary : true,
        name : 'Silvermere Dawn',
        id : 6035,
        price : 3000,
        stats : {
            ad : 40,
            hp : 300,
            mr : 40,
        },
        bruiser : true,
        assasin : true,
        builds_from : ['quicksilver_sash', 'pickaxe', 'ruby_crystal'],
        active_name : 'Quicksilver',
        active_description : `Removes all crowd control debuffs (except Airbone) from your champion and grants 50% tenacity, 50% slow resist and ghosting for 3 seconds.`,
        active_cooldown : 90,
    },

    the_collector : {
        legendary : true,
        name : 'The Collector',
        id : 6676,
        price : 3000,
        stats : {
            ad : 55,
            '%crit' : 0.2,
            lethality : 12,
        },
        marksman : true,
        builds_from : ['serrated_dirk', 'pickaxe', 'cloack_of_agility'],
        passive_name : 'Death and taxes',
        passive_description : `If you deal post-mitigation damage that would leave a champion below 5% of their maximum health, execute them.
                               Chanpion kills grant you an additional 25 gold.`,
        passive2_description : `CREATOR'S NOTE: NEVER BUILD THIS ITEM PLEASE.`,
    },

    axiom_arc : {
        legendary : true,
        name : 'Axiom Arc',
        id : 6696,
        price : 3000,
        stats : {
            ad : 55,
            lethality : 18,
            haste : 25,
        },
        assasin : true,
        builds_from : ['serrated_dirk', 'cauldfields_warhammer'],
        passive_name : 'Flux',
        passive_description : `Scoring a takedown against an enemy champion within 3 seconds of damaging them refunds 20% of your ultimate ability's total cooldown.`,
    },

    steraks_gage : {
        legendary : true,
        name : "Serak's Gage",
        id : 3053,
        price : 3100,
        stats : {
            hp : 400,
        },
        bruiser : true,
        builds_from : ['pickaxe', 'phage', 'ruby_crystal'],
        passive_name : 'The claws that catch',
        passive_description : `Gain bonus attack damage equal to 50% base AD`,
        passive2_name : 'Lifeline',
        passive2_description : `If you would take damage that would reduce you below 30% of your maximum health, gain a shield equal to 80% of bonus health,
                               that decays over 4.5 seconds. Limited to 1 Lifeline item.`,
        passive_cooldown : 60,
    },

    black_cleaver : {
        legendary : true,
        name : 'Black Cleaver',
        id : 3071,
        price : 3100,
        stats : {
            ad : 50,
            hp : 400,
            haste : 30,
        },
        bruiser : true,
        builds_from : ['cauldfields_warhammer', 'kindlegem', 'long_sword'],
        passive_name : 'Carve',
        passive_description : `Dealing physical damage to an enemy champion applies a stack of Carve for 6 seconds, stacking up to 6 times. Each inflicts
                               5% armor reduction, up to 30%.`,
        passive2_name : 'Rage',
        passive2_description : `Dealing physical damage to an enemy champion grants 3 bonus movement speed per stack of Carve on them for 2 seconds, up to 18.`,
    },

    wits_end : {
        legendary : true,
        name : "Wit's End",
        id : 3091,
        price : 3100,
        stats : {
            ad : 40,
           '%as': 0.4,
            mr : 40,
        },
        bruiser : true,
        marksman : true,
        builds_from : ['hearthbound_axe', 'null_magic_mantle', 'pickaxe'],
        passive_name : 'Fray',
        passive_description : `Basic attacks deal 15 - 80(based on level) bonus magic damage on-hit and grant you 20 bonus movement speed for 2 seconds.`,
    },

    gargoyle_stoneplate : {
        legendary : true,
        name : 'Gargoyle Stoneplate',
        id : 3193,
        price : 3200,
        stats : {
            armor : 60,
            mr : 60,
            haste : 15,
        },
        tank : true,
        builds_from : ['cloth_armor', 'aegis_of_the_legion', 'null_magic_mantle'],
        active_name : 'Monolith',
        active_description : `Gain a shield for 100(+90% bonus health) decaying over 2.5 seconds, and 25% increased size while active.`,
        active_cooldown : 90,
        passive_name : 'Fortify',
        passive_description : `Increase your bonus armor and magic resistance by 5% for 6 seconds when a champion deals damage to you, stack up to 5 times
                               for a maximum of 25%. This stacks once per unique champion.`,
    },

    seryldas_grudge : {
        legendary : true,
        name : 'Seryldas Grude',
        id : 6694,
        price : 3200,
        stats : {
            ad : 45,
            '%armor_pen' : 0.3,
            haste : 20,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        builds_from : ['last_whisper', 'cauldfields_warhammer'],
        passive_name : 'Bitter cold',
        passive_description : `Dealing ability damage slows affected units by 30% for 1 second. Limited to 1 Last Whisper item.`,
    },

    ravenous_hydra : {
        legendary : true,
        name : 'Ravenous Hydra',
        id : 3074,
        price : 3400,
        stats : {
            ad : 65,
            haste : 25,
            '%life_steal' : 0.1,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        builds_from : ['tiamat', 'vampiric_scepter', 'cauldfields_warhammer'],
        passive_name : 'Cleave',
        passive_description : `Damaging basic attacks and ability damage from abilities deal 40% [Melee champion] / 20% [Ranged champion] total AD
                               physical damage to other enemies within 350 units. Can only hit each target once per attack or ability, and may only
                               trigger once every 10 seconds from the same cast. Limited to 1 Hydra item.`,
        passive2_name : 'Carnivorous',
        passive2_description : `Gain 0.5 bonus AD whenever you kill a minion, doubled for kills againts champions, large monsters and
                                large minions. This effect stacks up to 40 times for a total of 20 bonus AD. Lose 60% of stacks upon death.`,
    },

    blade_of_the_ruined_king : {
        legendary : true,
        name : 'Blade of the Ruined King',
        id : 3153,
        price : 3300,
        stats : {
            ad : 40,
           '%as': 0.25,
            '%life_steal' : 0.08,
        },
        bruiser : true,
        marksman : true,
        builds_from : ['vampiric_scepter', 'recurve_bow', 'pickaxe'],
        passive_name : "Mist's edge",
        passive_description : `Basic attacks deal bonus physical damage on-hit equal to 12% [Melee champion] / 9% [Ranged champion] of the target's
                               current health, with a minimum of 15 against all units and a maximum of 60 against minions and monsters.`,
        passive2_name : 'Siphon',
        passive2_description : `Auto attacking a champion 3 times within 6 seconds each deal 40 - 103(based on level) bonus magic damage on-hit and slow
                                the target by 25% for 2 seconds, while also granting you 25% bonus movement speed for the same duration.`,
        passive2_cooldown : 30,
    },

    titanic_hydra : {
        legendary : true,
        name : 'Titanic Hydra',
        id : 3748,
        price : 3300,
        stats : {
            ad : 30,
            hp : 500,
        },
        bruiser : true,
        tank : true,
        builds_from : ['tiamat', 'ruby_crystal', 'giants_belt'],
        passive_name : 'Colossus',
        passive_description : `Gain bonus attack damage equal to 2% of bonus health.`,
        passive2_name : 'Cleave',
        passive2_description : `Basic attacks on-hit deal 4(+1.5% maximum health) [Melee champion] / 3(+1.125% maximum health) [Ranged champion]
                                to the target and 40(+3% maximum health) [Melee champion] / 30(+2.25% maximum health) [Ranged champion] to other
                                enemies in a cone in the direction of the target. Limited to 1 Hydra item.`,
    },

    deaths_dance : {
        legendary : true,
        name : "Death's Dance",
        id : 6333,
        price : 3300,
        stats : {
            ad : 65,
            armor : 50,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        builds_from : ['pickaxe', 'chain_vest', 'pickaxe'],
        passive_name : 'Ignore pain',
        passive_description : `Stores 30% [Melee champion] / 10% [Ranged champion] of all post-mitigation physical and magic damage received,
                               including on shields, which is sucessively taken as true damage over 3 seconds instead, dealing a third of the
                               stored damage each second.`,
        passive2_name : 'Defy',
        passive2_description : `If an enemy champion dies within 3 seconds of you damaging them, removes ignores Pain's remaining stored damage
                                and heals you for 50% bonus AD over 2 seconds.`,
    },

    infinity_edge : {
        legendary : true,
        name : 'Infinity Edge',
        id : 3031,
        price : 3400,
        stats : {
            ad : 70,
            '%crit' : 0.2,
        },
        marksman : true,
        builds_from : ['b_f_sword', 'pickaxe', 'cloack_of_agility'],
        passive_name : 'Perfection',
        passive_description : `Gain 35% bonus critical strike damage if you have at least 40% critical strike chance. Unique with Guinsoo's Rageblade
                               and Navori Quickblades.`,
    },

    bloodthirster : {
        legendary : true,
        name : 'Bloodthirster',
        id : 3072,
        price : 3200,
        stats : {
            ad : 55,
            '%crit' : 0.2,
            '%life_steal' : 0.15,
        },
        marksman : true,
        builds_from : ['b_f_sword', 'cloack_of_agility', 'vampiric_scepter'],
        passive_name : 'Ichorshield',
        passive_description : `Convert the healing received from life steal in excess of maximum health into a shield for up to 180 - 450(based on level),
                               which slowly decays after not dealing or taking damage for 25 seconds.`,
    },

    navori_quickblades : {
        legendary : true,
        name : 'Navori Quickblades',
        id : 6675,
        price : 3400,
        stats : {
            ad : 60,
            '%crit' : 0.2,
            haste : 20,
        },
        marksman : true,
        builds_from : ['cauldfields_warhammer', 'pickaxe', 'cloack_of_agility'],
        passive_name : 'Transcendance',
        passive_description : `If you have at least 40% critical strike chance, basic attacks on-hit reduce your basic abilities's current cooldowns
                               by 15% of their remaining cooldowns. Unique with Infinity Edge and Guinsoo's Rageblade. Unique with Spear of Shojin.`,
        passive2_name : 'Impermanence',
        passive2_description : `Your ability damage is increased by 0% - 20%(based on critical strike chance).`,
    },

    rabadons_deathcap : {
        legendary : true,
        name : "Rabadon's Deathcap",
        id : 3089,
        price : 3600,
        stats : {
            ap : 120,
        },
        mage : true,
        builds_from : ['needlessly_large_rod', 'needlessly_large_rod'],
        passive_name : 'Magical opus',
        passive_description : `Increase your ability power by 35%.`,
    },

    sunfire_aegis : {
        legendary : true,
        name : 'Sunfire Aegis',
        id : 3068,
        price : 2700,
        stats : {
            hp : 500,
            armor : 50,
        },
        tank : true,
        builds_from : ['bamis_cinder', 'chain_vest'],
        passive_name : 'Immolate',
        passive_description : `Taking of dealing damage activates this passive for 3 seconds. Deal 15(+1.75% bonus health) magic damage every second
                               to enemies within 325 units, with the damage being increased by 25% against minions. This executes minions that would
                               be killed by one more tick of damage. Damaging enemy champions or epic monsters with this effect grants a stack for
                               5 seconds that increases subsequent Immolate damage by 10%, stacking up to 6 times for a 60% increase. Limited to 1
                               Immolate item.`,
    },

    spear_of_shojin : {
        legendary : true,
        name : 'Spear of Shojin',
        id : 3161,
        price : 3400,
        stats : {
            ad : 65,
            haste : 20,
            hp : 300,
        },
        bruiser : true,
        assasin : true,
        builds_from : ['cauldfields_warhammer', 'b_f_sword', 'kindlegem'],
        passive_name : 'Dragonforce',
        passive_description : `Gain 8(+8% bonus AD) [Melee champion] / 6(+6% bonus AD) [Ranged champion] basic ability haste, reduced by 50% for
                               immobilizing spells. Unique with Navori Quickblades.`,
        passive2_name : 'Exigency',
        passive2_description : `Gain up to 15% [Melee champion] / 10% [Ranged champion] bonus movement speed based on missing health, capped at 33%
                                missing health.`,
    },

    turbo_chemtank : {
        legendary : true,
        name : 'Turbo Chemtank',
        id : 6664,
        price : 2800,
        stats : {
            haste : 10,
            hp : 500,
            mr : 50,
        },
        tank : true,
        builds_from : ['kindlegem', 'negatron_cloack', 'ruby_crystal'],
        active_name : 'Supercharged',
        active_description : `For 4 seconds, grants 40% bonus movement speed and ghosting while facing a turret or visible enemy champion
                              within 2000 units. After the duration or when an enemy champion is within 225 units, you emit a shockwave,
                              slowing enemy champions within 450 units by 40% for 1.5 seconds.`,
        active_cooldown : 90,
    },

    pauldrons_of_whiterock : {
        legendary : true,
        name : 'Pauldrons of Whiterock',
        id : 3857,
        price : 400,
        stats : {
            ad : 15,
            hp : 250,
            '%hp_regen' : 1,
            gold : 0.3,
        },
        support : true,
        builds_from : ['runesteel_spaulders'],
        active_name : 'Warding',
        active_description : `Consumes a charge to place a Stealth Ward at the target location, which grants sight of the surrounding area.
                              Charges refill upon visiting the shop. 4 charges. Limited to 1 support / jungle item.`,
    },

    black_mist_scythe : {
        legendary : true,
        name : 'Black Mist Scythe',
        id : 3864,
        price : 400,
        stats : {
            ad : 20,
            hp : 75,
            '%mana_regen' : 1,
            gold : 0.3,
        },
        support : true,
        builds_from : ['harrowing_crescent'],
        active_name : 'Warding',
        active_description : `Consumes a charge to place a Stealth Ward at the target location, which grants sight of the surrounding area.
                              Charges refill upon visiting the shop. 4 charges. Limited to 1 support / jungle item.`,
    },

    bulwark_of_the_mountain : {
        legendary : true,
        name : 'Bulmark of the Mountain',
        id : 3860,
        price : 400,
        stats : {
            ap : 20,
            hp : 250,
            '%hp_regen' : 1,
            gold : 0.3
        },
        support : true,
        builds_from : ['targons_buckler'],
        active_name : 'Warding',
        active_description : `Consumes a charge to place a Stealth Ward at the target location, which grants sight of the surrounding area.
                              Charges refill upon visiting the shop. 4 charges. Limited to 1 support / jungle item.`,
    },

    shard_of_true_ice : {
        legendary : true,
        name : 'Shard of True Ice',
        id : 3853,
        price : 400,
        stats : {
            ap : 40,
            hp : 75,
            '%mana_regen' : 1.15,
            gold : 0.3,
        },
        support : true,
        builds_from : ['frostfang'],
        active_name : 'Warding',
        active_description : `Consumes a charge to place a Stealth Ward at the target location, which grants sight of the surrounding area.
                              Charges refill upon visiting the shop. 4 charges. Limited to 1 support / jungle item.`,
    },

    catalyst_of_aeons : {
        epic : true,
        name : 'Catalyst of Aeons',
        id : 3803,
        price : 1100,
        stats : {
            hp : 225,
            mana : 300,
        },
        mage : true,
        tank : true,
        builds_into : ['abyssal_mask', 'rod_of_ages'],
        builds_from : ['ruby_crystal', 'sapphire_crystal'],
        passive_name : 'Eternity',
        passive_description : `Restore mana equal to 8% of pre-mitigation damage taken from champions, and heal for an amount
                               equal to 20% of mana spent, up to 15 per cast. Toggled abilities can only heal for up to 15 per second.`,
    },

    kircheis_shard : {
        epic : true,
        name : 'Kircheis Shard',
        id : 2015,
        price : 700,
        stats : {
           '%as': 0.15,
        },
        marksman : true,
        builds_into : ['rapid_firecannon', 'stormrazor'],
        builds_from : ['dagger'],
        passive_name : 'Energized',
        passive_description : `Moving and basic attacking generates Energize stacks, up to 100.`,
        passive2_name : 'Jolt',
        passive2_description : `When fully Energized, your next basic attack deals 80 bonus magic damage on-hit.`,
    },

    sheen : {
        epic : true,
        name : 'Sheen',
        id : 3057,
        price : 700,
        stats : {},
        marksman : true,
        bruiser : true,
        assasin : true,
        mage : true,
        builds_into : ['trinity_force', 'lich_bane', 'essence_reaver', 'divine_sunderer', 'iceborn_gaunlet'],
        passive_name : 'Spellblade',
        passive_description : `After using an ability, your next basic attack within 10 seconds deals 100% base AD bonus physical damage on-hit.`,
        passive_cooldown : 1.5,
    },

    chain_vest : {
        epic : true,
        name : 'Chain Vest',
        id : 1031,
        price : 800,
        stats : {
            armor : 40,
        },
        bruiser : true,
        tank : true,
        builds_into : ['guardian_angel', 'dead_mans_plate', 'deaths_dance', 'sunfire_aegis', 'iceborn_gaunlet'],
        builds_from : ['cloth_armor'],
    },

    winged_moonplate : {
        epic : true,
        name : 'Winged Moonplate',
        id : 3066,
        price : 800,
        stats : {
            hp : 150,
        },
        tank : true,
        builds_into : ['dead_mans_plate', 'force_of_nature'],
        builds_from : ['ruby_crystal'],
        passive_name : 'Flight',
        passive_description : `Gain 5% bonus movement speed.`,
    },

    kindlegem : {
        epic : true,
        name : 'Kindlegem',
        id : 3067,
        price : 800,
        stats : {
            hp : 200,
            haste : 10,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        mage : true,
        tank : true,
        support : true,
        builds_into : ['anathemas_chains', 'archangels_staff', 'black_cleaver', 'crown_of_the_shattered_queen', 'divine_sunderer', 'evenshroud',
                       'everfrost', 'goredrinker', 'imperial_mandate', 'knights_vow', 'locket_of_the_iron_solari', 'moonstone_renewer', 'redemption',
                       'shurelyas_battlesong', 'spirit_visage', 'stridebreaker', 'trinity_force', 'warmogs_armor', 'winters_approach', 'zekes_convergence',
                       'radiant_virtue', 'jaksho', 'heartsteel', 'spear_of_shojin', 'iceborn_gaunlet'],
        builds_from : ['ruby_crystal'],
    },

    bramble_vest : {
        epic : true,
        name : 'Bramble Vest',
        id : 3076,
        price : 800,
        stats : {
            armor : 30,
        },
        tank : true,
        support : true,
        builds_into : ['thornmail'],
        builds_from : ['cloth_armor', 'cloth_armor'],
        passive_name : 'Thorns',
        passive_description : `When struck by a basic attack on-hit, deal 6 magic damage to the attacker and, if they are a champion, inflict
                               them with 40% Grievous Wounds for 3 seconds.`,
    },

    forbidden_idol : {
        epic : true,
        name : 'Forbidden Idol',
        id : 3114,
        price : 800,
        stats : {
            '%mana_regen' : 0.5,
            '%hspower' : 0.08,
        },
        support : true,
        builds_into : ['redemption', 'mikaels_blessing', 'ardent_censer', 'staff_of_the_flowing_water', 'chemtech_putrifier'],
        builds_from : ['faerie_charm'],
    },

    executioners_calling : {
        epic : true,
        name : "Executioner's Calling",
        id : 3123,
        price : 800,
        stats : {
            ad : 15,
        },
        bruiser : true,
        marksman : true,
        builds_into : ['mortal_reminder', 'chempunk_chainsword'],
        builds_from : ['long_sword'],
        passive_name : 'Rend',
        passive_description : `Dealing physical damage to enemy champions inflict them with 40% Grievous Wounds for 3 seconds.`,
    },

    crystalline_bracer : {
        epic : true,
        name : 'Crystalline Bracer',
        id : 3801,
        price : 800,
        stats : {
            hp : 200,
            '%hp_regen' : 0.1,
        },
        tank : true,
        support : true,
        builds_into : ['warmogs_armor', 'knights_vow', 'heartsteel'],
        builds_from : ['ruby_crystal', 'rejuvenation_bead'],
    },

    oblivion_orb : {
        epic : true,
        name : 'Oblivion Orb',
        id : 3916,
        price : 800,
        stats :  {
            ap : 30,
        },
        mage : true,
        support : true,
        builds_into : ['chemtech_putrifier', 'morellonomicon'],
        builds_from : ['amplifying_tome'],
        passive_name : 'Cursed',
        passive_description : `Dealing magic damage to enemy champions inflicts them with 40% Grievous Wounds for 3 seconds.`,
    },

    rageknife : {
        epic : true,
        name : 'Rageknife',
        id : 6677,
        price : 800,
        stats : {
           '%as': 0.25,
        },
        marksman : true,
        bruiser : true,
        builds_into : ['guinsoos_rageblade'],
        builds_from : ['dagger', 'dagger'],
        passive_name : 'Wrath',
        passive_description : `Convert every 1% critical strike chance into 1.75 bonus physical damage on-hit, capped at 100% critical
                               strike chance, for a maximum of 175 bonus physical damage on-hit. This item is affected by critical strike modifiers.`,
    },

    aether_wisp : {
        epic : true,
        name : 'Aether Wisp',
        id : 3113,
        price : 850,
        stats : {
            ap : 30,
        },
        mage : true,
        builds_into : ['lich_bane', 'cosmic_drive'],
        builds_from : ['amplifying_tome'],
        passive_name : 'Glide',
        passive_description : `Gain 5% bonus movement speed.`,
    },

    giants_belt : {
        epic : true,
        name : "Giant's Belt",
        id : 1011,
        price : 900,
        stats : {
            hp : 350,
        },
        tank : true,
        mage : true,
        builds_into : ['thornmail', 'warmogs_armor', 'rylais_crystal_scepter', 'titanic_hydra', 'demonic_embrace', 'anathemas_chains', 'heartsteel', 'randuins_omen'],
        builds_from : ['ruby_crystal'],
    },

    vampiric_scepter : {
        epic : true,
        name : 'Vampiric Scepter',
        id : 1053,
        price : 900,
        stats : {
            ad : 15,
            '%life_steal' : 0.07,
        },
        marksman : true,
        bruiser : true,
        assasin : true,
        builds_into : ['bloodthirster', 'ravenous_hydra', 'blade_of_the_ruined_king', 'immortal_shieldbow'],
        builds_from : ['long_sword'],
    },

    negatron_cloack : {
        epic : true,
        name : 'Negatron Cloack',
        id : 1057,
        price : 900,
        stats : {
            mr : 50,
        },
        tank : true,
        support : true,
        builds_into : ['mikaels_blessing', 'force_of_nature', 'turbo_chemtank'],
        builds_from : ['null_magic_mantle'],
    },

    glacial_buckler : {
        epic : true,
        name : 'Glacial Buckler',
        id : 3024,
        price : 900,
        stats : {
            armor : 20,
            mana : 250,
            haste : 10,
        },
        tank : true,
        support : true,
        builds_into : ['zekes_convergence', 'frozen_heart'],
        builds_from : ['sapphire_crystal', 'cloth_armor'],
    },

    fiendish_codex : {
        epic : true,
        name : 'Fiendish Codex',
        id : 3108,
        price : 900,
        stats : {
            ap : 35,
            haste : 10,
        },
        mage : true,
        builds_into : ['lich_bane', 'banshees_veil', 'zhonyas_hourglass', 'horizon_focus', 'cosmic_drive', 'liandrys_anguish', 'night_harvester'],
        builds_from : ['amplifying_tome'],
    },

    bandleglass_mirror : {
        epic : true,
        name : 'Bandleglass Mirror',
        id : 4642,
        price : 950,
        stats : {
            ap : 20,
            haste : 10,
            '%mana_regen' : 0.5,
        },
        support : true,
        builds_into : ['shurelyas_battlesong', 'imperial_mandate', 'moonstone_renewer'],
        builds_from : ['faerie_charm', 'amplifying_tome'],
    },

    recurve_bow : {
        epic : true,
        name : 'Recurve Bow',
        id : 1043,
        price : 1000,
        stats : {
           '%as': 0.25,
        },
        mage : true,
        marksman : true,
        bruiser : true,
        builds_into : ['nashors_tooth', 'blade_of_the_ruined_king'],
        builds_from : ['dagger', 'dagger'],
        passive_name : 'Steeltipped',
        passive_description : `Basic attacks deal 15 bonus physical damage on-hit.`,
    },

    hearthbound_axe : {
        epic : true,
        name : 'Hearthbound Axe',
        id : 3051,
        price : 1000,
        stats : {
            ad : 15,
           '%as': 0.15,
        },
        marksman : true,
        bruiser : true,
        builds_into : ['trinity_force', 'wits_end', 'stridebreaker'],
        builds_from : ['dagger', 'long_sword'],
        passive_name : 'Nimble',
        passive_description : `Basic attacks grant 20 [Melee champion] / 10 [Ranged champion] bonus movement speed for 2 seconds.`,
    },

    wardens_mail : {
        epic : true,
        name : "Warden's Mail",
        id : 3082,
        price : 1000,
        stats : {
            armor : 40,
        },
        tank : true,
        builds_into : ['frozen_heart', 'randuins_omen'],
        builds_from : ['cloth_armor', 'cloth_armor'],
        passive_name : 'Rock solid',
        passive_description : `Every first incoming instance of post-mitigation basic damage is reduced by 5(+3.5% per 1000 maximum health),
                               maximum 40% reduction each.`,
    },

    seekers_armguard : {
        epic : true,
        name : "Seeker's Armguard",
        id : 3191,
        price : 1000,
        stats : {
            ap : 30,
            armor : 15,
        },
        mage : true,
        builds_into : ['zhonyas_hourglass'],
        builds_from : ['amplifying_tome', 'cloth_armor'],
        passive_name : "Witch's path",
        passive_description : `Killing a unit grants 0.5 bonus armor, up to a maximum of 15 at 30 unit kills.`,
    },

    verdant_barrier : {
        epic : true,
        name : 'Verdant Barrier',
        id : 4632,
        price : 1000,
        stats : {
            ap : 20,
            mr : 25,
        },
        mage : true,
        builds_into : ['banshees_veil'],
        builds_from : ['null_magic_mantle', 'amplifying_tome'],
        passive_name : 'Adaptive',
        passive_description : `Killing a unit grants 0.3 bonus magic resistance, up to a maximum of 9 at 30 unit kills.`,
    },

    zeal : {
        epic : true,
        name : 'Zeal',
        id : 3086,
        price : 1050,
        stats : {
           '%as': 0.18,
            '%crit' : 0.15,
        },
        marksman : true,
        builds_into : ['phantom_dancer', 'runaans_hurricane', 'rapid_firecannon'],
        builds_from : ['cloack_of_agility', 'dagger'],
        passive_name : 'Zealous',
        passive_description : `Gain 7% bonus movement speed.`,
    },

    hextech_alternator : {
        epic : true,
        name : 'Hextech Alternator',
        id : 3145,
        price : 1050,
        stats : {
            ap : 25,
            hp : 150,
        },
        mage : true,
        builds_into : ['hextech_rocketbelt', 'horizon_focus', 'night_harvester', 'shadowflame', 'morellonomicon'],
        builds_from : ['amplifying_tome', 'ruby_crystal'],
        passive_name : 'Revved',
        passive_description : `Damaging an enemy champion deals 50 - 125(based on level) bonus magic damage.`,
        passive_cooldown : 40,
    },

    phage : {
        epic : true,
        name : 'Phage',
        id : 3044,
        price : 1100,
        stats : {
            ad : 15,
            hp : 200,
        },
        bruiser : true,
        builds_into : ['steraks_gage', 'hullbreaker'],
        builds_from : ['ruby_crystal', 'long_sword'],
        passive_name : 'Sturdy',
        passive_description : `After dealing physical damage to an enemy champion, heal for 1.6% [Melee champion] / 0.8% [Ranged champion]
                               of maximum health over 6 seconds.`,
    },

    cauldfields_warhammer : {
        epic : true,
        name : "Cauldfield's Warhammer",
        id : 3133,
        price : 1100,
        stats : {
            ad : 25,
            haste : 10,
        },
        marksman : true,
        bruiser : true,
        assasin : true,
        builds_into : ['axiom_arc', 'black_cleaver', 'chempunk_chainsword', 'divine_sunderer', 'duskblade_of_draktharr',
                       'essence_reaver', 'goredrinker', 'manamune', 'maw_of_malmortius', 'navori_quickblades', 'prowlers_claw', 'ravenous_hydra',
                       'seryldas_grudge', 'youmuus_ghostblade', 'spear_of_shojin', 'eclipse'],
        builds_from : ['long_sword', 'long_sword'],
    },

    serrated_dirk : {
        epic : true,
        name : 'Serrated Dirk',
        id : 3134,
        price : 1100,
        stats : {
            ad : 30,
        },
        assasin : true,
        bruiser : true,
        builds_into : ['axiom_arc', 'duskblade_of_draktharr', 'eclipse', 'edge_of_night', 'prowlers_claw', 'serpents_fang', 'the_collector', 'umbral_glaive', 'youmuus_ghostblade'],
        builds_from : ['long_sword', 'long_sword'],
        passive_name : 'Gouge',
        passive_description : `Gain 10 lethality.`,
    },

    ironspike_whip : {
        epic : true,
        name : 'Ironspike Whip',
        id : 6029,
        price : 1100,
        stats : {
            ad : 30,
        },
        bruiser : true,
        builds_into : ['goredrinker', 'stridebreaker'],
        builds_from : ['pickaxe'],
        active_name : 'Crescent',
        active_description : `Deal 100% base AD physical damage to enemies in a 450 radius. Cooldown is reduced by ability haste.`,
        active_cooldown : 20,
    },

    bamis_cinder : {
        epic : true,
        name : "Bami's Cinder",
        id : 6660,
        price : 1000,
        stats : {
            hp : 300,
        },
        tank : true,
        builds_into : ['sunfire_aegis'],
        builds_from : ['ruby_crystal', 'ruby_crystal'],
        passive_name : 'Immolate',
        passive_description : `Taking or dealing damage activates this passive for 3 seconds. Deal 12(+1% bonus health) magic damage every
                               second to enemies within 325 units, with the damage being increased by 25% against minions and monsters.
                               This executes minions that would be killed by one more tick of damage.`,
    },

    tiamat : {
        epic : true,
        name : 'Tiamat',
        id : 3077,
        price : 1200,
        stats : {
            ad : 25,
        },
        bruiser : true,
        tank :  true,
        builds_into : ['ravenous_hydra', 'titanic_hydra'],
        builds_from : ['pickaxe'],
        passive_name : 'Cleave',
        passive_description : `Basic attacks on-hit deal 40% total AD [Melee champion] / 20% total AD [Ranged champion] physical damage
                               to other enemies within 350 units of the target.`,
    },

    spectres_cowl : {
        epic : true,
        name : "Spectre's Cowl",
        id : 3211,
        price : 1250,
        stats : {
            hp : 250,
            mr : 25,
        },
        tank : true,
        builds_into : ['spirit_visage', 'abyssal_mask'],
        builds_from : ['ruby_crystal', 'null_magic_mantle'],
        passive_name : 'Incorporeal',
        passive_description : `Gain 150% base health regeneration after taking damage from a champion, with the duration equal to one third
                               of the damage taken, up to a maximum of 10 seconds.`,
    },

    blighting_jewel : {
        epic : true,
        name : 'Blighting Jewel',
        id : 4630,
        price : 1250,
        stats : {
            ap : 25,
            '%magic_pen' : 0.13,
        },
        mage : true,
        builds_into : ['void_staff'],
        builds_from : ['amplifying_tome'],
    },

    quicksilver_sash : {
        epic : true,
        name : 'Quicksilver Sash',
        id : 3140,
        price : 1300,
        stats : {
            mr : 30,
        },
        marksman : true,
        bruiser : true,
        builds_into : ['quicksilver_sash', 'silvermere_dawn'],
        builds_from : ['null_magic_mantle'],
        active_name : 'Quicksilver',
        active_description : `Removes all crowd control debuffs (except Airbone) from your champion.`,
        active_cooldown : 90,
    },

    hexdrinker : {
        epic : true,
        name : 'Hexdrinker',
        id : 3155,
        price : 1300,
        stats : {
            ad : 25,
            mr : 35,
        },
        marksman : true,
        assasin : true,
        bruiser : true,
        builds_into : ['maw_of_malmortius'],
        builds_from : ['long_sword', 'null_magic_mantle'],
        passive_name : 'Lifeline',
        passive_description : `If you would take magic damage that would reduce you below 30% of your maximum health, you first gain a shield
                               that absorbs 110 - 280 [Melee champion] / 82.5 - 210 [Ranged champion] (based on level) magic damage for 3 seconds.
                               Limited to 1 Lifeline item.`,
        passive_cooldown : 90,
    },

    lost_chapter : {
        epic : true,
        name : 'Lost Chapter',
        id : 3802,
        price : 1300,
        stats : {
            ap : 40,
            mana : 300,
            haste : 10,
        },
        mage : true,
        builds_into : ['crown_of_the_shattered_queen', 'liandrys_anguish', 'ludens_tempest', 'everfrost'],
        builds_from : ['amplifying_tome', 'sapphire_crystal', 'amplifying_tome'],
        passive_name : 'Enlighter',
        passive_description : `Upon leveling up restores 20% of maximum mana over 3 seconds.`,
    },

    leeching_leer : {
        epic : true,
        name : 'Leeching Leer',
        id : 4635,
        price : 1300,
        stats : {
            ap : 20,
            hp : 250,
            '%omnivamp' : 0.05,
        },
        mage : true,
        builds_into : ['riftmaker'],
        builds_from : ['ruby_crystal', 'amplifying_tome'],
    },

    noonquiver : {
        epic : true,
        name : 'Noonquiver',
        id : 6670,
        price : 1300,
        stats : {
            ad : 30,
           '%as': 0.15,
        },
        builds_into : ['galeforce', 'kraken_slayer', 'immortal_shieldbow'],
        builds_from : ['long_sword', 'dagger', 'long_sword'],
        passive_name : 'Precision',
        passive_description : `Basic attacks deal 20 bonus physical damage on-hit against minions and monsters.`,
    },

    aegis_of_the_legion : {
        epic : true,
        name : 'Aegis of the Legion',
        id : 3105,
        price : 1400,
        stats : {
            armor : 30,
            mr : 30,
            haste : 10,
        },
        tank : true,
        support : true,
        builds_into : ['evenshroud', 'locket_of_the_iron_solari', 'gargoyle_stoneplate', 'radiant_virtue', 'jaksho'],
        builds_from : ['null_magic_mantle', 'cloth_armor'],
    },

    last_whisper : {
        epic : true,
        name : 'Last Whisper', 
        id : 3035,
        price : 1450,
        stats : {
            ad : 30,
            '%armor_pen' : 0.18,
        },
        bruiser : true,
        marksman : true,
        assasin  :true,
        builds_into : ['lord_dominiks_regards', 'seryldas_grudge', 'mortal_reminder'],
        builds_from : ['long_sword', 'long_sword'],
    },

    runesteel_spaulders : {
        epic : true,
        name : 'Runesteel Spaulders',
        id : 3855,
        price : 400,
        stats : {
            ad : 6,
            hp : 100,
            '%hp_regen' : 0.5,
            gold : 0.3,
        },
        support : true,
        builds_into : ['pauldrons_of_whiterock'],
        builds_from : ['steel_shoulderguards'],
        active_name : 'Warding',
        active_description : `Consumes a charge to place a Stealth Ward at the target location, which grants sight of the surrounding area.
                              Charges refill upon visiting the shop. 3 charges. Limited to 1 support / jungle item.`,
        passive_name : 'Spoils of War',
        passive_description : `Grants a charge every 35 seconds, up to 3 charges. Basic attacks can consume a charge to execute minions
                               below 50% of their maximum health. Killing a minion by any way with a charge grants you and the nearest
                               allied champion kill gold. Receive diminishing gold from excessive minion kills.`,
        passive2_name : 'Quest',
        passive2_description : `Earn 500 gold using this item to upgrade to Pauldrons of Whiterock.`,
    },

    targons_buckler : {
        epic : true,
        name : "Targon's Buckler",
        id : 3859,
        price : 400,
        stats : {
            ap : 15,
            hp : 100,
            '%hp_regen' : 0.5,
            gold : 0.3,
        },
        support : true,
        builds_into : ['bulwark_of_the_mountain'],
        builds_from : ['relic_shield'],
        active_name : 'Warding',
        active_description : `Consumes a charge to place a Stealth Ward at the target location, which grants sight of the surrounding area.
                              Charges refill upon visiting the shop. 3 charges. Limited to 1 support / jungle item.`,
        passive_name : 'Spoils of War',
        passive_description : `Grants a charge every 35 seconds, up to 3 charges. Basic attacks can consume a charge to execute minions
                               below 50% of their maximum health. Killing a minion by any way with a charge grants you and the nearest
                               allied champion kill gold. Receive diminishing gold from excessive minion kills.`,
        passive2_name : 'Quest',
        passive2_description : `Earn 500 gold using this item to upgrade to Bulwark of the Mountain.`,
    },

    frostfang : {
        epic : true,
        name : 'Frostfang',
        id : 3851,
        price : 400,
        stats : {
            ap : 15,
            hp : 70,
            '%mana_regen' : 0.75,
            gold : 0.3,
        },
        support : true,
        builds_into : ['shard_of_true_ice'],
        builds_from : ['spellthiefs_edge'],
        active_name : 'Warding',
        active_description : `Consumes a charge to place a Stealth Ward at the target location, which grants sight of the surrounding area.
                              Charges refill upon visiting the shop. 3 charges. Limited to 1 support / jungle item.`,
        passive_name : 'Tribute',
        passive_description : `Grants a charge every 10 seconds, up to 3 charges. If an allied champion is within 2000 units,
                               damaging basic attacks and abilities against champions and structures consume a charge up to one
                               per attack or cast. Consuming a charge grants 20 gold. Receive diminishing gold from excessive minion kills.`,
        passive2_name : 'Quest',
        passive2_description : `Earn 500 gold using this item to upgrade to Shard of True Ice.`,
    },

    harrowing_crescent : {
        epic : true,
        name : 'Harrowing Crescent',
        id : 3863,
        price : 400,
        stats : {
            ad : 10,
            hp : 60,
            '%mana_regen' : 0.5,
            gold : 0.3,
        },
        support : true,
        builds_into : ['black_mist_scythe'],
        builds_from : ['spectral_sickle'],
        active_name : 'Warding',
        active_description : `Consumes a charge to place a Stealth Ward at the target location, which grants sight of the surrounding area.
                              Charges refill upon visiting the shop. 3 charges. Limited to 1 support / jungle item.`,
        passive_name : 'Tribute',
        passive_description : `Grants a charge every 10 seconds, up to 3 charges. If an allied champion is within 2000 units,
                               damaging basic attacks and abilities against champions and structures consume a charge up to one
                               per attack or cast. Consuming a charge grants 20 gold. Receive diminishing gold from excessive minion kills.`,
        passive2_name : 'Quest',
        passive2_description : `Earn 500 gold using this item to upgrade to Black Mist Scythe.`,
    },

    faerie_charm : {
        basic : true,
        name : 'Faerie Charm',
        id : 1004,
        price : 250,
        stats : {
            '%mana_regen' : 0.5,
        },
        support : true,
        builds_into : ['forbidden_idol', 'bandleglass_mirror'],
    },

    rejuvenation_bead : {
        basic : true,
        name : 'Rejuvenation Bead',
        id : 1006,
        price : 300,
        stats : {
            '%hp_regen' : 1,
        },
        tank : true,
        support : true,
        builds_into : ['knights_vow', 'crystalline_bracer'],
    },

    cloth_armor : {
        basic : true,
        name : 'Cloth Armor',
        id : 1029,
        price : 300,
        stats : {
            armor : 15,
        },
        tank : true,
        mage : true,
        support : true,
        builds_into : ['aegis_of_the_legion', 'bramble_vest', 'chain_vest', 'gargoyle_stoneplate', 'glacial_buckler', 'plated_steelcaps', 
                       'seekers_armguard', 'wardens_mail'],
    },

    dagger : {
        basic : true,
        name : 'Dagger',
        id : 1042,
        price : 300,
        stats : {
           '%as': 0.12,
        },
        marksman : true,
        mage : true,
        bruiser : true,
        builds_into : ['berserkers_greaves', 'guinsoos_rageblade', 'hearthbound_axe', 'kircheis_shard', 'noonquiver', 'rageknife', 'recurve_bow', 'runaans_hurricane', 'zeal'],
    },

    sapphire_crystal : {
        basic : true,
        name : 'Sapphire Crystal',
        id : 1027,
        price : 350,
        stats : {
            mana : 250,
        },
        mage : true,
        tank : true,
        support : true,
        builds_into : ['glacial_buckler', 'lost_chapter', 'catalyst_of_aeons'],
    },

    long_sword : {
        basic : true,
        name : 'Long Sword',
        id : 1036,
        price : 350,
        stats : {
            ad : 10,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        builds_into : ['black_cleaver', 'cauldfields_warhammer', 'edge_of_night', 'executioners_calling', 'hearthbound_axe', 'hexdrinker',
                       'last_whisper', 'manamune', 'noonquiver', 'phage', 'phantom_dancer', 'serrated_dirk', 'umbral_glaive', 'vampiric_scepter'],
    },

    ruby_crystal : {
        basic : true,
        name : 'Ruby Crystal',
        id : 1028,
        price : 400,
        stats : {
            hp : 150,
        },
        tank : true,
        mage : true,
        bruiser : true,
        support : true,
        assasin : true,
        builds_into : ['bamis_cinder', 'catalyst_of_aeons', 'chempunk_chainsword', 'cosmic_drive', 'crystalline_bracer', 'dead_mans_plate', 'edge_of_night', 
                       'force_of_nature', 'giants_belt', 'hextech_alternator', 'jaksho', 'kindlegem', 'leeching_leer', 'phage',  
                       'radiant_virtue', 'silvermere_dawn', 'spectres_cowl', 'steraks_gage', 'titanic_hydra', 'turbo_chemtank', 'winged_moonplate', 
                       'winters_approach',],
    },

    amplifying_tome : {
        basic : true,
        name : 'Amplifying Tome',
        id : 1052,
        price : 435,
        stats : {
            ap : 20,
        },
        mage : true,
        support : true,
        builds_into : ['aether_wisp', 'ardent_censer', 'bandleglass_mirror', 'blighting_jewel', 'crown_of_the_shattered_queen', 'demonic_embrace',
                       'everfrost', 'fiendish_codex', 'hextech_alternator', 'hextech_rocketbelt', 'leeching_leer', 'lost_chapter', 'nashors_tooth',
                       'night_harvester', 'oblivion_orb', 'rylais_crystal_scepter', 'seekers_armguard', 'staff_of_the_flowing_water', 'verdant_barrier',
                       'rod_of_ages', 'morellonomicon'],
    },

    null_magic_mantle : {
        basic : true,
        name : 'Null Magic Mantle',
        id : 1033,
        price : 450,
        stats : {
            mr : 25,
        },
        mage : true,
        bruiser : true,
        marksman : true,
        tank : true,
        support : true,
        assasin : true,
        builds_into : ['aegis_of_the_legion', 'gargoyle_stoneplate', 'hexdrinker', 'mercurys_treads', 'negatron_cloack', 'quicksilver_sash',
                       'spectres_cowl', 'verdant_barrier', 'wits_end'],
    },

    cloack_of_agility : {
        basic : true,
        name : 'Cloack of Agility',
        id : 1018,
        price : 600,
        stats : {
            '%crit' : 0.2,
        },
        marksman : true,
        assasin : true,
        bruiser : true,
        builds_into : ['bloodthirster', 'essence_reaver', 'galeforce', 'guinsoos_rageblade', 'immortal_shieldbow', 'infinity_edge', 'kraken_slayer',
                       'lord_dominiks_regards', 'mercurial_scimitar', 'navori_quickblades', 'stormrazor', 'the_collector', 'zeal', 'mortal_reminder'],
    },

    stopwatch : {
        basic : true,
        name : 'Stopwatch',
        id : 2420,
        price : 650,
        stats : {},
        mage : true,
        marksman : true,
        bruiser : true,
        builds_into : ['guardian_angel', 'zhonyas_hourglass'],
        active_name : 'Stasis',
        active_description : `Put yourself in stasis for 2.5 seconds, rendering you untargetable and invulnarable for the duration but also unable to move,
                              declare basic attacks, cast abilities, use summoner spells, or activate items. Transforms into Broken Stopwatch when activated
                              which cannot be activated again. Once broken, all future purchases are also broken.`,
    },

    blasting_wand : {
        basic : true,
        name : 'Blasting Wand',
        id : 1026,
        price : 850,
        stats : {
            ap : 40,
        },
        mage : true,
        builds_into : ['archangels_staff', 'demonic_embrace', 'hextech_rocketbelt', 'ludens_tempest', 'nashors_tooth', 'riftmaker',
                       'rylais_crystal_scepter', 'void_staff', 'rod_of_ages'],
    },

    pickaxe : {
        basic : true,
        name : 'Pickaxe',
        id : 1037,
        price : 875,
        stats : {
            ad : 25,
        },
        marksman : true,
        bruiser : true,
        assasin : true,
        builds_into : ['blade_of_the_ruined_king', 'deaths_dance', 'galeforce', 'hullbreaker', 'infinity_edge', 'ironspike_whip', 'kraken_slayer',
                       'mercurial_scimitar', 'navori_quickblades', 'serpents_fang', 'silvermere_dawn', 'steraks_gage', 'the_collector', 'tiamat', 'wits_end'],
    },

    watchful_wardstone : {
        basic : true,
        name : 'Watchful Wardstone',
        id : 4638,
        price : 1100,
        stats : {
            hp : 150,
            haste : 10,
        },
        support : true,
        builds_into : ['vigilant_wardstone'],
        item_inherent : `Automatically upgrades to Vigilant Wardstone after completing a support quest and reaching level 13.`,
        passive_name : 'Arcane Cache',
        passive_description : `This item can store up to 3 purchased Control Wards.`,
    },

    needlessly_large_rod : {
        basic : true,
        name : 'Needlessly Large Rod',
        id : 1058,
        price : 1250,
        stats : {
            ap : 60,
        },
        mage : true,
        builds_into : ['rabadons_deathcap', 'shadowflame'],
    },

    b_f_sword : {
        basic : true,
        name : 'B. F. Sword',
        id : 1038,
        price : 1300,
        stats : {
            ad : 40,
        },
        marksman : true,
        builds_into : ['guardian_angel', 'infinity_edge', 'bloodthirster', 'stormrazor', 'spear_of_shojin'],
    },

    dark_seal : {
        basic : true,
        name : 'Dark Seal',
        id : 1082,
        price : 350,
        stats : {
            ap : 15,
            hp : 40,
        },
        mage : true,
        builds_into : ['mejais_soulstealer'],
        passive_name : 'Glory',
        passive_description : `Gain 2 stacks for each champion kill and 1 stack for each assist, up to a maximum of 10 stacks. Lose 5 stacks on death.`,
        passive2_name : 'Dread',
        passive2_description : `Gain 4 ability power for each stack of Glory.`,
    },

    dorans_ring : {
        starter : true,
        name : "Doran's Ring",
        id : 1056,
        price : 400,
        stats : {
            ap : 15,
            hp : 70,
        },
        mage : true,
        passive_name : 'Focus',
        passive_description : `Basic attacks deal 5 bonus physical damage on-hit against minions.`,
        passive2_name : 'Drain',
        passive2_description : `Restore 1 mana every second, increased to 1.5 for 10 seconds when you damage an enemy champion. If you cannot gain mana
                                heal for 45% of the mana value instead.`,
    },

    tear_of_the_goddess : {
        basic : true,
        name : 'Tear of the Goddess',
        id : 3070,
        price : 400,
        stats : {
            mana : 240,
        },
        mage : true,
        marksman : true,
        assasin : true,
        bruiser : true,
        tank : true,
        builds_into : ['archangels_staff', 'manamune', 'winters_approach'],
        passive_name : 'Focus',
        passive_description : `Basic attacks deal 5 bonus physical damage on-hit against minions.`,
        passive2_name : 'Mana Charge',
        passive2_description : `Grants a charge every 8 seconds up to 4 charges. Affecting an enemy or ally with an ability consumes a charge to gran 3 bonus mana,
                                increased to 6 if they are a champion, up to a maximum of 360 bonus mana.`,
    },

    spellthiefs_edge : {
        starter : true,
        name : 'Spellthiefs Edge',
        id : 3850,
        price : 400,
        stats : {
            ap : 8,
            hp : 10,
            '%mana_regen' : 0.5,
            gold : 0.2,
        },
        support : true,
        builds_into : ['frostfang'],
        passive_name : 'Tribute',
        passive_description : `Grants a charge every 10 seconds, up to 3 charges. If an allied champion is within 2000 units,
                               damaging basic attacks and abilities against champions and structures consume a charge up to one
                               per attack or cast. Consuming a charge grants 20 gold. Receive diminishing gold from excessive minion kills.`,
        passive2_name : 'Quest',
        passive2_description : `Earn 500 gold using this item to upgrade to Frostfang.`,
    },

    steel_shoulderguards : {
        starter : true,
        name : 'Steel Shoulderguards',
        id : 3854,
        price : 400,
        stats : {
            ad : 3,
            hp : 30,
            '%hp_regen' : 0.25,
            gold : 0.2,
        },
        support : true,
        builds_into : ['runesteel_spaulders'],
        passive_name : 'Spoils of War',
        passive_description : `Grants a charge every 35 seconds, up to 3 charges. Basic attacks can consume a charge to execute minions
                               below 50% [Melee champion] / 30% [Ranged champion] of their maximum health. Killing a minion by any way 
                               with a charge grants you and the nearest allied champion kill gold. Receive diminishing gold from 
                               excessive minion kills.`,
        passive2_name : 'Quest',
        passive2_description : `Earn 500 gold using this item to upgrade to Runesteel Spaulders.`,
    },

    relic_shield : {
        starter : true,
        name : 'Relic Shield',
        id : 3858,
        price : 400,
        stats : {
            ap : 5,
            hp : 30,
            '%hp_regen' : 0.25,
            gold : 0.2,
        },
        support : true,
        builds_into : ['targons_buckler'],
        passive_name : 'Spoils of War',
        passive_description : `Grants a charge every 35 seconds, up to 3 charges. Basic attacks can consume a charge to execute minions
                               below 50% [Melee champion] / 30% [Ranged champion] of their maximum health. Killing a minion by any way 
                               with a charge grants you and the nearest allied champion kill gold. Receive diminishing gold from 
                               excessive minion kills.`,
        passive2_name : 'Quest',
        passive2_description : `Earn 500 gold using this item to upgrade to Targon's Buckler.`,
    },

    spectral_sickle : {
        starter : true,
        name : 'Spectral Sickle',
        id : 3862,
        price : 400,
        stats : {
            ad : 5,
            hp : 10,
            '%mana_regen' : 0.25,
            gold : 0.2,
        },
        mage : true,
        builds_into : ['harrowing_crescent'],
        passive_name : 'Tribute',
        passive_description : `Grants a charge every 10 seconds, up to 3 charges. If an allied champion is within 2000 units,
                               damaging basic attacks and abilities against champions and structures consume a charge up to one
                               per attack or cast. Consuming a charge grants 20 gold. Receive diminishing gold from excessive minion kills.`,
        passive2_name : 'Quest',
        passive2_description : `Earn 500 gold using this item to upgrade to Harrowing Crescent.`,
    },

    dorans_shield : {
        starter : true,
        name : "Doran's Shield",
        id : 1054,
        price : 400,
        stats : {
            hp : 80,
            hp_regen : 1.2,
        },
        tank : true,
        bruiser : true,
        passive_name : 'Focus',
        passive_description : `Basic attacks deal 5 bonus physical damage on-hit against minions.`,
        passive2_name : 'Endure',
        passive2_description : `After taking damage from a champion or large monster, gain health regeneration equal to 0 - 40(based on missing health)
                                health over 8 seconds. Reduced to 66% effectiveness on ranged champions or when triggered by area of effect damage
                                or damage over time.`,
    },

    dorans_blade : {
        starter : true,
        name : "Doran's Blade",
        id : 1055,
        price : 450,
        stats : {
            ad : 8,
            hp : 80,
        },
        assasin : true,
        bruiser : true,
        marksman : true,
        passive_name : 'Warmonger',
        passive_description : `Gain +2.5% omnivamp.`,
    },

    cull : {
        starter : true,
        name : 'Cull',
        id : 1083,
        price : 450,
        stats : {
            ad : 7,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        mage : true,
        tank : true,
        passive_name : 'Reap',
        passive_description : `Heal 3 hp on-hit. Killing a minion grants 1 gold up to a maximum of 100. After having killed 100 minions, 
                               grants an additional 350 and permanently disables this passive.`,
    },

    guardians_blade : {
        starter : true,
        name : "Guardian's Blade",
        id : 3177,
        price : 950,
        stats : {
            ad : 30,
            haste : 15,
            hp : 150,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        passive_name : 'Legendary',
        passive_description : 'This item counts as a Legendary item.'
    },

    guardians_hammer : {
        starter : true,
        name : "Guardian's Hammer",
        id : 3184,
        price : 950,
        stats : {
            ad : 25,
            hp : 150,
            '%life_steal' : 0.07,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        passive_name : 'Legendary',
        passive_description : 'This item counts as a Legendary item.'
    },

    guardians_horn : {
        starter : true,
        name : "Guardian's Horn",
        id : 2051,
        price : 950,
        stats : {
            hp : 150,
            hp_regen : 4,
        },
        tank : true,
        support : true,
        bruiser : true,
        passive_name : 'Undaunted',
        passive_description : `Reduces all sources of incoming champion damage by 15(3.75 against damage over time abilities).`,
        passive2_name : 'Legendary',
        passive2_description : 'This item counts as a Legendary item.'
    },

    guardians_orb : {
        starter : true,
        name : "Guardian's Orb",
        id : 3112,
        price : 950,
        stats : {
            ap : 40,
            hp : 150,
        },
        mage : true,
        support : true,
        passive_name : 'Recovery',
        passive_description : `Restore 10 mana every 5 seconds. Manaless champions restore 15 health instead.`,
        passive2_name : 'Legendary',
        passive2_description : 'This item counts as a Legendary item.'
    },

    boot : {
        boot : true,
        name : 'Boots',
        id : 1001,
        price : 300,
        stats : {
            ms : 25,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        mage : true,
        tank : true,
        support : true,
        builds_into : ['boots_of_swiftness', 'ionian_boots_of_lucidity', 'mobility_boots', 'berserkers_greaves', 'sorcerers_shoes', 'plated_steelcaps', 'mercurys_treads'],
    },

    boots_of_swiftness : {
        boot : true,
        name : 'Boots of Swiftness',
        id : 3009,
        price : 900,
        stats : {
            ms : 60,
            '%slow_resist' : 0.25,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        mage : true,
        tank : true,
        support : true,
    },

    ionian_boots_of_lucidity : {
        boot : true,
        name : 'Ionian Boots of Lucidity',
        id : 3158,
        price : 950,
        stats : {
            haste : 20,
            ms : 45,
            summoner_spell_haste : 12,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        mage : true,
        tank : true,
        support : true,
    },

    mobility_boots : {
        boot : true,
        name : 'Mobility Boots',
        id : 3117,
        price : 1000,
        stats : {
            ms : 115,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        mage : true,
        tank : true,
        support : true,
        item_inherent : `Reduces movement speed by 90 for 5 seconds while you are in combat. This duration can refresh while staying in combat.`,
    },

    berserkers_greaves : {
        boot : true,
        name : "Berserker's Greaves",
        id : 3006,
        price : 1100,
        stats : {
           '%as': 0.35,
            ms : 45,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        mage : true,
        tank : true,
        support : true,
    },

    sorcerers_shoes : {
        boot : true,
        name : "Sorcerer's Shoes",
        id : 3020,
        price : 1100,
        stats : {
            magic_pen : 18,
            ms : 45,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        mage : true,
        tank : true,
        support : true,
    },

    plated_steelcaps : {
        boot : true,
        name : 'Plated Steelcaps',
        id : 3047,
        price : 1100,
        stats : {
            armor : 20,
            ms : 45,
        },
        bruiser : true,
        marksman : true,
        assasin : true,
        mage : true,
        tank : true,
        support : true,
        item_inherent : `Reduces all incoming damage from basic attacks by 12%.`,
    },

    mercurys_treads : {
        boot : true,
        name : "Mercury's Treads",
        id : 3111,
        price : 1100,
        stats : {
            mr : 25,
            ms : 45,
            '%tenacity' : 0.30,
        },
        
    },

    corrupting_potion : {
        consumable : true,
        name : 'Corrupting Potion',
        id : 2033,
        price : 500,
        stats : {},
        builds_from : ['refillable_potion'],
        item_inherent : `Consumes a charge to regenerate 4.166 health and 3.125 mana every 0.5 seconds over 12 seconds, for a total of
                         100 health and 75 mana. During this time, basic attacks and damaging abilities burn enemies dealing 15 bonus magic
                         damage over 3 seconds, increased to 20 while the user cannot regenarte mana. Bonus damage is halved if applied by
                         area of effect or damage over time. Hold 3 charges that refill upon visiting the shop.`,
    },

    elixir_of_iron : {
        consumable : true,
        name : 'Elixir of Iron',
        id : 2138,
        price : 500,
        stats : {},
        item_inherent : `Consumes to grant 300 bonus health, 25% tenacity and 15% increased size for 180 seconds. While active moving leaves behind
                         a path briefly that grants 15% bonus movement speed to allied champions within. Can be used while dead.
                         Limited to 1 Elixir at a time. Requires level 9 to purchase.`,
    },

    elixir_of_sorcery : {
        consumable : true,
        name : 'Elixir of Sorcery',
        id : 2139,
        price : 500,
        stats : {},
        item_inherent : `Consumes to grant 50 ability power and 15 bonus mana regeneration for 180 seconds. While active, going in combat by affecting
                         enemy champions or turrets deals 25 bonus true damage (5 seconds cooldown on each champion). Can be used while dead.
                         Limited to 1 Elixir at a time. Requires level 9 to purchase.`,
    },

    elixir_of_wrath : {
        consumable : true,
        name : 'Elixir of Wrath',
        id : 2140,
        price : 500,
        stats : {},
        item_inherent : `Consumes to grant 30 bonus attack damage and heals for 12% of physical damage dealt to champions for 180 seconds. The heal
                         is reduced to 33% effectiviness for area damage. Can be used while dead. Limited to 1 Elixir at a time.
                         Requires level 9 to purchased.`,
    },

    health_potion : {
        consumable : true,
        name : 'Health Potion',
        id : 2003,
        price : 50,
        stats : {},
        item_inherent : `Consumes to regenerate 4 health every 0.5 seconds over 15 seconds, restoring a total of 120 health.`,
    },

    refillable_potion : {
        consumable : true,
        name : 'Refillable Potion',
        id : 2031,
        price : 150,
        stats : {},
        item_inherent : `Consumes a charge to regenerate 4.166 health every 0.5 seconds over 12 seconds, restoring a total of 100 health.
                         Holds 2 charges that refills upong visiting the shop.`,
    },
}