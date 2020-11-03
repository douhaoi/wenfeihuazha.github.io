// const { keys } = require("./docs/.vuepress/config/nav")

class Vue{
  constructor(options){
    // 1. 通过属性保存选项的数据
    this.$options = options || {}
    this.$data = options.data || {}
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
    // 2. 把data中的成员转换成 getter 和 setter,注入到vue实例中
    this._proxyData(this.$data)
    // 3. 调用 observer 对象,监听数据的表达式
    new Observer(this.$data)
    // 4. 调用 compoler 对象,解析指令和差距表达式
    new Compiler(this)
  }

  _proxyData(data){
    // 遍历data中的所有属性
    Object.keys(data).forEach(key => {
      // 把data的属性注入到vue实例中
      Object.defineProperty(this,key,{
        enumerable:true,
        configurable:true,
        get(){
          return data[key]
        },
        set(newValue){
          if(newValue === data[key]){
            return
          }
          data[key] = newValue
        }
      })
    })
  }
}


class Observer{

  constructor(data){
    this.walk(data)
  }

  walk(data){
    // 1. 判断data是否是对象
    if(Object.prototype.toString.call(data) !== '[object Object]'){
      return
    }
    // 2. 遍历data对象的所有属性
    Object.keys(data).forEach(key => {
      this.defineReactive(data,key,data[key])
    })
  }

  defineReactive(obj,key,val){
    let self = this
    // 负责收集依赖,并发送通知
    let dep = new Dep()
    // 如果val是对象,把val内部的属性转换为响应式数据
    this.walk(val)
    Object.defineProperty(obj,key,{
      enumerable:true,
      configurable:true,
      get(){
        // 收集依赖
        Dep.target && dep.addSub(Dep.target)
        return val
      },
      set(newValue){
        if(newValue === val){
          return
        }
        val = newValue
        self.walk(newValue)
        // 发送通知
        dep.notify()
      }
    })
  }
}

class Compiler{
  constructor(vm){
    this.el = vm.$el
    this.vm = vm
    this.compile(this.el)
  }

  // 编译模板,处理文本节点和元素节点
  compile(el){
    let childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      if(this.isTextNode(node)){
        this.compileText(node)
      }else if(this.isElementNode(node)){
        this.compileElement(node)
      }

      // 判断node节点,是否有字节点,如果有字节点,要递归调用compile
      if(node.childNodes && node.childNodes.lentth){
        this.compile(node)
      }
    })
  }

  // 编译元素节点,处理指令
  compileElement(node){
    // 遍历所有属性节点
    Array.from(node.attributes).forEach(attr=>{
      // 判断是否是指令
      let attrName = attr.attrName
      if(this.isDirective(attrName)){
        // v-text -> text
        attrName = attrName.substr(2)
        let key = attr.value
        this.update(node,key,attrName)
      }
    })
  }

  update(node,key,attrName){
    let updateFn = this[attrName+'Update']
    updateFn && updateFn.call(this,node,this.vm[key],key)
  }

  // 处理 v-text 指令
  textUpdater(node,value,key){
    node.textContent = value
    new Watcher(this.vm,key,(newValue)=>{
      node.textContent = newValue
    })
  }

  modelUpdater(node,value,key){
    node.value = value
    new Watcher(this.vm,key,(newValue)=>{
      node.value = newValue
    })
    // 双向绑定
    node.addEventListener('input',()=>{
      this.vm[key] = node.value
    })
  }

  // 编译文本节点,处理插值表达式
  compileText(node){
    // {{ msg }}
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent
    if(reg.test(value)){
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg,this.vm[key])

      // 创建watcher对象
      new Watcher(this.vm,key,(newValue)=>{
        node.textContent = value.replace(reg,newValue)
      })
    }
  }

  // 判断元素属性是否是指令
  isDirective(attrName){
    return attrName.statrsWith('v-')
  }

  // 判断节点是否是文本节点
  isTextNode(node){
    return node.nodeType === 3
  }

  // 判断节点是否是元素节点
  isElementNode(node){
    return node.nodeType === 1
  }
}


class Dep{
  constructor(){
    // 存储所有的观察者
    this.subs = []
  }
  // 添加观察者
  addSub(sub){
    if(sub && sub.update){
      this.subs.push(sub)
    }
  }
  // 发送通知
  notify(){
    this.subs.forEach(sub=>{
      sub.update()
    })
  }
}

class Watcher{
  constructor(vm,key,cb){
    this.vm = vm
    // data中的属性名称
    this.key = key
    // 回调函数负责更新视图
    this.cb = cb

    // 把watcher对象记录到Dep类的静态属性target中
     = this
    // 触发get方法,在get方法中会调用addSub

    this.oldValue = vm[key]

    Dep.target = null
  }

  // 当数据发生变化的时候更新视图
  update(){
    let newValue = this.vm[this.key]
    if(this.oldValue === newValue){
      return
    }
    this.cb(newValue)
  }
}