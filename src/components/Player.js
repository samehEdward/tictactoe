import React, { useState } from 'react'

const Player = ({name, symbol}) => {

  const [isEditing, setIsEding] = useState(false);
  const [newName, setNewName] = useState(name);



 let playerName =  <h3 className='p-4'>{newName}</h3>;

  function editNameHandler(){
    setIsEding((editing) => !isEditing);
 
  }

  function inputNameHandler(event){
    setNewName(event.target.value)
  }

  if(isEditing) {

    playerName =  <input className='form-control' type='text'  value={newName} onChange={inputNameHandler}/>;
  }

  return (
    <div className='container d-flex justify-content-center p-4' style={{width: "30%"}}>
      {playerName}
      <h4 className='p-4'>{symbol}</h4>
      <button onClick={editNameHandler}>{!isEditing ? "Edit" : "Save"}</button>
    </div>
  )
}

export default Player
