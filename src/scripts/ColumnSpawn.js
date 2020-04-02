/**
*
* @ author:John
* @ email:-----
* @ data: 2020-03-27 17:46
*/
let ranTime = 2000,timer = 0;
let columnParent = null
export default class ColumnSpawn extends Laya.Script {

    constructor() {
        super();
        /** @prop {name:columnPre, tips:"提示文本", type:Prefab, default:null}*/
        this.columnPre = null;

    }

    onAwake()
    {
        columnParent = this.owner.getChildByName("ColumnParent");
    }
    onUpdate()
    {
        timer += Laya.timer.delta;
        if(timer >= ranTime)
        {
            timer = 0;
            ranTime = this.getRan(3000,4500);
            this.spawn();
        }
    }

    spawn(){
        //bottom
        var columnBottom = this.columnPre.create();
        columnParent.addChild(columnBottom);
        var bottomY = this.getRan(300, 600);
        columnBottom.pos(1920, bottomY);

        //差值
        var cha = this.getRan(245, 348);
        var topY = bottomY - cha;

        //top
        var columnTop = this.columnPre.create()
        columnParent.addChild(columnTop);
        columnTop.rotation = 180;
        columnTop.pos(2176, topY);
    }

    getRan(min,max)
    {
        var timerVal = 0;
        timerVal = Math.random() * (max - min);
        timerVal += min;
        return timerVal;
    }

}