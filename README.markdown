## CanvaSpace Game

This is a (very early) experiment for writing a game in JavaScript using canvases. Currently all that is implemented
is:

 * Game engine and sourcecode that is simple and easy to understand. (see game.html)
 * Basic game engine supports any number of ships, with one ship being controllable at a time.
 * Can switch between ships with keyboard button **E**.
 * Collision Detection of ships and projectiles.
 * Buggy Gravity Well
 * Buggy Ships Flying in formation AI

## ToDo and/or Ideas

I have many ideas for direction that this experiment could take to turn into a real game. Many are unrealistic or difficult. I have triaged my ideas here. Please feel free to have a stab at the code! 

### Doable
These are ideas that the current code base should support adding easily.

 
 * **Shield Strength and Hull Integrity** These are two health bars. The shield recharges but the hull does not.
 * **Subsystem Health** A ship has multiple subsystems These should be separately targetable and damageable zones.
  * _engines, life support, weapons, communications, navigation components, shield generators_
  * Attacking particular subsystems causes side effects. Engines reduces engine efficiency, causes power loss or stops the ship from thrusting.
  * Capital Ships will have to pilot strategically to avoid presenting attackers with vulnerable systems.
 * **Variety of Weapony** Implement an arsenal of balanced weapony with interesting effects.
  * _plasma balls, missiles, smart homing missiles, defence drones, static drones, mines, escort cables_
 * **Lateral Thrust** fighters should be able to dog fight due to the high thrust but it might be interesting to add lateral thrust so ships could move side to side without changing orientation. This could be limited.
 * **Ship Energy Management** A ship has a limited amount of power to distribute between engines, weapons and defences.
  * Pilots should be able to maintain this more carefully when necessary, such as in Freespace where one can reroute power to certain shields.
 * **Squadron Control** Ships should be able to fly in formation like a real fleet would. I have attempted this with the four scaled down fighter ships that follow the big fighter. The intention would be that you can order ships not currently in your control.
  * The ships should fly with the controlled ships as if they were flying altogether - keeping the same distance apart and trying to maintain the same acceleration.

### What Could Be

My intentions for the game are:

 * **Playable Ships** Individually controllable ships of different classes.
  * _fighters, bombers, frigates, capital ships, cargo/transport, destroyers_
  * Science Fiction Ship Classifications similar to Star Trek, Star Wars
  * Gameplay similar to Infantry Online Fleet and Star Control II
 * **Large Fleet Battles** 
  * The game should allow large fleet battles to happen on the screen so that you might see lots of ships on the screen, all firing, dodging and maneuvering.
 * **Battlefield Scaling** I would really like to capture the scale of a battlefield. A fighter ship is small compared to a bomber and compared to a capital ship.
  * A fighter should appear smaller to a captain of a capital ship. When you pilot a fighter vessel, the game environment should look much bigger than you too. This way you can maneuver around projectiles and other ships.
  * The intention is so that a capital ship will have difficulty firing at a well piloted fighter unless they were to get very close.
  * This could be implemented by 'zooming in' when you're playing as a fighter and zooming out when you're playing as a capital ship. The larger your ship, the further you zoom out.
  * A similar effect can be seen in Star Control II where the closer ships are to on another, the more zoomed the screen is.
 * **Destructible Elements** The game engine could be extended to add layers of ship design that have distinct hit zones. When suffering a certain amount of damage these could physically fall off and become separate game entities. They would hover in space for salvage operations.


### Awesome but Difficult or Outrageous Ideas

 * **Multiple Firing Positions** A capital ship rarely has a single weapon. It would be nice to change between fire control zones of a particular ship.
  * There may be short range lasers situated along the length of a capital ship and missile launch points at the middle. The player should be able to switch control of these in similar way of switching ships with **E**, perhaps with letter **Q**.
 * **Stable Orbits** planets should move through space slowly but surely. It should be possible for your ships to acquire stable orbits in planetary systems.
 * **Programmable Ships** Like Notch's 0x10c game, we could implement a basic CPU interface and have the target finding, power management and attack patterns controllable. (I had the exact same idea as Notch.)
 * **System Interactions** it should be possible to interact with planets, asteroids. It would be nice to be more of a 4X game.
  * _resource extracting, trading, building more ships, orbital/planetary shipyards_
  * _building weapons, building cities, orbital defences, resource management_
  * Take over planets.
  * **Space Stations** 
 * **Landing on Planets** it should be possible to land on a planet with structures on the planet being visible.
  * Likewise, shooting at a planet should cause that projectile to actually enter the planet's atmosphere. If anyone knows how I'd work this out - let me know!
 * **Visible Crew/Personnel and 2D Cut-through representations** of ships and decks
  * Walk around your ship as a tiny stickman.
  * A ship is represented by polygons.
  * Weapon fire adds damage to edges.
  * Polygons physically deformed by weapon damage - causing contents of a deck to be destroyed. Stickmen are sucked into space...
  * Difficult: The thickness of the line represents the strength of that part of the ship. The thickness of a line reduces on damage. This meant to represent the hull 'wearing' away.
  * The mass (and resource cost) of a ship uses the total length of all the ship's polygons unfolded. (This represents the amount of metal panels used for example.)



## Licence

This code is GPLed unless otherwise stated.
If you use any ideas, please link.
