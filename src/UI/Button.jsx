import React from 'react'
import styled from 'styled-components';

const Button = ({children , onClick}) => {
  return (
   <StyledButton onClick={onClick} >{children}</StyledButton>
  )
}

export default Button;


const StyledButton = styled.button`
    padding: 10px 35px;
    background-color: blue;
    color: white;
    border-radius: 15px;
    border: none;
    &:active{
        background-color: greenyellow;
        transform: scale(1.3);
        transition-duration: 0.6s;
    }
`
