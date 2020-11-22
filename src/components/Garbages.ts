class Garbages extends egret.DisplayObjectContainer {
	public constructor(img: string, size = { width: 53, height: 48 }, location = { x: 0, y: 0 }) {
		super()
		this.garbage = GameUtil.createBitmapByName(img)
		this.garbage.width = size.width
		this.garbage.height = size.height

		this.garbage.x = location.x
		this.garbage.y = location.y
		this.init()
		this.addChild(this.garbage)
	}

	private garbage: egret.Bitmap
	private offsetX: number
	private offsetY: number

	private init () {
		this.garbage.touchEnabled = true

		this.garbage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchStart, this)
		// this.garbage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchStart, this)
		this.garbage.addEventListener(egret.TouchEvent.TOUCH_END, this.stopMove, this);
		// this.garbage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this)
	}

	private touchStart(e: egret.TouchEvent) {
		this.offsetX = e.stageX - this.garbage.x;
  		this.offsetY = e.stageY - this.garbage.y;

		this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
	}
	private touchMove(e: egret.TouchEvent) {
		this.garbage.x = e.stageX - this.offsetX
		this.garbage.y = e.stageY - this.offsetY
	}

	private stopMove(e: egret.TouchEvent) {
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
	}
}