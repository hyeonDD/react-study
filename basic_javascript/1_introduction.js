// let value=1;
// console.log(value);
// value=2;
// console.log(value);

// const a=1;
// a=2;

// let criminal;
// console.log(criminal);

// const a=!true;
// console.log(a);

// const a=10;
// if (a>15){
//     console.log('a가 15 큽니다.');
// }else{
//     console.log("a가 15보다 크지 않습니다.");
// }

// function hello(name){
//     console.log('Hello,'+name+'!');
// }

// hello('hihi');

// const add = (a,b)=>{
//     return a+b;
// };

// console.log(add(1,2));

// const dog={
//     name:'멍멍이',
//     age:2    
// };

// console.log(dog.name);
// console.log(dog.age);


// const sample = {
//     'key with space': true
// };
// console.log(sample["key with space"]);


// const ironMan = {
//     name: '토니 스타크',
//     actor: '로버트 다우니 주니어',
//     alias: '아이언맨'
// };

// const captainAmerica = {
//     name: '스티븐 로저스',
//     actor: '크리스 에반스',
//     alias: '캡틴 아메리카'
// };

// console.log(ironMan);
// console.log(captainAmerica);

// const print = (hero) => {
//     const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는${
//         hero.actor
//     }입니다.`;
//     console.log(text);
// }
// print(ironMan);
// print(captainAmerica);

// const print2 = (hero) => {
//     const {alias,name,actor}=hero;
//     const text = `${alias}(${name}) 역학을 맡은 배우는 ${actor} 입니다.`;
//     console.log(text);
// }

// print2(ironMan);
// print2(captainAmerica);

// const print3 = ({alias,name,actor})=>{
//     const text = `${alias}(${name}) 역학을 맡은 배우는 ${actor} 입니다.`;
//     console.log(text);
// }

// print3(ironMan);
// print3(captainAmerica);

// const dog = {
//     name: '멍멍이',
//     sound: '멍멍!',
//     say: function() {
//         console.log(this.sound);
//     }
// };

// dog.say();

// const numbers = {
//     a: 1,
//     b: 2,
//     get sum(){
//         console.log("sum 함수가 실행됩니다");
//         return this.a+this.b;
//     }
// };

// numbers.a = 5;
// console.log(numbers);

// console.log(numbers.sum);
// numbers.b=5;
// console.log(numbers.sum);


// const numbers = {
//     _a: 1,
//     _b: 2,
//     sum: 3,
//     calculate() {
//         console.log('calculate');
//         this.sum = this._a + this._b;
//     },
//     get a() {
//         console.log("get a")
//         return this._a;
//     },
//     get b() {
//         return this._b;
//     },
//     set a(value) {
//         console.log('a가 바뀝니다.');
//         this._a = value;
//         this.calculate();
//     },
//     set b(value) {
//         console.log('b가 바뀝니다.');
//         this._b = value;
//         this.calculate();
//     }
// };

// console.log(numbers.sum);
// numbers.a = 5;
// numbers.b = 7;
// numbers.a = 9;
// console.log(numbers.sum);
// console.log(numbers.sum);
// console.log(numbers.sum);

// const array = [1,2,3,4,5];
// const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

// objects.push({
//     name:'멍뭉이'
// });

// console.log(objects);

// const names = ['멍멍이', '야옹이', '멍뭉이'];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (let name of names){
//     console.log(name);
// }

// const doggy = {
//     name: '멍멍이',
//     sound: '멍멍',
//     age: 2
// };

// console.log(Object.entries(doggy));
// console.log(Object.keys(doggy));
// console.log(Object.values(doggy));

// const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// superheroes.forEach(hero => {
//   console.log(hero);
// });

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const square = n => n*n;
// const squared=array.map(square);
// console.log(squared)


// const todos = [
//     {
//         id: 1,
//         text: '자바스크립트 입문',
//         done: true
//     },
//     {
//         id: 2,
//         text: '함수 배우기',
//         done: true
//     },
//     {
//         id: 3,
//         text: '객체와 배열 배우기',
//         done: true
//     },
//     {
//         id: 4,
//         text: '배열 내장함수 배우기',
//         done: false
//     }
// ];

// const index = todos.findIndex(todo=>todo.id==3);
// console.log(index);

// const taskNotDone = todos.filter(todo=>todo.done==false);
// console.log(taskNotDone);

// const array = [1,2,3,4,5];

// let sum = array.reduce((total,current)=>total+current,0);
// console.log(sum);

// const countBiggerThanTen = numbers =>{
//     return numbers.filter(number=>number>10).length;
// }

// const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
// console.log(count); // 5

// function Animal(type,name,sound){
//     this.type=type;
//     this.name=name;
//     this.sound=sound;
//     this.say=function(){
//         console.log(this.sound);
//     }

// }

// const dog = new Animal('개', '멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');

// dog.say();
// cat.say();

// function Animal(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
// }

// Animal.prototype.say = function () {
//     console.log(this.sound);
// };
// Animal.prototype.sharedValue = 1;

// function Dog(name, sound) {
//     Animal.call(this, '개', name, sound);
// }
// Dog.prototype = Animal.prototype;

// function Cat(name, sound) {
//     Animal.call(this, '고양이', name, sound);
// }
// Cat.prototype = Animal.prototype;

// const dog = new Dog('멍멍이', '멍멍');
// const cat = new Cat('야옹이', '야옹');

// dog.say();
// cat.say();            

// class Animal {
//     constructor(type, name, sound) {
//         this.type = type;
//         this.name = name;
//         this.sound = sound;
//     }
//     say(){
//         console.log(this.sound);
//     }
// }

// const dog = new Animal('개', '멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');

// dog.say();
// cat.say();

class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
