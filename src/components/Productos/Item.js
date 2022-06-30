import ItemCount from "./ItemCount"

function Item(props){
    return (
        <div className="card">
            <h4>{props.nombre}</h4>
            <p>{props.precio}</p>
            <ItemCount stock={6}/>

        </div>
    )
}

export default Item

