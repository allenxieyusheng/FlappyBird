
import {ResourceLoad} from './js/base/ResourceLoad.js'
import {DataStore}  from './js/base/DataStore.js'
import {Director}  from './Director.js'
import {Background} from "./js/runtime/Background.js"
import {Land} from './js/runtime/Land.js'

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
    // console.log("开始绘制");
     //1.将需要绘制的资源的实例 put到DataStore,这里传入的类Background 在js中 typeof 类==function
    this.DataStore.put('background',Background)
                  .put('land',Land)

    this.Director.run();
  }

}
