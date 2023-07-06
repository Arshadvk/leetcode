let array = [1,0,0]

let k=0
for (let i=0;i<array.length;i++){
    
    if(array[i]===0){
[array[k],array[i]]=[array[i],array[k]]
k++
    }
}
console.log(array);