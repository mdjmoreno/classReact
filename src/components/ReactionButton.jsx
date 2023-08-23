import React from "react";
import styled from "styled-components";
import {HeartFill} from "@styled-icons/bootstrap/HeartFill";

const ReactionButton = ({ isLiked, onClick }) => {
  const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  `;

  const HeartIcon = styled(HeartFill)`
    font-size: 24px;
    color: ${({ isLiked }) => (isLiked ? "red" : "#000")};
  `;

  return <Button onClick={onClick}>
      <HeartIcon size={48} isLiked={isLiked}/>
  </Button>;
};

export default ReactionButton;
