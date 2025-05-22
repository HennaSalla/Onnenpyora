// Päätiedosto jossa yhdistetään muut tiedostot ja halitaan osallistujien lisäämisen, poistamisen, lajittelun ja sekoituksen

// Tarvittavat importit
import styled from 'styled-components';
import {useState, useEffect, use} from 'react'

// Tuodaan loput tiedostot pää tiedostoon
import {Participants} from './Osallistujat';
import {Question} from './Kysymys';
import {Wheel} from './Pyora';
import {Header} from './Otsikko';
import { setItem, getItem } from './useLocalStorege';

// Viten mukana tulleiden tiedostojen importit
import './App.css';

// Sivun omat ulkonäkö muutokset
const Main = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #050513;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

// Ohjelman päätiedoston luonti

export const MAX_PARTICIPANTS = 100; // Laittaa osallistuja rajan 100

// Halitaan ossalistujien nimien lisäämistä, poistamista, lajittelua ja sekoitusta
function App() {
  // Tallenetaan osallistuja lista LocalStorageen
  const [names, setNames] = useState<string[]>(() => {
    const item = getItem('names');
    return item || [];
  });
  useEffect(() => {
    setItem('names', names);
  }, [names]);

  // Osallistujien lisäämisen hallinta
  const handleAddName = (name: string) => {
    if (names.length < MAX_PARTICIPANTS) {
      setNames([...names, name]);
    }
  };

  // Osallistujien poiston hallinta
  const handleRemoveName = (index: number) => {
    setNames(names.filter((_, i) => i !== index));
  };

  // Osallistujien sekoitus randomisti
  const shuffleNames = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffledNames);
  };

  // Osallistujien lajittelu aakkos järjestykseen
  const sortNames = () => {
    const sortedNames = [...names].sort((a,b) => a.localeCompare(b));
    setNames(sortedNames);
  };


  return (
    <>
      <Header />
      <Question />
      <Main>
        <Participants
          handleAddName={handleAddName}
          handleRemoveName={handleRemoveName}
          shuffleNames={shuffleNames}
          sortNames={sortNames}
          names={names}
        />
        <Wheel participants={names} />
      </Main>
    </>
  );
}

export default App;