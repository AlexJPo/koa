{
	row: [
		[
			{
				name: 'Arcane Weaponry I',
				type: '[Weapon Attacks]',
				desc: 'Unlocks Charge special attacks for the Staff and Chakrams.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: '',
				descAdv: [
					'Unlocks Charge special attacks for the Staff and Chakrams and decreases the cost of Sceptre attacks from 6% of your Mana to 5%. Charged Entropy - Charges the Staff before slamming it into the ground and releasing a radial area of effect attack, can be quick charged for a point blank, held for (1 flash) for short range or held (2 flashes) for longer range and more damage. Maelstrom - Charges the Chakrams then releases them to orbit the character in an increasing radius area of effect attack, can be quick charged for a very short, single chakram throw, held for (1 flash) for short range or held (2 flashes) for longer range and more damage.',
					'Charged Entropy and Maelstrom apply an additional damage over time effect.',
					'Charged Entropy and Maelstrom generate extra Fate'
				],
				maxLevel: 3,
				currentLevel: 0,
				requiresPoint: 0
			},
			{
				name: 'Sceptre Mastery',
				type: '[Passive]',
				desc: 'Long hours of study and practice enable you to wield Sceptres very effectively. Adds Physical Damage to Sceptres and an overall Sceptre damage boost.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: '',
				descAdv: [
					'Physical Damage with Sceptres: +2, Bonus Damage with Sceptres: +5%',
					'Physical Damage with Sceptres: +3, Bonus Damage with Sceptres: +10%',
					'Physical Damage with Sceptres: +4, Bonus Damage with Sceptres: +15%',
					'Physical Damage with Sceptres: +6, Bonus Damage with Sceptres: +20%',
					'Physical Damage with Sceptres: +8, Bonus Damage with Sceptres: +25%',
					'Physical Damage with Sceptres: +10, Bonus Damage with Sceptres: +30%'
				],
				maxLevel: 6,
				currentLevel: 0,
				requiresPoint: 0
			},
			{
				name: 'Storm Bolt',
				type: '[Active]',
				desc: 'Launch a burst of electrical energy which deals Lightning and Shocking Damage. At higher levels, it can Stun enemies. At level 4, Storm Bolt gains a Shocking Damage AoE on impact.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: '',
				descAdv: [
					'Lightning Damage: 40, Chance to Stun: 0%, Stun Duration: 0 sec, Area Shocking Damage: 0, Mana Cost: 20',
					'Lightning Damage: 50, Chance to Stun: 0%, Stun Duration: 0 sec, Area Shocking Damage: 0, Mana Cost: 23',
					'Lightning Damage: 60, Chance to Stun: 20%, Stun Duration: 3 sec, Area Shocking Damage: 0, Mana Cost: 26',
					'Lightning Damage: 70, Chance to Stun: 25%, Stun Duration: 4 sec, Area Shocking Damage: 12, Mana Cost: 29',
					'Lightning Damage: 80, Chance to Stun: 30%, Stun Duration: 4 sec, Area Shocking Damage: 15, Mana Cost: 32',
					'Lightning Damage: 90, Chance to Stun: 35%, Stun Duration: 4 sec, Area Shocking Damage: 18, Mana Cost: 35'
				],
				maxLevel: 6,
				currentLevel: 0,
				requiresPoint: 0
			}
		],
		[
			{
				name: 'Arcane Weaponry II',
				type: '[Weapon Attacks]',
				desc: '',
				reqAbility: true,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: 'Requires 5 points in Sorcery abilities, Requires Arcane Weaponry I',
				descAdv: [
					'Unlocks special attacks from Block for the Staff and Sceptre and decreases the cost of Sceptre attacks from 5% of your Mana to 4%. Mage\'s Vortex - Attack with your staff while holding Block to summon a small tornado at the feet of enemies in front of you while you take a spinning step backwards. Warding Blast - Press Attack while holding Block to perform a Sceptre blast that launches an enemy followed by a short ranged "shielding" attack while stepping forward slightly. Needs to be channeled to launch enemies up and away, otherwise it simply damages.',
					'Mage\'s Vortex and Warding Blast apply an additional damage over time effect.',
					'Mage\'s Vortex and Warding Blast generate extra Fate.'
				],
				maxLevel: 3,
				currentLevel: 0,
				requiresPoint: 5
			},
			{
				name: 'Chakram Mastery',
				type: '[Passive]',
				desc: 'Your unique mix of arcane and martial talent enables you to deal incredible damage with Chakrams. Adds Physical Damage to Chakrams and an overall Chakram damage boost.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: 'Requires 5 points in Sorcery abilities',
				descAdv: [
					'Physical Damage with Chakrams: +2, Bonus Damage with Chakrams: +5%',
					'Physical Damage with Chakrams: +3, Bonus Damage with Chakrams: +10%',
					'Physical Damage with Chakrams: +4, Bonus Damage with Chakrams: +15%',
					'Physical Damage with Chakrams: +6, Bonus Damage with Chakrams: +20%',
					'Physical Damage with Chakrams: +8, Bonus Damage with Chakrams: +25%',
					'Physical Damage with Chakrams: +10, Bonus Damage with Chakrams: +30%'
				],
				maxLevel: 6,
				currentLevel: 0,
				requiresPoint: 5
			},
			{
				name: 'Sphere of Protection',
				type: '[Active - Sustained]',
				desc: 'While active, Sphere of Protection creates a magical barrier that blocks a percentage of damage from each incoming attack. Sustained Cost: 30% Mana',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: 'Requires 5 points in Sorcery abilities',
				descAdv: [
					'Damage Resistance: +5%',
					'Damage Resistance: +6%',
					'Damage Resistance: +7%',
					'Damage Resistance: +8%',
					'Damage Resistance: +10%',
					'Damage Resistance: +12%'
				],
				maxLevel: 6,
				currentLevel: 0,
				requiresPoint: 5
			},
			{
				name: 'Mark of Flame',
				type: '[Active]',
				desc: 'Tap the button to tag your targets with a magical Mark. Press and hold the button to detonate all Marked enemies with a fiery explosion. When finished marking enemies, the mark causes a fiery explosion. The explosion will hit any enemies nearby. The ability Smolder upgrades Mark of Flame by increasing its damage.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: 'Requires 5 points in Sorcery abilities',
				descAdv: [
					'Maximum Targets Marked: 3, Fire Damage on Execution: 100, Burning Damage on Execution: 10, Execute Mana Cost: 30',
					'Maximum Targets Marked: 3, Fire Damage on Execution: 130, Burning Damage on Execution: 15, Execute Mana Cost: 33',
					'Maximum Targets Marked: 4, Fire Damage on Execution: 160, Burning Damage on Execution: 20, Execute Mana Cost: 36',
					'Maximum Targets Marked: 4, Fire Damage on Execution: 190, Burning Damage on Execution: 25, Execute Mana Cost: 39',
					'Maximum Targets Marked: 5, Fire Damage on Execution: 220, Burning Damage on Execution: 30, Execute Mana Cost: 42'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 5
			},
			{
				name: 'Conservative Casting',
				type: '[Passive]',
				desc: 'Having unlocked countless arcane secrets, you are able to power your Abilities with far less Mana.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: 'Requires 5 points in Sorcery abilities',
				descAdv: [
					'Mana Cost Reduction: 10%',
					'Mana Cost Reduction: 13%',
					'Mana Cost Reduction: 16%',
					'Mana Cost Reduction: 19%',
					'Mana Cost Reduction: 22%'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 5
			}
		],
		[
			{
				name: 'Summon Faer Gorta',
				type: '[Active]',
				desc: 'Use magic to rapidly construct a Faer Gorta who will fight by your side. Summon last 120 seconds.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: 'Requires 20 points in Sorcery abilities',
				descAdv: [
					'Health and Damage Bonus: +0%, Mana Cost: 65',
					'Health and Damage Bonus: +10%, Mana Cost: 60',
					'Health and Damage Bonus: +25%, Mana Cost: 65',
					'Health and Damage Bonus: +50%, Mana Cost: 70',
					'Health and Damage Bonus: +75%, Mana Cost: 75',
					'Health and Damage Bonus: +100%, Mana Cost: 80'
				],
				maxLevel: 6,
				currentLevel: 0,
				requiresPoint: 20
			},
			{
				name: 'Healing Surge',
				type: '[Active]',
				desc: 'Your magic knits together flesh and bone, healing your wounds. Holding the button longer restores more health. Healing Surge always costs 30% of your maximum Mana to cast, and up to 20% of your maximum Mana to sustain the charge. All levels also restore 20% of your maximum Health immediately upon cast and 10% on finishing the charge.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: 'Requires 20 points in Sorcery abilities',
				descAdv: [
					'Health restored while charging: 10%',
					'Health restored while charging: 20%',
					'Health restored while charging: 30%',
					'Health restored while charging: 40%',
					'Health restored while charging: 50%'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 20
			},
			{
				name: 'Chain Lightning',
				type: '[Passive]',
				desc: 'Increases the Storm Bolt damage, and causes Shocking Damage to bounce between your enemies more frequently.',
				reqAbility: true,
				reqAbility1: 0,
				reqAbility2: 2,
				requires: 'Requires 20 points in Sorcery abilities, Requires Storm Bolt',
				descAdv: [
					'Increased chance to propagate: 10%, Increased Storm Bolt damage: +10%',
					'Increased chance to propagate: 20%, Increased Storm Bolt damage: +20%',
					'Increased chance to propagate: 30%, Increased Storm Bolt damage: +30%',
					'Increased chance to propagate: 40%, Increased Storm Bolt damage: +40%',
					'Increased chance to propagate: 50%, Increased Storm Bolt damage: +50%'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 20
			},
			{
				name: 'Ice Barrage',
				type: '[Active]',
				desc: 'Sends a scattered blast of ice shards into the air to crash down upon your foes, dealing Ice and Freezing Damage. Ice Barrage causes both Ice and Freezing Damage. Frostshackle and Winter\'s Embrace upgrade this ability.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: 'Requires 20 points in Sorcery abilities, Requires Storm Bolt',
				descAdv: [
					'Projectiles: 5, Ice Damage per projectile: 15, Freezing Damage per projectile: 3, Mana Cost: 25',
					'Projectiles: 5, Ice Damage per projectile: 18, Freezing Damage per projectile: 4, Mana Cost: 30',
					'Projectiles: 7, Ice Damage per projectile: 21, Freezing Damage per projectile: 5, Mana Cost: 35',
					'Projectiles: 7, Ice Damage per projectile: 24, Freezing Damage per projectile: 5, Mana Cost: 40',
					'Projectiles: 9, Ice Damage per projectile: 27, Freezing Damage per projectile: 5, Mana Cost: 45'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 20
			}
		],
		[
			{
				name: 'Arcane Weaponry III',
				type: '[Weapon Attacks]',
				desc: 'Sends a scattered blast of ice shards into the air to crash down upon your foes, dealing Ice and Freezing Damage. Ice Barrage causes both Ice and Freezing Damage. Frostshackle and Winter\'s Embrace upgrade this ability.',
				reqAbility: true,
				reqAbility1: 1,
				reqAbility2: 0,
				requires: 'Requires 35 points in Sorcery abilities, Requires Arcane Weaponry II',
				descAdv: [
					'Unlocks Delayed special attacks for the Staff and Chakrams and decreases the cost of Sceptre attacks from 4% of your Mana to 3%. Arcane Fury - Press Attack -> Pause -> Attack to perform a 2-part attack with a staff that launches enemies into the air and away from you. Elemental Escape - Press Attack -> Pause Attack to attack an enemy with both Chakrams then launch them into the ground at the enemy\'s feet, blasting them backwards while you jump away.',
					'Arcane Fury and Elemental Escape apply an additional damage over time effect.',
					'Arcane Fury and Elemental Escape generate extra Fate.'
				],
				maxLevel: 3,
				currentLevel: 0,
				requiresPoint: 35
			},
			{
				name: 'Transference',
				type: '[Upgrade]',
				desc: 'Causes the attacks of a summoned Faer Gorta to siphon health from enemies and return it to you.',
				reqAbility: true,
				reqAbility1: 2,
				reqAbility2: 0,
				requires: 'Requires 35 points in Sorcery abilities, Requires Summon Faer Gorta',
				descAdv: [
					'Chance to Siphon Health: 25%',
					'Chance to Siphon Health: 35%',
					'Chance to Siphon Health: 45%',
					'Chance to Siphon Health: 55%',
					'Chance to Siphon Health: 70%'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 35
			},
			{
				name: 'Sphere of Reprisal',
				type: '[Upgrade]',
				desc: 'While Sphere of Protection is active, ethereal orbs are created around you which deal damage to enemies they hit. These small orbs will respawn a short time after hitting enemies.',
				reqAbility: true,
				reqAbility1: 1,
				reqAbility2: 2,
				requires: 'Requires 35 points in Sorcery abilities, Requires Sphere of Protection',
				descAdv: [
					'Physical Damage per projectile: 50, Projectiles: 2',
					'Physical Damage per projectile: 55, Projectiles: 2',
					'Physical Damage per projectile: 60, Projectiles: 2',
					'Physical Damage per projectile: 65, Projectiles: 4',
					'Physical Damage per projectile: 70, Projectiles: 4'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 35
			},
			{
				name: 'Smolder',
				type: '[Passive]',
				desc: 'Your mastery over the power of fire allows you to increase the effectiveness of all Burning effects, as well as the damage done by Mark of Flame. It also increases damage from Mark of Flame.',
				reqAbility: true,
				reqAbility1: 1,
				reqAbility2: 3,
				requires: 'Requires 35 points in Sorcery abilities, Requires Mark of Flame',
				descAdv: [
					'Burning Damage increase: +20%, Mark of Flame bonus damage: +10%',
					'Burning Damage increase: +40%, Mark of Flame bonus damage: +20%',
					'Burning Damage increase: +60%, Mark of Flame bonus damage: +30%',
					'Burning Damage increase: +80%, Mark of Flame bonus damage: +40%',
					'Burning Damage increase: +100%, Mark of Flame bonus damage: +50%'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 35
			},
			{
				name: 'Frostshackle',
				type: '[Passive]',
				desc: 'Your knowledge of eldritch frost allows you to extend the duration of all Freezing effects, slowing enemies down for a longer time. Also increases the damage caused by Ice Barrage.',
				reqAbility: true,
				reqAbility1: 2,
				reqAbility2: 3,
				requires: 'Requires 35 points in Sorcery abilities, Requires Ice Barrage',
				descAdv: [
					'Increased Freezing duration: 25%, Increased Ice Barrage damage: +10%',
					'Increased Freezing duration: 50%, Increased Ice Barrage damage: +20%',
					'Increased Freezing duration: 75%, Increased Ice Barrage damage: +30%',
					'Increased Freezing duration: 100%, Increased Ice Barrage damage: +40%',
					'Increased Freezing duration: 150%, Increased Ice Barrage damage: +50%'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 35
			}
		],
		[
			{
				name: 'Masterful Construction',
				type: '[Upgrade]',
				desc: 'Your summoned Faer Gorta swings for more hits in its attack chain, and gains a chance to critical.',
				reqAbility: true,
				reqAbility1: 3,
				reqAbility2: 1,
				requires: 'Requires 50 points in Sorcery abilities, Requires Summon Faer Gorta, Requires Transference',
				descAdv: [
					'Chance to Critical Hit: +7%, Chain attack hits: 3',
					'Chance to Critical Hit: +10%, Chain attack hits: 3',
					'Chance to Critical Hit: +13%, Chain attack hits: 5',
					'Chance to Critical Hit: +16%, Chain attack hits: 5',
					'Chance to Critical Hit: +19%, Chain attack hits: 7'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 50
			},
			{
				name: 'Elemental Rage',
				type: '[Active]',
				desc: 'Combine the mystic elements of Fire, Lightning, and Ice into a devastating chain of attacks. Lightning pulses with the first cast, dealing Lightning Damage and drawing enemies in. Fire torches enemies in the area on the second cast, dealing Fire Damage and moving you away from enemies. The third cast finishes with an icy explosion, dealing Ice Damage in the area and slowing enemies.',
				reqAbility: false,
				reqAbility1: 0,
				reqAbility2: 0,
				requires: 'Requires 50 points in Sorcery abilities',
				descAdv: [
					'Lightning Damage: 90, Lightning cast mana cost: 55, Fire Damage: 130, Fire cast mana cost: 55, Ice Damage: 100, Ice cast mana cost: 60',
					'Lightning Damage: 105, Lightning cast mana cost: 60, Fire Damage: 150, Fire cast mana cost: 60, Ice Damage: 110, Ice cast mana cost: 65',
					'Lightning Damage: 120, Lightning cast mana cost: 65, Fire Damage: 170, Fire cast mana cost: 65, Ice Damage: 125, Ice cast mana cost: 70',
					'Lightning Damage: 135, Lightning cast mana cost: 70, Fire Damage: 190, Fire cast mana cost: 70, Ice Damage: 145, Ice cast mana cost: 75',
					'Lightning Damage: 150, Lightning cast mana cost: 75, Fire Damage: 210, Fire cast mana cost: 75, Ice Damage: 170, Ice cast mana cost: 80'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 50
			},
			{
				name: 'Tempest',
				type: '[Upgrade]',
				desc: 'Hold the button for Storm Bolt to summon forth lightning from the heavens, smiting all nearby foes.',
				reqAbility: true,
				reqAbility1: 2,
				reqAbility2: 2,
				requires: 'Requires 50 points in Sorcery abilities, Requires Storm Bolt, Requires Chain Lightning',
				descAdv: [
					'Lightning Damage: 360, Shocking Damage: 30, Mana Cost: 135',
					'Lightning Damage: 400, Shocking Damage: 35, Mana Cost: 145',
					'Lightning Damage: 440, Shocking Damage: 40, Mana Cost: 155',
					'Lightning Damage: 480, Shocking Damage: 45, Mana Cost: 165',
					'Lightning Damage: 520, Shocking Damage: 50, Mana Cost: 175'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 50
			}
		],
		[
			{
				name: 'Sphere of Retribution',
				type: '[Upgrade]',
				desc: 'Sphere of Protection gains the power to fire off deadly ethereal splinters when enemies draw near. At level 2 enemies who draw close will be staggered, at level 4 enemies may be knocked down by the splinters, and there is a nearly guaranteed chance to knock down enemies at level 5 and higher.',
				reqAbility: true,
				reqAbility1: 3,
				reqAbility2: 2,
				requires: 'Requires 70 points in Sorcery abilities, Requires Sphere of Protection, Requires Sphere of Reprisal',
				descAdv: [
					'Physical Damage per projectile: 110',
					'Physical Damage per projectile: 120',
					'Physical Damage per projectile: 130',
					'Physical Damage per projectile: 140',
					'Physical Damage per projectile: 150'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 70
			},
			{
				name: 'Meteor',
				type: '[Active]',
				desc: 'Calls forth a meteor from the skies, dealing massive damage to the area before you.',
				reqAbility: true,
				reqAbility1: 3,
				reqAbility2: 3,
				requires: 'Requires 70 points in Sorcery abilities, Requires Mark of Flame, Requires Smolder',
				descAdv: [
					'Fire Damage: 500, Burning Damage: 75, Mana Cost: 250',
					'Fire Damage: 550, Burning Damage: 80, Mana Cost: 260',
					'Fire Damage: 600, Burning Damage: 85, Mana Cost: 270',
					'Fire Damage: 650, Burning Damage: 90, Mana Cost: 280',
					'Fire Damage: 700, Burning Damage: 95, Mana Cost: 290'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 70
			},
			{
				name: 'Winter's Embrace',
				type: '[Upgrade]',
				desc: 'Hold the button for Ice Barrage to launch a persistent cloud of ice shards which lasts for a duration. Enemies in the blizzard suffer periodic Ice, Piercing, and Freezing Damage.',
				reqAbility: true,
				reqAbility1: 3,
				reqAbility2: 3,
				requires: 'Requires 70 points in Sorcery abilities, Requires Ice Barrage, Requires Frostshackle',
				descAdv: [
					'Damage: 10 Ice Damage, 5 Piercing Damage, Duration: 15 seconds, Mana Cost: 180',
					'Damage: 15 Ice Damage, 10 Piercing Damage, Duration: 15 seconds, Mana Cost: 190',
					'Damage: 20 Ice Damage, 15 Piercing Damage, Duration: 15 seconds, Mana Cost: 200',
					'Damage: 25 Ice Damage, 20 Piercing Damage, Duration: 15 seconds, Mana Cost: 210',
					'Damage: 30 Ice Damage, 25 Piercing Damage, Duration: 15 seconds, Mana Cost: 220'
				],
				maxLevel: 5,
				currentLevel: 0,
				requiresPoint: 70
			}
		]
	]
}