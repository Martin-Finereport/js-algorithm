// 节点类

class Node {
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}

// 单链表
class Linkedlist{
    constructor(){
        this.head=null;
        this.count=0;
        
        // this.tail=null;
    }

// 增
    append(value){
        if(!this.head){
            this.head=new Node(value);
            this.count++;
            return this;
        }

        let cur=this.head;
        while(cur.next){
            cur=cur.next;
        }
        cur.next=new Node(value);
        this.count++;

        return this
    }
// 插入头部
    appendToHead(value){
        let newNode=new Node(value,this.head);
        this.head=newNode;
        this.count++;
        return this
    }
// 插入
    insert(count,value){
        if(count>this.count){
            return false;
        }
        let cur=this.head;
        let countinner=0;
        while(cur){
            if(countinner===count){
                if(countinner===0){
                    this.appendToHead(value)
                }else{
                    let newNode= new Node(value,cur.next);
                    cur.next=newNode;
                }    
            }
            countinner++;
            cur=cur.next;
        }
        this.count++;

        return this
    }
// 删
    delete(target){
        if(!this.head){
            return false
        }
        let cur=this.head;
        let prev=null;
        while(cur){
            if(cur.value===target){
                if(cur===this.head){
                    return this.deleteHead()
                }else{
                    prev.next=cur.next;
                    cur.next=null;
                }
            }
            prev=cur;
            cur=cur.next;
        }
       
        this.count--;
        return this


    }
// 删除头部
   deleteHead(){
       if(!this.head){
           return false
       }
       this.head=this.head.next;
       this.count--;
       return this
   }



// 查
   find(value){
       let cur=this.head;
       let res=false;
       while(cur){
           if(cur.value===value){
               res=true
               break;
           }
           cur=cur.next;
       }
       return res
   }
   
   toString(){
       let cur=this.head;
       let string='';
       while(cur){
           string +=`value:${cur.value},next${cur.next?'->':'->'+null}`;
           cur=cur.next;
       }

       return string +' '+'nodes:'+this.count


   }
}

let List = new Linkedlist()

List.append(1);

List.append(2);
List.appendToHead(10);
List.append(5);
List.insert(1,7)



console.log(List.find(2));

console.log(List.toString())



