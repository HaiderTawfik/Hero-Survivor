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
    //function to check if wave is over
    isWaveOver(){
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
detect player sword collision with enemy, decrease enemy health as a result, apply a default to the player depending on the enemy,
skeltetons will have a chance to slow (decrease their speed), ghosts can poison (decrease their health over time), etc.
*/
function detectCollisionPlayerSwordEnemy(enemy){
}

/*
player swing sword function + animation
*/
function playerSwingSword(){
}

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