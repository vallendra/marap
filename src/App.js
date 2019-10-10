import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

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
  width: 500px;
  height: 40%;
`;

const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Paragraph = styled.p`
  color: ${props => props.theme.colors.orange};
  font-size: 1rem;
`;

function ProductsInBasket() {
  const count = useStoreState(state => state.basket.productIds.length);
  return <div>{count} items in basket</div>;
}

const App = () => (
  <Container>
    <Wrapper>
      <Title>
        <span role="img" aria-label="Bolt">
          ⚡
        </span>{' '}
        Lorem Ipsum
      </Title>
      <Paragraph>
        The most simple and robust React boilerplate.
        {ProductsInBasket()}
      </Paragraph>
    </Wrapper>
  </Container>
);

export default App;
