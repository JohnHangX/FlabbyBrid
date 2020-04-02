/**
*
* @ author:John
* @ email:-----
* @ data: 2020-03-27 17:46
*/
let isGameOver = false;
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
        if(isGameOver)
            return;
        this.owner.getComponent(Laya.RigidBody).linearVelocity = {x:0, y:this.force};
        this.owner.autoAnimation = "Fly";
        this.owner.loop = false;
    }

    onUpdate()
    {
        if(this.owner.isPlaying == false)
        {
            this.owner.autoAnimation = "Idle";
        }
    }

    onTriggerEnter(other)
    {
        if(other.owner.name == "Top")
            return;

        isGameOver =  true;
        this.owner.autoAnimation = "Die";
        Laya.stage.event("GameOver");
    }
}