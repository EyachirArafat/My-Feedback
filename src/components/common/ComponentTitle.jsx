import { cn } from '@nextui-org/react'
import React from 'react'

const ComponentTitle = ({className, children}) => {
  return (
    <div className={cn("md:text-[32px] sm:text-xl text-txtP md:font-extrabold sm:font-bold font-semibold font-lexend mb-5", className)}>
      {children}
    </div>
  )
}

export default ComponentTitle
