// //下边
// import {Pencil} from './Pencil.js'
// import {Sprite}  from '../base/Sprite.js'
// import {DataStore} from '../base/DataStore.js'
//
//
//  export class DownPencil extends Pencil{
//   constructor(top){
//     const image = Sprite.getImage('downPencil')
//     super(image,top);
//   }
//   draw(){
//     console.log("绘制下铅笔");
//     //上下铅笔之间的距离是canvas的1/5  downPencilL y= top+gap  upPencil: y=top-height
//     let gap = DataStore.getInstance().canvas.height/5;
//     this.y = this.top+gap
//     super.draw();
//   }
// }


//下半部分铅笔
import {Pencil} from "./Pencil.js";
import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class DownPencil extends Pencil {
    constructor(top) {
        const image = Sprite.getImage('downPencil'); 
        super(image, top);
    }

    draw() {
        let gap = DataStore.getInstance().canvas.height / 5;
        this.y = this.top + gap;
        super.draw();
    }

}
