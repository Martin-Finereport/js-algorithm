// create a Set
class mySet{
    constructor(){
        this.items={};
    }

    // has方法
    has(elem){
        // 不用in, 因为他会包含原型链上的
        return Object.prototype.hasOwnProperty.call(this.items,elem); 
    }

   // add方法, 重复的不会add
    add(elem){
        if(!this.has(elem)){
            this.items[elem]=elem;
            return true;

        }
        return false
    }


    // delete方法

    delete(elem){
        //先判断有元素, 才能删除
        if(this.has(elem)){
            delete this.items[elem];
            return true
        }

        return false;
    }


    // clear方法
    clear(){
        this.items={};
    }

    // size

    size() {
        return Object.keys(this.items).length; // {1}
    };

    sizeLegacy() {
        let count = 0;
        for(let key in this.items) { // 先要判断此元素是否属于该层, 而不是原型链上的
          if(this.items.hasOwnProperty(key)) { // {3}
              count++;  // {4}
        }
        return count;
    };
    }


    //values
    values() {
        return Object.values(this.items);
    }

    valuesLegacy() {
        let values = [];
        for(let key in this.items) { // {1}
          if(this.items.hasOwnProperty(key)) {
            values.push(key); // {2}
          }
        }
        return values;
    };
// 并集
    union(otherSet){
        let newSet = new mySet();

        this.values().forEach(element => {
            newSet.add(element)
        });

        otherSet.values().forEach(ele=>{
            newSet.add(ele)
        })

        return newSet;

    }

    // 交集

    intersection(otherSet){
        let interSet=new mySet();

        let values=this.values();

        for (let i=0; i<values.length;i++){
            if(otherSet.has(values[i])){
                interSet.add(values[i])
            }
        }

        return interSet;

    }

    // 改进交集
    intersection2(otherSet) {
        const intersectionSet = new mySet(); // {1}
        const values = this.values(); // {2}
        const otherValues = otherSet.values(); // {3}
        let biggerSet = values; // {4}
        let smallerSet = otherValues; // {5}
        if (otherValues.length - values.length > 0) { // {6}
          biggerSet = otherValues;
          smallerSet = values;
        }
        smallerSet.forEach(value => { // {7}
          if (biggerSet.includes(value)) {
            intersectionSet.add(value);
          }
        });
        return intersectionSet;
      }


// 差集
   difference(otherSet){
       let differenceSet=new mySet();


       this.values.forEach(value=>{
           if(!otherSet.has(value)){
               differenceSet.add(value)
           }
       })

       return differenceSet

   }


   // 子集
   isSubsetOf(otherSet){
    if (this.size() > otherSet.size()) { // {1}
        return false;
      }
       let res=true;
// every可以提高效率, 只要返回true,就会继续迭代, 返回false,立即停止迭代
       this.values().every(val=>{

           if(otherSet.has(val)){
               return true
               
           }else{
               res=false;

               return false

           }
       })

       return res

   }
   


}

// const set = new mySet();

// set.add(1);
// console.log(set.values()); // 输出[1]
// console.log(set.has(1)); // 输出true
// console.log(set.size()); // 输出1

// set.add(2);
// console.log(set.values()); // 输出[1, 2]
// console.log(set.has(2)); // 输出true
// console.log(set.size()); // 输出2

// set.delete(1);
// console.log(set.values()); // 输出[2]

// set.delete(2);
// console.log(set.values()); // 输出[]


// const setA = new mySet();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// const setB = new mySet();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);

// const unionAB = setA.union(setB);
// console.log(unionAB.values());

const setA = new mySet();
setA.add(1);
setA.add(2);

const setB = new mySet();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new mySet();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set.values());//输出@Iterator



// 实际的set, 类数组, 可以用forEach迭代
// 使用扩展运算符
// 交集
console.log(new Set([...setA].filter(x => setB.has(x))));

//并集
console.log(new Set([...setA].filter(x => !setB.has(x))));


