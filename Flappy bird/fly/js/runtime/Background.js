
import {Sprite} from '../base/Sprite.js'
import {DataStore} from '../base/DataStore.js'
export class Background extends Sprite{
    constructor(){
      /*子类必须在constructor方法中调用super方法，
      否则新建实例时会报错。
      这是因为子类自己的this对象，
      必须先通过父类的构造函数完成塑造，
      得到与父类同样的实例属性和方法，
      然后再对其进行加工，加上子类自己的实例属性和方法。
      如果不调用super方法，子类就得不到this对象。
      */
      //通过Sprite里面的static getImage获得
      const image = Sprite.getImage('background');
      super(image,
          0,0,
          image.width,
          image.height,
          0,0,
          DataStore.getInstance().canvas.width,
          DataStore.getInstance().canvas.height
      )

      // console.log(Sprite.getImage);
    }

    // console.log(Sprite.getImage);
    // constructor(ctx,img){
    //     super(ctx,img);
    // }
    say(){

    }
}
