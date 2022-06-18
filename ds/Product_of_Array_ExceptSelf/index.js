var productExceptSelf = function (nums) { /// O(N^2)
    result = []

    for (let i = 0; i < nums.length; i++) {
        let currsum=1
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue
            }else{
                currsum*=nums[j]
            }
        }
        result.push(currsum)

    }
    return result
};

// console.log(productExceptSelf([-1,1,0,-3,3]))


var productExceptSelf2 = function (nums) { 
    let n=nums.length-1
    let prefix=1
    let res=[]
    for(let i=0;i<nums.length;i++){
        res[i]=prefix
        prefix*=nums[i]
    }
    console.log(res)
    let postfix=1
    for(let i=n;i>=0;i--){
        res[i]*=postfix
        postfix*=nums[i]
        // console.log(res)
    }
    return res
};

console.log(productExceptSelf2([1,2,3,4]))