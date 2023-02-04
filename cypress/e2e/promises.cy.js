it('sem testes ainda', () => { })

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })  
}

const system = () => {
    console.log('init');
    getSomething(some => {
        console.log(`Something is ${some}`)
        console.log('end')
    })
}

system();
