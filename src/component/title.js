import React from 'react'
import './style/title.css';
export const Title = () => {
  return (
    <div className='title'>
        <button id = "boton"onClick= {(e)=>{
            if(e = "ondblclick"){
               var boton = document.querySelector('#boton')
               boton.style.background = "yellow"
            }else {
                alert ("doble click")
            }
        }}></button>
    </div>
  )
}
