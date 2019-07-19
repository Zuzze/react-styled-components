import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

// Styled component element
const SButton = styled.button`
  ${props =>
    props.color === "secondary"
      ? "background: palevioletred; color: pink"
      : "background: white; color: palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Button = ({ color = "primary", onClick, children }) => {
  return (
    <SButton color={color} onClick={e => onClick(e)}>
      {children}
    </SButton>
  );
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  color: propTypes.oneOf(["primary", "secondary"]),
  onClick: propTypes.func
};
