//导演类 全局的游戏控制

import {DataStore}  from './js/base/DataStore.js'

import {UpPencil} from './js/runtime/UpPencil.js'
import {DownPencil} from './js/runtime/DownPencil.js'

export class  Director{
  constructor() {
    this.dataStore = DataStore.getInstance();
  }
  static getInstance(){
    if(!Director.instance){
      Director.instance = new Director()
    }
    return Director.instance
  }

  //创建成对的铅笔
  createPencil(){
    //设定最高最低
    // const minTop = DataStore.getInstance().cnavas.height/8
    const minTop = DataStore.getInstance().canvas.height / 8;
    const maxTop = DataStore.getInstance().canvas.height/2;
    const top = minTop+Math.random()*(maxTop-minTop);
    this.dataStore.get('pencils').push(new UpPencil(top));
    this.dataStore.get('pencils').push(new DownPencil(top));
  }
  //开始游戏
  run(){
    const background = this.dataStore.get('background')
    const land = this.dataStore.get('land')
    // background.say()
    //return 回来的new 通过Sprite里面的draw绘制出来
    background.draw();

    const pencils = this.dataStore.get('pencils');
    if (pencils[0].x <= (DataStore.getInstance().canvas.width - pencils[0].width) / 2 &&
                pencils.length === 2) {
                this.createPencil();
    }
    pencils.forEach(function (value) {
        console.log("x");
        console.log(value);
        value.draw();
    });
    land.draw();

    //根据浏览器的帧率来不断的run，全部canvas重会 即使是很小的修改
    // this.timer = requestAnimationFrame(()=>this.run())
    //也可以将定时器放入 DataStore中  this.dataStore.put("timer",timer)
    //停止
    // cancleAnimationFrame(this.timer)
  }


}
