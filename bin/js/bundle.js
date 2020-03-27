(function () {
    'use strict';

    /**
    *
    * @ author:John
    * @ email:-----
    * @ data: 2020-03-23 14:28
    */
    class GameRoot extends Laya.Script {

        constructor() {
            super();
            /** @prop {name:name, tips:"提示文本", type:Node, default:null}*/
            this.xx=null;
        }

        onAwake() {
        }
    }

    /**
    *
    * @ author:John
    * @ email:-----
    * @ data: 2020-03-27 09:43
    */
    class AutoMove extends Laya.Script {

        constructor() {
            super();
            /** @prop {name:name, tips:"提示文本", type:Node, default:null}*/
            this.xx=null;
            this.moveSpeed = 3;
        }

        onAwake() {
            console.log(this.owner);
            this.owner.getComponent(Laya.RigidBody).linearVelocity = {x:-this.moveSpeed, y:0};
        }
    }

    /**
    *
    * @ author:John
    * @ email:-----
    * @ data: 2020-03-27 09:59
    */
    let width;
    class RepeatBg extends Laya.Script {

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

    /**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

    class GameConfig {
        static init() {
            //注册Script或者Runtime引用
            let reg = Laya.ClassUtils.regClass;
    		reg("scripts/GameRoot.js",GameRoot);
    		reg("scripts/AutoMove.js",AutoMove);
    		reg("scripts/RepeatBg.js",RepeatBg);
        }
    }
    GameConfig.width = 1920;
    GameConfig.height = 1080;
    GameConfig.scaleMode ="fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "Main.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;

    GameConfig.init();

    class Main {
    	constructor() {
    		//根据IDE设置初始化引擎		
    		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
    		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
    		Laya["Physics"] && Laya["Physics"].enable();
    		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
    		Laya.stage.scaleMode = GameConfig.scaleMode;
    		Laya.stage.screenMode = GameConfig.screenMode;
    		Laya.stage.alignV = GameConfig.alignV;
    		Laya.stage.alignH = GameConfig.alignH;
    		//兼容微信不支持加载scene后缀场景
    		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

    		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
    		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
    		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
    		if (GameConfig.stat) Laya.Stat.show();
    		Laya.alertGlobalError = true;

    		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
    		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    	}

    	onVersionLoaded() {
    		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
    		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    	}

    	onConfigLoaded() {
    		//加载IDE指定的场景
    		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
    	}
    }
    //激活启动类
    new Main();

}());