// Kth Largest Element in an Array
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5


var findKthLargest = function(nums, k) {
    let nMax=0
    nums.sort((a,b)=>b-a);
    for(let i=0;i<nums.length;i++){
        if(i===k-1){
            console.log(nums[i])
            nMax=nums[i]
            break
        }
    }
    return nMax
};


console.log(findKthLargest([1,2,4,6,5,3],2));