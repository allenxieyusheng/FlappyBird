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
    const minTop = DataStore.getInstance().cnavas/8
    const maxTop = DataStore.getInstance().canvs/2;
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
    // background.draw();
    // land.draw();

    let pencils = this.dataStore.get('pencils')
    console.log("OPOP");
    console.log(pencils);
    console.log(pencils[0]);
    //根据浏览器的帧率来不断的run，全部canvas重会 即使是很小的修改
    // this.timer = requestAnimationFrame(()=>this.run())
    //也可以将定时器放入 DataStore中  this.dataStore.put("timer",timer)
    //停止
    // cancleAnimationFrame(this.timer)
  }


}
