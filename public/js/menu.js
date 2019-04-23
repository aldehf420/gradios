var easyStart;

var mainMenu = {

    preload : function() {
        game.load.image('startButton', 'img/startbutton.png');
        game.load.image('ruleButton', 'img/rulebutton.png')
    },

    create : function() {
        game.stage.backgroundColor = '#fff';
        game.add.button(350,270,'startButton', this.startGame, this);
        easyStart = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        game.add.button(380,330,'ruleButton', this.goRule, this);
    },

    update : function() {
        if (easyStart.isDown) {
            this.startGame();
        }
    },

    startGame : function() {
        this.state.start('Game');
    },
    goRule : function(){
        this.state.start('test');
    }

}
