function fibonacci(number, array = []) {
  if (number <= 0) {
    return array
  }else{
     if (array.length == 0) {
  array.push(0)
  console.log();
  
 }else if (array.length == 1) {
  array.push(1)
 }else{
  array.push(array[array.length-1]+ array[array.length-2])
 }
 
 return fibonacci(number-1,array)

  }

}

let bro = fibonacci(9);
console.log(bro);
