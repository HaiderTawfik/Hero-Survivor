/*
Course: SENG 513
Date October 25, 2023
Assignment 2
Name: Haider Tawfik
UCID: 30097912
/*
player class will include things such as their health, attack, defense, etc, and current x, y position, boolean is invicinble for invicibility frames.
*/
class player{
    constructor(health, attack, defense, x, y, isInvincible){
    }
    //function to move player
    move(x, y){
    }
}


/*
Intialize player objects
*/

/*
Intialize possible buff's array
*/

/*
enemy class, include things such as health, attack, defense, etc, and current x, y position.
*/
class enemy{
    constructor(health, attack, defense, x, y){
    }
    //function to move enemy
    move(x, y){
    }
}


/*
Initalize arrays of enemies for each wave using loops
i.e. first wave will be an 10 skeleton in an array, randomize spawn ensuring that they are valid x y positions
*/

/*
wave class, include things such as current wave, enemies to spawn, enemies left, and chest locations to spawn, and a function to spawn the enemies
*/
class wave{
    constructor(currentWave, enemiesToSpawn, enemiesLeft, chestLocations){
    }
    //function to spawn enemies
    spawnEnemies(enemiesToSpawn){
    }
    //function to spawn chest
    spawnChest(chestLocations){
    }
    //function to check if wave is over (if enemies left is 0), and to check if game is won (wave is 3 and enemies left is 0)
    isWaveOver(){
    }
    //function to start the next wave
    startNextWave(enemitesToSpawn, enemiesLeft, chestLocations){
    }
}


/*
function detect collision chest and player call player buff
*/
function detectCollisionChestPlayer(){

}

/*
Randomize and choose 1 of 4 predetermined buffs, and give it to the player
remove the buffs from possible buffs
*/
function playerBuff(){
}

/*
function detect collision with entity and walls
*/
function detectCollisionEntityWall(){
}

/*
function for when player is hit by enemy, 
calculate how much to decrease the players health by depending on the enemy's attack and player's defense
*/
function decreasePlayerHealth(player){
}

/*
function detect collision with player and enemy
decrease player health as a result, give grace period for player to get away
i.e. 1 second invicibility to player
*/
function detectCollisionPlayerEnemy(player){
}

/*
debuff function, if an enemy debuffs an enemy, apply the debuff to the player
debuff will expire after a certain amount of time
*/
function setDebuff(debuff){
}

/*
function to call when enemy is defeated to remove them from the screen.
should also decrement enemys left in the wave
should check if the wave is finished using the method in the wave class
*/
function enemyDefeated(enemy){

}
/*
called when enemy is hit by player sword,
determine how much to decrease enemy health by depending on the player's attack and enemy's defense
*/
function decreaseEnemyHealth(enemy){
}
/*
detect player sword collision with enemy, decrease enemy health as a result
*/
function detectCollisionPlayerSwordEnemy(enemy){
}

/*
playerswing sword function + animation
*/
function playerSwingSword(player){
}


/*
add listeners for player movement, attacks, then call movePlayer1 or movePlayer2
*/

/*
move player1 with animation function
*/
function movePlayer1(direction){
}

/*
move player2 with animation function
*/
function movePlayer2(direction){
}

/*
function to detect which player is the closest to an enemy, used in routing algorithm
*/
function getClosestPlayer(enemy){
}

/*
routing algorithm for enemies that can't go through walls
find the closest player and move towards them avoiding wall collisions
*/
function findPathToPlayer(enemy){
}

/*
routing algorithm for enemies that can go through walls (ghosts)
find the closest player and mvoe towards them, ignore wall collisions
*/
function findPathToPlayerNoWalls(enemy){
}

/*
if time permits, boss will have special moves that players will have to avoid
this will be the function for that
*/