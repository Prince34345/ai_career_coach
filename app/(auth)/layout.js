import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex -z-50 justify-center pt-40 pb-40 overflow-y-hidden min-h-screen'>{children}</div>
  )
}

export default AuthLayout