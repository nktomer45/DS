
 var maxArea = function(height) {
    let n=height.length-1
    let l=0
    let maxval=0
    while(l<n){
       let  maxvalue=Math.min(height[l],height[n])*(n-l);
       console.log(maxvalue,"jdfjd",maxval);
       maxval=Math.max(maxval,maxvalue)
        if(height[l]<height[n]){
            l++
        }else{

            n--
        }
    }
    return maxval
    
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));


///49