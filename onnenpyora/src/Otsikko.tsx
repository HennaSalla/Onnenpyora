// Tämä tiedosto tekee koko sovelluksen otsikon.

// lisätään tarvittavat importit
import {FC} from 'react';
import styled from 'styled-components';

// Tyyli koodi
const HeaderContainer = styled.header`
    background-color: #191970;
    color: #F0F8FF;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 50px;
`;

// Ohjelman koodi jossa luodaan otsikko
export const Header: FC = () => (
    <HeaderContainer>
      <h1>Onnenpyörä</h1>
    </HeaderContainer>
  );