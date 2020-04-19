let player;

function Player(ClassType, Health, Mana, Strength,Agility,Speed){
    this.ClassType = ClassType,
    this.Health =  Health,
    this.Mana = Mana,
    this.Strength = Strength,
    this.Agility = Agility,
    this.Speed = Speed;
};

let PlayerMoves = {
  // get enemy/player Speed
  calcAttack: function() {
    let getPlayerSpeed = player.Speed;
    let getEnemySpeed = enemy.Speed;
    // player Attacks
    function playerAttack () {
        let calcBaseDamage;
        if (player.mana > 0) {
          calcBaseDamage = player.Strength * player.Mana/1000;
        }else {
          calcBaseDamage = player.Strength * player.Agility/1000;
        }
        // attack values should varies base a on random number
        let randomOutput = Math.floor(Math.random() * 10);
        let outputDamage = calcBaseDamage + randomOutput;
        // number times to player hit
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.Agility/10)/2) + 1;
        let totalDamageCause = [outputDamage, numberOfHits];
        return totalDamageCause;
    };
    // enemy Attack
    function enemyAttack () {
        let calcBaseDamage;
        if (enemy.Mana > 0) {
          calcBaseDamage = enemy.Strength * enemy.Mana/1000;
        }else {
          calcBaseDamage = enemy.Strength * enemy.Agility/1000;
        }

        // attack values should varies base a on random number
        let randomOutput = Math.floor(Math.random() * Math.floor(10));
        let outputDamage = calcBaseDamage + randomOutput;
        // number times to enemy hit
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.Agility/10)/2) + 1;
        let totalDamageCause = [outputDamage, numberOfHits];
        return totalDamageCause;
    };
    // enemy/player Health change base damages receive
    let getPlayerHealth = document.querySelector('.player_Health');
    let getEnemyHealth = document.querySelector('.enemy_Health');
    if (getEnemySpeed >= getPlayerSpeed) {
      // total num of damage plus total Hits
      let enemyDamageValue = enemyAttack();
      let totalDamageValue = enemyDamageValue[0] * enemyDamageValue[1];
      player.Health = player.Health - totalDamageValue;
      alert('Enemy cause ' + enemyDamageValue[0] + ' damage ' + enemyDamageValue[1]  + ' times');
      // total num of damage plus total Hits
      let playerDamageValues = playerAttack();
      let totalDamageValues = playerDamageValues[0] * playerDamageValues[1];
      enemy.Health = enemy.Health - totalDamageValues;
      alert('You cause ' + playerDamageValues[0] + ' damage ' + playerDamageValues[1]  + ' times');
    };
    if (player.Health <= 0) {
      alert('You lose! Refresh the browser to play again');
      getEnemyHealth.innerHTML = 'Health: ' + enemy.Health;
      getPlayerHealth.innerHTML = 'Health: 0';
    }else {
      getPlayerHealth.innerHTML = 'Health: ' + player.Health
    // player damages cause
    }
    if (enemy.Health <= 0) {
      alert('You won! Refresh the browser to play again');
      getPlayerHealth.innerHTML = 'Health: ' + player.Health;
      getEnemyHealth.innerHTML = 'Health: 0';
    }else {
      getEnemyHealth.innerHTML = 'Health: ' + enemy.Health;

    };
    if (getPlayerSpeed >= getEnemySpeed) {
      // total num of damage plus total Hits
      let playerDamageValues = playerAttack();
      let totalDamageValues = playerDamageValues[0] * playerDamageValues[1];
      enemy.Health = enemy.Health - totalDamageValues;
      alert('You cause ' + playerDamageValues[0] + ' damage ' + playerDamageValues[1]  + ' times');
      // total num of damage plus total Hits
      let enemyDamageValue = enemyAttack();
      let totalDamageValue = enemyDamageValue[0] * enemyDamageValue[1];
      player.Health = player.Health - totalDamageValue;
      alert('Enemy cause ' + enemyDamageValue[0] + ' damage ' + enemyDamageValue[1]  + ' times');
    };
    if (enemy.Health <= 0) {
      alert('You win! Refresh the browser to play again');
      getPlayerHealth.innerHTML = 'Health: ' + player.Health;
      getEnemyHealth.innerHTML = 'Health: 0';
    }else {
      getEnemyHealth.innerHTML = 'Health: ' + enemy.Health
    // enemy damages cause
    };
    if (player.Health <= 0) {
      alert('You lose! Refresh the browser to play again');
      getEnemyHealth.innerHTML = 'Health: ' + enemy.Health;
      getPlayerHealth.innerHTML = 'Health: 0';
    }else {
      getPlayerHealth.innerHTML = 'Health: ' + player.Health;

    };
  }
}
