async function f(n) {
    if(n===0){
        return;
    }
    console.log(`${n}\n`);
    await new Promise( (resolve)=>{
        setTimeout(resolve, 1000);
    })
    await f(n-1);
}

async function g(n) {
    if(n===0){
        return Promise.resolve;
    }
    console.log(`${n}\n`);
    new Promise( (resolve)=>{
        setTimeout(resolve, 1000)
    }).then(()=>{
        g(n-1);
    })
}

g(5);