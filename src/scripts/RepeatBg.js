/**
*
* @ author:John
* @ email:-----
* @ data: 2020-03-27 09:59
*/
let width;
export default class RepeatBg extends Laya.Script {

    constructor() {
        super();
        /** @prop {name:name, tips:"提示文本", type:Node, default:null}*/
        this.xx=null;
    }

    onAwake() {
        width = this.owner.width;
    }
    onUpdate()
    {
        if(this.owner.x <= -width)
        {
            this.owner.x += width*2;
        }
    }
}