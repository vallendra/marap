// @flow
import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.orange};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  ${props =>
    props.primary &&
    css`
    background: ${props.theme.colors.orange}
    color: white;
  `}
`;

type buttonProps = {
  primary: String,
  text: String
};

function Button({ primary, text }: buttonProps) {
  return <StyledButton primary={primary}>{text}</StyledButton>;
}

export default Button;
