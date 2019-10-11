import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithThemeProvider } from 'test-utils';
import Button from './index';

beforeEach(cleanup);

describe('should render Button', () => {
  it('renders default', () => {
    renderWithThemeProvider(<Button>Yes</Button>);
  });
  it('renders primary', () => {
    renderWithThemeProvider(<Button primary>Yes</Button>);
  });
});
