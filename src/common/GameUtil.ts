class GameUtil {
	public constructor() {
	}

    private static gameUtil: GameUtil
    private stageHeight: number
    private stageWidth: number

    private _bg: GameBaseScreen
    private ashcanList = []

    public static get instance() {
        if (!this.gameUtil) {
            this.gameUtil = new GameUtil()
        }
        return this.gameUtil
    }

    public setBg(bg) {
        this._bg = bg 
    }

    /**
     * 设置舞台高度
     */
    public setStageHeight(height: number) {
        this.stageHeight = height
    }

    public setStageWidth(width: number) {
        this.stageWidth = width
    }

    /**
     * 获取舞台高度
     */
    public get getStageHeight() {
        return this.stageHeight
    }

    public get getStageWidth() {
        return this.stageWidth
    }

	/**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 设置垃圾移动时的发光特效
     */
	public static get getGarbageGlowFilter() {
        // 光晕的颜色
        let color:number = 0xFFD700
        // 光晕的透明度
        let alpha:number = 0.7
        // 水平模糊量。有效值为 0 到 255.0（浮点）
        let blurX:number = 35
        // 垂直模糊量。有效值为 0 到 255.0（浮点）
        let blurY:number = 35
        // 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        let strength:number = 2
        // 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
        let quality:number = egret.BitmapFilterQuality.HIGH
        // 指定发光是否为内侧发光，暂未实现
        let inner:boolean = false
        // 指定对象是否具有挖空效果，暂未实现
        let knockout:boolean = false

        let glowFilter:egret.GlowFilter = new egret.GlowFilter( color, alpha, blurX, blurY,
            strength, quality, inner, knockout )

        return glowFilter
    }

    /**
     * 两个图形碰撞检测
     */
    public isHit(rect1, rect2) {
        return  rect1.x + this._bg.x < rect2.x  + rect2.width &&
                rect1.x + this._bg.x  + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.height + rect1.y > rect2.y
    }

    /**
     * 垃圾桶示例
     */
    public addAshcanToList(ashcan) {
        this.ashcanList = ashcan
    }
    public get getAshcanList() {
        return this.ashcanList
    }
}