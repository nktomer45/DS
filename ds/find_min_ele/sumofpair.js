const sumpair=(arr,n,r,key)=>{
    if(r<n&& r>=0 ){
        if(arr[r]===key){
            console.log(arr[r])
            return r
        }
        if(arr[r]>key){
            console.log(arr[r])
            r=r-1
            return sumpair(arr,n,r,key)
        }
        else{
            r = r+1;
            console.log("hy",arr[r])
            return sumpair(arr,n,r,key)
        }
    }
    else
     return "not found"
    
}

const sumofpair=(arr,key)=>{
    let i;
    let n=arr.length
    for(i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1])
            break;
let r=i
return sumpair(arr,n,r,key)    
}

let arr = [11, 15, 6, 8, 9, 10]
let key = 110;

let n = arr.length

console.log(sumofpair(arr,key))