import React from 'react'
import styled from 'styled-components'

const Photo = ({ src }) => {
  const StyledImg = styled.img`
    width: 100%;
  `

  return <StyledImg src={src} alt="Instagram post" />
}

export default Photo
