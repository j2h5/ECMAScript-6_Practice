// 컬렉션 set, map

let set = new Set("abcdabcdxxxyyy");
console.log(set);

//set에 추가
set.add("z");
console.log(set);
console.log(set.has("x")); // x를 포함하고 있으면 true
console.log(set.has("!")); //!를 포함하고 있으면 true
console.log("길이 : " + set.size); // 길이 : 7
console.log(...set); // 펼침연산자
set.delete("a"); //a 삭제
console.log(...set); // 펼침연산자
set.clear(); // 전체 삭제
console.log(set.size); // 갯수 0


let map = new Map();
let a = {n : 1}; // json type
map.set(a, "A"); // key가 json 타입 가능
map.set("2", 9);
map.set("2", 11); //같은 key값일 경우 덮어쓴다.

console.log(map);
console.log(...map);
console.log(map.has("2")); //2라는 key 값이 있는가

map.delete("2"); // key가 2인 데이터 삭제
console.log(map);

map.clear(); //전체삭제
console.log(map);