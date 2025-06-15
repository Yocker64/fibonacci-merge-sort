
function mergeSort(array) {
  if (array.length <=1) {
    return array
  } 
  if (array.length ==2) {
    return orderOrderedArrays([array[0]],[array[1]])
  }

  let middle = Math.ceil(array.length/2);
  let right = middle;
  let newArray = []
  

  console.log(array);
  console.log(middle);
  

  
  // newArray.push(...mergeSort(array.splice(0,middle)))
  // newArray.push(...mergeSort(array.splice(0,middle)))
  newArray = orderOrderedArrays(mergeSort(array.splice(0,middle)),mergeSort(array.splice(0,middle)))
  // mergeSort(array.splice(0,middle))
  return newArray
 
}

function orderOrderedArrays(array1, array2) {
  let index1 = 0
  let index2= 0
  let orderedArraysOrdered = []
  while (index1<array1.length && index2< array2.length) {
    if (array1[index1]<array2[index2]) {
      orderedArraysOrdered.push(array1[index1]);
      index1 += 1;
    }else{
      orderedArraysOrdered.push(array2[index2])
      index2 +=1;
    }
  }
  if (index1== array1.length) {
    orderedArraysOrdered.push(...array2.splice(index2,array2.length-index2))
    console.log(array2.splice(index2,array2.length-index2));
  }else{
    orderedArraysOrdered.push(...array1.splice(index1,array1.length-index1))
  }
  return orderedArraysOrdered
}

console.log(mergeSort([2,1,132,65,56,12,344,12,5,1431342,123,12,344,12]));

// let arr = [8,7,5,1]
// console.log(mergeSort(arr));
