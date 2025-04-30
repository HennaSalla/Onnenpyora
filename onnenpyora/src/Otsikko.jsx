// Tämä tiedosto tekee koko sovelluksen otsikon.

// lisätään tarvittavat importit

import {FC} from 'react';
import styled from 'styled-components';

const OtsikkoSisältö = styled.otsikko`
    background-color: #191970;
    color: #F0F8FF;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 50px;
`;

export const Otsikko: FC = () => (
    <OtsikkoSisältö>
        <h1>Onnenpyörä</h1>
    </OtsikkoSisältö>
)