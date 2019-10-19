import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from 'theme';

export function renderWithThemeProvider(Component) {
  return render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);
}

export function testHook(useHook, props) {
  const RenderProp = ({ children, ...rest }) => children(useHook(rest));

  const returnValue = {};

  render(
    // eslint-disable-next-line react/jsx-props-no-spreading
    <RenderProp {...props}>
      {value => {
        Object.assign(returnValue, value);
        return null;
      }}
    </RenderProp>
  );

  return returnValue;
}
