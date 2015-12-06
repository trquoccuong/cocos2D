var background;
var gameLayer;
var scrollSpeed = 1;

var MainScene  = cc.Scene.extend({
    onEnter : function () {
        this._super();

        var backgroundLayer = new BackgroundLayer();
        backgroundLayer.init();
        this.addChild(backgroundLayer);
    }
});

var BackgroundLayer = cc.Layer.extend({
    init: function () {
        this._super();
        background =  new ScrollingBG();
        this.addChild(background);
        this.scheduleUpdate();
    },
    update : function (dt) {
        background.scroll();
    }
});

var ScrollingBG = cc.Sprite.extend({
    ctor:function() {
        this._super();
        this.initWithFile("res/background.png");
    },
    onEnter:function() {
        this.setPosition(800,225);
    },
    scroll:function(){
        this.setPosition(this.getPosition().x-scrollSpeed,this.getPosition().y);
        if(this.getPosition().x<0){
            this.setPosition(this.getPosition().x+800,this.getPosition().y);
        }
    }
});