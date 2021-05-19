import CountUp from 'react-countup'

import './counter.scss'

function Counter() {
  return (
    <div className="count">
      <CountUp
        start={-98.039}
        end={424242}
        duration={5}
        separator=" "
        decimals={4}
        decimal=","
        prefix="~ "
        suffix=" ;"
      />
    </div>
  )
}

export default Counter
