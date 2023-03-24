import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const blogLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  )
}

export default blogLayout
