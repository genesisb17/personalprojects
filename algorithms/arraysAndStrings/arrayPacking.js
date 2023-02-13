/*
You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

The first element of the array occupies the first 8 bits of M;
The second element occupies next 8 bits, and so on.
Return the obtained integer M.

Note: the phrase “first bits of M” refers to the least significant bits of 
M - the right-most bits of an integer. For further clarification see the following example.

Example

For a = [24, 85, 0], the output should be arrayPacking(a) = 21784.

An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary. 
After packing these into one number we get 00000000 01010101 00011000 
(spaces are placed for convenience), which equals to 21784.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
1≤a.length≤4,
0≤a[i]≤256.

[output] integer

https://wachino.github.io/codefights/codefights-arcade/codefights-arcade-thecore/18_arrayPacking/README.html


*/



function arrayPacking(a) {
	while (a.length < 4)
		a.push(0);
	return a[3] << 24 | a[2] << 16 | a[1] << 8 | a[0];
}


function arrayPackingBAD(a) {
    let bits = [];
    for(let num of a){
      //get bit strings from each num
      let numArr = [];
      
      //add 8-str.length num of 0 to end of bitString 
      while(num > 0){
        numArr.unshift(num % 2);
        num = Math.floor(num/2);
      }
      for(let i = 0; i <= 8 - numArr.length; i++){
        numArr.unshift(0);
      }
      bits.concat(numArr);  
    }
    console.log(bits);
    
    let output = 0;
    for(let i = 0; i < bits.length;i++){
      output += ((Math.pow(2, i))*bits[bits.length-1-i]);
   }
    return output;
  }
  
  