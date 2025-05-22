// Lisää kontrollit osallistujien lisäämiseen ja näyttämiseen.

// Tuodaan tarvittavat importit
import styled from "styled-components";
import {Section, Button, Input} from './styles';
import React, {FC, useState, useEffect} from 'react';
import {MAX_PARTICIPANTS} from './App';
import {capitalize} from './capitalize';

// Sivun sisäiset tyylit
const ListItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ListItem = styled.li`
    width: 100%;
    padding: 16px;
    margin: 8px;
    list-style: none;
    color: #F8F8FF;
    font-weight: bold;
    font-size: 19px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    & > {
        margin-left: 10px;
    }
`;

const ErrorMessage = styled.p`
    color: red;
`;

// Ohjelman koodi
interface PracticipantsProps {
    handleAddName: (name: string) => void;
    handleRemoveName: (index: number) => void;
    shuffleNames: () => void;
    sortNames: () => void;
    names: string[];
}

export const Participants: FC<PracticipantsProps> = ({
    handleAddName,
    handleRemoveName,
    shuffleNames,
    sortNames,
    names,
}) => {
    const [praticipant, setParticipant] =  useState('');
    const [error, setError] = useState('');
    const isMaxParticipantsReached = names.length >= MAX_PARTICIPANTS;
    const hasParticipants = names.length > 0

    const validateInput = (name: string) => {
        if (!name.trim()) {
            return 'Osallistujan nimi tarvitaan';
        }
        return '';
    };

    const handleAddParticipant = () => {
        const validationError = validateInput(praticipant);
        if (validationError) {
            setError(validationError);
        } else {
            handleAddName(praticipant);
            setParticipant('');
            setError('');
        }
    };

    

    return (
        <Section>
            <h2>Lisää osallistuja</h2>
            <Input 
                disabled={isMaxParticipantsReached}
                type='text'
                placeholder='Osallistujan nimi'
                value={praticipant}
                onChange={(e) => setParticipant(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                        handleAddParticipant();
                    }
                }}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}

            {isMaxParticipantsReached && (
                <ErrorMessage>Osallistuja määrä täynnä</ErrorMessage>
            )}

            <Button disabled={isMaxParticipantsReached} onClick={handleAddParticipant}>
                    Lisää
            </Button>

            <h2>Osallistujat</h2>
            <ButtonGroup>
                <Button onClick={shuffleNames} disabled={!hasParticipants}>
                    Sekoita
                </Button>

                <Button onClick={sortNames} disabled={!hasParticipants}>
                    Lajittele
                </Button>
            </ButtonGroup>
            <ul>
                {names.map((name, index) => (
                    <ListItemContainer key={index}>
                             <ListItem>{capitalize(name)}</ListItem>
                        <Button onClick={() => handleRemoveName(index)}>
                            Poista
                        </Button>
                    </ListItemContainer>
                ))}
            </ul>
        </Section>
    );
};