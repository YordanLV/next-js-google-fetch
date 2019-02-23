import {observable, action} from 'mobx';
  

class CounterStore {
  @observable positionLeft = 50;
  @observable loadedClass = '';
  
  @action onLoadClass(loadedClass){
    this.loadedClass = loadedClass;
  }
  
}


export default new CounterStore();