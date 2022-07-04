import React from 'react'
// import { mathsDropdown,classworkDropdown,ProgrammingLanguageDropdown,othersDropdown} from "./navbarItems"
import { Link } from 'react-router-dom'
import "./dropdown.css"


const Dropdown = (props) => {
    const{dropdown}=props
  return (
    <>
        <ul className='services-submenu'>
            {
                dropdown.map((items=>
                    {
                        return(
                            <li key={items.id}>
                                <Link to={items.path} className={items.cName}>  {items.title}</Link>
                                  
                            </li>
                        )
                    }))
            }

        </ul>
        {/* <ul className='services-submenu'>
            {
                classworkDropdown.map((items=>
                    {
                        return(
                            <li key={items.id}>
                                <Link to={items.path} className={items.cName}>  {items.title}</Link>
                                  
                            </li>
                        )
                    }))
            }

        </ul>
        <ul className='services-submenu'>
            {
                ProgrammingLanguageDropdown.map((items=>
                    {
                        return(
                            <li key={items.id}>
                                <Link to={items.path} className={items.cName}>  {items.title}</Link>
                                  
                            </li>
                        )
                    }))
            }

        </ul>
        <ul className='services-submenu'>
            {
                othersDropdown.map((items=>
                    {
                        return(
                            <li key={items.id}>
                                <Link to={items.path} className={items.cName}>  {items.title}</Link>
                                  
                            </li>
                        )
                    }))
            }

        </ul> */}

    </>
  )
}

export default Dropdown