// const array = [];
// let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';

// console.log(text);

// console.log(!undefined);
// console.log(!null);


// const dog = {
//     name: '멍멍이'
// };

// function getName(animal) {
//     if (animal) {
//         return animal.name;
//     }
//     return undefined;
// }

// const name = getName();
// console.log(name);

// function getSound(animal) {
//     const sounds = {
//         개: '멍멍!',
//         고양이: '야옹~',
//         참새: '짹짹',
//         비둘기: '구구 구 구'
//     };
//     return sounds[animal] || '...?';
// }

// console.log(getSound('개')); // 멍멍!
// console.log(getSound('비둘기')); // 구구 구 구


// const deepObject = {
//     state: {
//         information: {
//             name: 'velopert',
//             languages: ['korean', 'english', 'chinese']
//         }
//     },
//     value: 5
// };

// const {
//     state:{
//         information:{name,languages}
//     },
//     value
// } = deepObject;

// console.log(name,languages,value);

// const numbers = [0, 1, 2, 3, 4, 5, 6];
// const [...rest] = numbers;

// console.log(rest)