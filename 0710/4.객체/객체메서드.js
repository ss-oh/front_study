// 객체 (object) 에는 함수(메서드)도 넣을 수 있음

let user = {};

user.hi = () => {
  console.log("hi");
};

user.hi();

function hi2() {
  console.log("hi2");
}

user.hi2 = hi2;
user.hi2();

let user2 = {
  name: "김자바",
  age: 20,

  hi: function () {
    console.log(this.name);
  },
};

user2.hi();

// 객체 참조

let a = {
  name: "홍길동",
};
let b = a;
a.name = "김자바";
console.log(a.name);

// 배열

let arr = [1, 2, 3, 4];
arr[0] = 20;
arr[1] = "a";
arr.push("dddd");

console.log(arr[0]);
arr.pop;
