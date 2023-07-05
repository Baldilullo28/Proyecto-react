const misProducos = [
    { id: 1, Nombre: "Marquesa de Chocolate", precio: 750, img: "./img/marquesa_de_chocolate.jpg" },
    { id: 1, Nombre: "Marquesa de limon", precio: 800, img: "./img/marquesa_de_limon.jpg" },
    { id: 1, Nombre: "Marquesa de Dulce de leche", precio: 700, img: ":/img/marquesa_de_ddl.jpg" },
    { id: 1, Nombre: "Marquesa de Chocotorta", precio: 600, img: "./img/chocotorta.jpg" }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProducos);
        }, 1500)

    })

}