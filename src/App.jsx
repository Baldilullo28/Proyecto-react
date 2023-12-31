import NavBar from "./Componentes/NavBar/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"




const App = () => {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/Item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/itemDetail"></Route>
          <Route path="*" element={<h2>Sitio en construccion, vuelva mas tarde</h2>} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App