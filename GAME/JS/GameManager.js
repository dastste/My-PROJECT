let GameManager = {
    // creating a method that run multiple methods
    setGameStart: function(ClassType) {
        this.resetPlayer(ClassType);
        this.setPreFight();
    },
    resetPlayer: function(ClassType) {
        // create the player Properties
        switch (ClassType) {
            case "Black Panther":
                player = new Player(ClassType, 100, 0, 200, 80, 100)
                break;
            case "Captain American":
                player = new Player(ClassType, 200, 0, 150, 30, 100)
            break;
            case "Captain Marvel":
                player = new Player(ClassType, 100, 150, 150, 80, 0)
                break;
            case "Iron Man":
                player = new Player(ClassType, 100, 50, 150, 100, 80)
            break;
            case "Luke Cage":
                player = new Player(ClassType, 150, 50, 250, 0, 30)
                break;
            case "Spider Man":
                player = new Player(ClassType, 100, 0, 100, 80, 200)
            break;
            case "Wolverine":
                player = new Player(ClassType, 100, 30, 200, 80, 100)
                break;
        }
        // Create a new pop/[or function to be run] up to override the previous one
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="Image/Player/'+ ClassType +'.jpg" class="img-heroes"><div><h3> '+ ClassType +'</h3><p class="player_Health">Health: '+ player.Health +'</p><p>Mana: '+ player.Mana +'</p><p>Strength: '+ player.Strength +'</p><p>Agility: '+ player.Agility +'</P><p>Speed: '+ player.Speed +'</p></div>';
    },
    setPreFight: function() {
        getHeader = document.querySelector(".header");
        getAction = document.querySelector(".actions");
        getArena = document.querySelector(".arena");
        // set a task
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getAction.innerHTML = '<a href="#" onclick="GameManager.setFight()" class="btn-fight">Search for an Enemy</a>';
        getArena.style.visibility = "visible";

    },
    setFight: function() {
        getHeader = document.querySelector(".header");
        getAction = document.querySelector(".actions");
        getEnemy = document.querySelector(".enemy");
        // create an Enemy
        let Enemy00 = new Enemy("Doctor Strange",100, 0, 200, 80, 100);
        let Enemy01 = new Enemy("Gomora",  150, 0, 180, 50, 100);
        let Enemy02 = new Enemy("Hulk", 100, 30, 200, 80, 70);
        let Enemy03 = new Enemy("Red Skull", 100, 50, 150, 100, 80);
        let Enemy04 = new Enemy("Star Lord", 150, 50, 250, 0, 30);
        let Enemy05 = new Enemy("Thanos", 100, 0, 100, 80, 200);
        let Enemy06 = new Enemy("Ultron" ,100, 30, 200, 80, 100);
        let chooseRandomly = Math.floor(Math.random() * Math.floor(7));
        console.log(chooseRandomly);
        switch (chooseRandomly) {
            case 00:
            enemy = Enemy00;

                break;
            case 01:
                enemy = Enemy01;

                break;
            case 02:
                enemy = Enemy02;

                break;
            case 03:
                enemy = Enemy03;

                break;
            case 04:
                enemy = Enemy04;

                break;
            case 05:
                enemy = Enemy05;

                break;
            case 06:
                enemy = Enemy06;

                break;
        }

        getHeader.innerHTML = '<p>Task: choose your moves!</p>' ;
        getAction.innerHTML = '<a href="#" class="btn-fight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="Image/enemies/'+ enemy.EnemyType +'.jpg" class="img-heroes"><div><h3> '+ enemy.EnemyType +'</h3><p class="enemy_Health">Health: '+ enemy.Health +'</p><p>Mana: '+ enemy.Mana +'</p><p>Strength: '+ enemy.Strength +'</p><p>Agility: '+ enemy.Agility +'</P><p>Speed: '+ enemy.Speed +'</p></div>';

    }

}
