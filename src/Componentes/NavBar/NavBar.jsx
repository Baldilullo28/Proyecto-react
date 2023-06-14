
import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget"




const NavBar = () => {
    return (

    

        <header>
            <h1>Q´ Dulce </h1>

            <nav>
                <ul>
                    <li>Marquesa de Chocolate </li>
                    <li>Marquesa de Dulce de Leche </li>
                    <li>Marquesa de Limon </li>


                </ul>

            </nav>

            <CartWidget> </CartWidget>
        </header>

        //     <Navbar bg="info" variant="light">
        //         <Container>
        //             <Navbar.Brand href="#home">Q`Dulces</Navbar.Brand>
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Marquesa de chocolate</Nav.Link>
        //                 <Nav.Link href="#features">Marquesa de Dulce de Leche </Nav.Link>
        //                 <Nav.Link href="#pricing">Marquesa de Limon </Nav.Link>
        //             </Nav>
        //             <CartWidget>  </CartWidget>
        //         </Container>
        //     </Navbar>


    )

}

export default NavBar





