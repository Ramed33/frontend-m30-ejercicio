import { Route, Routes } from "react-router-dom";
import { Formulario } from "./Form";
import ProductMain from "./ProductsMain"
import Header from "./Header";

const App = () => {
  return(
    <>
    <Header />
    <Routes>
      <Route path="/login" element={<Formulario />}/>
    </Routes>
      <ProductMain />
    </>
  );
}

export default App;