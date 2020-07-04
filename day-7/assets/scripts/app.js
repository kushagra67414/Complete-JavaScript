const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 18;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK' ;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_STRONG_PLAYER_ATTACK = 'STRONG_PLAYER_ATTACK' ;
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK' ;
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL' ;
const LOG_EVENT_GAME_OVER = 'GAME_OVER' ;
let battleLog = [];

const enternumber = prompt('enter your value' , '100');

let chosenMaxLife = parseInt(enternumber);

if(isNaN(chosenMaxLife) || chosenMaxLife <=0){
    chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let bonuslife = true;

adjustHealthBars(chosenMaxLife);

function writetolog(ev, val , playerhealth , monsterhealth){
let logentry = {
    event: ev ,
    value : val ,
   
    finalPlayerHealth  : playerhealth,
    finalMonsterHealth : monsterhealth
};   

switch(ev){

    case LOG_EVENT_PLAYER_ATTACK:
    logentry.target = 'MONSTER';

    case LOG_EVENT_STRONG_PLAYER_ATTACK:
        logentry = {
            event: ev ,
            value : val ,
           target : 'MONSTER',
            finalplayerhealth  : playerhealth,
            finalmonsterhealth : monsterhealth
        };

    case LOG_EVENT_MONSTER_ATTACK:
        logentry = {
            event:ev ,
            value : val ,
           target : 'PLAYER',
            finalplayerhealth  : playerhealth,
            finalmonsterhealth : monsterhealth
        };
    case LOG_EVENT_PLAYER_HEAL:
        logentry = {
            event: ev ,
            value : val ,
           target : 'PLAYER',
            finalplayerhealth  : playerhealth,
            finalmonsterhealth : monsterhealth
        };

    case LOG_EVENT_GAME_OVER:
        logentry = {
            event : ev ,
            value: val ,
           target: 'GAME_OVER',
            finalplayerhealth : playerhealth,
            finalmonsterhealth : monsterhealth
        };



}

// if(ev === LOG_EVENT_PLAYER_ATTACK){
//    logentry.target = 'MONSTER';

// } else if(ev === LOG_EVENT_STRONG_PLAYER_ATTACK){
//     logentry = {
//         event: ev ,
//         value : val ,
//        target : 'MONSTER',
//         finalplayerhealth  : playerhealth,
//         finalmonsterhealth : monsterhealth
//     };

// } else if(ev === LOG_EVENT_MONSTER_ATTACK){
//     logentry = {
//         event:ev ,
//         value : val ,
//        target : 'PLAYER',
//         finalplayerhealth  : playerhealth,
//         finalmonsterhealth : monsterhealth
//     };

// } else if(ev === LOG_EVENT_PLAYER_HEAL){
//     logentry = {
//         event: ev ,
//         value : val ,
//        target : 'PLAYER',
//         finalplayerhealth  : playerhealth,
//         finalmonsterhealth : monsterhealth
//     };

// } else if(ev === LOG_EVENT_GAME_OVER){
//     logentry = {
//         event : ev ,
//         value: val ,
//        target: 'GAME_OVER',
//         finalplayerhealth : playerhealth,
//         finalmonsterhealth : monsterhealth
//     };

// }
battleLog.push(logentry);
}

function reset(){
    currentPlayerHealth= chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endround(){
const initialhealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    writetolog(LOG_EVENT_MONSTER_ATTACK , playerDamage , currentPlayerHealth , currentMonsterHealth  );

 if(currentPlayerHealth <= 0 && bonuslife){
    bonuslife = false;
    removeBonusLife();
    currentPlayerHealth = chosenMaxLife;
    setPlayerHealth(chosenMaxLife);
    alert('you r safe and use your lifeline');
}

    if(currentMonsterHealth <=0 && currentPlayerHealth > 0 ){
        alert('you won buddy');
        reset();
        writetolog(LOG_EVENT_GAME_OVER , 'player_won' , currentPlayerHealth , currentMonsterHealth  );

    }
     else if(currentPlayerHealth <= 0 &&  currentMonsterHealth > 0) {
         alert('you lost player sorry');
         reset();
         writetolog(LOG_EVENT_GAME_OVER , 'lose_brother' , currentPlayerHealth , currentMonsterHealth  );

     }
     else if (currentMonsterHealth <= 0 && currentPlayerHealth <=0){
         alert('its a draw boizz');
         reset();
         writetolog(LOG_EVENT_GAME_OVER , 'DRAW' , currentPlayerHealth , currentMonsterHealth  );

    }
}

function attackmonster(mode){
let maxdamage;
   let logEvent ; 
    if(mode== MODE_ATTACK){
        maxdamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK
    }
    else if(mode == MODE_STRONG_ATTACK){
        maxdamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_STRONG_PLAYER_ATTACK
    }   


    const damage = dealMonsterDamage(maxdamage);
   currentMonsterHealth -= damage;
   endround();
   writetolog(logEvent , damage , currentPlayerHealth , currentMonsterHealth  );

  
    }


function attackHandler(){
attackmonster(MODE_ATTACK);

   
}
function strongattackHandler(){
    attackmonster(MODE_STRONG_ATTACK);
 }

 function healhandler(){
    let healvalue;
if(currentPlayerHealth >=  chosenMaxLife - HEAL_VALUE){
    alert('you r at max health');
}
else{
    healvalue = HEAL_VALUE;
}
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth +=  healvalue;
    writetolog(LOG_EVENT_PLAYER_HEAL , healvalue , currentPlayerHealth , currentMonsterHealth  );

    endround();


}
function printLogHandler() {
    // let j = 0;
    // for(const i of battleLog){
    //     console.log(i);
    // console.log(j);
    // j++;
    // }

let i=0;
for(const logentry of battleLog){
    console.log(`#${i}`);
    for(const key in logentry){
         console.log(key);
        console.log(logentry[key]);
        //OR
        // console.log(`${key} => ${logentry}`);
    }
}
i++;
}
attackBtn.addEventListener('click' , attackHandler);
strongAttackBtn.addEventListener('click' , strongattackHandler);
healBtn.addEventListener('click' ,healhandler);
logBtn.addEventListener('click' ,printLogHandler);