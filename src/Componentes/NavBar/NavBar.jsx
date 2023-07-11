
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

import CartWidget from "../CartWidget/CartWidget"




const NavBar = () => {
    return (



        <header>
            <Link to="/">
                Q´ Dulce </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/categoria/2"> Tortas  </NavLink>
                    </li>

                    <li>
                        <NavLink to="/categoria/3"> Helados </NavLink>
                    </li>


                </ul>

            </nav>

            <CartWidget> </CartWidget>
        </header>



    )

}

export default NavBar





