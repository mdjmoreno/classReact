import React from "react";
import styled from "styled-components";

const Photo = ({ src }) => {
  const StyledImg = styled.img`
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  `;

  return <StyledImg src={src} alt="Instagram post"/>;
};

export default Photo;
