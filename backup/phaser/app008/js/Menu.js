var TopDownGame = TopDownGame || {};

//loading the game assets
TopDownGame.Menu = function() {};

TopDownGame.Menu.prototype = {
  init: function(usedTime) {
    this.usedTime = this.usedTime || 999;
    this.usedTime = Math.min(usedTime, this.usedTime);
  },
  preload: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#000';

    //start game text
    var text = "漢漢小勇士\n點擊畫面開始遊戲";
    var style = {
      font: "16px Arial",
      fill: "#fff",
      align: "center"
    };
    var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 30, text, style);
    t.anchor.set(0.5);

    //highest score
    text = "最快過關秒數: " + this.usedTime;
    style = {
      font: "12px Arial",
      fill: "#fff",
      align: "center"
    };

    var h = this.game.add.text(this.game.width / 2, this.game.height / 2 + 20, text, style);
    h.anchor.set(0.5);
  },
  update: function() {
    if (this.game.input.activePointer.justPressed()) {
      this.state.start('Game', true, false, "level1");
    }
  }
};
