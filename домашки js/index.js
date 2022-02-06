// Сложные циклы 

// for of
// map
// forEach
// filter


// let moshin_bozor = [
//     {
//         name: 'malibu',
//         color: 'white',
//         isPropan: true,
//         price: 24,
//     },
//     {
//         name: 'nexia',
//         color: 'brown',
//         isPropan: false,
//         price: 8,
//     },
//     {
//         name: 'captiva',
//         color: 'brown',
//         isPropan: false,
//         price: 30,
//     },
//     {
//         name: 'kamaz',
//         color: 'brown',
//         isPropan: false,
//         price: 60,
//     },
//     {
//         name: 'matiz',
//         color: 'brown',
//         isPropan: false,
//         price: 8,
//     },
//     {
//         name: 'Sanata',
//         color: 'black',
//         isPropan: false,
//         price: 54,
//     },
//     {
//         name: 'Damas',
//         color: 'grey',
//         isPropan: true,
//         price: 9,
//     },
//     {
//         name: 'Tahoe',
//         color: 'White',
//         isPropan: false,
//         price: 52,
//     },
//     {
//         name: 'malibu',
//         color: 'white',
//         isPropan: true,
//         price: 34
//     },
//     {
//         name: 'nexia',
//         color: 'black',
//         isPropan: false,
//         price: 8
//     },{
//         name: 'gentra',
//         color: 'black',
//         isPropan: false,
//         price: 12
//     },  
//     {
//         name: 'malibu 2',
//         price: '30',
//         color: 'black',
//         isFast: true ,
//     } ,
//     {
//         name: 'nexia',
//         price: '6',
//         color: 'black',
//         isFast: true ,
//     } ,
//     {
//         name: 'lambo',
//         price: '1 mln',
//         color: 'red',
//         isFast: true ,
//     } ,
//     {
//         name: 'tesla',
//         color: 'pink',
//         isPropan: false,
//         price: 4
//     },
//     {
//         name: 'chevrolet',
//         color: 'black',
//         isPropan: true,
//         price: 10
//     },
//     {
//         name: 'kia',
//         color: 'red',
//         isPropan: false,
//         price: 18
//     },
//     {
//         name: 'Gentra',
//         color: 'red',
//         isPropan: false,
//         price: 18
//     },
//     {
//         name: '    Gentra',
//         color: 'red',
//         isPropan: false,
//         price: 18
//     },
// ]

// for(let item of moshin_bozor) {

// }
// let firstLetter = prompt('').trim()
// firstLetter = firstLetter.toLowerCase()[0]


// for (let item of moshin_bozor){
//     // console.log(item.name)
//     let fixedName = item.name.trim().toLowerCase()

//     if(fixedName[0] === firstLetter) {
//         console.log(item);
//     }
// }


// for(let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${5 * i}`);
// }


let user = {
    id: Math.random(),
    name: 'John',
    age: 29,
    isMarried: false,
}

let user_study = {
    scores: 5,
    university: 'SAMGU'
}

// Склеить два объекта 
// сделать массив из значений 
// и отфильтровать массив по типам данных 

let newObj = Object.assign(user, user_study)
let newArr = Object.values(newObj)

let str = []
let num = []
let bool = []

for(let item of newArr) {
    if(typeof(item) === 'string') {
        str.push(item)
    } else if (typeof(item) === 'number') {
        num.push(item)
    }
}

console.log(str,num);
// console.log(newObj);
// methods of object

// console.log(Object.values(user));
// console.log(Object.keys(user));
// console.log(Object.entries(user));
// console.log(Object.freeze(user));
// let newObj = Object.assign(user,user_study)