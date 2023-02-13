//NXN MATRIX 90 DEGREE ROTATION 

function rotate90(arr){
    let n = arr[0].length;
    for(let layer = 0; layer < Math.floor(n/2)-1; layer++){
        let bound = n - layer - 1;
        for(let j = layer; j <= bound ; j++){
            let offset = j - layer;
            let uL = arr[layer][j];
            let uR = arr[offset][j];
            let lR = arr[offset][offset];
            let lL = arr[layer][offset];
            arr[layer][j] = uR;
            arr[offset][j] = lR;
            arr[offset][offset] = lL;
            arr[layer][offset] = uL;
            console.log(arr);
    }
}
    console.log(arr);
    return arr;
}


function testRotate90Case1(){
    const arr = [
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9, 10, 11, 12],
    [13, 14, 15, 16]];

    const out = [ [ 13,  9, 5, 1 ],
    [ 14, 10, 6, 2 ],
    [ 15, 11, 7, 3 ],
    [ 16, 12, 8, 4 ] ];

   return out == rotate90(arr);
}

console.log(testRotate90Case1());

function testRotate90Case2(){
    const arr = [
        [12, 44, 65, 38, 12],
        [91, 99, 12, 45, 43],
        [11, 22, 33, 44, 55],
        [99, 88, 77, 66, 55],
        [23, 45, 67, 78, 89]
    ]
}