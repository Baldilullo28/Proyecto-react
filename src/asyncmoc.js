const misProducos = [
    { id: 1, Nombre: "Marquesa de Chocolate", precio: 750, img: "../img/marquesa_de_chocolate.jpg", idCat: "2" },
    { id: 2, Nombre: "Marquesa de limon", precio: 800, img: "../img/marquesa_de_limon.jpg", idCat: "2" },
    { id: 3, Nombre: "Marquesa de Dulce de leche", precio: 700, img: "../img/marquesa_de_ddl.jpg", idCat: "3"},
    { id: 4, Nombre: "Marquesa de Chocotorta", precio: 600, img: "../img/chocotorta.jpg", idCat: "3" }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProducos);
        }, 2000)

    })

}




export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProducos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100);
    })


}


export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise ( resolve => {
        setTimeout(()=> {
            const productosCategoria = misProducos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);


        }, 100)
    })

}