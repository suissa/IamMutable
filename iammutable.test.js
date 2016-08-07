// 'use strict'

const expect = require('chai').expect

describe('I am Mutable, but not! ', () => {  
  describe('An Immutable cannot accept new properties',  () => {
    const immutable = {
      name: 'Webschool',
      sayName: (name) => 'Nome: ' + name
    }
    const Iammutable = require('./iammutable')(immutable)
    it('testing if the Immutable dont accept new properties', () => {
      try {
        Iammutable.test1 = true
        Iammutable.test2 = false
        Iammutable.name = 'Suissa'
        Iammutable.sayName = (name) => 'DEU RUIM: ' + name
      } catch(e) {
        expect(Iammutable.test1).to.equal(undefined)
        expect(Iammutable.test2).to.equal(undefined)
        expect(Iammutable.name).to.deep.equal('Webschool')
        expect(Iammutable.sayName('Webschool')).to.deep.equal('Nome: Webschool')
        expect(Iammutable).to.deep.equal(Iammutable)
      }
    })
  })

  // describe('An Immutable',  () => {
  //   it(' cannot accept a value different than OBJECT', () => {
  //     expect(require('./iammutable')(1)).to.throw(TypeError, 'You need to send an OBJECT!')
  //   })
  // })
})
