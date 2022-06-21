import { useState } from "react";

function Boton(){
    const [num, setNum]= useState(0)

    const sumar = ()=>{
        setNum(num + 1)
    }

    const restar = ()=>{
        setNum(num - 1)
    }
    return(
        <>
        <p>{num}</p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        </>
    )
}

export default Boton;