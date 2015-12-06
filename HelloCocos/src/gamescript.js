var gameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var backgroundLayer = new cc.LayerColor(new cc.Color(40,40,40,255), 320, 480);
        this.addChild(backgroundLayer);

        var gameLayer = new cc.Layer();
        var targetSprite = cc.Sprite.create("assets/target.png");
        gameLayer.addChild(targetSprite,0);
        targetSprite.setPosition(160,240);

        this.addChild(gameLayer);

        setTimeout(function(){
            gameLayer.removeChild(targetSprite);
        }, 3000);

    }
});
