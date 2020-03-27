/**
*
* @ author:John
* @ email:-----
* @ data: 2020-03-27 17:46
*/
export default class BirdCtrl extends Laya.Script {

    constructor() {
        super();
        /** @prop {name:force, tips:"提示文本", type:Number, default:null}*/
        this.force = null;
    }

    onAwake() {
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.mouseDown);
    }

    mouseDown()
    {
        this.owner.getComponent(Laya.RigidBody).linearVelocity = {x:0, y:this.force};
    }
}