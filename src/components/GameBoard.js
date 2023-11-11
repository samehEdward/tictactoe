import React, { useState } from 'react';


const initialContent = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = () => {

const [updatedGameBoard, setUpdatedGameBoard] = useState(initialContent);

function handleGameBoard()
{

}

  return (
    <div className='container d-flex justify-content-center ' style={{width: "40%"}}>
      {updatedGameBoard.map((row, rowId) => <div key={rowId}>
        <div className=''>{row.map((innerItem, innerItemId) => <div key={innerItemId}><button className='p-5 bg-primary-subtle' onClick={handleGameBoard}>{innerItem}</button></div>)}</div>
      </div>)}
    </div>
  )
}

export default GameBoard
