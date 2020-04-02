/**
*
* @ author:John
* @ email:-----
* @ data: 2020-03-27 09:43
*/
export default class AutoMove extends Laya.Script {

    constructor() {
        super();
        /** @prop {name:name, tips:"提示文本", type:Node, default:null}*/
        this.xx=null;
        this.moveSpeed = 3;
    }

    onAwake() {
        this.owner.getComponent(Laya.RigidBody).linearVelocity = {x:-this.moveSpeed, y:0};
        Laya.stage.on("GameOver",this,function(){
            this.owner.getComponent(Laya.RigidBody).linearVelocity = {x:0, y:0};
        })
    }
}