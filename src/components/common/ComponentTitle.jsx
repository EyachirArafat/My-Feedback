import React from 'react'
import { cnn } from '../../lib/utils/cnn'

const ComponentTitle = ({className, children}) => {
  return (
    <div className={cnn("md:text-[32px] sm:text-xl text-txtP md:font-extrabold sm:font-bold font-semibold font-lexend mb-5", className)}>
      {children}
    </div>
  )
}

export default ComponentTitle
