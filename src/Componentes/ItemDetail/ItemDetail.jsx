import React from 'react';
import { Link } from 'react-router-dom';
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className="item-detail">
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, molestiae maxime? Porro hic nobis itaque,
                natus vitae sint ullam, incidunt cupiditate molestiae corporis impedit est nesciunt aliquam at laboriosam rerum?
            </p>
            <img src={img} alt={nombre} />
            <Link to={`/Item/${id}`} className='Option'>Ir a la ruta</Link>
        </div>
    );
};

export default ItemDetail;
