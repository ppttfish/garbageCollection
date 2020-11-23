class Garbages extends egret.DisplayObjectContainer {
	public constructor(img: string, size = { width: 53, height: 48 }, location = { x: 0, y: 0 }, type) {
		super()
		this.garbage = GameUtil.createBitmapByName(img)
		this.addChild(this.garbage)
		console.log('this1', this)
		this.garbage.width = size.width
		this.garbage.height = size.height
		this.type = type

		this.garbage.x = location.x
		this.garbage.y = location.y
		this.init()
	}

	private garbage: egret.Bitmap
	private type: string
	private offsetX: number
	private offsetY: number
	private glowFilter: egret.GlowFilter = GameUtil.getGarbageGlowFilter

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
		this.filters = [ this.glowFilter ]
	
		this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
	}
	private touchMove(e: egret.TouchEvent) {
		this.garbage.x = e.stageX - this.offsetX
		this.garbage.y = e.stageY - this.offsetY

		const ashcanList =  GameUtil.instance.getAshcanList

		let flag1 = GameUtil.instance.isHit(this.garbage, ashcanList[0])
		let flag2 = GameUtil.instance.isHit(this.garbage, ashcanList[1])
		let flag3 = GameUtil.instance.isHit(this.garbage, ashcanList[2])
		let flag4 = GameUtil.instance.isHit(this.garbage, ashcanList[3])
		console.log('flag1', flag1)
		console.log('flag2', flag2)
		console.log('flag3', flag3)
		console.log('flag4', flag4)
		console.log('type', this.type)
		if (flag1 && this.type === 'dry') {
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
			this.parent.removeChild(this)
		} else if (flag2 && this.type === 'wet') {
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
			this.parent.removeChild(this)
		} else if (flag3 && this.type === 'recy') {
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
			this.parent.removeChild(this)
		} else if (flag4 && this.type === 'harm') {
			console.log('x', ashcanList[3])
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
			this.parent.removeChild(this)
		}
	}

	private stopMove(e: egret.TouchEvent) {
		this.filters = []
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
	}

}