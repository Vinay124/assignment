import React from 'react'
import { Link } from 'react-router-dom'

const NavSubMenu = ({ submenus }) => {
  return (
    <div className="submenu">
        {submenus.map((submenu) => {
            return (
                <li className='submenuChildrens' key={submenu.id}>
                <Link className='Childrenlink' to={submenu.url}>{submenu.name}</Link>
            </li>
            )
        })}
    </div>
  )
}

export default NavSubMenu