let enemy;

function Enemy(EnemyType, Health, Mana, Strength,Agility,Speed){
    this.EnemyType = EnemyType,
    this.Health =  Health,
    this.Mana = Mana,
    this.Strength = Strength,
    this.Agility = Agility,
    this.Speed = Speed
}

  /*let PlayerMoves = {
  // who attacks first ?
  calcAttack : function () {
    let getPlayerSpeed = player.Speed;
    let getEnemySpeed = enemy.Speed;
    // player attacks
    let playerAttack = function() {
      let calcBaseDamage;
      if (player.Mana > 0) {
        calcBaseDamage = player.Strength * player.Mana / 1000;
      } else {
        calcBaseDamage = player.Strength * player.Agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Number of Hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.Agility/10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // enemyattacks
    let enemyAttack = function() {
      let calcBaseDamage;
      if (player.Mana > 0) {
        calcBaseDamage = enemy.Strength * enemy.Mana / 1000;
      } else {
        calcBaseDamage = enemy.Strength * enemy.Agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Number of Hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.Agility/10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // player/enemy Health change later
    let getPlayerHealth = document.querySelector('.player_Health');
    let getEnemyHealth = document.querySelector('.enemy_Health');
    // initiate attack
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.Health = enemy.Health - totalDamage;
      alert('You hit ' + playerAttackValues[0] + ' damage ' + playerAttackValues[1] + ' times');
      if (enemy.Health <= 0) {
        alert('You win! Refresh your browser to play Again.');
        getEnemyHealth.innerHTML = 'Health: 0';
        getPlayerHealth.innerHTML = 'Health:' + player.Heath;
      } else {
        getEnemyHealth.innerHTML = 'Heath: ' + enemy.Heath;
        // Enemy initiate Attack
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.Health = player.Health - totalDamage;
        alert('Enemy hit ' + enemyAttackValues[0] + ' damage ' + enemyAttackValues[1] + ' times');
        if (enemy.Health <= 0) {
          alert('You lose! Refresh your browser to play Again.');
          getplayerHealth.innerHTML = 'Health: 0';
          getenemyHealth.innerHTML = 'Health:' + enemy.Heath;
        } else {
          getPlayerHealth.innerHTML = 'Health ' + player.Heath;
        }
    }
  }*/
