// function increaseAndPrint(n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const value = n + 1;
//             if (value === 5) {
//                 const error = new Error();
//                 error.name = 'ValueIsFiveError';
//                 reject(error);
//                 return;
//             }
//             console.log(value);
//             resolve(value);
//         }, 1000);
//     });
// }

// increaseAndPrint(0)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .catch(e => {
//         console.error(e);
//     });

/* const sleep = ms => new Promise(resolve=>setTimeout(resolve,ms));

async function process(){
    console.log("gdgd!");
    await sleep(1000);
    console.log("hihi!");
}

process().then(() => {
    console.log('작업이 끝났어요!');
}); */

/* function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}

process(); */

/* function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};
const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
};

async function process() {
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
}

process(); */

/* function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};
const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
};

async function process() {
    const [dog,rabbit,turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process(); */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};
const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
};

async function process() {
    const first = await Promise.race([
        getDog(),
        getRabbit(),
        getTurtle()
    ]);
    console.log(first);
}

process();