class BaseScreen extends egret.DisplayObjectContainer {
	public constructor() {
		super()
		this.init()
	}

	private bg: egret.Bitmap

	private init() {
		this.bg = GameUtil.createBitmapByName("bg_png")

        let stageW = GameUtil.instance.getStageWidth
        let stageH =  GameUtil.instance.getStageHeight
		console.log('stageH', stageH)
        this.bg.width = 1400
        this.bg.height = stageH;
        this.bg.x = 0
        this.bg.y = 0

        this.bg.touchEnabled = true
        let x:number

		this.addChild(this.bg)
		const garbage1 = new Garbages('xiguapi-wet_png', {width: 50, height: 50}, {x: 190/2, y: 958/2})
        this.addChild(garbage1)

		this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchStart, this)
        this.bg.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this)

        function touchStart(e: egret.TouchEvent) {
            x = e.stageX - this.bg.x

            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, move, this);
        }
        function move(e: egret.TouchEvent) {
            if (Math.abs(e.stageX - x) < this.bg.width - stageW && e.stageX - x < 0) {
                this.bg.x = e.stageX - x
				garbage1.x = e.stageX - x
            }
        }
        function stopMove(e: egret.TouchEvent) {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, move, this);
        }

	}
}