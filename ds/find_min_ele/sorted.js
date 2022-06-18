class Solution {
    search(A, l, h, key) {
        let mid=Math.floor((l+h)/2)  
        if(h<l) return -1
     //   if(h===l) return l
        if(A[mid]===key) {
            return mid
        }
        if(A[l]<=A[mid]){
            if(key>=A[l]&&key<=A[mid]){
                return this.search(A,l,mid-1,key);
            }else{
                return this.search(A,mid+1,h,key)
            }
        }
        else{
            if(key>A[mid]&&key<=A[h]){
                return this.search(A,mid+1,h,key)
            }
            return this.search(A,l,mid-1,key)
        }
    }  
}
let arr = [4,5,6,7,0,1,2]
let key =6;

let n = arr.length -1
// console.log(n)
let sol = new Solution()
console.log(sol.search(arr, l = 0, n, key))