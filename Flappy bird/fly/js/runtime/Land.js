//地上
import {Sprite}  from '../base/Sprite.js'
import {DataStore} from '../base/DataStore.js'

export class Land extends Sprite {
  constructor() {
     const image = Sprite.getImage('land')
     super(image,
            0,0,
            image.width,
            image.height,
            //图片在canvas中放置的位置
            0,DataStore.getInstance().canvas.height-image.height,
            image.width,
            image.height,
     )
     //因为地板是需要向左边移动的 所以这先设定
     this.landX =0;
     //移动的速度，也可以将这个量放在director里面 统一管理
     this.landSpeed=2

  }
  //Overload 重写父类的draw方法
  draw(){
    //这里动态改变图片在canvas中的位置
    this.landX = this.landX+this.landSpeed;
    //这里注意，landX+canvas.width=this.img.width, 当landX+canvas.width>this.img.width,说明已经走完了，可以比划下
    if(this.landX>(this.img.width-DataStore.getInstance().canvas.width)){
      this.landX=0
    }
    // console.log("这里this指向的是land");
    //这里注意了，当this的指向不在本类中 ，则会指向父类中的实例
    //比如 this.img 在类中没有，那么就指向Sprite中的img 这里所指向的是构造里面的image
    super.draw(
      this.img,
      this.scrX,this.scrY,
      this.srcW,this.srcH,
      -this.landX,
      this.y,
      this.width,
      this.height,
    )
  }

}
