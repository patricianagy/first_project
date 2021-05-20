import { useState } from 'react'

function NumberConverter() {
  const [number, setNumber] = useState('')
  const [text, setText] = useState('')

  const smallerThanTwenty = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]

  const tenFolds = [
    '',
    '',
    'twenty-',
    'thirty-',
    'forty-',
    'fifty-',
    'sixty-',
    'seventy-',
    'eighty-',
    'ninety-',
  ]

  function convert(n) {
    let num = n

    num = parseFloat(num)
    let remain10 = num % 10
    let remain100 = num % 100

    if (num < 0 || !Number.isInteger(num)) {
      return 'It is not an appropriate number, please try again with an integer!'
    } else if (num < 20) {
      return smallerThanTwenty[num % 20]
    } else if (num < 100) {
      if (remain10 === 0) {
        return tenFolds[num / 10]
      }
      return tenFolds[(num - remain10) / 10] + '-' + smallerThanTwenty[remain10]
    } else if (num < 2000) {
      if (remain100 === 0) {
        return smallerThanTwenty[num / 100] + ' hundred'
      } else if (remain10 === 0) {
        return (
          smallerThanTwenty[(num - remain100) / 100] +
          ' hundred and ' +
          tenFolds[remain100 / 10]
        )
      }
      return (
        smallerThanTwenty[(num - remain100) / 100] +
        ' hundred and ' +
        tenFolds[(remain100 - remain10) / 10] +
        smallerThanTwenty[remain10]
      )
    }

    return 'Too big number, please try again with a smaller!'
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setText(convert(number))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <input type="submit" value="Submit" />
      <p style={{ color: 'white' }}>{text}</p>
    </form>
  )
}

export default NumberConverter
