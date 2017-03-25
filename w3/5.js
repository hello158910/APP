let promise = new Promise((resolve,reject)=>{
    resolve();
});
promise
    .then(()=>console.log('work is finished.'))
    .then(()=>console.log('finished again...'));


promise = new Promise((resolve,reject)=>{
    reject();
});
promise.catch(()=>{
    console.log('uh huh?');
});