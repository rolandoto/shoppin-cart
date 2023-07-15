import React, {  useState } from "react";

const FilterContext = React.createContext({})

export const FiltersProviders =({children}) =>{
    const [filters,setFilters] =useState({
        category:"All",
        minPrice:250
    })

    return (
        <FilterContext.Provider value={{
            filters,
          setFilters
        }}
        >
          {children}
        </FilterContext.Provider>
      )
}

export default FilterContext