import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

// Style
const SLink = styled.a`
  ${props =>
    props.color === "light" ? "color: pink" : "color: palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

// Component
export const Link = ({
  url,
  openInNewTab = false,
  color = "dark",
  children
}) => {
  return (
    <SLink
      color={color}
      href={url}
      target={openInNewTab ? "_blank" : ""}
      rel={openInNewTab ? "noopener noreferrer" : ""}
    >
      {children}
    </SLink>
  );
};

// Types
Link.propTypes = {
  url: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  color: propTypes.oneOf(["dark", "light"])
};
