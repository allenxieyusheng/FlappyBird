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
    
     if(!this.isGameOver){
        //游戏在运行
        const background = this.dataStore.get('background')
        const land = this.dataStore.get('land')
        // background.say()
        //return 回来的new 通过Sprite里面的draw绘制出来
        background.draw();
     
        const pencils = this.dataStore.get('pencils');

        this.dataStore.get('birds').draw(); 
    /*
    因为屏幕中只会存在四个元素 ，所以当需要销毁两个，然后按照第一组元素来创造
    当屏幕中有4个（2组）铅笔 而且数组的第一个铅笔的消失在屏幕左边，就弹出第一组（前两个铅笔）
    这里的数值，按照两组元素之间的空隙来算
    */
    if(pencils[0].x+pencils[0].width<=0&&pencils.length===4){
      console.log("当前元素")
      console.log(pencils)
      pencils.shift();
      pencils.shift();
    }
     /*  创建元素
        当第一组元素到屏幕的左边，就创建一组
    */
    if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 &&
                pencils.length === 2) {
                console.log("连续创造")
                this.createPencil();
    } 
    pencils.forEach(function (value) {
        console.log("x");
        console.log(value);
        value.draw();
    });
    land.draw();
    this.timer = requestAnimationFrame(()=>this.run())
     }else{
        cancleAnimationFrame(this.timer)
     }
    //根据浏览器的帧率来不断的run，全部canvas重会 即使是很小的修改
    // this.timer = requestAnimationFrame(()=>this.run())
    //也可以将定时器放入 DataStore中  this.dataStore.put("timer",timer)
    //停止
    // cancleAnimationFrame(this.timer)
  }


}
