// var threeSum = function(nums) {
//    nums.sort((a,b)=>a-b)
//    let res=[]
//    let n=nums.length;
//    for(let i=0;i<n;i++){
//        if(i>0&& nums[i]===nums[i-1]) continue
//            let target=0-nums[i]
//            let left =i+1
//            let right=n-1
//            while(left<right){
//                let sum=nums[left]+nums[right]
//                if(sum>target){
//                    right--
//                }
//                else if(sum<target){
//                    left++
//                }else{
//                    res.push([nums[i],nums[left],nums[right]])
//                    if(nums[left]===nums[left+1]) left++
//                    else if(nums[right-1]===nums[right]) right--
//                    left++
//                    right--
//                }
//            }
//    }
//     return res;
// };

var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let res=[]
    let n=nums.length;
    for(let i=0;i<n;i++){
        if(nums[i]===nums[i-1]&& i>0) continue;
        let target= 0-nums[i];
        let left=i+1;
        let right =n-1;
        while(left<right){
            let sum=nums[left]+nums[right]
            if(sum>target) right--; 
            else if(sum<target) left++;
            else{
                res.push([nums[i],nums[left],nums[right]])
                if(nums[left]===nums[left+1])left++
                else if(nums[right]===nums[right-1]) right--
                left ++
                right--
            }
        }
    }
    return res
};


console.log(threeSum([-1,0,1,2,-1,-4]))