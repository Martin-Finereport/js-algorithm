// Dic--》Map
function defaultToString(item) {
    if (item === null) {
      return 'NULL';
    } else if (item === undefined) {
      return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
      return `${item}`;
    } else if(typeof item ==='object'){
        return `${item}`
    }
    return item.toString(); // {1}
}


class ValuePair{
    constructor(key, value){
        this.key=key;
        this.value=value;
    }
    toString(){
        // 返回一个pair 
        return `[#${this.key}: ${this.value}]`;
    }
}


// class Dictionary{
//     constructor(toStrFn=defaultToString){
//         this.toStrFn=toStrFn; // key必须转换为字符串
//         this.table={};
//     }

//     // has
//     hasKey(key){
//         return this.table[this.toStrFn(key)] != null
//     }


// // set
//     set(key,value){
//         if(key !==null && value !== null){
//             const tableKey = this.toStrFn(key);
//             this.table[tableKey]=new ValuePair(key,value);
    
//             return true;

//         }
//         return false;
//     }
// // remove
//    remove(key){
//        if(this.hasKey(key)){
//            delete this.table[this.toStrFn(key)];
//            return true
//        }

//        return false;
//    }

// // 检索
//  get(key){
//      const valuePair = this.table[this.toStrFn(key)];
//      return valuePair===null ? undefined : valuePair.value;
//  }

// // keyvalues
// keyValues() {
//     const valuePairs = [];
//     for (const k in this.table) { // {1}
//       if (this.hasKey(k)) {
//         valuePairs.push(this.table[k]); // {2}
//       }
//     }
//     return valuePairs;
//     // // 或者直接返回
//     // return Object.values(this.table);
//   };
// // 返回键值

// keys() {
//     const keys = [];
//     const valuePairs = this.keyValues();
//     for (let i = 0; i < valuePairs.length; i++) {
//        keys.push(valuePairs[i].key);
//         }
// return keys;

//     // return this.keyValues().map(valuePair => valuePair.key);
// }

//   // 返回所有值

//   values(){
//     return this.keyValues().map(valuePair => valuePair.value);
//   }

// // 迭代方法

// forEach(callbackFn) {
//     const valuePairs = this.keyValues(); // {1}
//     for (let i = 0; i < valuePairs.length; i++) { // {2}
//       const result = callbackFn(valuePairs[i].key, valuePairs[i].value); // {3}
//       if (result === false) {
//         break; // {4}
//       }
//     }
//   }


// // size

// size() {
//     return Object.keys(this.table).length;
// }



// // 是否为空

// isEmpty() {
//     return this.size() === 0;
// }


// //晴空

// clear(){
//     this.table = {};
// }

// // toString
// toString(){

//     if (this.isEmpty()) {
//         return '';
//     }

//     const valuePairs=this.keyValues();
//     let objString;

//     for (let i=0; i<valuePairs.length; i++){

//         objString +=`${valuePairs[i].toString()}`

//     }

//     return objString

// }




// }
// const dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'johnsnow@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com');



// console.log(dictionary.get('Gandalf'))



// console.log(dictionary.hasKey('Gandalf'));

// console.log(dictionary.remove('John'));



// console.log(dictionary.keyValues());
// dictionary.forEach((k) => {
//     console.log('forEach: ', `key: ${k}, value: ${v}`);
//   });

// hashTable

class HashTable{
    constructor(toStrFn=defaultToString){
        this.table={};
        this.toStrFn=toStrFn;
    }

    _loseloseHashCode(key) {
        if (typeof key === 'number') { // 如果是数字, 直接返回
          return key;
        }
        const tableKey = this.toStrFn(key); // 转化为字符串
        let hash = 0; // 初始化
        for (let i = 0; i < tableKey.length; i++) {
          hash += tableKey.charCodeAt(i); // {转化为ASCLL码
        }
        return hash % 37; // 
    }


    hashCode(key) {
        return this._loseloseHashCode(key);
    }


    // 加入散列表

    put(key,value){
        if(key !==null && value !==null){
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value); // 保留key
            return true
        }

        return false
    }

    // 获取值
    get(key){
        const valuePair = this.table[this.hashCode(key)];
        return valuePair ==null? undefined : valuePair.value;
    }

    // 删除
    remove(key){
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];

        if(valuePair != null){
            delete this.table[hash];
            return true;
        }

        return false;
    }

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

toString() {
  if (this.isEmpty()) {
    return '';
  }
  const keys = Object.keys(this.table);
  let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
  for (let i = 1; i < keys.length; i++) {
    objString = `${objString},{${keys[i]} =>
${this.table[keys[i]].toString()}}`;
  }
  return objString;
}


}


const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');




console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');

console.log(hash.toString())

