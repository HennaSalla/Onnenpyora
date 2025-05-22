// Näyttää kysymys osion otsikon alapuolella.

// Tuodaan tarvittavat importit
import React, { useEffect, useState } from 'react';
import { Input, EditWarpper, EditIcon } from './styles';
import { FiEdit } from 'react-icons/fi'; // Tuodaan editti ikon
import { getItem, setItem } from "./useLocalStorege";

// Tiedoston koodi

export const Question = () => {
  // Tallenetaan kysymys LocalStorageen
    const [question, setQuestion] = useState(() => {
      const item = getItem('question');
      return item || 'Mitä arvotaan?';
    });

    useEffect(() => {
      setItem('question', question);
    }, [question]);

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

