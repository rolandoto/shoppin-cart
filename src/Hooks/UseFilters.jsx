import { useContext } from "react"
import FiltersProviders  from "../context/Filters"

const UseFilters =() =>{

  const {filters,setFilters} =useContext(FiltersProviders)
  
    const filterProducts  =(products)=>{
      return products.filter(product  =>{
         return (
          product.price >=  filters.minPrice &&
          (
            filters.category == "All" ||
            product.category ==  filters.category
          )
         )
      })
    }
    return {filterProducts,setFilters,filters}  
}

export default UseFilters