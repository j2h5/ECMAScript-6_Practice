let arr1 = [2, 3, 4];
let arr2 = [6, 7];
let arr3 = [11,22, ...arr1, 12, ...arr2];

console.log(arr3.length);
console.dir(arr3);

let arr4 = [...[100,200], ...arr2];
console.log(arr4);


function fsum(arr){
    let sum = 0;
    //방법1
//        for(i=0; i<arr.length; i++ ){
//            sum+=arr[i];
//        }
    //방법2
        for(let a in arr){
            sum+=arr[a];
        }
        
        console.log("합계="+sum);
}

fsum(arr3);


function func3(a,b,c,d,e){
    console.log(a,b,c,d,e);
}
//호출해보세요, arr3를 인자로 보내기
func3(arr3);
func3(...arr3);