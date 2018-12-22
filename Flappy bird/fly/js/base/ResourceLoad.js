//资源加载器--完成资源的加载后才能绘制

import {ResData}  from './ResData.js'
export  class ResourceLoad{
     constructor(){
       this.map = new Map(ResData)
       for(let [key,value] of this.map){
         const image = new Image();
         image.src=value;
         this.map.set(key,image)
       }
     }

     //create
     static create(){
        return new ResourceLoad()
     }

     //加载完成
     onLoad(callback){
       let loadCount =0;
       for(let value of this.map.values()){
         value.onload=()=>{
           loadCount++;
           if(loadCount>=this.map.size){
             callback(this.map)
           }
         }
       }
     }

}
