import { useState } from "react";
import Swal from 'sweetalert2'

function ItemCount({stock}){
    const [num, setNum]= useState(0)

    const sumar = ()=>{
        if(num < stock){
        setNum(num + 1)
        }
        else{
            Swal.fire({
                title: 'Atencion!',
                text: 'Ya a llegado al limite de este stock',
                icon: 'warning',
                timer: 3000
              })
        }
    }

    const restar = ()=>{
        if(num>0){
        setNum(num - 1)
        }
    } 

    const onAdd = () =>{
        console.log(`Se agregaron ${num} unidades`);
    }
    return(
        <>
        <p>{num}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={onAdd}>{num > 0 ? `Comprar` : `${stock} unidades disponibles`}</button>
        </>
    )
}

export default ItemCount;
