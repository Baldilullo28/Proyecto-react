import { useState, useEffect} from "react";
import { getProductos } from "../../asyncmoc";
import React, {PureComponent} from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);


    useEffect(() =>{
        getProductos()
        .then(respuesta => setProductos(respuesta))
        
    
    
    })
    return (
        <>

        <h2> {props.greeting} </h2>
        <ItemList productos={productos}></ItemList>
        </>
    )
}
77
export default ItemListContainer