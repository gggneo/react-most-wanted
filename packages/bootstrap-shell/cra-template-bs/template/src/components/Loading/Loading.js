import React from 'react'
import * as BS from 'react-bootstrap'

export default function CircularIndeterminate() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BS.ProgressBar size={50} />
    </div>
  )
}
