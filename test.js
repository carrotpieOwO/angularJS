function p(){           //excutor
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
        resolve(); 
        //reject(new Error('bad'))
        }, 1000)
    })
}

p().then(()=>{
   return p()
})
.then(()=> p())
.then(p)
.then(()=>{
    console.log('4초 후에 fulfilled 됩니다.')
})



//인자로 프로미스 객체 넣음
Promise.resolve(new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(foo)
    }, 1000)
})).then(data=>{
    console.log('프로미스 객체인 경우, resolve된 결과를 받아 then이 실행됨', data)
})


Promise.resolve('bar').then(data=>{
    console.log('then메소드가 없는 경우 fulfilled됩니다',data)
})


//인자로 프로미스 객체 넣음
Promise.reject(new Error('reason')).then(error=>{
    console.log('프로미스 객체인 경우, resolve된 결과를 받아 then이 실행됨', data)
}).catch(error=>{
    console.log(error)
})


Promise.resolve('bar').then(data=>{
    console.log('then메소드가 없는 경우 fulfilled됩니다',data)
})


function p(ms){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(ms)
        }, ms)
    })
}

Promise.race([p(1000), p(2000), p(3000)]).then((message)=>{
    console.log('all fulfilled',message)
})