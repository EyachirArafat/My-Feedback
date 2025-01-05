import React from 'react'
import { cnn } from '../../lib/utils/cnn'

const Container = ({className,children}) => {
  return (
    <div className={cnn("max-w-[1440px] w-full mx-auto sm:px-[47px] ", className)}>
      {children}
    </div>
  )
}

export default Container
