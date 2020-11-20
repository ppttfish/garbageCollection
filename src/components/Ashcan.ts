class Ashcan extends egret.DisplayObjectContainer {
	public constructor() {
		super()
		this.init()
	}

	// 干垃圾桶
	private dry_collection: egret.Bitmap
	// 湿垃圾桶
	private wet_collection: egret.Bitmap
	// 可回收垃圾桶
	private recy_collection: egret.Bitmap
	// 有害垃圾桶
	private harm_collection: egret.Bitmap

	private collection_widht: number = 137
	private collection_height: number = 170
	
	private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

	private init() {
		this.dry_collection = this.createBitmapByName('dry-collection_png')
		this.wet_collection = this.createBitmapByName('wet-collection_png')
		this.recy_collection = this.createBitmapByName('recy-collection_png')
		this.harm_collection = this.createBitmapByName('harm-collection_png')
		this.setColletionSize(137, 170)
		this.setColletionLocation({ x: 45, y: 620 }, 42)

		console.log('dry_collection', this.dry_collection)
		this.addChild(this.dry_collection)
		this.addChild(this.wet_collection)
		this.addChild(this.recy_collection)
		this.addChild(this.harm_collection)
	}

	public setColletionSize(width: number, height: number) {
		this.collection_widht = width
		this.collection_height = height

		this.dry_collection.width = width
		this.wet_collection.width = width
		this.recy_collection.width = width
		this.harm_collection.width = width

		this.dry_collection.height = height
		this.wet_collection.height = height
		this.recy_collection.height = height
		this.harm_collection.height = height
	}

	public setColletionLocation(start={ x: 0, y: 0 }, gap: number) {
		this.dry_collection.x = start.x
		this.dry_collection.y = start.y

		this.wet_collection.x = start.x + this.collection_widht + gap
		this.wet_collection.y = start.y

		this.recy_collection.x = (start.x + this.collection_widht + gap) * 2
		this.recy_collection.y = start.y

		this.harm_collection.x = (start.x + this.collection_widht + gap) * 3
		this.harm_collection.y = start.y
		
	}
}