const sumpair = (arr, sum) => {
    let n=arr.length
    let l
    let r
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            r = i    ///max value
            l = i + 1
            break;
        }
    }
    while (l != r) {
        if (arr[l] + arr[r] > sum)
            r=(n+r-1)%n
        else if (arr[l] + arr[r] < sum) {
            l=(l+1)%n
        }
        else if(arr[l]+arr[r]===sum){
            return true
        }
    }
    return false
}

console.log(sumpair([11, 15, 6, 8, 9, 10,],41));