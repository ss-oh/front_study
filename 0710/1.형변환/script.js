// 불린으로 형변환
// 뭔가 존재한다 싶으면 true
// 없다는 느낌은 전부 false

let a = Boolean(1);
console.log(typeof a, a);

// 스페이스바 하나도 문자 하나이므로 ture
a = Boolean("    ");
console.log(typeof a, a);

// 빈 문자열이 false
a = Boolean("");
console.log(typeof a, a);

// null, undefined, NaN이런 느낌들은 false
a = Boolean(null);
console.log(typeof a, a);

// 연산자 ( + , - , * , / , % , **제곱)
let x = (y = z = 10);

// 논리연산자 ( &&, ||, ! )

// 동등연산자 ( == )
// ==연산자 : 자료형 상관없이 같냐라고 물어봄 / !=
let num2 = 10;
let num1 = 10;
// let num2 = Number(prompt("숫자를 입력해주세요"));
console.log(num1 == num2);
console.log(false == 0);
console.log("" == 0);

// === 연산자 : 일치연산자의 엄격버전( 자료형까지 구분함 ) / !==
console.log(num1 === num2);
console.log(false === 0);
console.log("" === 0);
