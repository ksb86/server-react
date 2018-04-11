// shared/Navbar.js
import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    const pages = [
        {
            name: 'Foo',
            param: 'foo'
        }, {
            name: 'Bar',
            param: 'bar'
        }
    ]

    return (<ul>
        {
            pages.map(({name, param}) => (<li key={param}>
                <NavLink
                    activeClassName="active-link"
                    to={`/${param}`}
                >
                    {name}
                </NavLink>
            </li>))
        }
    </ul>)
}
