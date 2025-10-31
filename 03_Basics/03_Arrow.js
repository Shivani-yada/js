const user = {
    username : "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  // this current context ko refer krta hai
        console.log(this);  //this current values ki baat krta hai
    }
}

/*user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()*/

//console.log(this);  // this empty object ko refer krta hai coz globel ke andr koi context nhi hai 

// browser ke andr jo globel object hai window object hai ----interview que

/*function chai(){
    let username = "hitesh"
  //  console.log(this); //node eniverment ke andr globel value,microtask,structure clone,performance valuation ideal time kya hai fetch kya hai
    console.log(this.username); // ya context object ke andr kaam krta hai function ke andr nhi(undefined) yaha pr this nhi use kr pa re hai
}
chai()*/

/*const chai = function () {
    let username = 'hitesh'
    console.log(this.username); // yaha pr n=bhi this work nhi krnge output undefined hi hoga
}
chai()*/

/*const chai = () => {
    let username = "hitesh"
   // console.log(this.username);  // undefined
   console.log(this); //{}  
}
chai() */

//const addTwo = (num1,num2) => {
// return num1 + num2  
// }    {} me lkhoge toh return likhna pdge agr() me likhoge toh return nhi likhna pdnge

// const addTwo = (nu1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)  --- number return kr re hai

//const addTwo = (num1, num2) => {username: "hitesh"}  //undefined result aynge coz iss trh se object ko return nhi krte hai

const addTwo =(num1, num2) => ({username: "hitesh"}) //object ko return krne ke liye {} isko () me rap krna pdta hai

console.log(addTwo(3,4))

//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach()
