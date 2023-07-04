//find common elements in three sorted array 

const array1 = [11,12,13,14,15,16]
const array2 = [12,13,14,15,16,17]
const array3 = [13,14,15,16,17,18]
let length = 0
let result = []
let num = -1

for(let i = 0 ; i < array1.length ; i++){
    for(let j = 0 ; j <array2.length ; j++){
        if(array1[i]==array2[j]&& array2[j]!= num){
            for(let k = 0 ; k <array3.length ; k++  ){
                if (array1[i]==array3[k]) {
                    result[length] = array1[i] 
                    length++
                    array1[i]=array2[j]=array3[k] = num
                }
            }
        }
    }
}

console.log(result);