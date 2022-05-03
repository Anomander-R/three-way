import { Fragment } from 'react';
import {Main, Container, GlobalStyle, OuterContainer} from './components'

function App() {
  return (
        <Fragment>
          <GlobalStyle/>
          <OuterContainer>
            <Container>
              <Main/>
            </Container>
          </OuterContainer>
        </Fragment>
  );
}

export default App;
