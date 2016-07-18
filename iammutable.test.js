'use strict'

const expect = require('chai').expect

describe('I am Mutable, but not! ', () => {  
  const testNameTruey = 'An Immutable cannot accept new properties'
  const immutable = {
    name: 'Webschool',
    sayName: (name) => 'Nome: ' + name
  }
  const Iammutable = require('./iammutable')(immutable)
  describe(testNameTruey,  () => {
    it('testing if '+testNameTruey, () => {
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
})
