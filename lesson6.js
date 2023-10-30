let arr = Array.from(Array(10))
const target = 5
arr=arr.map(
    (i) =>
    Math.round (Math.random()* 10) 
).sort((a,b)=> a-b)
console.table(arr) 

function binarySearch (arr, target){ 
    let i =0 
    let j = arr.length-1
    while (i<= j){ 
        const m = Math.floor((i+j)/2) 
        if (arr[m]=== target){ 
            return m 
        } 
        else if (arr[m]<target){ 
            i= m+1 
        } 
        else{ 
            j= m-1 
        } 
        return
}
}
const result = binarySearch(arr, target)
console.log(result) 