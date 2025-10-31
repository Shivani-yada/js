// singleton 
// Object.create //constructor method

// object literals 
const mySym = Symbol("Key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary ",
  //  mySym: "myKey1", //mySym ka data type symbol ki trh use nhi ho re hai(interview ques)
  [mySym]: "myKey1",  // yaha sumbol ki trh use ho re hai
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)  // normal case me . se access krte hai
console.log(JsUser["email"])    //specail case me value ko access [] use krke krte hai
console.log(JsUser["full name"])
//console.log(JsUser.mySym)
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());