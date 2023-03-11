import React, { useContext } from 'react'
import Buttonreset from '../buttonreset'
import Buttonstart from '../buttonstart'
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { Title } from '../title';
export const Home= () => {
    const {store,actions}= useContext(Context);
    console.log(store.point)
  return (
    <div className='container'>
        <div className='menu'>
        <h1> Tic Tac Toc Moshero V.1.0</h1>
        <Buttonreset/>
        <Buttonstart/>
        </div>  
        {store.point.map((e,i)=>{
            console.log(e)
            return(
                <Title 
                key={i}
                
                />
            )
        })}
    </div>
  )
}
