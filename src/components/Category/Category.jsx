import React from "react"
import { carModels } from "../../constants"
import CategoryItem from "./CategoryItem"

const Category = () => {
  return (
    <section className="py-16 dark:bg-slate-900 dark:text-slate-300">
      <div className="container mx-auto max-w-7xl p-4">
        <h2 className="text-3xl font-bold mb-7 uppercase border-b-2 inline-block">Car Category</h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between">
          {carModels.map((category, index) =>(
            <CategoryItem key={index} category={category}/>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Category