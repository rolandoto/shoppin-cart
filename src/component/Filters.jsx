import React, { useContext, useEffect, useId, useState } from "react";
import "./Filters.css"
import FiltersProviders  from "../context/Filters";

const Filters =() =>{
    const  {filters,setFilters} = useContext(FiltersProviders)
    const minPriceFilterId =useId()
    const categoryFilterId =useId()

    const handleChangeMinPrice =(event) =>{
        setFilters(prevent =>({
            ...prevent,
            minPrice:event.target.value
        }))
    }

    const handlChange = (event) =>{
        setFilters({
            category:event.target.value
        })
    }

    return (
        <section className="filters" >
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range"
                        id={minPriceFilterId}
                        min="0"
                        max="1000"
                        onChange={handleChangeMinPrice}
                        value={filters.minPrice} />
                          ${filters.minPrice} 
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handlChange} > 
                    <option value="All">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

export default Filters