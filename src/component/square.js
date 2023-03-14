import React from 'react'

export const Square = ( {value, onSquareClick} ) => {
  return (
    <button className="square title" onClick={onSquareClick}>
    {value}
  </button>
  )
}

