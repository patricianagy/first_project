import { useState } from 'react'

function NumberConverter() {
  const [number, setNumber] = useState('')
  const [text, setText] = useState('')

  const smallerThanTwenty = [
    '',
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

    if (numString.length > 6)
      return 'Too big number, please try again with a smaller!'

    if (num === 0) return 'zero'

    if (num < 20) {
      return smallerThanTwenty[n]
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
      let end3 = +(numString[1] + numString[2] + numString[3])
      let begining = +(numString[0] + numString[1])
      let end2 = +(numString[2] + numString[3])
      if (end3 === 0) return smallerThanTwenty[numString[0]] + ' thousand'
      if (begining < 20 && end2 === 0)
        return smallerThanTwenty[begining] + ' hundred'
      if (begining < 20)
        return smallerThanTwenty[begining] + ' hundred and ' + convert(end2)
      if (end3 < 100)
        return (
          smallerThanTwenty[numString[0]] + ' thousand and ' + convert(end3)
        )
      return smallerThanTwenty[numString[0]] + ' thousand ' + convert(end3)
    }

    if (numString.length === 5) {
      let end3 = +(numString[2] + numString[3] + numString[4])
      let begining = +(numString[0] + numString[1])
      if (end3 === 0) return convert(begining) + ' thousand'
      if (end3 < 100)
        return convert(begining) + ' thousand and ' + convert(end3)
      return convert(begining) + ' thousand ' + convert(end3)
    }

    if (numString.length === 6) {
      let end3 = +(numString[3] + numString[4] + numString[5])
      let begining = +(numString[0] + numString[1] + numString[2])
      if (end3 === 0) return convert(begining) + ' thousand'
      if (end3 < 100)
        return convert(begining) + ' thousand and ' + convert(end3)
      return convert(begining) + ' thousand ' + convert(end3)
    }
  }

  function isNegative(n) {
    let num = n
    if (!Number.isInteger(parseFloat(n)))
      return 'Not a valid number, please try again with an integer!'

    if (parseInt(n) < 0) {
      if (num.length > 7)
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
