// Näyttää kysymys osion otsikon alapuolella.

// Tuodaan tarvittavat importit
import React, { useState } from 'react';
import { Input, EditWarpper, EditIcon } from './styles';
import { FiEdit } from 'react-icons/fi'; // Tuodaan editti ikoni

// Tiedoston koodi

export const Question = () => {
    const [question, setQuestion] = useState('Mitä arvotaan?')
    const [editable, setEditable] = useState(false);

    const handleClick = () => {
        setEditable(true);
    }

    const handleBlur = () => {
        setEditable(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            setEditable(false);
        }
    };

    return (
        <div>
          {editable ? (
            <Input
              ref={(input) => input && input.focus()}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <EditWarpper onClick={handleClick}>
                <h1>{question}</h1>
                <EditIcon>
                    <FiEdit />
                </EditIcon>
            </EditWarpper>
          )}
        </div>
      );
    };

