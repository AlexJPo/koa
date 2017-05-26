{
	row: [
		[
			{
				name: 'Precise Weaponry I',
				type: '[Weapon Attacks]',
				desc: 'Unlocks Charge special attacks for Daggers and Faeblades. Daggers: Shadow Strike - Hold and release the Daggers to begin a dashing combo that can be chained up to 5 times. Faeblade: Twisted Claw - Hold and release the Faeblades attack to spiral through your enemies.',
				req: false,
				req1: '',
				req2: '',
				reqText: '',
				descAdv: [
					'Unlocks Charge special attacks for Daggers and Faeblades. Shadow Strike - Hold and release the Daggers to begin a dashing combo that can be chained up to 5 times. Twisted Claw - Hold and release the Faeblades attack to spiral through your enemies.',
					'Shadow Strike and Twisted Claw apply an additional damage over time effect.',
					'Shadow Strike and Twisted Claw generate extra Fate.'
				],
				maxLevel: 3,
				currentlevel: 0,
				reqPoint: 0
			},
			{
				name: 'Dagger Mastery',
				type: '[Passive]',
				desc: 'Your prowess with Daggers lets you get the most out of every cut and thrust. Adds Physical Damage to Daggers and an overall Daggers damage boost.',
				req: false,
				req1: '',
				req2: '',
				reqText: '',
				descAdv: [
					'Physical Damage with Daggers: +2, Bonus Damage with Daggers: +5%',
					'Physical Damage with Daggers: +3, Bonus Damage with Daggers: +10%',
					'Physical Damage with Daggers: +4, Bonus Damage with Daggers: +15%',
					'Physical Damage with Daggers: +6, Bonus Damage with Daggers: +20%',
					'Physical Damage with Daggers: +8, Bonus Damage with Daggers: +25%',
					'Physical Damage with Daggers: +10, Bonus Damage with Daggers: +30%'
				],
				maxLevel: 6,
				currentlevel: 0,
				reqPoint: 0
			},
			{
				name: 'Longbow Mastery',
				type: '[Passive]',
				desc: 'Your skill at archery grants you a large bonus to damage while using a Longbow and increases the number of arrows that can be fired before reloading your quiver. Adds Physical Damage to Longbows and an overall Longbow damage boost. Increases the number of arrows in your quiver. Unlocking this ability increases the size of your quiver by one.',
				req: false,
				req1: '',
				req2: '',
				reqText: '',
				descAdv: [
					'Physical Damage with Longbows: +2, Bonus Damage with Longbows: +5%',
					'Physical Damage with Longbows: +3, Bonus Damage with Longbows: +10%',
					'Physical Damage with Longbows: +4, Bonus Damage with Longbows: +15%',
					'Physical Damage with Longbows: +5, Bonus Damage with Longbows: +20%',
					'Physical Damage with Longbows: +6, Bonus Damage with Longbows: +25%',
					'Physical Damage with Longbows: +7, Bonus Damage with Longbows: +30%'
				],
				maxLevel: 6,
				currentlevel: 0,
				reqPoint: 0
			},
			{
				name: 'Shadow Flare',
				type: '[Active]',
				desc: 'Weaving a burst of shadow magic to wound and stagger enemies in an arc before you. Quickly press the button again to throw a volley of shadowy blades, dealing Pierce and Bleeding Damage.',
				req: false,
				req1: '',
				req2: '',
				reqText: '',
				descAdv: [
					'Attack 1 Range: 4 meters, Attack 1 Physical Damage: 3, Attack 1 Cost: 5 mana, Attack 2: 3 projectiles, Attack 2 Piercing Damage: 20, Attack 2 Bleeding Damage: 10 over 5s, Attack 2 Cost: 5 mana',
					'Attack 1 Range: 5 meters, Attack 1 Physical Damage: 5, Attack 1 Cost: 7 mana, Attack 2: 3 projectiles, Attack 2 Piercing Damage: 35, Attack 2 Bleeding Damage: 10 over 5s, Attack 2 Cost: 10 mana',
					'Attack 1 Range: 5 meters, Attack 1 Physical Damage: 8, Attack 1 Cost: 10 mana, Attack 2: 5 projectiles, Attack 2 Piercing Damage: 50, Attack 2 Bleeding Damage: 12 over 6s, Attack 2 Cost: 15 mana',
					'Attack 1 Range: 6 meters, Attack 1 Physical Damage: 12, Attack 1 Cost: 15 mana, Attack 2: 5 projectiles, Attack 2 Piercing Damage: 65, Attack 2 Bleeding Damage: 12 over 6s, Attack 2 Cost: 20 mana',
					'Attack 1 Range: 6 meters, Attack 1 Physical Damage: 17, Attack 1 Cost: 20 mana, Attack 2: 5 projectiles, Attack 2 Piercing Damage: 70, Attack 2 Bleeding Damage: 14 over 7s, Attack 2 Cost: 25 mana'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 0
			},
			{
				name: 'Assassin\'s Art',
				type: '[Passive]',
				desc: 'Your deadly grace allows you to deal tremendous amounts of damage from stealth. Unlocks new sneak attacks with Daggers or Faeblades that can instantly kill an unaware enemy if you deal enough damage. Also increases the damage of these sneak attacks and all critical strike damage dealt on unaware enemies while in stealth.',
				req: false,
				req1: '',
				req2: '',
				reqText: '',
				descAdv: [
					'Critical Damage when attacking from Stealth: +10%, Increased sneak attack damage: +0%',
					'Critical Damage when attacking from Stealth: +20%, Increased sneak attack damage: +30%',
					'Critical Damage when attacking from Stealth: +30%, Increased sneak attack damage: +60%',
					'Critical Damage when attacking from Stealth: +40%, Increased sneak attack damage: +90%',
					'Critical Damage when attacking from Stealth: +50%, Increased sneak attack damage: +120%',
					'Critical Damage when attacking from Stealth: +60%, Increased sneak attack damage: +150%'
				],
				maxLevel: 6,
				currentlevel: 0,
				reqPoint: 0
			}
		],
		[
			{
				name: 'Precise Weaponry II',
				type: '[Weapon Attacks]',
				desc: 'Unlocks Delayed special attacks for Daggers and Faeblades.',
				req: true,
				req1: 0,
				req2: 0,
				reqText: 'Requires 5 points in Finesse abilities, Requires Precise Weaponry I',
				descAdv: [
					'Crossfire - A delayed attack with the Daggers that stabs and slices. Timing the second attack perfectly guarantees a critical hit. Talon Strikes - A delayed attack with the Faeblades that launches your enemy into the air.',
					'Both Crossfire and Talon Strikes apply an additional damage over time effect.',
					'Both Crossfire and Talon Strikes generate extra Fate.'
				],
				maxLevel: 3,
				currentlevel: 0,
				reqPoint: 5
			},
			{
				name: 'Faeblade Mastery',
				type: '[Passive]',
				desc: 'Diligent practice has granted you mastery over the Faeblades, chief weapon of the Summer Court Fae. Adds Physical Damage to Faeblades and an overall Faeblade damage boost.',
				req: false,
				req1: 0,
				req2: 0,
				reqText: 'Requires 5 points in Finesse abilities, Requires Precise Weaponry I',
				descAdv: [
					'Physical Damage with Faeblades: +2, Bonus Damage with Faeblades: +5%',
					'Physical Damage with Faeblades: +3, Bonus Damage with Faeblades: +10%',
					'Physical Damage with Faeblades: +4, Bonus Damage with Faeblades: +15%',
					'Physical Damage with Faeblades: +5, Bonus Damage with Faeblades: +20%',
					'Physical Damage with Faeblades: +6, Bonus Damage with Faeblades: +25%',
					'Physical Damage with Faeblades: +7, Bonus Damage with Faeblades: +30%'
				],
				maxLevel: 6,
				currentlevel: 0,
				reqPoint: 5
			},
			{
				name: 'Drawpower',
				type: '[Passive]',
				desc: 'With your incredible drawpower, each arrow you fire can penetrate even the thickest armor or carapace. Also Increases the size of your quiver. Unlocking this ability increases the size of your quiver by one.',
				req: true,
				req1: 0,
				req2: 2,
				reqText: 'Requires 5 points in Finesse abilities, Requires Longbow Mastery',
				descAdv: [
					'Piercing Damage with Longbows: +1, Bonus Piercing Damage with Longbows: +9%',
					'Piercing Damage with Longbows: +2, Bonus Piercing Damage with Longbows: +12%',
					'Piercing Damage with Longbows: +3, Bonus Piercing Damage with Longbows: +15%',
					'Piercing Damage with Longbows: +4, Bonus Piercing Damage with Longbows: +18%',
					'Piercing Damage with Longbows: +5, Bonus Piercing Damage with Longbows: +21%'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 5
			},
			{
				name: 'Envenomed Edge',
				type: '[Active - Sustained]',
				desc: 'The careful application of vile poisons to all your edged weapons and arrowheads allows you to weaken your opponents. That ability adds Poison Damage to all edged-weapon attacks. "Edged weapons" means: Daggers, Faeblades, Longswords, Greatswords, and Chakrams. That at all levels there is a 15% chance for the enemy to be poisoned for 5 seconds and the ability has a sustained mana cost of 25% of your maximum Mana.',
				req: false,
				req1: 0,
				req2: 0,
				reqText: 'Requires 5 points in Finesse abilities',
				descAdv: [
					'Poison Damage Dealt: 10',
					'Poison Damage Dealt: 20',
					'Poison Damage Dealt: 30',
					'Poison Damage Dealt: 40',
					'Poison Damage Dealt: 50',
					'Poison Damage Dealt: 60'
				],
				maxLevel: 6,
				currentlevel: 0,
				reqPoint: 5
			},
			{
				name: 'Frost Trap',
				type: '[Active]',
				desc: 'Plant a Frost Trap which causes Ice and Freezing damage to all nearby enemies when it explodes. A maximum of 4 traps can be placed at a time.',
				req: false,
				req1: 0,
				req2: 0,
				reqText: 'Requires 5 points in Finesse abilities',
				descAdv: [
					'Ice Damage: 30, Freezing Damage: 4 over 2 seconds, Mana cost: 20',
					'Ice Damage: 35, Freezing Damage: 6 over 3 seconds, Mana cost: 25',
					'Ice Damage: 40, Freezing Damage: 10 over 4 seconds, Mana cost: 30',
					'Ice Damage: 45, Freezing Damage: 12 over 5 seconds, Mana cost: 35'
				],
				maxLevel: 6,
				currentlevel: 0,
				reqPoint: 5
			}
		],
		[
			{
				name: 'Arrow Storm',
				type: '[Weapon Attacks]',
				desc: 'Your skill with the Longbow allows you to fire a volley of arrows into the sky, raining death down on your foes. Also Increases the size of your quiver. Unlocking this ability increases the size of your quiver by one.',
				req: true,
				req1: 1,
				req2: 2,
				reqText: 'Requires 20 points in Finesse abilities, Requires Longbow Mastery, Requires Drawpower',
				descAdv: [
					'Unlocks the Arrow Storm move.',
					'Increase its damage by 20% and 40%, respectively',
					'Increase its damage by 20% and 40%, respectively'
				],
				maxLevel: 3,
				currentlevel: 0,
				reqPoint: 20
			},
			{
				name: 'Inoculation',
				type: '[Passive]',
				desc: 'Your extensive experience with Poisons grants you heightened resistance to their effects.',
				req: true,
				req1: 1,
				req2: 3,
				reqText: 'Requires 20 points in Finesse abilities, Requires Envenomed Edge',
				descAdv: [
					'Increased Poison Resistance: +10%',
					'Increased Poison Resistance: +20%',
					'Increased Poison Resistance: +30%',
					'Increased Poison Resistance: +40%',
					'Increased Poison Resistance: +50%'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 20
			},
			{
				name: 'Icy Explosion',
				type: '[Upgrade]',
				desc: 'Your roguish ingenuity allows you to build Frost Traps deal additional damage and disorient your enemies.',
				req: true,
				req1: 1,
				req2: 4,
				reqText: 'Requires 20 points in Finesse abilities, Requires Frost Trap',
				descAdv: [
					'Increased Frost Trap damage: +10, Chance to Stun: 20%, Stun Duration (seconds): 3',
					'Increased Frost Trap damage: +15, Chance to Stun: 25%, Stun Duration (seconds): 3',
					'Increased Frost Trap damage: +20, Chance to Stun: 30%, Stun Duration (seconds): 4',
					'Increased Frost Trap damage: +25, Chance to Stun: 35%, Stun Duration (seconds): 4',
					'Increased Frost Trap damage: +30, Chance to Stun: 40%, Stun Duration (seconds): 5'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 20
			},
			{
				name: 'Lunge',
				type: '[Active]',
				desc: 'Lunge past your foes with preternatural speed to attack them from behind. The initial cast puts the player directly behind the target; the player then must press the attack button to actually strike.',
				req: false,
				req1: 0,
				req2: 0,
				reqText: 'Requires 20 points in Finesse abilities',
				descAdv: [
					'Damag: 40, Mana cost: 40',
					'Damag: 55, Mana cost: 45',
					'Damag: 70, Mana cost: 50',
					'Damag: 85, Mana cost: 55',
					'Damag: 100, Mana cost: 60'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 20
			}
		],
		[
			{
				name: 'Precise Weaponry III',
				type: '[Weapon Attacks]',
				desc: 'Unlocks special attacks from Dodge for Daggers and Faeblades.',
				req: true,
				req1: 1,
				req2: 0,
				reqText: 'Requires 35 points in Finesse abilities, Requires Precise Weaponry II',
				descAdv: [
					'Cross Slash - Attack with the Daggers while dodging to perform a launching attack. Cyclone - Attack with the Faeblades while dodging to perform a spinning leap attack.',
					'Both Cross Slash and Cyclone apply an additional damage over time effect.',
					'Both Cross Slash and Cyclone generate extra Fate.'
				],
				maxLevel: 3,
				currentlevel: 0,
				reqPoint: 35
			},
			{
				name: 'Smoke Bomb',
				type: '[Active]',
				desc: 'Throw down a smokescreen to stun enemies and blind them to your presence for a short duration. When activating this skill, the character becomes invisible for 6 seconds. The duration of the invisibility does not increase when leveling up. However, the stun duration of enemies affected does increase with each of the four levels of this ability. The invisibility acts as a faux stealth, as such you can quickly sneak behind and attack as if from stealth. This can mean that the smoke bomb is a free assassination on one target.',
				req: false,
				req1: 0,
				req2: 0,
				reqText: 'Requires 35 points in Finesse abilities',
				descAdv: [
					'Damage: 7, Stun Duration: 2, Mana Cost: 40',
					'Damage: 10, Stun Duration: 3, Mana Cost: 45',
					'Damage: 14, Stun Duration: 4, Mana Cost: 50',
					'Damage: 19, Stun Duration: 5, Mana Cost: 55'
				],
				maxLevel: 4,
				currentlevel: 0,
				reqPoint: 35
			},
			{
				name: 'Barbed Arrows',
				type: '[Passive]',
				desc: 'By Affixing small barbs to your arrows, each Longbow shot has a chance to deal heavy Bleeding Damage to your foes. Also Increases the size of your quiver. Unlocking this ability increases the size of your quiver by one.',
				req: true,
				req1: 2,
				req2: 0,
				reqText: 'Requires 35 points in Finesse abilities, Requires Longbow Mastery, Requires Drawpower, Requires Arrow Storm',
				descAdv: [
					'Chance to cause Bleeding Damage: 10%, Bleeding Damage inflicted over 5 seconds: 80',
					'Chance to cause Bleeding Damage: 12%, Bleeding Damage inflicted over 5 seconds: 90',
					'Chance to cause Bleeding Damage: 14%, Bleeding Damage inflicted over 5 seconds: 100',
					'Chance to cause Bleeding Damage: 17%, Bleeding Damage inflicted over 5 seconds: 110',
					'Chance to cause Bleeding Damage: 20%, Bleeding Damage inflicted over 5 seconds: 120'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 35
			},
			{
				name: 'Enduring Agony',
				type: '[Passive]',
				desc: 'Secret techniques enable you to extend the duration of all you Poison and Bleeding attacks. Also increases Shadow Flare damage. Enduring Agony does not increase the damage per second of bleeding and poison abilities, but it does increase their duration, which effectively increases their damage by extending the duration of the effect.',
				req: true,
				req1: 0,
				req2: 3,
				reqText: 'Requires 35 points in Finesse abilities, Requires Shadow Flare',
				descAdv: [
					'Bleeding and Poison Damage Increase: +20%, Shadow Flare bonus damage: +10%',
					'Bleeding and Poison Damage Increase: +30%, Shadow Flare bonus damage: +20%',
					'Bleeding and Poison Damage Increase: +40%, Shadow Flare bonus damage: +30%',
					'Bleeding and Poison Damage Increase: +55%, Shadow Flare bonus damage: +40%',
					'Bleeding and Poison Damage Increase: +70%, Shadow Flare bonus damage: +50%'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 35
			},
			{
				name: 'Blade Honing',
				type: '[Active - Sustained]',
				desc: 'The razor sharp blades of your weapons cut into your foes with ease. While this Ability is active, Critical Hit Damage for Longswords, Daggers, Faeblades, and Greatswords is substantially increased. This ability has a sustained mana cost equal to 15% of your maximum Mana.',
				req: false,
				req1: 0,
				req2: 0,
				reqText: 'Requires 35 points in Finesse abilities',
				descAdv: [
					'Increased Critical Hit damage: +10%',
					'Increased Critical Hit damage: +15%',
					'Increased Critical Hit damage: +20%',
					'Increased Critical Hit damage: +25%',
					'Increased Critical Hit damage: +30%'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 35
			}
		],
		[
			{
				name: 'Precise Weaponry IV',
				type: '[Weapon Attacks]',
				desc: 'Unlocks special attacks from Parry for Daggers and Faeblades.',
				req: true,
				req1: 3,
				req2: 0,
				reqText: 'Requires 50 points in Finesse abilities, Requires Precise Weaponry III',
				descAdv: [
					'Punishment - After a timed Parry, attack with the Daggers to perform a series of rapid strikes. Savage Wing - After a timed Parry, attack with the Faeblades to perform a spinning jump attack.',
					'Both Punishment and Savage Wing apply an additional damage over time effect.',
					'Both Punishment and Savage Wing generate extra Fate.'
				],
				maxLevel: 3,
				currentlevel: 0,
				reqPoint: 50
			},
			{
				name: 'Poison Bomb',
				type: '[Weapon Attacks]',
				desc: 'Further tinkering has enabled you to add a deadly Poison cloud to the effects of your Smoke Bomb.',
				req: true,
				req1: 3,
				req2: 1,
				reqText: 'Requires 50 points in Finesse abilities, Requires Smoke Bomb',
				descAdv: [
					'Poison Damage over 5 seconds: 30',
					'Poison Damage over 5 seconds: 60',
					'Poison Damage over 5 seconds: 90',
					'Poison Damage over 5 seconds: 120'
				],
				maxLevel: 4,
				currentlevel: 0,
				reqPoint: 50
			},
			{
				name: 'Scattershot',
				type: '[Weapon Attacks]',
				desc: 'Your skill with Longbows enables you to fire multiple arrows simultaneously. Also Increases the size of your quiver. Unlocking this ability increases the size of your quiver by one.',
				req: true,
				req1: 3,
				req2: 2,
				reqText: 'Requires 50 points in Finesse abilities, Requires Longbow Mastery, Requires Drawpower, Requires Arrow Storm, Requires Barbed Arrows',
				descAdv: [
					'Charged Arrows Fired: 1, Uncharged Arrows Fired: 2',
					'Charged Arrows Fired: 3, Uncharged Arrows Fired: 0',
					'Charged Arrows Fired: 3, Uncharged Arrows Fired: 2',
					'Charged Arrows Fired: 5, Uncharged Arrows Fired: 0',
					'Charged Arrows Fired: 5, Uncharged Arrows Fired: 2',
					'Charged Arrows Fired: 7, Uncharged Arrows Fired: 0'
				],
				maxLevel: 6,
				currentlevel: 0,
				reqPoint: 50
			},
			{
				name: 'Mysterious Toxins',
				type: '[Passive]',
				desc: 'The skilled mixing of obscure toxins allows your Poison attacks to propagate to other enemies. Despite the its description, Mysterious Toxins does not cause Poison Damage to "propagate" as Shocking Damage does. Instead, poisoned enemies have a chance to create a poison cloud when they die, which will deal poison damage to other enemies.',
				req: true,
				req1: 2,
				req2: 1,
				reqText: 'Requires 50 points in Finesse abilities, Requires Envenomed Edge, Requires Inoculation',
				descAdv: [
					'Chance to create poison cloud: 10%, poison cloud damage: 150',
					'Chance to create poison cloud: 20%, poison cloud damage: 175',
					'Chance to create poison cloud: 30%, poison cloud damage: 200',
					'Chance to create poison cloud: 40%, poison cloud damage: 225',
					'Chance to create poison cloud: 50%, poison cloud damage: 250'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 50
			}
		],
		[
			{
				name: 'Gambit',
				type: '[Active]',
				desc: 'With an acrobatic leap, you distribute explosives across the battlefield that damage and launch enemies. Each level drops 7 traps for 80 mana, or the button may be held down to drop 18 traps for 120 mana. The traps drop in a 5 meter radius.',
				req: false,
				req1: 0,
				req2: 0,
				reqText: 'Requires 70 points in Finesse abilities, Requires Envenomed Edge, Requires Inoculation',
				descAdv: [
					'Damage per Trap: 80',
					'Damage per Trap: 90',
					'Damage per Trap: 100',
					'Damage per Trap: 110',
					'Damage per Trap: 120',
					'Damage per Trap: 130'
				],                    
				maxLevel: 6,
				currentlevel: 0,
				reqPoint: 70
			},
			{
				name: 'Paralytic Poisons',
				type: '[Passive]',
				desc: 'You have discovered long hidden secrets of poisoncraft, enabling your poison attacks to temporarily stun your opponents. Stun duration is 5 seconds.',
				req: true,
				req1: 4,
				req2: 3,
				reqText: 'Requires 70 points in Finesse abilities, Requires Envenomed Edge, Requires Inoculation, Requires Mysterious Toxins',
				descAdv: [
					'Chance to stun: 2%',
					'Chance to stun: 4%',
					'Chance to stun: 6%',
					'Chance to stun: 8%'
				],                    
				maxLevel: 4,
				currentlevel: 0,
				reqPoint: 70
			},
			{
				name: 'Execution',
				type: '[Passive]',
				desc: 'With anatomical precision, you deal out higher damage to bleeding foes.',
				req: false,
				req1: 0,
				req2: 0,
				reqText: 'Requires 70 points in Finesse abilities, Requires Envenomed Edge, Requires Inoculation, Requires Mysterious Toxins',
				descAdv: [
					'Chance for bonus damage: 10%, Bonus damage: 100',
					'Chance for bonus damage: 11%, Bonus damage: 120',
					'Chance for bonus damage: 12%, Bonus damage: 140',
					'Chance for bonus damage: 13%, Bonus damage: 160',
					'Chance for bonus damage: 14%, Bonus damage: 180'
				],
				maxLevel: 5,
				currentlevel: 0,
				reqPoint: 70
			}
		]
	]
}