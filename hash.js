// Dic--》Map
import {defaultToString} from './utils'


class ValuePair{
    construcotr(key,value){
        this.key=key;
        this.value=value;
    }
    toString(){
        // 返回一个pair 
        return `[#${this.key}: ${this.value}]`;
    }
}


class Dictionary{
    constructor(toStrFn=defaultToString){
        this.toStrFn=toStrFn; // key必须转换为字符串
        this.table={};
    }

    // has
    hasKey(key){
        return this.table[this.toStrFn(key)] != null
    }


// set
    set(key,value){
        if(key !==null && value !== null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey]=new ValuePair(key,value);
            return true;

        }
        return false;
    }
// remove
   remove(key){
       if(this.hasKey(key)){
           delete this.table[this.toStrFn(key)];
           return true
       }

       return false;
   }

// 检索
 get(key){
     const valuepair = this.table[this.toStrFn(key)];
     return valuepair===null? undefined : valuepair.value;
 }

// keyvalues
keyValues() {
    const valuePairs = [];
    for (const k in this.table) { // {1}
      if (this.hasKey(k)) {
        valuePairs.push(this.table[k]); // {2}
      }
    }
    return valuePairs;
    // 或者直接返回
    // return Object.values(this.table);
  };
// 返回键值

  keys() {
    const keys = [];
const valuePairs = this.keyValues();
for (let i = 0; i < valuePairs.length; i++) {
  keys.push(valuePairs[i].key);
}
return keys;

    // return this.keyValues().map(valuePair => valuePair.key);
  }

  // 返回所有值

  values(){
    return this.keyValues().map(valuePair => valuePair.value);
  }

// 迭代方法




// size

size() {
    return Object.keys(this.table).length;
}



// 是否为空

isEmpty() {
    return this.size() === 0;
}


//晴空

clear(){
    this.table = {};
}

// toString
toString(){

    if (this.isEmpty()) {
        return '';
    }

    const valuePairs=this.keyValues();
    let objString;

    for (let i=0; i<valuePairs.length; i++){

        objString +=`${valuePairs[i].toString()}`

    }

    return objString

}




}
const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');



console.log(dictionary.size())





// hash