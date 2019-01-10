
import {ResourceLoad} from './js/base/ResourceLoad.js'
import {DataStore}  from './js/base/DataStore.js'
import {Director}  from './Director.js'
import {Background} from "./js/runtime/Background.js"
import {Land} from './js/runtime/Land.js'

import {Birds} from "./js/player/Birds.js";

export default class Main {
  //初始化
  constructor(){
    //获取画布 找到画笔上下文
    this.canvas=document.getElementById("canvas")
    this.ctx = canvas.getContext('2d')
    //1.资源加载
    this.ResoucerLoad = ResourceLoad.create();
    this.ResoucerLoad.onLoad(map=>this.firstInit(map))

    //2. 全局数据
    this.DataStore = DataStore.getInstance();


    //3. 导演
    this.Director = Director.getInstance()

    // this.background = new Background()
    // this.ResoucerLoad = ResoucerLoad.create();
    // this.ctx.fillStyle = 'red'
    // this.ctx.fillRect(0, 0, 375, 667)
    // const image = new Image()
    // image.src = '/res/background.png'
    // image.onload =()=>{
    //
    //   console.log(image.width, image.height)
    //   this.ctx.drawImage(image, 0, 0,this.canvas.width,canvas.height)
    // }

  }
  //初次的加载
  firstInit(map){
    console.log("初次的加载，返回map形式的key-value（new Image）的资源");
  //全局资源挂在资源库上
    //1。将ctx附属在DataStore里面
    this.DataStore.ctx = this.ctx
    //2. 将加载完成的资源 附属
    this.DataStore.res=map
    //将canvas附属，其他地方需要canvas的高宽
    this.DataStore.canvas=this.canvas;

    //开始绘制游戏
    this.init()
  }
  init(){
    //注册点击事件
    this.registerEvent();
    //初始化游戏是没有结束的，挂在在direct
    this.Director.isGameOver = false
    // console.log("开始绘制");
     //1.将需要绘制的资源的实例 put到DataStore,这里传入的类Background 在js中 typeof 类==function
    this.DataStore.put('background',Background)
                  .put('land',Land)
                   //因为铅笔是成对出现的 这里采用数据的形式
                   // .put('pencils',[])
                   .put('pencils', [])
                   .put('birds', Birds)
    //这里注意一下哈 需要先创建铅笔才去run 否则会出现空数组 但是里面有数据的情况
    this.Director.createPencil();
    this.Director.run();
  }

  registerEvent(){
    //这里this的指向是main类 不用尖头函数是canvas对象
    this.canvas.addEventListener('touchstart', e => {
        //屏蔽掉JS的事件冒泡
        e.preventDefault();
        console.log("点击屏幕了");
        if (this.Director.isGameOver) {
            console.log('游戏开始');
            this.init();
        } else {
            this.Director.birdsEvent();
        }
    });
  }


}
