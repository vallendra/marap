import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

import Button from 'components/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.blue};
  font-size: 2.5rem;
  font-weight: 700;
`;

function ProductsInBasket() {
  const count = useStoreState(state => state.basket.productIds.length);
  return <div>{count} items in basket</div>;
}

const Example = () => (
  <Container>
    <Wrapper>
      <Title>
        <span role="img" aria-label="Bolt">
          ⚡
        </span>{' '}
        Example Page
      </Title>
      <Button>{ProductsInBasket()}</Button>
      <Button primary>Mantapp</Button>
    </Wrapper>
  </Container>
);

export default Example;
