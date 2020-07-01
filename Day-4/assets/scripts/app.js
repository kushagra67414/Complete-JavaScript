const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 18;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);


function endround(){

    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
 
    if(currentMonsterHealth <=0 && currentPlayerHealth > 0 ){
        alert('you won buddy')
    }
     else if(currentPlayerHealth <= 0 &&  currentMonsterHealth > 0) {
         alert('you lost player sorry')
     }
     else if (currentMonsterHealth <= 0 && currentPlayerHealth <=0){
         alert('its a draw boizz')
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