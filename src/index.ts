// const myName:string='Animes Barman'

// console.log(myName)

// //type assertion

// let anything:any;

// anything='animes barman';

// (anything as string);

// const kgtogm=(value:string | number):string | number | undefined=>{

//     if(typeof value=== 'string'){
//         const comvertValue=parseInt(value);
//         return comvertValue;
//     }else if(typeof value== 'number'){

//         return value
//     }

// }


// console.log(kgtogm(2000) as number);




//interface 

// type User1={
//     name:string;
//     age:number;
// }

// type UserWithRoll=User1 & {role:string};



// const user:UserWithRoll={

//     name:'animes',
//     age:20,
//     role:'manager'
// }


// interface Student{
//     name:string;
//     age:number;
// }


// interface UserWidthRole2 extends Student {
//     reole:string;
// }

// const student1:UserWidthRole2={
//     name:'animes barman',
//     age:30,
//     reole:'admin'

// }


// type Roll=number[];

// interface Rolle2{
//     [index:number]:number
// }


// const rollNumber:Rolle2=[20,20,1,0,15,0,1,100,0,1,0];


// type Add=(a:string,b:string)=> string;

// interface Add1{
//     (a:string, b:string): string
// }


// const add:Add1=(a,b)=>{

//     return `${a}, ${b}`

// }


// console.log(add('salam', 'kalam'))


//generic type

// type GenericArray<parems>=Array<parems>

// const rollNumbers:GenericArray<number>=[10,2,0,11,0,1,0,140]
// const   friends:GenericArray<string>=['kamla', 'jamal', 'salam'];
// const booleanArray:GenericArray<boolean>=[true, false, true, false];



// const user:GenericArray<{name:string;age:number;role?:string}>=[
//     {name:'kalam',age:20},
//     {name:'kalam1',age:30},
//     {name:'kalam2',age:20,role:'admin'}
// ];

// //generic tuple

// type GenericTuple<x,y>=[x,y] 

// const manus:GenericTuple<string, string>=['mr. x', 'ar. y']
// const bike:GenericTuple<number, number>=[5, 5]
// const girl:GenericTuple<string, object>=['komola sundori', {bf:'kamal'}]



//generic interface

interface Developer<T , b>{
    name:string,
    computer:{
        name:string,
        model:string,
        brand:string,
    }
    smartWatch:T,
    bike?:b
}

const poorDeveloper:Developer<{name:string, price:number}, null>={
    name:'Animes',
    computer:{
        name:'asus',
        model:'gigasinic',
        brand:'samsung'
    },
smartWatch:{
    name:'apple',
    price:20000,
}

}

type Bike={
    name:string,
    model:string
}
const richDeveloper:Developer<{name:string, price:number}, Bike>={
    name:'Animes',
    computer:{
        name:'asus',
        model:'gigasinic',
        brand:'samsung'
    },
smartWatch:{
    name:'apple',
    price:20000,
},
bike:{
    name:'yamaha',
    model:'r15'
}
}




