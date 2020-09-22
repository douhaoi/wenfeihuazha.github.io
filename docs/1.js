const PEMDING = 'pending';//等待
const FULFILLED = 'fulfilled';//成功
const REJECTED = 'rejected';//失败

class MyPromise{

  constructor(execurot){
    try {
      execurot(this.resolve,this.reject);//立即执行的执行器
    } catch (error) {
      this.reject(error)      
    }
  }

  // promise 状态
  status = PEMDING;
  // 成功之后的值
  value = undefined;
  // 失败的原因
  reason = undefined;

  // 成功回调
  successCallback = [];
  // 失败回调
  failCallback = [];

  resolve = value => { //箭头函数是为了避免 this 指向出问题 要指向class
    // 如果状态不为pending 阻止程序向下执行
    if(this.status !== PEMDING) return;
    // 讲状态改为成功
    this.status = FULFILLED;
    // 保存成功之后的值
    this.value = value;
    // 判断成功回调是否存在
    // this.successCallback && this.successCallback(this.value);
    while(this.successCallback.length) this.successCallback.shift()();
  }

  reject = reason => {
    // 如果状态不为pending 阻止程序向下执行
    if(this.status !== PEMDING) return;
    // 讲状态改为失败
    this.status = REJECTED;
    // 保存失败之后的原因
    this.reason = reason
    // 判断失败回调是否存在
    // this.failCallback && this.failCallback(this.reason);
    while(this.failCallback.length) this.failCallback.shift()(this.reason);
  }

  then(successCallback,failCallback){
    successCallback = successCallback ? successCallback : value => value
    failCallback = failCallback ? failCallback : reason => {throw reason}
    let promise2 = new MyPromise((resolve,reject)=>{
      // 判断状态
      if(this.status === FULFILLED){
        // 防止promise2未生成 所以通过setTimeout改为异步代码
        setTimeout(()=>{
          try {
            let x = successCallback(this.value);
            // 判断 x 的值是普调值还是promise对象
            // 如果是普调值 直接调用resolve
            // 如果是promise对象 查看promise对象返回的结果
            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
            resolvePromise(promise2,x,resolve,reject);
          } catch (error) {
            reject(error)
          }
        },0)
      }else if(this.status === REJECTED){
        setTimeout(()=>{
          try {
            let x = successCallback(this.value);
            // 判断 x 的值是普调值还是promise对象
            // 如果是普调值 直接调用resolve
            // 如果是promise对象 查看promise对象返回的结果
            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
            failCallback(promise2,x,resolve,reject);
          } catch (error) {
            reject(error)
          }
        },0)
      }else{ //代表当前状态为等待状态
        this.successCallback.push(()=>{
          setTimeout(()=>{
            try {
              let x = successCallback(this.value);
              // 判断 x 的值是普调值还是promise对象
              // 如果是普调值 直接调用resolve
              // 如果是promise对象 查看promise对象返回的结果
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              failCallback(promise2,x,resolve,reject);
            } catch (error) {
              reject(error)
            }
          },0)
        })
        this.failCallback.push(()=>{
          failCallback();
        });
      };
    });
    return promise2;
  }

  resolvePromise(promise2,x,resolve,reject){
    if(promise2 === x){
      return reject(new TypeError('xxxxx'));
    }
    if(x instanceof MyPromise){
      // promise对象
      // x.then(value=>{resolve(value)},(reason)=>{reject(reason)})
      x.then(resolve,reject)
    }else{
      // 普调值
      resolve(x);
    }
  }
}