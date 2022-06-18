//Repeat and Missing Number Array
//arr=[3,1,2,5,3]

const repeat = (arr) => {
    arr.sort((a,b)=>a-b);
    let originsum =0
    let curorigin =0
    let result=new Array(2);
    for(let i=0;i<arr.length;i++){
        let originElement=Math.abs(arr[i]);
        let index=originElement-1;
        if(arr[index]<0){
            result[0]=originElement
        }
        arr[index]=-arr[index]
        originsum+=(i+1);
        curorigin+=originElement
    }
    result[1]=originsum-(curorigin-result[0])
    return result
    // for (let i = 0; i < arr.length; i++) {
    //     let abs_value = Math.abs(arr[i]);
    //     // console.log("abs_value",abs_value);
    //     if (arr[abs_value - 1] > 0) {
    //         // console.log("index",arr);
    //         arr[abs_value - 1] = -arr[abs_value - 1]
    //         // console.log("index",arr);
    //     }
    //     else {
    //         result[0] = abs_value
    //     }
    // }
    // console.log("index",arr)
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         result[1] = i + 1
    //     }
    // }
    // return result

}

const arr = [3, 1, 2, 5, 3] 

console.log(repeat(arr))
