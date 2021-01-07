import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components';
import lab3 from '../assets/lab3.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${lab3}) no-repeat fixed bottom;
    background-size: cover;color: #ccc;
    height: 200px;
  }
`;

export const Jumbotron = () => (
      <Styles>
        <Jumbo fluid className="jumbo">
         <div className="overlay"></div>
         <Container>
           <h1>Welcome</h1>
           <p > A  hands-on  approach  on  all  projects.</p>
         </Container>
        </Jumbo>
      </Styles>
  );
