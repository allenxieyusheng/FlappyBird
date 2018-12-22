export class DataStore{
  constructor(){
    this.map =new Map()
  }
  //资源单例
  static getInstance(){
    //挂载在类的原型链上
    if(!DataStore.instance){
      DataStore.instance = new DataStore();
    }
    return DataStore.instance
  }

  //加入元素，这里的所加入的元素是实例的对象 而不是简单的资源池
  put(key,value){
    console.log(value);
    if(typeof value =="function"){
      value=new value()
    }
    this.map.set(key,value);
    // console.log("当前的DataStore")
    // console.log(this.map);
    //这里return this的目的是方面链式调用 eg:put(1,'abc').put(2,"cbd")
    return this;
  }
  //取出元素--通过key来取出元素
  get(key){
    return this.map.get(key)
  }

  //资源的全部销毁
  destroy(){
    for(let value of this.map.values()){
      value =null
    }
  }
}
