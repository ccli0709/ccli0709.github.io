var SpaceHipster = SpaceHipster || {};

//title screen
SpaceHipster.Game = function() {};

SpaceHipster.Game.prototype = {
  create: function() {
    //set world dimensions
    this.game.world.setBounds(0, 0, 1920, 1920);
    //background
    this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'space');

    //create player
    this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playership');
    this.player.scale.setTo(2);
    this.player.animations.add('fly', [0, 1, 2, 3], 5, true);
    this.player.animations.play('fly');

    //player initial score of zero
    this.playerScore = 0;
    this.playerLife = 3;

    //enable player physics
    this.game.physics.arcade.enable(this.player);
    this.playerSpeed = 120;
    this.player.body.collideWorldBounds = true;

    //the camera will follow the player in the world
    // 一開始還沒加這一行時,會看不到玩家,
    // 因為前面把遊戲世界設很大,然後玩家置中,所以視角固定在遊戲世界左上角
    // 然後做到此行再搭配update裡的偵測畫面是否點擊就可以移動玩家了
    this.game.camera.follow(this.player);

    //generate game elements
    this.generateCollectables();
    this.generateAsteriods();

    //show score
    this.showLabels();

    this.collectSound = this.game.add.audio('collect');
    this.explosionSound = this.game.add.audio('explosion');
  },
  update: function() {
    if (this.game.input.activePointer.justPressed()) {
      //move on the direction of the input
      this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
    }

    //overlapping between player and collectables
    this.game.physics.arcade.overlap(this.player, this.collectables, this.collect, null, this);

    // 讓小行星互相碰撞彈開
    this.game.physics.arcade.collide(this.asteroids, this.asteroids, this.asteroidCollide, null, this);

    this.game.physics.arcade.collide(this.player, this.asteroids, this.hitAsteroid, null, this);
  },
  generateCollectables: function() {
    this.collectables = this.game.add.group();

    //enable physics in them
    this.collectables.enableBody = true;
    this.collectables.physicsBodyType = Phaser.Physics.ARCADE;

    //phaser's random number generator
    var numCollectables = this.game.rnd.integerInRange(100, 150)
    var collectable;

    for (var i = 0; i < numCollectables; i++) {
      //add sprite
      collectable = this.collectables.create(this.game.world.randomX, this.game.world.randomY, 'power');
      collectable.animations.add('fly', [0, 1, 2, 3], 5, true);
      collectable.animations.play('fly');
    }
  },
  collect: function(player, collectable) {
    //play collect sound
    this.collectSound.play();

    //TODO:如果能判斷吃到的哪一類補給品,就可以用同一個collect方法來決定分數

    //update score
    // 不必重新繪製,只要更新文字內容即可
    this.playerScore++;
    this.scoreLabel.text = this.playerScore;

    //remove sprite
    collectable.destroy();
  },
  asteroidCollide: function(asteroid1, asteroid2) {
    // 小行星速度隨著每次碰撞增加來提高困難度
    asteroid1.body.velocity.x *= -1.1;
    asteroid1.body.velocity.y *= -1.1;
    asteroid2.body.velocity.x *= -1.1;
    asteroid2.body.velocity.y *= -1.1;
  },
  generateAsteriods: function() {
    this.asteroids = this.game.add.group();

    //enable physics in them
    this.asteroids.enableBody = true;
    this.asteroids.physicsBodyType = Phaser.Physics.ARCADE;

    //phaser's random number generator
    var numAsteroids = this.game.rnd.integerInRange(80, 120)
    var asteriod;

    for (var i = 0; i < numAsteroids; i++) {
      //add sprite
      asteriod = this.asteroids.create(this.game.world.randomX, this.game.world.randomY, 'rock');
      asteriod.scale.setTo(this.game.rnd.integerInRange(10, 40) / 10);

      //physics properties
      asteriod.body.velocity.x = this.game.rnd.integerInRange(-20, 20);
      asteriod.body.velocity.y = this.game.rnd.integerInRange(-20, 20);
      // 這個immovable先關閉,因為想讓小行星彼此碰撞
      asteriod.body.immovable = false;
      asteriod.body.collideWorldBounds = true;
    }
  },
  showLabels: function() {
    //score text
    var text = "0";
    var lifeStyle = {
      font: "40px Arial",
      fill: "#f00",
      align: "center"
    };
    var scoreStyle = {
      font: "40px Arial",
      fill: "#fff",
      align: "center"
    };
    this.lifeLabel = this.game.add.text(this.game.width - 100, this.game.height - 100, "10", lifeStyle);
    this.scoreLabel = this.game.add.text(this.game.width - 100, this.game.height - 50, "0", scoreStyle);
    // 固定在顯示畫面而不是固定在地圖上
    this.lifeLabel.fixedToCamera = true;
    this.scoreLabel.fixedToCamera = true;
  },
  hitAsteroid: function(player, asteroid) {
    //play explosion sound
    this.explosionSound.play();

    //make the player explode
    var emitter = this.game.add.emitter(this.player.x, this.player.y, 100);
    emitter.makeParticles('playerParticle');
    emitter.minParticleSpeed.setTo(-200, -200);
    emitter.maxParticleSpeed.setTo(200, 200);
    emitter.gravity = 0;
    emitter.start(true, 1000, null, 100);


    // 增加玩家生命值的考慮
    // 玩家與小行星碰撞時的反彈
    this.player.body.velocity.x *= -1.1;
    this.player.body.velocity.y *= -1.1;

    this.playerLife--;
    this.lifeLabel.text = this.playerLife;

    if (this.playerLife <= 0) {
      this.player.kill();
      this.game.time.events.add(1200, this.gameOver, this);
    }
  },
  gameOver: function() {
    //pass it the score as a parameter
    this.game.state.start('MainMenu', true, false, this.playerScore);
  }


};
