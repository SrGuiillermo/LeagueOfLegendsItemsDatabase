# LeagueOfLegendsItemsDatabase
A simple .js League items database \
PATCH 13.23

This database contains all League of Legends items's stats, passives, actives and everything in a .js file. The items are written the following way:

```
Object name : {                               --> In-game name of the object
     type of object : true,                   --> Such as mythic, legendary, basic, etc. ornn for ornn's upgraded mythics
     name : str,                           --> The name of the object to display, capìtalized in string format
     id : int,                                 --> The item's ID, usefull to get the item's icon for example
     price : int,                           --> The item's total cost (not combined cost) in int format
     stats : {                                --> The item's stats in object format with the following stats' names
         ad : int,                            --> Attack Damage
         '%crit' : float,                     --> Critical strike chance in divided by 100
         '%as' : float,                       --> Attack Speed
         '%armor_pen' : float,                --> Percentage armor penetration divided by 100
         'lethality' : int,                   --> Lethality
         '%hspower' : float,                  --> Percentage of heal and shield power divided by 100
         ap : int,                            --> Ability Power
         mana : int,                          --> Mana
         magic_pen : int,                     --> Flat magic penetration
         '%magic_pen' : float,                --> Percentage magic penetration divided by 100
         hp : int,                            --> Health
         '%hp' : float,                       --> Percentage bonus total health divided by 100
         '%hp_regen' : float,                 --> Percentage base health regeneration divided by 100
         hp_regen : int,                      --> Base flat health regenaration per second such as doran's shield regen
         armor : int,                         --> Armor
         mr : int,                            --> Magic Resist
         haste : int,                         --> Ability Haste
         summoner_spell_haste : int,          --> Total summoner spell haste such as the ionian boots
         '%mana_regen' : float,               --> Percentage mana regeneration divided by 100
         '%ms' : float,                       --> Percentage move speed divided by 100
         ms : int,                            --> Base move speed such as the boots
         '%omnivamp' : float,                 --> Percentage omnivamp divided by 100
         '%life_steal' : float,               --> Percentage life steam divided by 100
         gold : float,                        --> Gold per second such as the support starter items
         '%tenacity' : float,                 --> Percentage tenacity divided by 100 such as mercury's treads
         '%slow_resist' : float,              --> Percentage slow resistance divided by 100 such as Boots of swiftness
         '%size' : float,                     --> Percentage bonus size divided by 100 such as heartsteel
         custom : str,                        --> Custom specific stats such as locket mythic bonus or moonstone mythic bonus
     },
     bundle_type : true,                      --> Bundle type of the item such as bruiser, marksman, assasin, mage, tank and support
     builds_into : array,                     --> The items that the item builds into as an array
     builds_from : array,                     --> The items that the item builds from as an array
     item_inherent : str,                     --> Inherent item's passive that has no name, such as Rod of ages stats gains or mobility boots move speed
     active_name : str,                       --> The name of the item's active
     active_description : str,                --> The description of the item's active
     active_cooldown : int,                   --> The item's active cooldown
     passive_name : str,                      --> The item's first passive name
     passive_description : str,               --> The item's first passive description
     passive_cooldown : int,                  --> The item's first passive cooldown
     passive2_name : str,                     --> The item's second passive name
     passive2_description : int,              --> The item's second passive description
     ...
     mythic_stats : {},                       --> Mythics stats bonuses for each legendary item, with the same format as de stats above
}
```
