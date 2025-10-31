// Immediately Invoked Function Expressions (IIFE)

(function chai(){   //---rap krne ke lie
    // named IIFE
    console.log(`DB CONNECTED`);
})();    //---() excution ke lie
        // 1st code ko end hona chahiye dusra code end hona chahiye code ko end krne ke liye ; ka use krte hai jo ki directly nhi lgta hai 

// globel scope ke poliction se problem hoti hai kai baar toh uss globel scope ke variables hai jo bhi declartion hai uske poliction ko hatane ke liye issi ka use kiya

(  (name) => {   // name ko as argument le liya hai
    console.log(`DB CONNECTED TWO $(name)`)
}) ('hitesh')    // hitesh ko as parameter pass kr diya 