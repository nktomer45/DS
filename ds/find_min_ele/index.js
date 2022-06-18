// Find the minimum element in a sorted and rotated array + search element
// arr=[4,5,6,7,1,2,3]

const findmin=(arr,n,low)=>{
    if(low>n)
    return -1
    if(low===n)return arr[low]
    while(low < n)
    {
        let mid = Math.floor(low + (n - low)/2);
        console.log(arr[mid])
        if (arr[mid] == arr[n])
            n--;
        else if(arr[mid] > arr[n])
            low = mid +1;
        else
            n = mid;
            
    }
return n
}







let a=[3,4,5,1,2]
let n= a.length-1; //6
let lowvalue=0;
console.log(findmin(a,n,0))


// let ui=[1,2,3,4,5,8]
// n=ui.length-1;
// console.log(binarysearch(ui,n,0,8))