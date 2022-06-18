var search = function(nums, target) {
    
    let mid
    let l=0
    let n=nums.length-1;
    for(let i=0;i<n;i++){
        if(nums[i]>nums[i+1]) {
            mid=i;
            break;
        }
    }
    while(l<=n){
        if(nums[mid]===target)return true
        else if(nums[l]<=target&&nums[mid]>target){
            console.log("n",n);
            
            mid-=1
            n=mid
        }
        else if(nums[mid+1]<=target && nums[n]>=target){
            console.log("l",l);
            mid+=1
            l=mid
        }
        else{

            return false
        }
    }
};


console.log(search([2,5,6,0,0,1,2],10));