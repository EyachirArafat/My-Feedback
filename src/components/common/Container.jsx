import React from 'react'
import { cnn } from '../../lib/utils/cnn'

const Container = ({className,children}) => {
  return (
    <div className={cnn("max-w-[1440px] w-full mx-auto md:px-[47px] sm:px-8 px-2", className)}>
      {children}
    </div>
  )
}

export default Container
