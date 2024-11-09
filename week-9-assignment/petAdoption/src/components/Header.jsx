import React from 'react'

const Header = ({message}) => {
  return (
    <nav style={{backgroundColor:"#FDDBBB",padding:"18px 38px"}}>
        <h1>{message}</h1>
    </nav>
  )
}   

export default Header