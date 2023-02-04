/// <reference types="cypress"/>

it('A external test...',() => {

})


describe('Should group tests...',() => {
    describe('Should group more specific tests...',() => {
        it('A internal test...',() => {

        })
    })
    describe('Should group more specific tests 2...',() => {
        it('A internal test...',() => {

        })
    })

    it('A internal test...',() => {

    })
})