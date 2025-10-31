const coding = ["js","ruby","java","python0","cpp"]
/*coding.forEach( function (val) {
    console.log(val);
    
})*/

/*coding.forEach( (item) => {
    console.log(item);
    
})*/

/*function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)*/

coding.forEach(  (item, index, arr)=>{
    console.log(item,index,arr);
})

/*const myCoding = [{
    languageName: "Java Script"
    languageFileName : "js"
}{
    languageName: "Java"
    languageFileName: "j"
}

]
myCoding.forEach((item) => {
    console.log(item.languageName);
})*/