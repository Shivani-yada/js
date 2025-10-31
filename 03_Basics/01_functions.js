/*console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S")
console.log("H");*/

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S")
    console.log("H");
}
//sayMyName()

/*function addTwoNumber(number1, number2){  //number is paramerts
   console.log(number1 + number2);
}*/
function addTwoNumber(number1, number2){  //number is paramerts
   // let result = number1 + number2
    //return result;//result ke baad kuch bhi print nhi hoga
    return number1 + number2
  
}

const result = addTwoNumber(3,5)
//console.log("Result: ",result);

addTwoNumber(3,4)   // 7  // 3,4 is argument
addTwoNumber(3,"4")  // 34
addTwoNumber(3,"a")   // 3a
addTwoNumber(3,null)  // 3

function loginUserMessage(username = "sam"){
    if(username === undefined){       //if(!username)
       console.log("Please enter a username");
       return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2,...num1){    // ...rest operator
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} nad price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username : "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));