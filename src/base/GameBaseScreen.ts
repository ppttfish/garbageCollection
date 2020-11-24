class GameBaseScreen extends egret.DisplayObjectContainer {
	public constructor() {
		super()
		this.init()
	}

	private bg: egret.Bitmap
    private garbagesList = []

	private init() {
		this.bg = GameUtil.createBitmapByName("bg_png")
        let stageW = ScenesController.instance.getStageWidth
        let stageH = ScenesController.instance.getStageHeight

        this.bg.width = 1400
        this.bg.height = stageH;
        this.bg.x = 0
        this.bg.y = 0

        this.bg.touchEnabled = true
        let x:number

		this.addChild(this.bg)
		this.setGarbages()

		this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchStart, this)
        this.bg.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this)

        function touchStart(e: egret.TouchEvent) {
            x = e.stageX - this.bg.x

            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, move, this);
        }
        function move(e: egret.TouchEvent) {
            if (Math.abs(e.stageX - x) < this.bg.width - stageW && e.stageX - x < 0) {
                this.bg.x = e.stageX - x
                this.garbagesList.map(garbage => garbage.x = e.stageX - x)
            }
        }
        function stopMove(e: egret.TouchEvent) {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, move, this);
        }
	}

    
    public get getBg() {
        return this.bg
    }

    private setGarbages() {
        const guantou_recy = new Garbages('guantou_recy_png',
        {
            width: 120/2, height: 100/2
        }, {
            x: 280/2, y: 1350/2
        }, 'recy')
        this.garbagesList.push(guantou_recy)

        const guopi_wet = new Garbages('guopi_wet_png',
        {
            width: 129/2, height: 100/2
        }, {
            x: 380/2, y: 1531/2
        }, 'wet')
        this.garbagesList.push(guopi_wet)

        const beike_dry = new Garbages('beike_dry_png',
        {
            width: 190/2, height: 113/2
        }, {
            x: 608/2, y: 1500/2
        }, 'dry')
        this.garbagesList.push(beike_dry)

        const gutou_wet = new Garbages('gutou_wet_png',
        {
            width: 165/2, height: 60/2
        }, {
            x: 740/2, y: 1409/2
        }, 'wet')
        this.garbagesList.push(gutou_wet)

        const xiguapi_wet = new Garbages('xiguapi_wet_png',
        {
            width: 191/2, height: 130/2
        }, {
            x: 858/2, y: 1500/2
        }, 'wet')
        this.garbagesList.push(xiguapi_wet)

        const dianchi_harm = new Garbages('dianchi_harm_png',
        {
            width: 90/2, height: 110/2
        }, {
            x: 1380/2, y: 1360/2
        }, 'harm')
        this.garbagesList.push(dianchi_harm)

        const zhixiang_recy = new Garbages('zhixiang_recy_png',
        {
            width: 210/2, height: 224/2
        }, {
            x: 1740/2, y: 1440/2
        }, 'recy')
        this.garbagesList.push(zhixiang_recy)

        const lajidai_dry = new Garbages('lajidai_dry_png',
        {
            width: 220/2, height: 264/2
        }, {
            x: 1990/2, y: 1740/2
        }, 'dry')
        this.garbagesList.push(lajidai_dry)

        const yantou_dry = new Garbages('yantou_dry_png',
        {
            width: 121/2, height: 60/2
        }, {
            x: 2390/2, y: 1840/2
        }, 'dry')
        this.garbagesList.push(yantou_dry)

        const that = this
        this.garbagesList.map(garbage => that.addChild(garbage))
    }
    
}