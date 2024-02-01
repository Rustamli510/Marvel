import React from 'react'
import './Css/Header.css'
import {Container} from 'reactstrap'
import './Css/Font.css'
import { NavLink } from 'react-router-dom'

function Character() {
  return (
    <div>
      <Container>
        <div className='headertop'>
          <p><span>Marvel</span> information portal</p>
          <div className='headerright'>
            <NavLink to='/'>Character</NavLink>
            <p>/</p>
            <NavLink to='/Comics'>Comics</NavLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Character