var TopDownGame = TopDownGame || {};

//loading the game assets
TopDownGame.Game = function() {};

TopDownGame.Game.prototype = {
  preload: function() {
    this.map = this.game.add.tilemap('level1');
    //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    // 這裡用的名稱都是在preload時載入的變數名稱
    this.map.addTilesetImage('tiles', 'gameTiles');

    // create時就會把tiled裡建立的樣式給顯示到畫面上了
    this.backgroundlayer = this.map.createLayer('backgroundLayer');
    this.blockedLayer = this.map.createLayer('blockedLayer');

    //collision on blockedLayer
    // 把blockedLayer裡的每個物件都設定碰撞偵測,
    // 之前是先建立一個group,再一一把新建物件加進group,
    // 這裡是把tiled裡預先建好的物件全都加入碰撞偵測,
    // 那個2000是看這個level1裡有多少這樣的物件來適當設定
    this.map.setCollisionBetween(1, 2000, true, 'blockedLayer');

    //resizes the game world to match the layer dimensions
    // 所以每一層可以不必固定大小?反正最後就是依背景來重設世界大小
    this.backgroundlayer.resizeWorld();




    this.createItems();
    this.createDoors();



    //create player
    // 用type來找出tiled裡設定的玩家
    var result = this.findObjectsByType('playerStart', this.map, 'objectsLayer')
    this.player = this.game.add.sprite(result[0].x, result[0].y, 'player');
    this.game.physics.arcade.enable(this.player);

    //the camera will follow the player in the world
    this.game.camera.follow(this.player);

    //move player with cursor keys
    // 這次不想再用鍵盤控制了
    //this.cursors = this.game.input.keyboard.createCursorKeys();


  },
  create: function() {
    this.collectSound = this.game.add.audio('collect');
  },
  update: function() {

    //collision
    this.game.physics.arcade.collide(this.player, this.blockedLayer);
    this.game.physics.arcade.overlap(this.player, this.items, this.collect, null, this);
    this.game.physics.arcade.overlap(this.player, this.doors, this.enterDoor, null, this);

    // 做一個玩家移動到點擊處的功能,本來想用滑鼠點擊位置來分成四個移動方向
    // 滑鼠點擊位置是view的大小,但player的位置則是世界的大小,不能用這兩個坐標來處理
    if (this.game.input.activePointer.isDown) {
      this.game.physics.arcade.moveToPointer(this.player, 50);
    } else {
      this.player.body.velocity.x = 0;
      this.player.body.velocity.y = 0;
    }
  },
  collect: function(player, collectable) {
    // 改用上一佪範例的音效來呈現
    this.collectSound.play();

    //remove sprite
    collectable.destroy();
  },
  enterDoor: function(player, collectable) {
    console.log("enterDoor");
    this.state.start('Preload');
  },
  createItems: function() {
    //create items
    this.items = this.game.add.group();
    this.items.enableBody = true;
    // objectsLayer裡有三種類型的物件,item/door/playerStart
    var item;
    result = this.findObjectsByType('item', this.map, 'objectsLayer');
    result.forEach(function(element) {
      this.createFromTiledObject(element, this.items);
    }, this);
  },
  createDoors: function() {
    //create doors
    this.doors = this.game.add.group();
    this.doors.enableBody = true;
    result = this.findObjectsByType('door', this.map, 'objectsLayer');

    result.forEach(function(element) {
      this.createFromTiledObject(element, this.doors);
    }, this);
  },
  // 書上說phaser裡就有這個方法,但此範例另有用處,因此是自己做一個,建議還是用phaser.js裡面的
  //find objects in a Tiled layer that containt a property called "type" equal to a certain value
  findObjectsByType: function(type, map, layer) {
    var result = new Array();
    map.objects[layer].forEach(function(element) {
      if (element.properties.type === type) {
        //Phaser uses top left, Tiled bottom left so we have to adjust
        //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
        //so they might not be placed in the exact position as in Tiled
        element.y -= map.tileHeight;
        result.push(element);
      }
    });
    return result;
  },
  //create a sprite from an object
  createFromTiledObject: function(element, group) {
    var sprite = group.create(element.x, element.y, element.properties.sprite);

    //copy all properties to the sprite
    // 把tiled裡設定的屬性一一加入物件裡面,所以不用在程式裡去做設定
    Object.keys(element.properties).forEach(function(key) {
      sprite[key] = element.properties[key];
    });
  }
};
