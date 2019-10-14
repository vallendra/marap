// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.Node | React.Element<any>
};

type State = {
  error: any,
  info: any
};

const themeError = {
  colors: {
    white: 'white',
    black: '#000',
    red: 'red'
  }
};

const StyledError = styled.div`
  background-color: ${themeError.colors.black};
  padding: 0.9375rem;
`;

const StyledErrorBody = styled.div`
  color: ${themeError.colors.white};
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const StyledErrorInfo = styled.div`
  background-color: ${themeError.colors.red};
  color: ${themeError.colors.white};
  padding: 0.9375rem;
`;

/**
 * @return {React.Node}
 */
export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ error, info });
  }

  render(): React.Node {
    const { error, info } = this.state;
    const { children } = this.props;

    if (info) {
      return (
        <>
          <StyledError data-testid="error-boundary-component">
            <p>Oops! An error occured! :( Here’s what we know…</p>
            {error && <StyledErrorBody>{error.toString()}</StyledErrorBody>}
          </StyledError>
          {info && (
            <StyledErrorInfo>
              <details>{info.componentStack}</details>
            </StyledErrorInfo>
          )}
        </>
      );
    }

    return children;
  }
}
