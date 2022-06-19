let [a,...b] = [1,2,3,4,5,6];
console.log(a); // 1
console.log(b); // 2 3 4 5 6

let [x,y,w,z] = [4,5,6,7];
console.log(x,y,w,z); //4 5 6 7

let[a1, b1, c1=10] = [4, 7]; // 값이 없을 경우 초기값 할당
console.log(a1, b1, c1);//4 7 10
