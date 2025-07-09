// var name = "bhargav"
// var age = 23
// console.log(name)
// var name = "ghoniya"
// console.log(name)

// let name = "bhargav"
// var age = 23
// console.log(name)
// name = "ghoniya"
// console.log(name)

// const name = "bhargav"
// var age = 23
// console.log(name)
// name = "ghoniya"
// console.log(name)

// let name = "null"
// console.log(name)
// name = "ghoniya"
// console.log(name)




// let obj = {
//     name: "bahrgav",
//     age: 99,
//     arr: ["bhargav","ghoniya",99],
//     obj2:{
//         boy: "Bandra"
//     }
// }
// console.log(typeof arr);
// console.log(Array.isArray(obj.arr));
// console.log(obj.arr);


// function sum(a,b)
// {
//     console.log(a+b);
// }
// sum(2,2)

 

// let sum = (a,b) => console.log(a+b);
// sum(4,4)





// function sum(a,b){
//     return a+b;
// }

// function calculate(sum){
//     console.log(sum(5,5))
// }
// calculate(sum)




// let arr = ["12",1,2,3,4,5]
// arr.map(function (i){
//     console.log(i);
// });



// console.log("arr length",arr.length);
// let newarr = arr.filter(function (i){
//     return i <= 3;
// });
// console.log(newarr);
// console.log("new arr length", newarr.length);




// let arr1 = [1,2,3,4,5];
// let newarr1 = arr1.map(function (a,b){
//     return a + b;
// });
// console.log(newarr1);




// let arr1 = [1,2,3,4,5];
// let newarr1 = arr1.reduce(function (a,b){
//     return a * b;
// });
// console.log(newarr1);




// getUser(userid, (user) => {
//     getOrder(user, (orders) => {
//         processOrder(orders, (processed) =>{
//             sendEmail(processed,(confirmation) => {
//                 console.log("Order Processed: ",confirmation)
//             });
//         });
//     });
// });





// let promise = new Promise(function (resolve, reject){
//     //resolve("Promise is resolved");
//     reject("promise is reject");
// });
// console.log("Promise ",promise);

// promise
//     .then((data) => {
//         console.log("Promise is resolve")
//     })
//     .catch((error) => {
//         console.log("Promise is reject")
//     });




// let age = 17;
// let promise = new Promise(function (resolve, reject) {
//     if (age >= 18) {
//         resolve("Eligible for license");
//     } else {
//         reject("Not eligible for license");
//     }
// });

// console.log("Promise:", promise);

// promise
//     .then((data) => {
//         console.log("License is resolved:", data);
//     })
//     .catch((error) => {
//         console.log("License is rejected:", error);
//     });



// let promise = new Promise(function (resolve, reject){
//     setTimeout(() => {
//         console.log("First Step Completed");
//         setTimeout(() => {
//             console.log("Second Step Completed");
//             setTimeout(() =>{
//                 try{
//                     console.log("try block");
//                     console.log("Ghoniya");
//                 }catch (error){
//                     reject("Error")
//                 }
//             },1000)
//         },2000)
//     },3000)
// })









// async function sum(){
//     var a = 5;
//     return a;
// }
// sum().then(a => {
//     console.log("Value of a:", a); 
// });



// async function sum() {
//     var a = 5;
//     return a;
// }
// async function main() {
//     let a = await sum();
//     console.log("Value of a:", a); 
// }
// main();



// async function doSomeTask(){
//     console.log("hello World");
// }
// doSomeTask();





// async function doSomeTask(){
//     const data = await fetch("https://dog.ceo/api/breeds/image/random");
//     const result = await data.json();
//     console.log("Result-->", result);
// }
// doSomeTask();


async function doSomeTask(){
    try{
        const data = await fetch("https://dog.ceo/api/breeds/image/random");
        const result = await data.json();
        console.log("Result-->", result);
    }
    catch(error){
        console.log("Error-->",error);
    }
}

