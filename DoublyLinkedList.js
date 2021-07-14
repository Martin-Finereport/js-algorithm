class ListNode {
    constructor(value,next=null,prev=null){
        this.value=value;
        this.next=next;
        this.prev=prev;
    }
}

//  双链表
class MyLinkedList{
    constructor(){
        this.head=null;
        this.count=0;
        
        // this.tail=null;
    }

// 增
    addAtTail(value){
        if(!this.head){
            this.head=new ListNode(value);
            this.count++;
            return this
        }
        
        let cur=this.head;
        while(cur.next){
            cur=cur.next;
        }
        let newNode= new ListNode(value,null,cur);
        cur.next= newNode;
        this.count++;

        return this
        
    }
// 插入头部
    addAtHead(value){
        if(!this.head){
            return this.addAtTail(value)
        }
        let newNode= new ListNode(value,this.head,null);
        this.head.prev=newNode;
        this.head=newNode;
        this.count++
        return this
    }
// 插入
 addAtIndex(index,value){
        if(index>this.count){
            return false
        } 
        if(index<=0){
            return this.addAtHead(value);
        }
        if(index===this.count){
            return this.addAtTail(value)
        }
        
        let count=0;
        
        let cur = this.head;

        while(cur){
            if(count===index){
              
               
                let newNode= new ListNode(value,cur,cur.prev);
                cur.prev.next=newNode;
                cur.prev=newNode;
                break;
               
            }
            count++;
            cur=cur.next;
        }
        this.count++;

        return this;


    }
// 删
    deleteAtIndex(index){
        if(index>this.count-1){
            return false
        }else{

       
        let cur=this.head;
        let count=0;
        while(cur){
            if(count===index){
                if(count===0){
                     return this.deleteHead();
                }else{
                    cur.prev.next=cur.next;
                    if(cur.next){
                        cur.next.prev=cur.prev;
                    }else{
                        cur.prev=null
                    }
                }
            }
            count++;
            cur=cur.next;
        }

        this.count--;

        return this
    }
    }
// 删除头部
   deleteHead(){
       if(!this.head){
           return false
       }
       
       this.head=this.head.next;
       if(this.head){
           this.head.prev=null;
       }
       
       this.count--;
       return this
   }



// 查

   get(index){
       let count=0;
       let cur=this.head;
       let res;
       
       while(cur){
           if(count===index){
               res=cur.value;
               console.log(res)
               break
           }
           count++;
           cur=cur.next;
       }

       return res!==undefined?res:-1;

   }
   
   toString(){
       let cur=this.head;
       let string='';
       while(cur){
           string +=`${cur.prev?'<-prev':null+'<-prev'},value:${cur.value},next${cur.next?'->':'->'+null}`;
           cur=cur.next;
       }

       return string +' '+'nodes:'+this.count
   }
}

// 测试用例
let DList = new MyLinkedList();
DList.addAtHead(86);
DList.addAtIndex(1,54);

DList.addAtIndex(1,14);


DList.addAtHead(83);
console.log(DList.toString())
DList.deleteAtIndex(4)
DList.addAtIndex(3,18);
console.log(DList.toString())


