/*Given an array of bird where every element represents a bird type id, determine the ids of the most
frequently and least frequently sighted type. If more than 1 type has been spotted that maximum
amount, return the smallest of their ids & If more than 1 type has been spotted that minimum amount,
return the smallest of their ids.*/


const input = [1,2,2,4,4,4,4,5];

function birds(arr){

    arr.sort();

    let max = 0;
    let min=arr.length;
    let tempFreq = 0;
    let maxItem, minItem;

    for(let i=0; i<arr.length; i++){
        if(arr[i]==arr[i+1]){
            tempFreq++;
        }
        else{
            if(max<tempFreq){
                max=tempFreq;
                maxItem=arr[i];
            }
            if(min>tempFreq){
                min=tempFreq;
                minItem=arr[i];
            }
            tempFreq=0;
        }
    }

    return [maxItem,minItem];
}

console.log(birds(input));