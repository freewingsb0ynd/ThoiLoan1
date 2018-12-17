/**
 * Created by CPU11635_LOCAL on 12/14/2018.
 */
var ScreenGame = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    layerMap: null,
    layerLobby: null,

    ctor:function() {
        this._super();
        //this.loadGui();
        this.initGame();
    },


    loadGui:function()
    {
        //this.removeAllChildren();
        var size = cc.winSize;

        var btnBack = gv.commonButton(100, 64, size.width * 0.5, size.height * 0.5,"Back");
        this.addChild(btnBack);
        btnBack.addClickEventListener(this.onSelectBack.bind(this));

    },

    onEnter:function(){
        this._super();
    },

    initGame:function(){
        //this.addChild(LobbyLayer);
        //fr.view(MapLayer);
        var node = new cc.Node();
        this.addChild(node);
        //scene = new cc.Scene();
        this.layerMap = new MapLayer();
        //scene.addChild(layerMap, 1);
        this.layerLobby = new LobbyLayer();
        //scene.addChild(layerLobby, 2);
        //return scene;

        node.addChild(this.layerMap);
        node.addChild(this.layerLobby);
        //var background = cc.Sprite("res/gui/HelloWorld.png");
        //background.setPosition(cc.p(size.width * 0.5, size.height * 0.5));
        //this.addChild(background);

        //var lobbyLayer = ccs.load('gui/LobbyLayer.json');
        //this.addChild(lobbyLayer.lay);
        //var sceneRes = ccs.load("gui/MainScene.json");
        //this.addChild(sceneRes.node);
        //sceneRes.node.runAction(sceneRes.action);
        //sceneRes.action.gotoFrameAndPlay(0, true);
    },


    onSelectBack:function(sender)
    {
        fr.view(ScreenMenu);
    }

});
//
//ScreenGame.scene = function () {
//    var scene = new cc.Scene();
//    var layerMap = new MapLayer();
//    scene.addChild(layerMap, 1);
//    var layerLobby = new LobbyLayer();
//    scene.addChild(layerLobby, 2);
//    return scene;
//};