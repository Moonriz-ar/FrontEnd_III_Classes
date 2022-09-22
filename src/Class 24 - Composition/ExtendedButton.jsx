import { Spin } from 'antd'
import React from 'react'

const ExtendedButton = (props) => {
  const { loading, children, ...otherProps } = props
  return (
    <button className='flex items-center gap-10' {...otherProps} disabled={props.disabled || props.loading}>
      {loading && <Spin spinning />}
      <div>{children}</div>
    </button>
  )
}

export default ExtendedButton
