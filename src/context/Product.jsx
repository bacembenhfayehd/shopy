import { createContext } from "react";
import { products } from "../assets/data";  

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  );
};


export default ProductProvider;
