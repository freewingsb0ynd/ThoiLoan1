/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var GoldStorage = Storage.extend({
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment) {
        this._super(_id, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, gv.RESOURCE_TYPE.GOLD);
    },
    showInfo : function(){
        return "Gold Storage " +  this._super();
    },
    update : function(){

    }
})