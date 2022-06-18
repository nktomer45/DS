const trappingRainWater=(arr)=>{
    let n= arr.length;
    let leftside=0;
    let rightside=0;
    let larr=[];
    let rarr=[];
    let trap=0;
    // for(let i=0;i<n;i++){ //leftside
    //     leftside=Math.max(leftside,arr[i])
    //     larr.push(leftside)
    // }
    for(let j=n-1;j>=0;j--){
        rightside=Math.max(rightside,arr[j]);
        rarr.unshift(rightside);
    }
    for(let i=0;i<n;i++){


        leftside=Math.max(leftside,arr[i])
        let mindiff=Math.min(leftside,rarr[i]);
        trap+=mindiff-arr[i]
    }
return trap
}

// console.log(trappingRainWater([3,0,0,2,0,4]))


const mintimetrappingRainWater=(arr)=>{
    let n=arr.length
    let l=0
    let r=n-1
    let lsar=arr[l];
    let rsar=arr[r];
   let  result=0
    while(l<r){
        if(lsar<rsar){
            l+=1
            lsar=Math.max(lsar,arr[l])
            result+=lsar-arr[l]
        }
        else{
            r-=1
            rsar=Math.max(rsar,arr[r]);
            result+=rsar-arr[r]
            
        }
    }
    return result

}

console.log(mintimetrappingRainWater([1,8,6,2,5,4,8,3,7]));        