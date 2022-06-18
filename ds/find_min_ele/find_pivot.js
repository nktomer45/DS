// pivot in sorted and rotated array


const pivot=(arr,n)=>{
    let l=0;
    if(n===-1 || n===0){
        return arr[n]
    }
    if(n==1){
        if(arr[1]>arr[0])return arr[1]
        return arr[0]
    }
    while(l<n){
        let mid=Math.floor(l+(n-l)/2)
        
        if(arr[mid]>arr[mid-1]&& arr[mid]>arr[mid+1]){
            return arr[mid]
        }
        if(arr[mid]<arr[mid-1]){
            n--
        }
        n++
    }
}
let arr=[10]
let n=arr.length-1
console.log(pivot(arr,n));
