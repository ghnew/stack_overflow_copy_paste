import test from 'ava'
import {addAndMod} from '../src'

test('Adds two integers and mod by second number', t => {
  const number1 = 23
  const number2 = 3
  const expected = (23 + 3) % 3;
  const actual = addAndMod(number1, number2);
  t.deepEqual(actual, expected)
})
