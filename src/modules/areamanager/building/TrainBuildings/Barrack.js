/**
 * Created by CPU11630_LOCAL on 12/27/2018.
 */


var Barrack = Building.extend({
    type2:0,
    ctor: function (_id , _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment, _type2) {
        this._super(_id, gv.BUILDING.BARRACK, _posX, _posY, _currentLevel, _upgradingLevel, _upgradedMoment);
        this.type2 = _type2;
    },
    showInfo : function(){
        return this._super() + " type2 :" + this.type2;
    },
    getDescription : function(){
        this.description = " Description : Barrack level " + this.currentLevel;
        return this.description;
    },
    getImage : function(){
        return this._super();
    }
})