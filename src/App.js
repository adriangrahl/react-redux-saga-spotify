import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import './config/reactotron';
import { Wrapper, Container, Content } from './styles/components';
import Routes from './routes';
import ErrorBox from './components/ErrorBox';

import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Global />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
