// Täällä on yhteisiä tyylejä joita käytetään ympäri projektia

// Luodaan tarvittavat importit
import styled from 'styled-components';

export const Section = styled.section`
    width: 40%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    padding: 16px;
    margin: 8px;
    background-color: #F8F8FF;
    color: #2F4F4F;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 19px;
    font-weight: bold;

    &:hover {
        background-color: #2F4F4F;
        color: #F8F8FF;
    }

    &:disabled {
        background-color: #DCDCDC;
        color: #A9A9A9;
        cursor: not-allowed;
    }
`;

export const Input = styled.input`
    padding: 13px;
    font-size: 19px;
    margin: 8px;
    width: 60%;
`;

export const EditWarpper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    justify-content: center;
    background-color: #F8F8FF;
    color: #2f4f4f;

    &:hover {
        background-color: #2f4f4f;
        color: #F8F8FF;
    }

    h1 {
        margin: 0;
        padding-right: 10px;
    }
`;

export const EditIcon = styled.div`
    font-size: 20px;
    color: grey;
    margin-left: 8px;
    opacity: 0.8;

    ${EditWarpper}:hover & {
        color: #f8f8ff;
    }
`;