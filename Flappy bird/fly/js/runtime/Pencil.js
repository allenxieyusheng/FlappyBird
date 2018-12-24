//铅笔的基类

import {Sprite}  from '../base/Sprite.js'
import {DataStore} from '../base/DataStore.js'


export class Pencil extends Sprite {
    constructor(image,top){
        super(image,
          0,0,
          image.width,image.height,
          //放在canvas的最右侧，
          DataStore.getInstance().canvas.width,0,
          image.width,image.height
        );
        //图形在canvs距离头部的位置，上铅笔是负值 下铅笔是正值
        this.top = top;
        //铅笔移动的速度
        this.moveSpeed=2
    }

    draw(){
      //这里的x和land的一样 放置的x的位置向左走
      this.x = this.x-this.moveSpeed;
      super.draw(this.img,
        0,0,
        this.width,this.height,
        this.x,this.y,
        this.width,this.height,
      )
    }
}
