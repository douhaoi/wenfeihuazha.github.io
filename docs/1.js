const fs = require('fs')
const fp = require('lodash/fp')

class IO {

  static of(value){
    return new IO(function(){
      return value
    })
  }

  constructor(fn){
    this._value = fn
  }

  map(fn){
    return new IO(fp.flowRight(fn,this._value))
  }

  join(){
    return tjos._value()
  }

  flatMap(fn){
    return this.map(fn).join()
  }
}

