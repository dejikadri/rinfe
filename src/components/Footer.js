import React from 'react';
import styled from 'styled-components';


const tDate = new Date().getFullYear();
const Styles = styled.div`
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #45b6d9;
  color: white;
  text-align: center;
}
`;

export const Footer = () => (
  <Styles>
    <footer className="footer">
      <div className="footer">
        <p>Copyright {tDate.toString()}</p>
      </div>
    </footer>
  </Styles >

);

