var addclosure=(()=>{
    var counter=0;
    return()=>{
        counter+=1;
        console.log(counter);
    }
})();
addclosure();
addclosure();
addclosure();