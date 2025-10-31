const myNumers = [1,2,3,4,5,6,7,8,9,10]

/*const newNums = myNumers.map( (num) => {return num + 10})
console.log(newNums);*/

const newNums = myNumers
                .map((num) => num*10)     // map me true ho ya false dono pass hota hai
                .map((num) => num + 1)
                .filter((num)=> num >= 40)                   // filter me jo true hota hai wahi pass hota hai
console.log(newNums);
