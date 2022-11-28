function receivesAFunction(callBack){
    callBack();
}
function returnsANamedFunction(){
    return function name(){ 
      console.log (`This is a named function!`);
    };
}

function returnsAnAnonymousFunction(){
    return function (){ 
        console.log("This is an anonymous function!");
    };
}