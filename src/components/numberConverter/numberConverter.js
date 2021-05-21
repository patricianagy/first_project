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
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ]

  function convert(n) {
    let numString = n.toString()

    let num = parseFloat(n)

    if (numString.length > 7)
      return 'Too big number, please try again with a smaller!'

    if (num === 0) return 'zero'

    if (num < 20) {
      return smallerThanTwenty[num]
    }

    if (numString.length === 2) {
      if (+numString[1] === 0) return tens[numString[0]]
      return tens[numString[0]] + '-' + smallerThanTwenty[numString[1]]
    }

    if (numString.length === 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return smallerThanTwenty[numString[0]] + ' hundred'
      else
        return (
          smallerThanTwenty[numString[0]] +
          ' hundred and ' +
          convert(+(numString[1] + numString[2]))
        )
    }

    if (numString.length === 4) {
      let lastThreeDigit = +(numString[1] + numString[2] + numString[3])
      let begining = +(numString[0] + numString[1])
      let lastTwoDigit = +(numString[2] + numString[3])
      if (lastThreeDigit === 0)
        return smallerThanTwenty[numString[0]] + ' thousand'
      if (begining < 20 && lastTwoDigit === 0)
        return smallerThanTwenty[begining] + ' hundred'
      if (begining < 20)
        return (
          smallerThanTwenty[begining] + ' hundred and ' + convert(lastTwoDigit)
        )
      if (lastThreeDigit < 100)
        return (
          smallerThanTwenty[numString[0]] +
          ' thousand and ' +
          convert(lastThreeDigit)
        )
      return (
        smallerThanTwenty[numString[0]] + ' thousand ' + convert(lastThreeDigit)
      )
    }

    if (numString.length === 5) {
      return convertBigNumber(
        numString[0] + numString[1],
        numString[2] + numString[3] + numString[4]
      )
    }

    if (numString.length === 6) {
      return convertBigNumber(
        numString[0] + numString[1] + numString[2],
        numString[3] + numString[4] + numString[5]
      )
    }

    if (numString.length === 7) {
      if (
        +(
          numString[1] +
          numString[2] +
          numString[3] +
          numString[4] +
          numString[5] +
          numString[6]
        ) === 0
      )
        return smallerThanTwenty[numString[0]] + ' million '
      if (
        +(numString[4] + numString[5] + numString[6]) < 100 &&
        +(numString[1] + numString[2]) === 0
      )
        return converOverMillion(numString[0], numString[5] + numString[6])
      if (+numString[1] === 0) {
        return converOverMillion(
          numString[0],
          numString[2] +
            numString[3] +
            numString[4] +
            numString[5] +
            numString[6]
        )
      }
      return converOverMillion(
        numString[0],
        numString[1] +
          numString[2] +
          numString[3] +
          numString[4] +
          numString[5] +
          numString[6]
      )
    }
  }

  function converOverMillion(begining, end) {
    return smallerThanTwenty[begining] + ' million and ' + convert(end)
  }

  function convertBigNumber(begining, end) {
    if (+end === 0) return convert(begining) + ' thousand'
    if (+end < 100)
      return convert(begining) + ' thousand and ' + convert(end[1] + end[2])
    return convert(begining) + ' thousand ' + convert(end)
  }

  function isNegative(n) {
    let num = n
    if (!Number.isInteger(parseFloat(n)))
      return 'Not a valid number, please try again with an integer!'

    if (parseInt(n) < 0) {
      if (num.length > 8)
        return 'Too small number, please try again with a bigger!'
      return 'minus ' + convert(num.slice(1))
    }

    return convert(n)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setText(isNegative(number))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <input type="submit" value="Submit" />
      <p style={{ color: 'white' }}>{text}</p>
    </form>
  )
}

export default NumberConverter
