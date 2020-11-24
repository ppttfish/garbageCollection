class ScenesController {
	public constructor() {
	}

	private static scenesControler: ScenesController
	private _stage: egret.DisplayObjectContainer

    private stageHeight: number
    private stageWidth: number

	// 开始场景
	private startScenes: GameBaseScreen

	// 游戏场景
	private playScenes: GameBaseScreen

	public static get instance() {
		if (!this.scenesControler) {
			this.scenesControler = new ScenesController()
		}

		return this.scenesControler
	}

	// public get _stageHeight() {
	// 	return this._stage.s
	// }

	public init() {
		console.log('this._stage', this._stage.height)
		this.playScenes = new GameBaseScreen()
        this._stage.addChild(this.playScenes) 
        GameUtil.instance.setBg(this.playScenes.getBg)
        const ashcan = new Ashcan()
        this._stage.addChild(ashcan)
        GameUtil.instance.addAshcanToList(ashcan.$children)
	}

	public setStage(stage: egret.DisplayObjectContainer) {
		this._stage = stage
	}

	/**
	 * 设置开始场景触摸
	 */
	public setS

	/**
     * 设置舞台高度
     */
    public setStageHeight(height: number) {
		console.log('setStageHeight', height)
        this.stageHeight = height
    }

    public setStageWidth(width: number) {
        this.stageWidth = width
    }

    /**
     * 获取舞台高度
     */
    public get getStageHeight() {
		console.log('this.stageHeight', this.stageHeight)
        return this.stageHeight
    }

    public get getStageWidth() {
        return this.stageWidth
    }

}