const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
/*for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}*/    // syntax of for in loop

for (const key in myObject) {
    
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming =["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
    
    
}

/*const map = new Map()   // map iteratable nhi hai agr koi cize iteratable nhi hai toh loop me nhi likhte hai 
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")
for (const key in map) {
    
    console.log(key);
    
    
}*/

// array ke upr lgna hoga toh for of loop lga deenge
// object ke andr for in loop use krnge