import { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import './counter.scss'

function Counter(props) {
  const [status, setStatus] = useState(false)
  return (
    <CountUp
      start={status ? props.start : null}
      end={props.end}
      prefix={props.prefix}
      duration={props.duration}
    >
      {({ countUpRef }) => (
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) {
              setStatus(true)
            }
          }}
        >
          <span ref={countUpRef} className="count" />
        </VisibilitySensor>
      )}
    </CountUp>
  )
}

export default Counter
