import React from "react"
import { menuItems } from "../../constants"

const MenuItems = () => {
  return (
    <ul className="flex flex-col lg:flex-row lg:space-x-6 px-4 pt-20 lg:pt-0 justify-center flex-grow uppercase text-sm">
      {menuItems.map((item, index) => (
        <li className="py-2 lg:py-0" key={index}>
          <a href={item.href} className="hover:text-gray-300">{item.name}</a>
        </li>
      ))}
      
    </ul>
  )
}

export default MenuItems