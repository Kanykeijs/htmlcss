import React from "react";
import MainRoutes from "./routes/MainRoutes";
import AuthContextProvider from "./contexts/authContext";
import Navbar from "./components/Navbar/Navbar";
import ProductsContextProvider from "./contexts/productsContex";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
