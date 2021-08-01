let Bubblesort = function(arr){
    let length=arr.length;
    if(length<=1) return arr;
    // flag 标记是否产生交换
    let flag=false
    for(let i=0; i<length ; i++){
        for(let j=0; j<length-i-1; j++){
            if(arr[j]>arr[j+1]){
             swap(arr,j,j+1);
             flag=true
            };
        }
        if(!flag) break;
    }
    return arr;
}


function swap(arr,i,j){
    let temp;
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}


// 可能产生溢出
function swap2(arr,i,j){
    arr[i]=arr[i]-arr[j];
    arr[j]=arr[i]+arr[j];
    arr[i]=arr[j]-arr[i];
}
// 最优
function swap3(arr,i,j){
    arr[i]=arr[i]^arr[j];
    arr[j]=arr[i]^arr[j];
    arr[i]=arr[j]^arr[i];
}


let a=[1,3,5,6,7];

Bubblesort(a);
