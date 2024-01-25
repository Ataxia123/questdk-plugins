import { GreaterThanOrEqual, apply } from '@rabbitholegg/questdk/filter'
import { describe, expect, test } from 'vitest'
import { passingTestCases, failingTestCases } from './test-transactions'

// replace this with the action exported from your project
import { swap } from './Project'

// Replace *project* with the name of the project
describe('Given the project plugin', () => {
  describe('When handling the {actionType} action', () => {

    describe('should return a valid action filter', () => {
      // test that a valid filter is returned, check other packages for examples
    })

    describe('should pass filter with valid transactions',  () => {
      passingTestCases.forEach((testCase) => {
        const { transaction, description, params } = testCase
        test(description, async () => {
          const filter = await swap(params)
          expect(apply(transaction, filter)).to.be.true
        })
      })
    })
    
    describe('should not pass filter with invalid transactions',  () => {
      failingTestCases.forEach((testCase) => {
        const { transaction, description, params } = testCase
        test(description, async () => {
          const filter = await swap(params)
          expect(apply(transaction, filter)).to.be.false
        })
      })
    })
  })
})
