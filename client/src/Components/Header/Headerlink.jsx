import React from 'react'
import { Link } from 'react-router-dom'

const Headerlink = (props) => {
  return (
    <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to={props.mylink} style={{ textDecoration: 'none !important' }}>
           {props.title} <img src={props.iconss} />
          </Link>
    </li>
  )
}

export default Headerlink