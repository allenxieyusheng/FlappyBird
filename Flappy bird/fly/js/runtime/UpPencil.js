// //上边的铅笔 top的值是负的
import {Pencil} from './Pencil.js'
import {Sprite}  from '../base/Sprite.js'

 export class UpPencil extends Pencil{
  constructor(top){
    const image = Sprite.getImage('upPencil')
    super(image,top);
  }
  draw(){
    this.y = this.top-this.height
    super.draw();
  }
}
