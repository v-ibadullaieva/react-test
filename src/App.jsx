import React, {Component} from 'react';
import { Container } from 'reactstrap';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import Summary from './components/Summary/Summary';

class App extends Component {
  render() {
    return (
      <Container>
        <Form />
        <Table />
        <Summary />
      </Container>
    );
  }
}

export default App;
