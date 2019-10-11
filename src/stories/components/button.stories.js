import React from 'react';
import Button from 'components/button';
import { storiesOf } from '@storybook/react';

export default { title: 'Button' };

storiesOf('components.button')
  .add('default', () =>  <Button>Hello Button</Button>)
  .add('primary', () => <Button primary>I`m interesting</Button>);

