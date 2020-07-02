const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 18;
const HEAL_VALUE = 20;
const enternumber = prompt('enter your value' , '100');

let chosenMaxLife = parseInt(enternumber);

if(isNaN(chosenMaxLife) || chosenMaxLife <=0){
    chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let bonuslife = true;
adjustHealthBars(chosenMaxLife);


function reset(){
    currentPlayerHealth= chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endround(){
const initialhealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
 
if(currentPlayerHealth <= 0 && bonuslife){
    bonuslife = false;
    removeBonusLife();
    currentPlayerHealth = initialhealth;
    setPlayerHealth(currentPlayerHealth);
    alert('you r safe and use your lifeline');
}

    if(currentMonsterHealth <=0 && currentPlayerHealth > 0 ){
        alert('you won buddy');
        reset();
    }
     else if(currentPlayerHealth <= 0 &&  currentMonsterHealth > 0) {
         alert('you lost player sorry');
         reset();
     }
     else if (currentMonsterHealth <= 0 && currentPlayerHealth <=0){
         alert('its a draw boizz');
         reset();
    }
}

function attackmonster(mode){
let maxdamage;
    if(mode== 'ATTACK'){
        maxdamage = ATTACK_VALUE;
    }
    else{
        maxdamage = STRONG_ATTACK_VALUE;
    }


    const damage = dealMonsterDamage(maxdamage);
   currentMonsterHealth -= damage;
   endround();
  
    }


function attackHandler(){
attackmonster('ATTACK');
   
}
function strongattackHandler(){
    attackmonster('STRONG_ATTACK');
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
    endround();


}
attackBtn.addEventListener('click' , attackHandler);
strongAttackBtn.addEventListener('click' , strongattackHandler);
healBtn.addEventListener('click' ,healhandler);