import React from 'react';
import styled from 'styled-components';
import { useStoreDispatch, useStoreState } from 'easy-peasy';

import Button from 'components/Button';
import { Link } from 'react-router-dom';

import Language from 'utils/language';

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

function ProductsInBasket(count) {
  return <div>{count} items in basket</div>;
}

const App = () => {
  const dispatch = useStoreDispatch();

  const {
    Articles: stateArticles,
    basket: stateBasket
  } = useStoreState(globalState => globalState);

  React.useEffect(() => {
    dispatch.Articles.getArticles();
  },[dispatch.Articles]);

  const { translate } = Language();

  return (
    <Container>
      <Wrapper>
        <Title>
          <span role="img" aria-label="Bolt">
            ⚡
          </span>{' '}
          {translate('WELCOME')}
          {console.log(stateArticles.items)}
        </Title>
        <Button>{ProductsInBasket(stateBasket.productIds)}</Button>
        <Link to="/example">
          <Button primary>ke Halaman Example</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default App;
